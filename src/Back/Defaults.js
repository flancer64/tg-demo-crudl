/**
 * Plugin constants (hardcoded configuration) for backend code.
 */
export default class Ns_App_Back_Defaults {
    NAME = '@flancer32/repo-tmpl-tg-bot';

    /* The bot command registry. */
    CMD = {
        HELP: 'help',
        SETTINGS: 'settings',
        START: 'start',
    };

    
    constructor() {
        Object.freeze(this);
    }
}
