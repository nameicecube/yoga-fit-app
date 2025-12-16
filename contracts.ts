/**
 * Smart Contract ABIs and interaction helpers for YOGA FIT
 */

import type { Address } from 'viem';

// Yoga Membership NFT ABI (ERC-721) - WITH TRIAL FUNCTIONS
export const YOGA_MEMBERSHIP_NFT_ABI = [
  {
    inputs: [],
    name: 'mint',
    outputs: [],
    stateMutability: 'payable',
    type: 'function',
  },
  {
    inputs: [{ internalType: 'address', name: 'owner', type: 'address' }],
    name: 'balanceOf',
    outputs: [{ internalType: 'uint256', name: '', type: 'uint256' }],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [{ internalType: 'uint256', name: 'tokenId', type: 'uint256' }],
    name: 'tokenURI',
    outputs: [{ internalType: 'string', name: '', type: 'string' }],
    stateMutability: 'view',
    type: 'function',
  },
  // ✅ Trial tracking functions
  {
    inputs: [{ internalType: 'address', name: 'owner', type: 'address' }],
    name: 'trialStartTime',
    outputs: [{ internalType: 'uint256', name: '', type: 'uint256' }],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [{ internalType: 'address', name: 'user', type: 'address' }],
    name: 'isInTrialPeriod',
    outputs: [{ internalType: 'bool', name: '', type: 'bool' }],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [{ internalType: 'address', name: 'user', type: 'address' }],
    name: 'getTrialDaysRemaining',
    outputs: [{ internalType: 'uint256', name: '', type: 'uint256' }],
    stateMutability: 'view',
    type: 'function',
  },
] as const;

// Subscription Manager ABI
export const SUBSCRIPTION_MANAGER_ABI = [
  {
    inputs: [
      { internalType: 'uint8', name: 'planId', type: 'uint8' },
      { internalType: 'uint256', name: 'amount', type: 'uint256' },
    ],
    name: 'subscribe',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [{ internalType: 'address', name: 'user', type: 'address' }],
    name: 'getSubscription',
    outputs: [
      { internalType: 'uint256', name: 'endDate', type: 'uint256' },
      { internalType: 'bool', name: 'active', type: 'bool' },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [{ internalType: 'address', name: 'user', type: 'address' }],
    name: 'isActive',
    outputs: [{ internalType: 'bool', name: '', type: 'bool' }],
    stateMutability: 'view',
    type: 'function',
  },
] as const;

// Access Controller ABI - UNIFIED ACCESS CHECK
export const ACCESS_CONTROLLER_ABI = [
  {
    inputs: [{ internalType: 'address', name: 'user', type: 'address' }],
    name: 'checkAccess',
    outputs: [{ internalType: 'bool', name: 'hasAccess', type: 'bool' }],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [{ internalType: 'address', name: 'user', type: 'address' }],
    name: 'getAccessStatus',
    outputs: [
      {
        components: [
          { internalType: 'bool', name: 'hasNFT', type: 'bool' },
          { internalType: 'bool', name: 'isInTrial', type: 'bool' },
          { internalType: 'bool', name: 'hasActiveSubscription', type: 'bool' },
          { internalType: 'bool', name: 'hasAccess', type: 'bool' },
          { internalType: 'uint256', name: 'trialDaysRemaining', type: 'uint256' },
          { internalType: 'uint256', name: 'subscriptionEndDate', type: 'uint256' },
        ],
        internalType: 'struct AccessController.AccessStatus',
        name: 'status',
        type: 'tuple',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [{ internalType: 'address', name: 'user', type: 'address' }],
    name: 'isInTrialPeriod',
    outputs: [{ internalType: 'bool', name: '', type: 'bool' }],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [{ internalType: 'address', name: 'user', type: 'address' }],
    name: 'getTrialDaysRemaining',
    outputs: [{ internalType: 'uint256', name: 'daysRemaining', type: 'uint256' }],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [{ internalType: 'address[]', name: 'users', type: 'address[]' }],
    name: 'batchCheckAccess',
    outputs: [{ internalType: 'bool[]', name: 'accessList', type: 'bool[]' }],
    stateMutability: 'view',
    type: 'function',
  },
] as const;

// ERC20 USDC ABI (standard functions we need)
export const ERC20_ABI = [
  {
    inputs: [
      { internalType: 'address', name: 'spender', type: 'address' },
      { internalType: 'uint256', name: 'amount', type: 'uint256' },
    ],
    name: 'approve',
    outputs: [{ internalType: 'bool', name: '', type: 'bool' }],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [
      { internalType: 'address', name: 'owner', type: 'address' },
      { internalType: 'address', name: 'spender', type: 'address' },
    ],
    name: 'allowance',
    outputs: [{ internalType: 'uint256', name: '', type: 'uint256' }],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [{ internalType: 'address', name: 'account', type: 'address' }],
    name: 'balanceOf',
    outputs: [{ internalType: 'uint256', name: '', type: 'uint256' }],
    stateMutability: 'view',
    type: 'function',
  },
] as const;

/**
 * Contract interaction helper types
 */
export interface ContractCallParams {
  address: Address;
  abi: typeof YOGA_MEMBERSHIP_NFT_ABI | typeof SUBSCRIPTION_MANAGER_ABI | typeof ERC20_ABI | typeof ACCESS_CONTROLLER_ABI;
  functionName: string;
  args?: unknown[];
  value?: bigint;
}

export interface OnChainAccessStatus {
  hasNFT: boolean;
  isInTrial: boolean;
  hasActiveSubscription: boolean;
  hasAccess: boolean;
  trialDaysRemaining: bigint;
  subscriptionEndDate: bigint;
}
