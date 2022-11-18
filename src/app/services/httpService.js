import axios from "axios";
import configFile from "../../config.json";
import { loggingService } from "./loggingService.js";

const http = axios.create({
    timeout: 10000,
    baseURL: configFile.baseApiEndpoint
});

http.interceptors.request.use(config => {
    if (configFile.isFireBase) {
        config.url = `${/\//g.test(config.url) ? config.url.slice(0, -1) : config.url}.json`;
    }
    return config;
}, error => Promise.reject(error));

http.interceptors.response.use(res => {
    res.data = !Array.isArray(res.data) && typeof res.data === "object" ? Object.values(res.data) : res.data;
    return res;
}, error => {
    if (!error.response && error.response.status >= 500) {
        loggingService.log();
    }
    return Promise.reject(error);
});

export const httpService = {
    receive: http.get,
    create: http.post,
    update: http.put,
    fix: http.patch,
    remove: http.delete
};
