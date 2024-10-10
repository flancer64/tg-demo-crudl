/**
 * The handler for the 'help' command.
 */
export default class Demo_Crudl_Back_Bot_Cmd_Help {
    /**
     * @param {typeof Demo_Crudl_Back_Enum_Bot_Command} CMD
     */
    constructor(
        {
            Demo_Crudl_Back_Enum_Bot_Command$: CMD,
        }
    ) {
        return async (ctx) => {
            const msg = `
Available commands:
<b>/${CMD.CREATE}</b> - Create a new phone record (/create name phone).
<b>/${CMD.DELETE}</b> - Delete phone record (/delete id).
<b>/${CMD.HELP}</b> - Display this help message.
<b>/${CMD.LIST}</b> - List all phone records.
<b>/${CMD.READ}</b> - Read phone record (/read id).
<b>/${CMD.SETTINGS}</b> - Adjust your bot settings.
<b>/${CMD.START}</b> - Start interacting with the bot.
<b>/${CMD.UPDATE}</b> - Update phone record (/update id new_name new_phone).
`;
            ctx.reply(msg, {
                parse_mode: 'HTML',
            });
        };
    }
}
