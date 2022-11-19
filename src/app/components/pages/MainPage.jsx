import React from 'react'
// import { Navigate } from "react-router-dom";
import Button from '../common/Button'
import { useMockapiService } from '../../hooks/useMockapiService.jsx'

const Main = () => {
	const { handleUploadMockData, progressInPercents, progressStatus } = useMockapiService()

	return (
		<main className='grid grid-cols-3 grid-rows-1 gap-y-10 gap-x-16 justify-center items-baseline w-full h-full p-12'>
			<Button onClick={handleUploadMockData}>Init</Button>
			<div>
				<span>Процесс загрузки данных: </span>
				<span>{progressInPercents}</span>
			</div>
			<div>
				<span>Статус: </span>
				<span>{progressStatus}</span>
			</div>
			{/* <Navigate to="teammates"/> */}
		</main>
	)
}

export default Main
