import * as constants from '../rest/constants.js';

function logger(log, type = constants.TYPE_LOG) {
    console[type](log);
}

export default logger;
