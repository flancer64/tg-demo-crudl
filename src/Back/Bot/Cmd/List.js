/**
 * The handler for the 'list' command.
 */
export default class Demo_Crudl_Back_Bot_Cmd_List {
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
                const rs = await crud.readSet(trx, rdbPhone);
                await trx.commit();
                if (rs.length > 0) {
                    msg = 'Here is the list of phones:\n\n';
                    for (const one of rs) {
                        msg += `${one.id}: ${one.name} = ${one.phone}\n`;
                    }
                } else {
                    msg = 'No phones found.';
                }
                logger.info(`A total of ${rs.length} items has been listed.`);
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
