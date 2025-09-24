'use client';

import { ThumbsUp, ThumbsDown, MessageCircle, TrendingUp, TrendingDown, Minus, Target, Clock } from 'lucide-react';
import { UserAvatar } from './UserAvatar';
import type { TradeIdea } from '@/lib/types';

interface TradeIdeaCardProps {
  idea: TradeIdea;
  onUpvote?: (ideaId: string) => void;
  onDownvote?: (ideaId: string) => void;
  onComment?: (ideaId: string) => void;
}

export function TradeIdeaCard({ idea, onUpvote, onDownvote, onComment }: TradeIdeaCardProps) {
  const getSentimentIcon = () => {
    switch (idea.sentiment) {
      case 'bullish':
        return <TrendingUp className="text-green-500" size={20} />;
      case 'bearish':
        return <TrendingDown className="text-red-500" size={20} />;
      default:
        return <Minus className="text-text-secondary" size={20} />;
    }
  };

  const getSentimentColor = () => {
    switch (idea.sentiment) {
      case 'bullish':
        return 'text-green-500 bg-green-500/10 border-green-500/20';
      case 'bearish':
        return 'text-red-500 bg-red-500/10 border-red-500/20';
      default:
        return 'text-text-secondary bg-surface border-border';
    }
  };

  const formatTime = (timestamp: number) => {
    const diff = Date.now() - timestamp;
    const hours = Math.floor(diff / (1000 * 60 * 60));
    const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
    
    if (hours > 0) return `${hours}h ago`;
    return `${minutes}m ago`;
  };

  return (
    <div className="trade-card animate-fade-in">
      <div className="flex items-start justify-between mb-4">
        <div className="flex items-center space-x-3">
          <UserAvatar size="medium" alt={`User ${idea.userId}`} />
          <div>
            <div className="font-semibold text-text-primary">
              {idea.userId === 'user1' ? 'CryptoTrader' : 'DeFiMaster'}
            </div>
            <div className="text-sm text-text-secondary flex items-center space-x-2">
              <Clock size={14} />
              <span>{formatTime(idea.timestamp)}</span>
            </div>
          </div>
        </div>
        
        <div className={`px-3 py-1 rounded-full text-sm font-medium border flex items-center space-x-1 ${getSentimentColor()}`}>
          {getSentimentIcon()}
          <span className="capitalize">{idea.sentiment}</span>
        </div>
      </div>

      <div className="space-y-4">
        <div>
          <h3 className="font-semibold text-lg text-text-primary mb-2">{idea.title}</h3>
          <p className="text-text-secondary leading-relaxed">{idea.description}</p>
        </div>

        <div className="flex flex-wrap gap-2">
          {idea.tags.map((tag) => (
            <span
              key={tag}
              className="px-2 py-1 bg-surface border border-border rounded-md text-xs text-text-secondary"
            >
              #{tag}
            </span>
          ))}
        </div>

        {(idea.targetPrice || idea.timeframe) && (
          <div className="grid grid-cols-2 gap-4 text-sm">
            {idea.targetPrice && (
              <div className="flex items-center space-x-2">
                <Target size={16} className="text-accent" />
                <div>
                  <div className="text-text-secondary">Target</div>
                  <div className="font-medium">{idea.targetPrice}</div>
                </div>
              </div>
            )}
            {idea.timeframe && (
              <div className="flex items-center space-x-2">
                <Clock size={16} className="text-accent" />
                <div>
                  <div className="text-text-secondary">Timeframe</div>
                  <div className="font-medium">{idea.timeframe}</div>
                </div>
              </div>
            )}
          </div>
        )}

        <div className="flex items-center justify-between pt-4 border-t border-border">
          <div className="flex items-center space-x-4">
            <button
              onClick={() => onUpvote?.(idea.ideaId)}
              className="flex items-center space-x-1 text-text-secondary hover:text-green-500 transition-colors"
            >
              <ThumbsUp size={16} />
              <span>{idea.upvotes}</span>
            </button>
            
            <button
              onClick={() => onDownvote?.(idea.ideaId)}
              className="flex items-center space-x-1 text-text-secondary hover:text-red-500 transition-colors"
            >
              <ThumbsDown size={16} />
              <span>{idea.downvotes}</span>
            </button>
            
            <button
              onClick={() => onComment?.(idea.ideaId)}
              className="flex items-center space-x-1 text-text-secondary hover:text-text-primary transition-colors"
            >
              <MessageCircle size={16} />
              <span>{idea.comments.length}</span>
            </button>
          </div>
          
          <div className="text-sm font-medium text-accent">
            {idea.asset}
          </div>
        </div>
      </div>
    </div>
  );
}
