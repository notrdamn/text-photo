const { Bot, InlineKeyboard } = require('grammy');

// Замените 'YOUR_BOT_TOKEN' на ваш токен 8032424784:AAFhr-DUhDx6aUnS4Q8i1vD6SZC3LCHm4GY
const bot = new Bot('8032424784:AAFhr-DUhDx6aUnS4Q8i1vD6SZC3LCHm4GY');

// Команда /start
bot.command('start', async (ctx) => {
    const keyboard = new InlineKeyboard()
        .text('Фото котика 🐱', 'cat_photo')
        .text('Мотивация 💪', 'motivation')
        .row()
        .text('Помощь ℹ️', 'help');

    await ctx.reply('Выберите действие:', { reply_markup: keyboard });
});

// Обработка нажатий кнопок
bot.on('callback_query:data', async (ctx) => {
    const action = ctx.callbackQuery.data;

    if (action === 'cat_photo') {
        await ctx.replyWithPhoto('https://cataas.com/cat', {
            caption: 'Милый котик для вас! 😊'
        });
    } 
    else if (action === 'motivation') {
        await ctx.reply('*Не останавливайся!* Каждый маленький шаг приближает тебя к большой цели 🌟', {
            parse_mode: 'Markdown'
        });
    }
    else if (action === 'help') {
        await ctx.reply('Просто нажмите одну из кнопок:\n\n🐱 - Получить фото котика\n💪 - Мотивирующий текст');
    }

    await ctx.answerCallbackQuery();
});

// Запуск бота
bot.start();
console.log('Бот с фото и текстом запущен! 🚀');