/**
 * The handler for 'start' command.
 */
export default class Ns_App_Back_Bot_Cmd_Start {
    constructor() {
        return async (ctx) => {
            const from = ctx.message.from;
            const msgDef = `
START
`;
            const msgRu = `
Начало
`;
            const msg = (from.language_code === 'ru') ? msgRu : msgDef;
            // https://core.telegram.org/bots/api#sendmessage
            await ctx.reply(msg, {
                parse_mode: 'MarkdownV2',
            });
        };
    }
}
