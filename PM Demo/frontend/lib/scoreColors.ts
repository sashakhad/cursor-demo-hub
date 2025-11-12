/**
 * Score Color Utilities
 * Maps AI criteria scores to jewel-tone color classes
 * Copyright Anysphere Inc.
 */

export interface ScoreColorClasses {
  bg: string;
  text: string;
  ring: string;
}

export function getJewelTone(score: number): ScoreColorClasses {
  if (score < 50) {
    return { 
      bg: 'bg-rose-100', 
      text: 'text-rose-700', 
      ring: 'ring-rose-400' 
    };
  }
  if (score < 70) {
    return { 
      bg: 'bg-amber-100', 
      text: 'text-amber-700', 
      ring: 'ring-amber-400' 
    };
  }
  if (score < 85) {
    return { 
      bg: 'bg-teal-100', 
      text: 'text-teal-700', 
      ring: 'ring-teal-400' 
    };
  }
  return { 
    bg: 'bg-blue-100', 
    text: 'text-blue-700', 
    ring: 'ring-blue-400' 
  };
}
