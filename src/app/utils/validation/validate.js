import { validationRules } from "./validationRules.js";

export const validate = (data, config) => {
    const error = {};
    for (const name in data) {
        for (const rule in config[name]) {
            const { message, param } = config[name][rule];
            const isValid = validationRules[rule](data[name], param);
            if (!isValid) {
                error[name] = message;
                break;
            }
        }
    }
    return error;
};
