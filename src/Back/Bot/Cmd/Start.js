/**
 * The handler for the 'start' command.
 */
export default class Demo_Crudl_Back_Bot_Cmd_Start {
    constructor() {
        return (ctx) => {
            ctx.reply('Welcome! You can start using the bot.');
        };
    }
}
