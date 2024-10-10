/**
 * Display the messages about the processing of an API request.
 */
// IMPORTS

// CLASSES
/**
 * @implements {Telegram_Bot_Back_Api_Setup}
 */
export default class Demo_Crudl_Back_Bot_Setup {
    /**
     * @param {TeqFw_Core_Shared_Api_Logger} logger -  instance
     * @param {Demo_Crudl_Back_Bot_Cmd_Create} cmdCreate
     * @param {Demo_Crudl_Back_Bot_Cmd_Delete} cmdDelete
     * @param {Demo_Crudl_Back_Bot_Cmd_Help} cmdHelp
     * @param {Demo_Crudl_Back_Bot_Cmd_List} cmdList
     * @param {Demo_Crudl_Back_Bot_Cmd_Read} cmdRead
     * @param {Demo_Crudl_Back_Bot_Cmd_Settings} cmdSettings
     * @param {Demo_Crudl_Back_Bot_Cmd_Start} cmdStart
     * @param {Demo_Crudl_Back_Bot_Cmd_Update} cmdUpdate
     * @param {Demo_Crudl_Back_Bot_Filter_Message} filterMessage
     * @param {typeof Demo_Crudl_Back_Enum_Bot_Command} CMD
     */
    constructor(
        {
            TeqFw_Core_Shared_Api_Logger$$: logger,
            Demo_Crudl_Back_Bot_Cmd_Create$: cmdCreate,
            Demo_Crudl_Back_Bot_Cmd_Delete$: cmdDelete,
            Demo_Crudl_Back_Bot_Cmd_Help$: cmdHelp,
            Demo_Crudl_Back_Bot_Cmd_List$: cmdList,
            Demo_Crudl_Back_Bot_Cmd_Read$: cmdRead,
            Demo_Crudl_Back_Bot_Cmd_Settings$: cmdSettings,
            Demo_Crudl_Back_Bot_Cmd_Start$: cmdStart,
            Demo_Crudl_Back_Bot_Cmd_Update$: cmdUpdate,
            Demo_Crudl_Back_Bot_Filter_Message$: filterMessage,
            Demo_Crudl_Back_Enum_Bot_Command$: CMD,
        }
    ) {
        // VARS

        // INSTANCE METHODS
        this.commands = async function (bot) {
            bot.api.setMyCommands([
                {command: CMD.CREATE, description: 'Create a new phone record.'},
                {command: CMD.DELETE, description: 'Delete phone record.'},
                {command: CMD.HELP, description: 'Get help.'},
                {command: CMD.LIST, description: 'List all phone records.'},
                {command: CMD.READ, description: 'Read phone details.'},
                {command: CMD.SETTINGS, description: 'Configure bot settings.'},
                {command: CMD.START, description: 'Start using the bot.'},
                {command: CMD.UPDATE, description: 'Update phone record.'},
            ]);
            logger.info(`A total of ${Object.keys(CMD).length} commands have been set for the bot.`);
            return bot;
        };

        this.handlers = function (bot) {
            bot.command(CMD.CREATE, cmdCreate);
            bot.command(CMD.DELETE, cmdDelete);
            bot.command(CMD.HELP, cmdHelp);
            bot.command(CMD.LIST, cmdList);
            bot.command(CMD.READ, cmdRead);
            bot.command(CMD.SETTINGS, cmdSettings);
            bot.command(CMD.START, cmdStart);
            bot.command(CMD.UPDATE, cmdUpdate);
            bot.on('message', filterMessage);
            return bot;
        };
    }
}
