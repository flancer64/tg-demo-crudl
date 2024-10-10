/**
 * Metadata for RDB entity: the visit.
 * @namespace Demo_Crudl_Back_Store_RDb_Schema_Phone
 */
// MODULE'S VARS 
/**
 * Path to the entity in plugin's DEM.
 * @type {string}
 */
const ENTITY = '/phone';

/**
 * @memberOf Demo_Crudl_Back_Store_RDb_Schema_Phone
 * @type {Object}
 */
const ATTR = {
    DATE_CREATED: 'date_created',
    ID: 'id',
    NAME: 'name',
    PHONE: 'phone',
};
Object.freeze(ATTR);

// MODULE'S CLASSES
/**
 * @memberOf Demo_Crudl_Back_Store_RDb_Schema_Phone
 */
class Dto {
    /**
     * @type {Date}
     */
    date_created;
    /**
     * @type {number}
     */
    id;
    /**
     * @type {string}
     */
    name;
    /**
     * @type {string}
     */
    phone;
}

// noinspection JSClosureCompilerSyntax
/**
 * @implements TeqFw_Db_Back_RDb_Meta_IEntity
 */
export default class Demo_Crudl_Back_Store_RDb_Schema_Phone {
    /**
     * @param {Demo_Crudl_Back_Defaults} DEF
     * @param {TeqFw_Db_Back_RDb_Schema_EntityBase} base
     * @param {TeqFw_Core_Shared_Util_Cast} cast
     */
    constructor(
        {
            Demo_Crudl_Back_Defaults$: DEF,
            TeqFw_Db_Back_RDb_Schema_EntityBase$: base,
            TeqFw_Core_Shared_Util_Cast$: cast,
        }
    ) {
        // INSTANCE METHODS
        /**
         * @param {Demo_Crudl_Back_Store_RDb_Schema_Phone.Dto} [data]
         * @return {Demo_Crudl_Back_Store_RDb_Schema_Phone.Dto}
         */
        this.createDto = function (data) {
            const res = new Dto();
            res.date_created = cast.date(data?.date_created);
            res.id = cast.int(data?.id);
            res.name = cast.string(data?.name);
            return res;
        };

        /**
         * Set JSDoc return type, real code is in `TeqFw_Db_Back_RDb_Schema_EntityBase`.
         * @return {typeof Demo_Crudl_Back_Store_RDb_Schema_Phone.ATTR}
         */
        this.getAttributes = function () {};

        // MAIN
        return base.create(this,
            `${DEF.NAME}${ENTITY}`,
            ATTR,
            [ATTR.ID],
            Dto
        );
    }
}
