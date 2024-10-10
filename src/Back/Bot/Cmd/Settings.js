/**
 * The handler for 'settings' command.
 */
export default class Ns_App_Back_Bot_Cmd_Settings {
    constructor() {
        return async (ctx) => {
            const from = ctx.message.from;
            const msgDef = `
SETTINGS
`;
            const msgRu = `
Настройки 
`;
            const msg = (from.language_code === 'ru') ? msgRu : msgDef;
            // https://core.telegram.org/bots/api#sendmessage
            await ctx.reply(msg, {
                parse_mode: 'MarkdownV2',
            });
        };
    }
}
