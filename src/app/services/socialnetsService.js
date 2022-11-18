import { httpService } from "./httpService.js"

const socialnetsEndpoint = "socialnets/";

export const socialnetsService = {
    receiveAll: async() => {
        const { data } = httpService.receive(socialnetsEndpoint);
        return data;
    },
    receiveById: async id => {
        const { data } = httpService.receive(socialnetsEndpoint + id);
        return data;
    },
    create: async payload => {
        const { data } = httpService.create(socialnetsEndpoint, payload);
        return data;
    },
    update: async(id, payload) => {
        const { data } = httpService.update(socialnetsEndpoint + id, payload);
        return data;
    },
    remove: async id => {
        const { data } = httpService.remove(socialnetsEndpoint + id);
        return data;
    }
};
