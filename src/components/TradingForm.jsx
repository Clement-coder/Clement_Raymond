import React from 'react';
import GlassCard from './GlassCard';

const TradingForm = ({ title, children, onSubmit, className = '' }) => {
  return (
    <GlassCard variant="form" className={`p-6 ${className}`}>
      <h3 className="text-xl font-semibold text-white mb-6">{title}</h3>
      
      <form onSubmit={onSubmit} className="space-y-4">
        {children}
      </form>
    </GlassCard>
  );
};

const FormInput = ({ label, type = 'text', placeholder, value, onChange, className = '' }) => {
  return (
    <div className={`space-y-2 ${className}`}>
      <label className="block text-sm font-medium text-white/80">{label}</label>
      <input
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        className="w-full px-4 py-3 backdrop-blur-sm bg-white/5 border border-white/20 rounded-lg text-white placeholder-white/40 focus:outline-none focus:border-white/40 focus:bg-white/10 transition-all duration-200"
      />
    </div>
  );
};

const FormButton = ({ children, type = 'button', variant = 'primary', className = '', ...props }) => {
  const variants = {
    primary: 'glass-button text-white font-medium px-6 py-3',
    secondary: 'backdrop-blur-sm bg-white/5 border border-white/15 text-white/80 font-medium px-6 py-3 rounded-lg hover:bg-white/10'
  };

  return (
    <button
      type={type}
      className={`${variants[variant]} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
};

export { TradingForm, FormInput, FormButton };
