export const SAMPLE_TRADES: Trade[] = [
  {
    tradeId: '1',
    fromAddress: '0x742d35Cc6634C0532925a3b8D',
    toAddress: '0x833589fCD6eDb6E08f4c7C32D',
    amount: '1000',
    asset: 'USDC',
    timestamp: Date.now() - 3600000,
    transactionHash: '0x1234567890abcdef',
    userId: 'user1',
    type: 'buy',
    price: '1.00',
    pnl: '+2.5%',
    status: 'completed'
  },
  {
    tradeId: '2',
    fromAddress: '0x4200000000000000000000000',
    toAddress: '0x833589fCD6eDb6E08f4c7C32D',
    amount: '0.5',
    asset: 'ETH',
    timestamp: Date.now() - 7200000,
    transactionHash: '0xabcdef1234567890',
    userId: 'user2',
    type: 'sell',
    price: '2,450.00',
    pnl: '+15.2%',
    status: 'completed'
  }
];

export const SAMPLE_TRADE_IDEAS: TradeIdea[] = [
  {
    ideaId: '1',
    userId: 'user1',
    title: 'ETH Breakout Above $2,500',
    description: 'Technical analysis shows ETH forming a bullish flag pattern. Expecting breakout above $2,500 resistance with volume confirmation.',
    asset: 'ETH',
    sentiment: 'bullish',
    comments: [],
    upvotes: 24,
    downvotes: 3,
    timestamp: Date.now() - 1800000,
    tags: ['technical-analysis', 'breakout', 'eth'],
    targetPrice: '$2,650',
    timeframe: '1-2 weeks'
  },
  {
    ideaId: '2',
    userId: 'user2',
    title: 'Base Ecosystem Tokens Rally',
    description: 'With increasing TVL on Base, expecting native tokens to outperform. Focus on established protocols with strong fundamentals.',
    asset: 'BASE',
    sentiment: 'bullish',
    comments: [],
    upvotes: 18,
    downvotes: 1,
    timestamp: Date.now() - 3600000,
    tags: ['base', 'ecosystem', 'defi'],
    targetPrice: 'Various',
    timeframe: '2-4 weeks'
  }
];

export const SAMPLE_COMPETITIONS: Competition[] = [
  {
    competitionId: '1',
    title: 'Base Trading Championship',
    description: 'Compete with $10,000 virtual portfolio. Trade Base ecosystem tokens for maximum returns.',
    startTime: Date.now() + 86400000,
    endTime: Date.now() + 86400000 * 8,
    startingBalance: 10000,
    leaderboard: [],
    entryFee: 0.1,
    prizes: [
      { rank: 1, amount: 500, currency: 'USDC' },
      { rank: 2, amount: 300, currency: 'USDC' },
      { rank: 3, amount: 200, currency: 'USDC' }
    ],
    status: 'upcoming',
    participants: 0
  },
  {
    competitionId: '2',
    title: 'DeFi Masters Weekly',
    description: 'Weekly competition focusing on DeFi strategies. Show your yield farming and liquidity provision skills.',
    startTime: Date.now() - 86400000,
    endTime: Date.now() + 86400000 * 6,
    startingBalance: 5000,
    leaderboard: [
      {
        userId: 'user1',
        displayName: 'CryptoTrader',
        currentBalance: 5750,
        pnl: 750,
        pnlPercentage: 15.0,
        rank: 1,
        trades: 12
      },
      {
        userId: 'user2',
        displayName: 'DeFiMaster',
        currentBalance: 5420,
        pnl: 420,
        pnlPercentage: 8.4,
        rank: 2,
        trades: 8
      }
    ],
    entryFee: 0.05,
    prizes: [
      { rank: 1, amount: 200, currency: 'USDC' },
      { rank: 2, amount: 100, currency: 'USDC' },
      { rank: 3, amount: 50, currency: 'USDC' }
    ],
    status: 'active',
    participants: 156
  }
];

export const SAMPLE_LEARNING_PATHS: LearningPath[] = [
  {
    pathId: '1',
    title: 'DeFi Fundamentals',
    description: 'Learn the basics of decentralized finance, from AMMs to yield farming.',
    modules: [
      {
        moduleId: '1',
        title: 'Introduction to DeFi',
        content: 'Understanding decentralized finance and its key components.',
        tags: ['defi', 'basics'],
        difficulty: 'beginner',
        estimatedTime: 15,
        pathId: '1'
      },
      {
        moduleId: '2',
        title: 'Automated Market Makers',
        content: 'How AMMs work and their role in DeFi ecosystems.',
        tags: ['amm', 'liquidity'],
        difficulty: 'beginner',
        estimatedTime: 20,
        pathId: '1'
      }
    ],
    difficulty: 'beginner',
    totalTime: 35,
    progress: 0
  }
];

export const NAVIGATION_ITEMS = [
  { id: 'feed', label: 'Feed', icon: 'Home' },
  { id: 'ideas', label: 'Ideas', icon: 'Lightbulb' },
  { id: 'learn', label: 'Learn', icon: 'BookOpen' },
  { id: 'compete', label: 'Compete', icon: 'Trophy' },
  { id: 'profile', label: 'Profile', icon: 'User' }
];
