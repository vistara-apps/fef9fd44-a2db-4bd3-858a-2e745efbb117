'use client';

import { Copy, TrendingUp, TrendingDown, Clock, DollarSign } from 'lucide-react';
import { UserAvatar } from './UserAvatar';
import type { Trade } from '@/lib/types';

interface TradeCardProps {
  trade: Trade;
  variant?: 'default' | 'mirrored' | 'idea';
  onMirror?: (tradeId: string) => void;
  showMirrorButton?: boolean;
}

export function TradeCard({ trade, variant = 'default', onMirror, showMirrorButton = true }: TradeCardProps) {
  const isProfit = trade.pnl?.startsWith('+');
  const formatTime = (timestamp: number) => {
    const diff = Date.now() - timestamp;
    const hours = Math.floor(diff / (1000 * 60 * 60));
    const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
    
    if (hours > 0) return `${hours}h ago`;
    return `${minutes}m ago`;
  };

  return (
    <div className={`trade-card animate-fade-in ${variant === 'mirrored' ? 'border-accent' : ''}`}>
      <div className="flex items-start justify-between mb-4">
        <div className="flex items-center space-x-3">
          <UserAvatar size="medium" alt={`User ${trade.userId}`} />
          <div>
            <div className="font-semibold text-text-primary">
              {trade.userId === 'user1' ? 'CryptoTrader' : 'DeFiMaster'}
            </div>
            <div className="text-sm text-text-secondary flex items-center space-x-2">
              <Clock size={14} />
              <span>{formatTime(trade.timestamp)}</span>
            </div>
          </div>
        </div>
        
        {variant === 'mirrored' && (
          <div className="px-2 py-1 bg-accent text-black text-xs font-medium rounded-md">
            MIRRORED
          </div>
        )}
      </div>

      <div className="space-y-3">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            {trade.type === 'buy' ? (
              <TrendingUp className="text-green-500" size={20} />
            ) : (
              <TrendingDown className="text-red-500" size={20} />
            )}
            <span className="font-semibold text-lg">
              {trade.type.toUpperCase()} {trade.asset}
            </span>
          </div>
          
          {trade.pnl && (
            <div className={`font-semibold ${isProfit ? 'text-green-500' : 'text-red-500'}`}>
              {trade.pnl}
            </div>
          )}
        </div>

        <div className="grid grid-cols-2 gap-4 text-sm">
          <div>
            <div className="text-text-secondary">Amount</div>
            <div className="font-medium">{trade.amount} {trade.asset}</div>
          </div>
          {trade.price && (
            <div>
              <div className="text-text-secondary">Price</div>
              <div className="font-medium">${trade.price}</div>
            </div>
          )}
        </div>

        {showMirrorButton && onMirror && variant !== 'mirrored' && (
          <button
            onClick={() => onMirror(trade.tradeId)}
            className="w-full btn-primary px-4 py-2 rounded-lg flex items-center justify-center space-x-2 mt-4"
          >
            <Copy size={16} />
            <span>Mirror Trade</span>
          </button>
        )}
      </div>
    </div>
  );
}
