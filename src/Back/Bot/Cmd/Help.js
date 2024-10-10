/**
 * The handler for 'help' command.
 */
export default class Ns_App_Back_Bot_Cmd_Help {
    constructor() {
        return async (ctx) => {
            const from = ctx.message.from;
            const msgDef = `
This is a test bot for demo.

Available commands are:

/help - display this text. 
/settings - configure this bot. 
/start - start the bot. 
`;
            const msgRu = `
Это тестовый бот.

Доступные команды:

/help - вывести этот текст. 
/settings - настройка бота. 
/start - начало работы. 
`;
            const msg = (from.language_code === 'ru') ? msgRu : msgDef;
            // https://core.telegram.org/bots/api#sendmessage
            await ctx.reply(msg, {
                parse_mode: 'HTML',
            });
        };
    }
}
