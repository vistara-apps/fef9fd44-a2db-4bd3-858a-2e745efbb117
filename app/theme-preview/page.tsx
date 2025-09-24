'use client';

import { useState } from 'react';
import { useTheme } from '../components/ThemeProvider';
import { TradeCard } from '../components/TradeCard';
import { CTAButton } from '../components/CTAButton';
import { Palette, ArrowLeft } from 'lucide-react';
import Link from 'next/link';

const themes = [
  { id: 'default', name: 'Finance Pro', description: 'Professional Wall Street meets Crypto' },
  { id: 'celo', name: 'CELO', description: 'Black background with yellow accents' },
  { id: 'solana', name: 'Solana', description: 'Dark purple with magenta accents' },
  { id: 'base', name: 'Base', description: 'Dark blue with Base blue accents' },
  { id: 'coinbase', name: 'Coinbase', description: 'Dark navy with Coinbase blue' }
];

const sampleTrade = {
  tradeId: 'preview',
  fromAddress: '0x742d35Cc6634C0532925a3b8D',
  toAddress: '0x833589fCD6eDb6E08f4c7C32D',
  amount: '1000',
  asset: 'USDC',
  timestamp: Date.now() - 3600000,
  transactionHash: '0x1234567890abcdef',
  userId: 'user1',
  type: 'buy' as const,
  price: '1.00',
  pnl: '+2.5%',
  status: 'completed' as const
};

export default function ThemePreview() {
  const { theme, setTheme } = useTheme();

  return (
    <div className="min-h-screen bg-bg text-fg p-6">
      <div className="max-w-4xl mx-auto">
        <div className="flex items-center space-x-4 mb-8">
          <Link href="/" className="p-2 rounded-lg hover:bg-surface transition-colors">
            <ArrowLeft size={24} />
          </Link>
          <div>
            <h1 className="text-3xl font-bold text-text-primary">Theme Preview</h1>
            <p className="text-text-secondary">Choose your preferred theme for TradeSync Social</p>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          <div className="space-y-4">
            <h2 className="text-xl font-semibold text-text-primary flex items-center space-x-2">
              <Palette size={20} />
              <span>Available Themes</span>
            </h2>
            
            <div className="space-y-3">
              {themes.map((themeOption) => (
                <button
                  key={themeOption.id}
                  onClick={() => setTheme(themeOption.id as any)}
                  className={`w-full p-4 rounded-lg border text-left transition-all duration-200 ${
                    theme === themeOption.id
                      ? 'border-accent bg-surface'
                      : 'border-border hover:border-accent/50 hover:bg-surface/50'
                  }`}
                >
                  <div className="font-semibold text-text-primary">{themeOption.name}</div>
                  <div className="text-sm text-text-secondary">{themeOption.description}</div>
                  {theme === themeOption.id && (
                    <div className="text-xs text-accent mt-1">Currently Active</div>
                  )}
                </button>
              ))}
            </div>
          </div>

          <div className="space-y-6">
            <h2 className="text-xl font-semibold text-text-primary">Preview</h2>
            
            <div className="space-y-4">
              <TradeCard trade={sampleTrade} showMirrorButton={true} />
              
              <div className="metric-card p-4">
                <h3 className="font-semibold text-text-primary mb-2">Sample Card</h3>
                <p className="text-text-secondary mb-4">This is how cards look in the current theme.</p>
                <div className="flex space-x-2">
                  <CTAButton variant="primary">Primary Button</CTAButton>
                  <CTAButton variant="secondary">Secondary</CTAButton>
                </div>
              </div>

              <div className="glass-card p-4">
                <h3 className="font-semibold text-text-primary mb-2">Glass Card</h3>
                <p className="text-text-secondary">Glass morphism effect with backdrop blur.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
