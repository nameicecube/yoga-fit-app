'use client';

import { useState } from 'react';
import { useAccount, useWriteContract, useWaitForTransactionReceipt, useReadContract } from 'wagmi';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Alert, AlertDescription } from '@/components/ui/alert';
import { Badge } from '@/components/ui/badge';
import { Loader2, Check, Crown } from 'lucide-react';
import { SUBSCRIPTION_PLANS, USDC_ADDRESS, SUBSCRIPTION_MANAGER_ADDRESS } from '@/app/config/onchainkit';
import { ERC20_ABI, SUBSCRIPTION_MANAGER_ABI } from '@/lib/contracts';
import { updateSubscription } from '@/lib/user-data';
import type { SubscriptionPlan } from '@/types/yoga';

const plans: SubscriptionPlan[] = [
  {
    id: 'WEEKLY',
    ...SUBSCRIPTION_PLANS.WEEKLY,
    priceDisplay: '5 USDC',
    features: [
      'All yoga levels',
      'Daily new routines',
      'Progress tracking',
      '7 days access',
    ],
  },
  {
    id: 'FOUR_WEEKS',
    ...SUBSCRIPTION_PLANS.FOUR_WEEKS,
    priceDisplay: '15 USDC',
    features: [
      'All yoga levels',
      'Daily new routines',
      'Progress tracking',
      '28 days access',
      '🌟 Best value per week',
    ],
  },
  {
    id: 'TWELVE_WEEKS',
    ...SUBSCRIPTION_PLANS.TWELVE_WEEKS,
    priceDisplay: '40 USDC',
    features: [
      'All yoga levels',
      'Daily new routines',
      'Progress tracking',
      '84 days access',
      '🏆 Maximum savings',
      '💎 Exclusive bonuses',
    ],
  },
];

export function SubscriptionPlans() {
  const { address, isConnected } = useAccount();
  const [selectedPlan, setSelectedPlan] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [step, setStep] = useState<'select' | 'approve' | 'subscribe'>('select');

  // Check USDC allowance
  const { data: allowance } = useReadContract({
    address: USDC_ADDRESS,
    abi: ERC20_ABI,
    functionName: 'allowance',
    args: address ? [address, SUBSCRIPTION_MANAGER_ADDRESS] : undefined,
  });

  // Approve USDC
  const {
    writeContract: approve,
    data: approveHash,
    isPending: isApprovePending,
  } = useWriteContract();

  const { isSuccess: isApproveSuccess } = useWaitForTransactionReceipt({
    hash: approveHash,
  });

  // Subscribe
  const {
    writeContract: subscribe,
    data: subscribeHash,
    isPending: isSubscribePending,
  } = useWriteContract();

  const { isSuccess: isSubscribeSuccess } = useWaitForTransactionReceipt({
    hash: subscribeHash,
  });

  const handleSelectPlan = (planId: string) => {
    setSelectedPlan(planId);
    setError(null);
    
    const plan = plans.find((p: SubscriptionPlan) => p.id === planId);
    if (!plan) return;

    // Check if approval needed
    if (allowance && allowance >= plan.price) {
      setStep('subscribe');
    } else {
      setStep('approve');
    }
  };

  const handleApprove = async () => {
    if (!address || !selectedPlan) return;

    const plan = plans.find((p: SubscriptionPlan) => p.id === selectedPlan);
    if (!plan) return;

    try {
      approve({
        address: USDC_ADDRESS,
        abi: ERC20_ABI,
        functionName: 'approve',
        args: [SUBSCRIPTION_MANAGER_ADDRESS, plan.price],
      });
    } catch (err) {
      const message = err instanceof Error ? err.message : 'Approval failed';
      setError(message);
    }
  };

  const handleSubscribe = async () => {
    if (!address || !selectedPlan) return;

    const plan = plans.find((p: SubscriptionPlan) => p.id === selectedPlan);
    if (!plan) return;

    const planIndex = plans.findIndex((p: SubscriptionPlan) => p.id === selectedPlan);

    try {
      subscribe({
        address: SUBSCRIPTION_MANAGER_ADDRESS,
        abi: SUBSCRIPTION_MANAGER_ABI,
        functionName: 'subscribe',
        args: [planIndex, plan.price],
      });
    } catch (err) {
      const message = err instanceof Error ? err.message : 'Subscription failed';
      setError(message);
    }
  };

  // Update local storage after successful subscription
  if (isSubscribeSuccess && address && selectedPlan) {
    const plan = plans.find((p: SubscriptionPlan) => p.id === selectedPlan);
    if (plan) {
      updateSubscription(address, plan.duration);
      setStep('select');
      setSelectedPlan(null);
    }
  }

  // Move to subscribe step after approval
  if (isApproveSuccess && step === 'approve') {
    setStep('subscribe');
  }

  return (
    <div className="w-full max-w-6xl mx-auto py-8">
      <div className="text-center mb-8">
        <h2 className="text-3xl font-bold mb-2">Choose Your Plan</h2>
        <p className="text-muted-foreground">
          Continue your yoga journey with flexible subscription options
        </p>
      </div>

      <div className="grid md:grid-cols-3 gap-6">
        {plans.map((plan: SubscriptionPlan, index: number) => (
          <Card
            key={plan.id}
            className={`relative ${
              index === 1 ? 'border-2 border-primary shadow-lg scale-105' : ''
            }`}
          >
            {index === 1 && (
              <Badge className="absolute -top-3 left-1/2 -translate-x-1/2">
                Most Popular
              </Badge>
            )}
            <CardHeader>
              <CardTitle className="flex items-center justify-between">
                {plan.label}
                {index === 2 && <Crown className="w-5 h-5 text-yellow-500" />}
              </CardTitle>
              <CardDescription>
                <span className="text-3xl font-bold text-foreground">
                  {plan.priceDisplay}
                </span>
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <ul className="space-y-2">
                {plan.features.map((feature: string, i: number) => (
                  <li key={i} className="flex items-start gap-2">
                    <Check className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" />
                    <span className="text-sm">{feature}</span>
                  </li>
                ))}
              </ul>

              <Button
                onClick={() => {
                  if (selectedPlan === plan.id && step === 'approve') {
                    handleApprove();
                  } else if (selectedPlan === plan.id && step === 'subscribe') {
                    handleSubscribe();
                  } else {
                    handleSelectPlan(plan.id);
                  }
                }}
                disabled={
                  !isConnected ||
                  (selectedPlan === plan.id && (isApprovePending || isSubscribePending))
                }
                className="w-full"
                variant={index === 1 ? 'default' : 'outline'}
              >
                {selectedPlan === plan.id ? (
                  <>
                    {step === 'approve' && (
                      <>
                        {isApprovePending ? (
                          <>
                            <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                            Approving...
                          </>
                        ) : (
                          '1. Approve USDC'
                        )}
                      </>
                    )}
                    {step === 'subscribe' && (
                      <>
                        {isSubscribePending ? (
                          <>
                            <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                            Subscribing...
                          </>
                        ) : (
                          '2. Confirm Subscription'
                        )}
                      </>
                    )}
                  </>
                ) : (
                  'Select Plan'
                )}
              </Button>
            </CardContent>
          </Card>
        ))}
      </div>

      {error && (
        <Alert variant="destructive" className="mt-6">
          <AlertDescription>{error}</AlertDescription>
        </Alert>
      )}

      {isSubscribeSuccess && (
        <Alert className="mt-6 bg-green-50 border-green-200">
          <AlertDescription className="text-green-800">
            🎉 Subscription activated! Enjoy your yoga journey.
          </AlertDescription>
        </Alert>
      )}

      {step === 'approve' && selectedPlan && (
        <Alert className="mt-6 bg-blue-50 border-blue-200">
          <AlertDescription className="text-blue-800 text-center">
            💡 <strong>Step 1 of 2:</strong> Click the button above to approve USDC spending first, then you&apos;ll confirm your subscription.
          </AlertDescription>
        </Alert>
      )}
      
      {step === 'subscribe' && selectedPlan && !isSubscribePending && (
        <Alert className="mt-6 bg-green-50 border-green-200">
          <AlertDescription className="text-green-800 text-center">
            ✅ <strong>USDC Approved!</strong> Now click the button above to complete your subscription.
          </AlertDescription>
        </Alert>
      )}
    </div>
  );
}
