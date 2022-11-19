import React, { useState, useEffect, useContext, useMemo } from 'react'
import { httpService } from '../services/httpService.js'
import { teammates } from '../mockapi/teammates.js'
import { hobbies } from '../mockapi/hobbies.js'
import { socialnets } from '../mockapi/socialnets.js'
import config from '../../config.json'
import PropTypes from 'prop-types'
import { toast } from 'react-toastify'

const MockapiServiceContext = React.createContext()

export const remove_useMockapiService = () => useContext(MockapiServiceContext)

const progressConsts = {
	IDLE: 'Загрузка ещё не началась',
	WIP: 'Загрузка в процессе',
	SUCCESS: 'Готово',
	FAIL: 'Завершилось с ошибкой',
}

export const MockapiServiceProvider = ({ children }) => {
	const [error, setError] = useState(null)
	const [count, setCount] = useState(0)
	const [progressInPercents, setProgressInPercents] = useState(0)
	const [progressStatus, setProgressStatus] = useState(progressConsts.IDLE)
	const overallCount = teammates.length + hobbies.length + socialnets.length

	const errorCatcher = (error) => {
		if (error.response.data) {
			const { message } = error.response.data
			setError(message)
		}
		setError(error)
		setProgressStatus(progressConsts.FAIL)
	}

	useEffect(() => {
		toast.error(error)
		setError(null)
	}, [error])

	const incrementCount = () => setCount((prevCount) => prevCount + 1)

	const uploadMockData = async (payload) => {
		for (const payloadItem of payload) {
			await httpService.create(
				config.baseApiEndpoint + payloadItem._category + '/',
				payloadItem,
			)
			incrementCount()
		}
	}

	const handleUploadMockData = async () => {
		try {
			await uploadMockData(teammates)
			await uploadMockData(hobbies)
			await uploadMockData(socialnets)
		} catch (error) {
			errorCatcher(error)
		}
	}

	const updateProgress = () => {
		const newProgressInPercentage = Math.floor((count / overallCount) * 100)
		setProgressInPercents(newProgressInPercentage)

		if (newProgressInPercentage > 0 && newProgressInPercentage < 100) {
			setProgressStatus(progressConsts.WIP)
		} else if (newProgressInPercentage === 100) {
			setProgressStatus(progressConsts.SUCCESS)
		}
	}

	useEffect(() => {
		updateProgress()
	}, [count])

	return (
		<MockapiServiceContext.Provider
			value={useMemo(
				() => ({
					handleUploadMockData,
					progressInPercents,
					progressStatus,
				}),
				[handleUploadMockData, progressInPercents, progressStatus],
			)}
		>
			{children}
		</MockapiServiceContext.Provider>
	)
}

MockapiServiceProvider.propTypes = {
	children: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.node), PropTypes.node]),
}
