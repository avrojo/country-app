export const REGIONS = [
  'africa',
  'americas',
  'asia',
  'europe',
  'oceania',
  'antarctic',
] as const;

export type Region = typeof REGIONS[number];