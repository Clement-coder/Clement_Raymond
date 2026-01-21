import React from 'react';

const GlassCard = ({ 
  children, 
  className = '', 
  variant = 'default',
  hover = true 
}) => {
  const variants = {
    default: 'glass-card',
    nav: 'glass-nav',
    modal: 'glass-modal',
    form: 'glass-form',
    subtle: 'backdrop-blur-sm bg-white/5 border border-white/10 rounded-lg'
  };

  const hoverEffect = hover ? 'hover:bg-white/15 hover:border-white/25' : '';

  return (
    <div className={`
      ${variants[variant]}
      ${hoverEffect}
      transition-all duration-300
      ${className}
    `}>
      {children}
    </div>
  );
};

export default GlassCard;
