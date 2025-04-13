const mineflayer = require('mineflayer')

const bot = mineflayer.createBot({
  host: process.env.SERVER_HOST || 'PROONLYSERVER.aternos.me',
  port: parseInt(process.env.SERVER_PORT || '11913'),
  username: process.env.BOT_USERNAME || 'bot091',
  version: process.env.VERSION || '1.20.1'
})

bot.on('spawn', () => {
  console.log('✅ Bot is online!')
})

bot.on('end', () => {
  console.log('❌ Bot disconnected, reconnecting...')
  setTimeout(() => {
    process.exit()
  }, 3000)
})
