/**
 * The codifier for bot commands.
 */
const Demo_Crudl_Back_Enum_Bot_Command = {
    CREATE: 'create', // "name" "phone"
    DELETE: 'delete', // "id"
    HELP: 'help',
    LIST: 'list',
    READ: 'read', // "id"
    SETTINGS: 'settings',
    START: 'start',
    UPDATE: 'update', // "id" "new_name" "new_phone"
};

Object.freeze(Demo_Crudl_Back_Enum_Bot_Command);
export default Demo_Crudl_Back_Enum_Bot_Command;
