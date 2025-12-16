'use client';

import { useAccount, useDisconnect, useConnect } from 'wagmi';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Wallet, LogOut } from 'lucide-react';

export function WalletStatus() {
  const { address, isConnected, connector } = useAccount();
  const { disconnect } = useDisconnect();
  const { connectors, connect } = useConnect();

  if (!isConnected || !address) {
    return (
      <Card className="w-full max-w-md mx-auto">
        <CardContent className="pt-6">
          <div className="space-y-4">
            <div className="text-center mb-4">
              <Wallet className="w-12 h-12 mx-auto mb-3 text-muted-foreground" />
              <h3 className="font-semibold text-lg">Connect Your Wallet</h3>
              <p className="text-sm text-muted-foreground">
                Connect your Base wallet to access YOGA FIT
              </p>
            </div>
            {connectors.map((connector) => (
              <Button
                key={connector.id}
                onClick={() => connect({ connector })}
                variant="outline"
                className="w-full"
              >
                Connect with {connector.name}
              </Button>
            ))}
          </div>
        </CardContent>
      </Card>
    );
  }

  return (
    <Card className="w-full">
      <CardContent className="pt-6">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-gradient-to-br from-purple-500 to-pink-500 rounded-full flex items-center justify-center">
              <Wallet className="w-5 h-5 text-white" />
            </div>
            <div>
              <p className="font-semibold text-sm">
                {address.slice(0, 6)}...{address.slice(-4)}
              </p>
              <Badge variant="secondary" className="text-xs">
                {connector?.name || 'Connected'}
              </Badge>
            </div>
          </div>
          <Button
            onClick={() => disconnect()}
            variant="ghost"
            size="sm"
          >
            <LogOut className="w-4 h-4 mr-2" />
            Disconnect
          </Button>
        </div>
      </CardContent>
    </Card>
  );
}
