import React from 'react';
import GlassCard from './GlassCard';

const TradingCard = ({ title, value, change, icon, className = '' }) => {
  const isPositive = change >= 0;
  
  return (
    <GlassCard className={`p-6 ${className}`}>
      <div className="flex items-center justify-between mb-4">
        <div className="text-white/70 text-sm font-medium">{title}</div>
        {icon && <div className="text-white/50">{icon}</div>}
      </div>
      
      <div className="text-2xl font-bold text-white mb-2">{value}</div>
      
      <div className={`text-sm font-medium ${
        isPositive ? 'text-green-400' : 'text-red-400'
      }`}>
        {isPositive ? '+' : ''}{change}%
      </div>
    </GlassCard>
  );
};

export default TradingCard;
