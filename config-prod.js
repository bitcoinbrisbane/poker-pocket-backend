exports = module.exports = {
  isDev: false,
  logging: true,
  server: {
    secure: true, // wss
    port: 8001,
    host: '0.0.0.0'
  },
  sequelize: {
    logging: false,
  },
  postgreSql: {
    user: 'postgres',
    host: 'localhost',
    database: 'PokerPocket',
    password: 'rng4w4CWv6xVH85zCAYGXHsb', // Non sensitive password for development environment, replace with your own.
    port: 5432
  },
  common: {
    startGameTimeOut: 3000,     // 2000 stock
    startingRooms: 4,           // Default 4, How many rooms to create at start
    roomZeroBotCount: 3,
    roomOneBotCount: 1,
    roomTwoBotCount: 4,
    roomOthersBotCount: 0,      // For production set to 0
  },
  neuralNetwork: {
    learningRate: 0.3
  },
  games: {
    holdEm: {
      bot: {
        giveRealNames: true, // true => random from assets/names.txt, false => Bot<numbers>
        startMoney: 10000,
        turnTimes: [1000, 1500, 2000, 2500, 3000],
        minMoney: [
          50,     // Low bet game
          200,    // Medium bet game
          2000    // High bet game
        ],
        betAmounts: [
          [25, 35, 100, 500],         // Low bet game
          [125, 150, 200, 250],       // Medium bet game
          [1100, 1200, 1500, 2000]    // High bet game
        ]
      },
      holdEmGames: [
        {
          name: 'Texas Holdem with low bets',
          typeName: 'Low bets',
          max_seats: 6,
          minPlayers: 2,
          turnCountdown: 20,
          minBet: 10,
          afterRoundCountdown: 12
        },
        {
          name: 'Texas Holdem with medium bets',
          typeName: 'Medium bets',
          max_seats: 6,
          minPlayers: 2,
          turnCountdown: 20,
          minBet: 100,
          afterRoundCountdown: 12
        },
        {
          name: 'Texas Holdem with high bets',
          typeName: 'High bets',
          max_seats: 6,
          minPlayers: 2,
          turnCountdown: 20,
          minBet: 1000,
          afterRoundCountdown: 12
        }
      ],
    },
    fiveCardDraw: {},
    blackJack: {}
  }
};
