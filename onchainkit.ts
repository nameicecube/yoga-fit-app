/**
 * OnchainKit configuration for YOGA FIT
 * Base blockchain integration for NFT memberships and USDC subscriptions
 */

export const ONCHAINKIT_API_KEY = process.env.NEXT_PUBLIC_ONCHAINKIT_API_KEY || 'demo-api-key';
export const ONCHAINKIT_PROJECT_ID = process.env.NEXT_PUBLIC_ONCHAINKIT_PROJECT_ID || 'demo-project-id';

// Smart Contract Addresses (Base Mainnet) - DEPLOYED
export const YOGA_MEMBERSHIP_NFT_ADDRESS = '0x4be204f85931Ac76FCF9E8eb88ACd8cb8355e991' as const;
export const SUBSCRIPTION_MANAGER_ADDRESS = '0x5B802Bb89BCB14796a09F8f31E53Aae6E90C896F' as const;
export const ACCESS_CONTROLLER_ADDRESS = '0x818c5445EEB5813F82Aa43030FF8A4016a3cd6Ed' as const;

// USDC Contract Address on Base
export const USDC_ADDRESS = '0x833589fcd6edb6e08f4c7c32d4f71b54bda02913' as const;

// Subscription Plans (in USDC, 6 decimals)
export const SUBSCRIPTION_PLANS = {
  WEEKLY: {
    price: 5_000000n, // 5 USDC
    duration: 7 * 24 * 60 * 60, // 7 days in seconds
    label: 'Weekly',
  },
  FOUR_WEEKS: {
    price: 15_000000n, // 15 USDC
    duration: 28 * 24 * 60 * 60, // 28 days
    label: '4 Weeks',
  },
  TWELVE_WEEKS: {
    price: 40_000000n, // 40 USDC
    duration: 84 * 24 * 60 * 60, // 84 days
    label: '12 Weeks',
  },
} as const;

// NFT Membership Price (in ETH)
export const NFT_MEMBERSHIP_PRICE = 0.001;

// Trial Duration
export const TRIAL_DURATION_DAYS = 7;
