export interface User {
  userId: string;
  farcasterUsername?: string;
  connectedWalletAddress?: string;
  followingPeers: string[];
  followedPeers: string[];
  achievements: Achievement[];
  avatar?: string;
  displayName?: string;
}

export interface Trade {
  tradeId: string;
  fromAddress: string;
  toAddress: string;
  amount: string;
  asset: string;
  timestamp: number;
  transactionHash: string;
  userId: string;
  type: 'buy' | 'sell';
  price?: string;
  pnl?: string;
  status: 'pending' | 'completed' | 'failed';
}

export interface TradeIdea {
  ideaId: string;
  userId: string;
  title: string;
  description: string;
  asset: string;
  sentiment: 'bullish' | 'bearish' | 'neutral';
  comments: Comment[];
  upvotes: number;
  downvotes: number;
  timestamp: number;
  tags: string[];
  targetPrice?: string;
  timeframe?: string;
}

export interface Comment {
  commentId: string;
  userId: string;
  content: string;
  timestamp: number;
  upvotes: number;
}

export interface LearningModule {
  moduleId: string;
  title: string;
  content: string;
  tags: string[];
  difficulty: 'beginner' | 'intermediate' | 'advanced';
  estimatedTime: number; // in minutes
  pathId?: string;
  completed?: boolean;
}

export interface LearningPath {
  pathId: string;
  title: string;
  description: string;
  modules: LearningModule[];
  difficulty: 'beginner' | 'intermediate' | 'advanced';
  totalTime: number;
  progress?: number;
}

export interface Competition {
  competitionId: string;
  title: string;
  description: string;
  startTime: number;
  endTime: number;
  startingBalance: number;
  leaderboard: LeaderboardEntry[];
  entryFee?: number;
  prizes: Prize[];
  status: 'upcoming' | 'active' | 'completed';
  participants: number;
}

export interface LeaderboardEntry {
  userId: string;
  displayName: string;
  currentBalance: number;
  pnl: number;
  pnlPercentage: number;
  rank: number;
  trades: number;
}

export interface Prize {
  rank: number;
  amount: number;
  currency: string;
}

export interface Achievement {
  achievementId: string;
  title: string;
  description: string;
  icon: string;
  unlockedAt: number;
}

export interface ApiResponse<T> {
  data: T;
  success: boolean;
  message?: string;
  error?: string;
}
