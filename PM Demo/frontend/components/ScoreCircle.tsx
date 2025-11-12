/**
 * ScoreCircle Component
 * Compact circular AI criteria score indicator with jewel tones
 * Copyright Anysphere Inc.
 */

import React from 'react';
import { getJewelTone } from '@/lib/scoreColors';

interface ScoreCircleProps {
  score: number;
  size?: 'sm' | 'md' | 'lg';
  label: string;
  onClick?: () => void;
}

export default function ScoreCircle({ 
  score, 
  size = 'md', 
  label, 
  onClick 
}: ScoreCircleProps) {
  const colors = getJewelTone(score);
  
  const sizeClasses = {
    sm: 'w-7 h-7 text-xs',
    md: 'w-9 h-9 text-sm',
    lg: 'w-11 h-11 text-base'
  };

  const baseClasses = `inline-flex items-center justify-center rounded-full font-semibold transition-all duration-200 cursor-pointer hover:scale-105 ${colors.bg} ${colors.text} ${sizeClasses[size]}`;

  return (
    <div 
      className={baseClasses}
      title={`${label}: ${Math.round(score)}%`}
      onClick={onClick}
      role="button"
      tabIndex={0}
      onKeyDown={(e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault();
          onClick?.();
        }
      }}
    >
      {Math.round(score)}
    </div>
  );
}
