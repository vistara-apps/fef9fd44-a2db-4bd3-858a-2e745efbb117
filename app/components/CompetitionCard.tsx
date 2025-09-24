'use client';

import { Trophy, Users, DollarSign, Clock, Calendar } from 'lucide-react';
import type { Competition } from '@/lib/types';

interface CompetitionCardProps {
  competition: Competition;
  onJoin?: (competitionId: string) => void;
  onView?: (competitionId: string) => void;
}

export function CompetitionCard({ competition, onJoin, onView }: CompetitionCardProps) {
  const getStatusColor = () => {
    switch (competition.status) {
      case 'upcoming':
        return 'text-blue-500 bg-blue-500/10 border-blue-500/20';
      case 'active':
        return 'text-green-500 bg-green-500/10 border-green-500/20';
      case 'completed':
        return 'text-text-secondary bg-surface border-border';
      default:
        return 'text-text-secondary bg-surface border-border';
    }
  };

  const formatDate = (timestamp: number) => {
    return new Date(timestamp).toLocaleDateString('en-US', {
      month: 'short',
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit'
    });
  };

  const getTimeRemaining = () => {
    const now = Date.now();
    const target = competition.status === 'upcoming' ? competition.startTime : competition.endTime;
    const diff = target - now;
    
    if (diff <= 0) return null;
    
    const days = Math.floor(diff / (1000 * 60 * 60 * 24));
    const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    
    if (days > 0) return `${days}d ${hours}h`;
    return `${hours}h`;
  };

  const timeRemaining = getTimeRemaining();

  return (
    <div className="trade-card animate-fade-in">
      <div className="flex items-start justify-between mb-4">
        <div className="flex items-center space-x-3">
          <div className="w-12 h-12 bg-gradient-to-br from-accent to-yellow-500 rounded-lg flex items-center justify-center">
            <Trophy className="text-black" size={24} />
          </div>
          <div>
            <h3 className="font-semibold text-lg text-text-primary">{competition.title}</h3>
            <div className={`px-2 py-1 rounded-full text-xs font-medium border inline-flex items-center space-x-1 ${getStatusColor()}`}>
              <span className="capitalize">{competition.status}</span>
            </div>
          </div>
        </div>
      </div>

      <p className="text-text-secondary mb-4 leading-relaxed">{competition.description}</p>

      <div className="grid grid-cols-2 gap-4 mb-4 text-sm">
        <div className="flex items-center space-x-2">
          <DollarSign size={16} className="text-accent" />
          <div>
            <div className="text-text-secondary">Starting Balance</div>
            <div className="font-medium">${competition.startingBalance.toLocaleString()}</div>
          </div>
        </div>
        
        <div className="flex items-center space-x-2">
          <Users size={16} className="text-accent" />
          <div>
            <div className="text-text-secondary">Participants</div>
            <div className="font-medium">{competition.participants}</div>
          </div>
        </div>
        
        <div className="flex items-center space-x-2">
          <Calendar size={16} className="text-accent" />
          <div>
            <div className="text-text-secondary">
              {competition.status === 'upcoming' ? 'Starts' : 'Ends'}
            </div>
            <div className="font-medium">
              {formatDate(competition.status === 'upcoming' ? competition.startTime : competition.endTime)}
            </div>
          </div>
        </div>
        
        {timeRemaining && (
          <div className="flex items-center space-x-2">
            <Clock size={16} className="text-accent" />
            <div>
              <div className="text-text-secondary">
                {competition.status === 'upcoming' ? 'Starts in' : 'Ends in'}
              </div>
              <div className="font-medium">{timeRemaining}</div>
            </div>
          </div>
        )}
      </div>

      {competition.prizes.length > 0 && (
        <div className="mb-4">
          <div className="text-sm text-text-secondary mb-2">Prizes</div>
          <div className="flex space-x-2">
            {competition.prizes.slice(0, 3).map((prize) => (
              <div
                key={prize.rank}
                className="px-2 py-1 bg-surface border border-border rounded-md text-xs"
              >
                #{prize.rank}: {prize.amount} {prize.currency}
              </div>
            ))}
          </div>
        </div>
      )}

      <div className="flex space-x-2">
        {competition.status === 'upcoming' && onJoin && (
          <button
            onClick={() => onJoin(competition.competitionId)}
            className="flex-1 btn-primary px-4 py-2 rounded-lg font-medium"
          >
            Join Competition
            {competition.entryFee && (
              <span className="ml-1">({competition.entryFee} ETH)</span>
            )}
          </button>
        )}
        
        {onView && (
          <button
            onClick={() => onView(competition.competitionId)}
            className="flex-1 btn-secondary px-4 py-2 rounded-lg font-medium"
          >
            View Details
          </button>
        )}
      </div>
    </div>
  );
}
