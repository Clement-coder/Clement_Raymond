import React from 'react';
import GlassCard from './GlassCard';
import TradingCard from './TradingCard';
import { TradingForm, FormInput, FormButton } from './TradingForm';

const StyleGuide = () => {
  return (
    <div className="min-h-screen bg-slate-900 p-8">
      <div className="max-w-6xl mx-auto space-y-12">
        
        {/* Header */}
        <div className="text-center">
          <h1 className="text-4xl font-bold text-white mb-4">Glassmorphism Style Guide</h1>
          <p className="text-white/70 text-lg">Clean, professional trading interface components</p>
        </div>

        {/* Glass Cards */}
        <section>
          <h2 className="text-2xl font-semibold text-white mb-6">Glass Cards</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <GlassCard className="p-6">
              <h3 className="text-lg font-semibold text-white mb-2">Default Card</h3>
              <p className="text-white/70">Standard glassmorphism card with subtle transparency and blur.</p>
            </GlassCard>
            
            <GlassCard variant="subtle" className="p-6">
              <h3 className="text-lg font-semibold text-white mb-2">Subtle Card</h3>
              <p className="text-white/70">More transparent variant for layered content.</p>
            </GlassCard>
            
            <GlassCard variant="form" className="p-6">
              <h3 className="text-lg font-semibold text-white mb-2">Form Card</h3>
              <p className="text-white/70">Optimized for form containers and input groups.</p>
            </GlassCard>
          </div>
        </section>

        {/* Trading Cards */}
        <section>
          <h2 className="text-2xl font-semibold text-white mb-6">Trading Cards</h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            <TradingCard title="Portfolio" value="$25,430.50" change={2.45} />
            <TradingCard title="BTC/USD" value="$43,250" change={-1.23} />
            <TradingCard title="ETH/USD" value="$2,890" change={3.67} />
            <TradingCard title="Today's P&L" value="+$567.89" change={1.89} />
          </div>
        </section>

        {/* Navigation */}
        <section>
          <h2 className="text-2xl font-semibold text-white mb-6">Navigation</h2>
          <GlassCard variant="nav" className="p-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-8">
                <span className="text-xl font-bold text-white">TradePro</span>
                <nav className="flex space-x-6">
                  <a href="#" className="text-white/80 hover:text-white transition-colors">Dashboard</a>
                  <a href="#" className="text-white/80 hover:text-white transition-colors">Markets</a>
                  <a href="#" className="text-white/80 hover:text-white transition-colors">Portfolio</a>
                  <a href="#" className="text-white/80 hover:text-white transition-colors">Orders</a>
                </nav>
              </div>
              <FormButton>Account</FormButton>
            </div>
          </GlassCard>
        </section>

        {/* Forms */}
        <section>
          <h2 className="text-2xl font-semibold text-white mb-6">Forms</h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <TradingForm title="Login Form">
              <FormInput label="Email" type="email" placeholder="Enter your email" />
              <FormInput label="Password" type="password" placeholder="Enter password" />
              <div className="flex gap-3">
                <FormButton variant="secondary">Cancel</FormButton>
                <FormButton variant="primary">Sign In</FormButton>
              </div>
            </TradingForm>

            <TradingForm title="Quick Trade">
              <FormInput label="Symbol" placeholder="BTC/USD" />
              <FormInput label="Amount" type="number" placeholder="0.001" />
              <FormInput label="Price" type="number" placeholder="Market Price" />
              <div className="flex gap-3">
                <FormButton variant="primary" className="flex-1 bg-green-500/20 border-green-500/30">
                  Buy
                </FormButton>
                <FormButton variant="primary" className="flex-1 bg-red-500/20 border-red-500/30">
                  Sell
                </FormButton>
              </div>
            </TradingForm>
          </div>
        </section>

        {/* Buttons */}
        <section>
          <h2 className="text-2xl font-semibold text-white mb-6">Buttons</h2>
          <div className="flex flex-wrap gap-4">
            <FormButton variant="primary">Primary Button</FormButton>
            <FormButton variant="secondary">Secondary Button</FormButton>
            <FormButton className="bg-green-500/20 border-green-500/30 hover:bg-green-500/30">
              Success Button
            </FormButton>
            <FormButton className="bg-red-500/20 border-red-500/30 hover:bg-red-500/30">
              Danger Button
            </FormButton>
            <FormButton className="bg-blue-500/20 border-blue-500/30 hover:bg-blue-500/30">
              Info Button
            </FormButton>
          </div>
        </section>

        {/* Typography */}
        <section>
          <h2 className="text-2xl font-semibold text-white mb-6">Typography</h2>
          <GlassCard className="p-8">
            <h1 className="text-4xl font-bold text-white mb-4">Heading 1</h1>
            <h2 className="text-3xl font-semibold text-white mb-4">Heading 2</h2>
            <h3 className="text-2xl font-semibold text-white mb-4">Heading 3</h3>
            <h4 className="text-xl font-medium text-white mb-4">Heading 4</h4>
            <p className="text-white mb-4">Regular paragraph text with good readability.</p>
            <p className="text-white/80 mb-4">Secondary text with reduced opacity.</p>
            <p className="text-white/60">Tertiary text for less important information.</p>
          </GlassCard>
        </section>

      </div>
    </div>
  );
};

export default StyleGuide;
