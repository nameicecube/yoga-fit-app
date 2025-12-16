/**
 * Custom hook to check user access via Access Controller smart contract
 */
'use client';

import { useEffect, useState } from 'react';
import { useAccount, useReadContract } from 'wagmi';
import { ACCESS_CONTROLLER_ADDRESS } from '@/app/config/onchainkit';
import { ACCESS_CONTROLLER_ABI } from '@/lib/contracts';
import type { OnChainAccessStatus } from '@/lib/contracts';

export function useAccessControl() {
  const { address } = useAccount();
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  // Check if user has access (boolean)
  const { data: hasAccess, isLoading: isCheckingAccess } = useReadContract({
    address: ACCESS_CONTROLLER_ADDRESS,
    abi: ACCESS_CONTROLLER_ABI,
    functionName: 'checkAccess',
    args: address ? [address] : undefined,
    query: {
      enabled: !!address && isClient,
      refetchInterval: 30000, // Refetch every 30 seconds
    },
  });

  // Get detailed access status
  const { data: accessStatus, isLoading: isLoadingStatus } = useReadContract({
    address: ACCESS_CONTROLLER_ADDRESS,
    abi: ACCESS_CONTROLLER_ABI,
    functionName: 'getAccessStatus',
    args: address ? [address] : undefined,
    query: {
      enabled: !!address && isClient,
      refetchInterval: 30000,
    },
  });

  // Get trial days remaining
  const { data: trialDaysRemaining } = useReadContract({
    address: ACCESS_CONTROLLER_ADDRESS,
    abi: ACCESS_CONTROLLER_ABI,
    functionName: 'getTrialDaysRemaining',
    args: address ? [address] : undefined,
    query: {
      enabled: !!address && isClient,
      refetchInterval: 60000, // Refetch every minute
    },
  });

  // Check if in trial period
  const { data: isInTrial } = useReadContract({
    address: ACCESS_CONTROLLER_ADDRESS,
    abi: ACCESS_CONTROLLER_ABI,
    functionName: 'isInTrialPeriod',
    args: address ? [address] : undefined,
    query: {
      enabled: !!address && isClient,
      refetchInterval: 60000,
    },
  });

  const parsedStatus = accessStatus as OnChainAccessStatus | undefined;

  return {
    hasAccess: hasAccess as boolean | undefined,
    isCheckingAccess,
    accessStatus: parsedStatus,
    isLoadingStatus,
    trialDaysRemaining: trialDaysRemaining as bigint | undefined,
    isInTrial: isInTrial as boolean | undefined,
  };
}
