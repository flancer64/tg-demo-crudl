/**
 * The handler for the 'delete' command.
 */
export default class Demo_Crudl_Back_Bot_Cmd_Delete {
    /**
     * @param {TeqFw_Core_Shared_Api_Logger} logger -  instance
     * @param {TeqFw_Db_Back_RDb_IConnect} conn
     * @param {TeqFw_Db_Back_Api_RDb_CrudEngine} crud
     * @param {Demo_Crudl_Back_Store_RDb_Schema_Phone} rdbPhone
     */
    constructor(
        {
            TeqFw_Core_Shared_Api_Logger$$: logger,
            TeqFw_Db_Back_RDb_IConnect$: conn,
            TeqFw_Db_Back_Api_RDb_CrudEngine$: crud,
            Demo_Crudl_Back_Store_RDb_Schema_Phone$: rdbPhone,
        }
    ) {
        return async (ctx) => {
            let msg = 'The command has failed.';
            const from = ctx.message.from;
            logger.info(`Command has been received from user '${from.username}' (id:${from.id})`);
            const trx = await conn.startTransaction();
            try {
                const parts = ctx.message.text.split(' ');
                const id = parts[1];
                const deleted = await crud.deleteOne(trx, rdbPhone, id);
                await trx.commit();
                if (deleted) {
                    msg = `Record #${id} was deleted.`;
                } else {
                    msg = `Record #${id} was not deleted.`;
                }
                logger.info(msg);
            } catch (e) {
                await trx.rollback();
                msg = e.toString();
                logger.error(msg);
            }
            // https://core.telegram.org/bots/api#sendmessage
            await ctx.reply(msg, {
                parse_mode: 'HTML',
            });
        };
    }
}
