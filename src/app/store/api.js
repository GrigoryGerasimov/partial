import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import config from '../../config.json'

export const mockApi = createApi({
	reducerPath: 'mockApi',
	baseQuery: fetchBaseQuery({
		baseUrl: config.baseApiEndpoint,
	}),
	endpoints: (build) => ({
		receiveTeammates: build.query({
			query: () => ({
				url: 'teammates',
			}),
		}),
		receiveTeammatesById: build.query({
			query: (id) => ({
				url: `teammates/${id}`,
			}),
		}),
		receiveHobbies: build.query({
			query: () => ({
				url: 'hobbies',
			}),
		}),
		receiveSocialnets: build.query({
			query: () => ({
				url: 'socialnets',
			}),
		}),
	}),
})

export const {
	useReceiveTeammatesQuery,
	useReceiveTeammatesByIdQuery,
	useReceiveHobbiesQuery,
	useReceiveSocialnetsQuery,
} = mockApi
