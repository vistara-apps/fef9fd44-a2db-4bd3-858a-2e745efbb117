'use client';

import { useState, useEffect } from 'react';
import { AppShell } from './components/AppShell';
import { TradeCard } from './components/TradeCard';
import { TradeIdeaCard } from './components/TradeIdeaCard';
import { CompetitionCard } from './components/CompetitionCard';
import { LearningModuleCard } from './components/LearningModuleCard';
import { CTAButton } from './components/CTAButton';
import { UserAvatar } from './components/UserAvatar';
import { ConnectWallet, Wallet } from '@coinbase/onchainkit/wallet';
import { Name, Avatar, Identity } from '@coinbase/onchainkit/identity';
import { Plus, TrendingUp, Users, BookOpen, Trophy, Star } from 'lucide-react';
import { SAMPLE_TRADES, SAMPLE_TRADE_IDEAS, SAMPLE_COMPETITIONS, SAMPLE_LEARNING_PATHS } from '@/lib/constants';

export default function TradeSyncSocial() {
  const [activeTab, setActiveTab] = useState('feed');
  const [mirroredTrades, setMirroredTrades] = useState<string[]>([]);

  const handleMirrorTrade = (tradeId: string) => {
    setMirroredTrades(prev => [...prev, tradeId]);
    // In a real app, this would trigger an on-chain transaction
    console.log('Mirroring trade:', tradeId);
  };

  const handleUpvoteIdea = (ideaId: string) => {
    console.log('Upvoting idea:', ideaId);
  };

  const handleDownvoteIdea = (ideaId: string) => {
    console.log('Downvoting idea:', ideaId);
  };

  const handleCommentIdea = (ideaId: string) => {
    console.log('Commenting on idea:', ideaId);
  };

  const handleJoinCompetition = (competitionId: string) => {
    console.log('Joining competition:', competitionId);
  };

  const handleStartModule = (moduleId: string) => {
    console.log('Starting module:', moduleId);
  };

  const renderFeedTab = () => (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h2 className="text-2xl font-bold text-text-primary">Trade Feed</h2>
        <Wallet>
          <ConnectWallet>
            <Avatar className="h-8 w-8" />
            <Name />
          </ConnectWallet>
        </Wallet>
      </div>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-1 xl:grid-cols-2">
        {SAMPLE_TRADES.map((trade) => (
          <TradeCard
            key={trade.tradeId}
            trade={trade}
            variant={mirroredTrades.includes(trade.tradeId) ? 'mirrored' : 'default'}
            onMirror={handleMirrorTrade}
            showMirrorButton={!mirroredTrades.includes(trade.tradeId)}
          />
        ))}
      </div>

      <div className="text-center py-8">
        <p className="text-text-secondary mb-4">Connect your wallet to see more trades from your network</p>
        <Wallet>
          <ConnectWallet>
            <CTAButton variant="primary">
              Connect Wallet
            </CTAButton>
          </ConnectWallet>
        </Wallet>
      </div>
    </div>
  );

  const renderIdeasTab = () => (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h2 className="text-2xl font-bold text-text-primary">Trade Ideas</h2>
        <CTAButton variant="primary" icon={Plus}>
          Post Idea
        </CTAButton>
      </div>

      <div className="grid gap-6">
        {SAMPLE_TRADE_IDEAS.map((idea) => (
          <TradeIdeaCard
            key={idea.ideaId}
            idea={idea}
            onUpvote={handleUpvoteIdea}
            onDownvote={handleDownvoteIdea}
            onComment={handleCommentIdea}
          />
        ))}
      </div>
    </div>
  );

  const renderLearnTab = () => (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h2 className="text-2xl font-bold text-text-primary">Learning Paths</h2>
        <CTAButton variant="secondary" icon={BookOpen}>
          Browse All
        </CTAButton>
      </div>

      <div className="grid gap-6 md:grid-cols-2">
        {SAMPLE_LEARNING_PATHS[0].modules.map((module) => (
          <LearningModuleCard
            key={module.moduleId}
            module={module}
            onStart={handleStartModule}
          />
        ))}
      </div>

      <div className="metric-card p-6">
        <div className="flex items-center space-x-4 mb-4">
          <div className="w-12 h-12 bg-gradient-to-br from-accent to-yellow-500 rounded-lg flex items-center justify-center">
            <Star className="text-black" size={24} />
          </div>
          <div>
            <h3 className="text-lg font-semibold text-text-primary">Premium Learning</h3>
            <p className="text-text-secondary">Unlock advanced strategies and exclusive content</p>
          </div>
        </div>
        <CTAButton variant="primary" className="w-full">
          Upgrade to Premium ($5/month)
        </CTAButton>
      </div>
    </div>
  );

  const renderCompeteTab = () => (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h2 className="text-2xl font-bold text-text-primary">Competitions</h2>
        <CTAButton variant="secondary" icon={Trophy}>
          View All
        </CTAButton>
      </div>

      <div className="grid gap-6">
        {SAMPLE_COMPETITIONS.map((competition) => (
          <CompetitionCard
            key={competition.competitionId}
            competition={competition}
            onJoin={handleJoinCompetition}
            onView={(id) => console.log('Viewing competition:', id)}
          />
        ))}
      </div>
    </div>
  );

  const renderProfileTab = () => (
    <div className="space-y-6">
      <div className="metric-card p-6">
        <div className="flex items-center space-x-4 mb-6">
          <UserAvatar size="large" alt="Your Profile" />
          <div>
            <h2 className="text-xl font-bold text-text-primary">Your Profile</h2>
            <p className="text-text-secondary">Connect wallet to view your stats</p>
          </div>
        </div>

        <Wallet>
          <ConnectWallet>
            <CTAButton variant="primary" className="w-full">
              Connect Base Wallet
            </CTAButton>
          </ConnectWallet>
        </Wallet>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        <div className="metric-card text-center">
          <TrendingUp className="mx-auto mb-2 text-accent" size={24} />
          <div className="text-2xl font-bold text-text-primary">0</div>
          <div className="text-sm text-text-secondary">Trades Mirrored</div>
        </div>
        
        <div className="metric-card text-center">
          <Users className="mx-auto mb-2 text-accent" size={24} />
          <div className="text-2xl font-bold text-text-primary">0</div>
          <div className="text-sm text-text-secondary">Following</div>
        </div>
        
        <div className="metric-card text-center">
          <BookOpen className="mx-auto mb-2 text-accent" size={24} />
          <div className="text-2xl font-bold text-text-primary">0</div>
          <div className="text-sm text-text-secondary">Modules Completed</div>
        </div>
        
        <div className="metric-card text-center">
          <Trophy className="mx-auto mb-2 text-accent" size={24} />
          <div className="text-2xl font-bold text-text-primary">0</div>
          <div className="text-sm text-text-secondary">Competitions Won</div>
        </div>
      </div>
    </div>
  );

  const renderContent = () => {
    switch (activeTab) {
      case 'feed':
        return renderFeedTab();
      case 'ideas':
        return renderIdeasTab();
      case 'learn':
        return renderLearnTab();
      case 'compete':
        return renderCompeteTab();
      case 'profile':
        return renderProfileTab();
      default:
        return renderFeedTab();
    }
  };

  return (
    <AppShell activeTab={activeTab} onTabChange={setActiveTab}>
      <div className="max-w-4xl mx-auto pb-20 md:pb-0">
        {renderContent()}
      </div>
    </AppShell>
  );
}
