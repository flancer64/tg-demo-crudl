/**
 * The handler for 'message' filter.
 */
export default class Ns_App_Back_Bot_Filter_Message {
    /**
     * The factory function to inject the deps and create the handler.
     *
     * @param {TeqFw_Core_Shared_Api_Logger} logger -  instance
     *
     * @return {(function(*): Promise<void>)|*}
     */
    constructor(
        {
            TeqFw_Core_Shared_Api_Logger$$: logger,
        }
    ) {
        return async (ctx) => {
            ctx.reply('An unknown message has been received.').catch(logger.exception);
        };
    }
}
