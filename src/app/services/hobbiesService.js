import { httpService } from "./httpService.js";

const hobbiesEndpoint = "hobbies/";

export const hobbiesService = {
    receiveAll: async() => {
        const { data } = httpService.receive(hobbiesEndpoint);
        return data;
    },
    receiveById: async id => {
        const { data } = httpService.receive(hobbiesEndpoint + id);
        return data;
    },
    create: async payload => {
        const { data } = httpService.create(hobbiesEndpoint, payload);
        return data;
    },
    update: async(id, payload) => {
        const { data } = httpService.update(hobbiesEndpoint + id, payload);
        return data;
    },
    remove: async id => {
        const { data } = httpService.remove(hobbiesEndpoint + id);
        return data;
    }
};
