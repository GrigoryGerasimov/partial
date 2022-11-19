import { httpService } from './httpService.js'

const teammatesEndpoint = 'teammates/'

export const teammatesService = {
	receiveAll: async () => {
		const { data } = await httpService.receive(teammatesEndpoint)
		return data
	},
	receiveById: async (id) => {
		const { data } = await httpService.receive(teammatesEndpoint + id)
		return data
	},
	create: async (payload) => {
		const { data } = await httpService.create(teammatesEndpoint, payload)
		return data
	},
	update: async (id, payload) => {
		const { data } = await httpService.update(teammatesEndpoint + id, payload)
		return data
	},
	remove: async (id) => {
		const { data } = await httpService.remove(teammatesEndpoint + id)
		return data
	},
}
