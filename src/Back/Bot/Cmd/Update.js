/**
 * The handler for the 'update' command.
 */
export default class Demo_Crudl_Back_Bot_Cmd_Update {
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
                const dto = rdbPhone.createDto();
                dto.id = parts[1];
                dto.name = parts[2];
                dto.phone = parts[3];
                const updated = await crud.updateOne(trx, rdbPhone, dto);
                await trx.commit();
                if (updated) {
                    msg = `Record #${dto.id} was updated.`;
                } else {
                    msg = `Record #${dto.id} was not updated.`;
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
