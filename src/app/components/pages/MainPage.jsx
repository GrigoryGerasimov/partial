import React from 'react'
// import Button from '../common/Button'
// import { useMockapiService } from '../../hooks/useMockapiService.jsx'
import TeammatesListPage from './TeammatesListPage.jsx'

const Main = () => {
	// const { handleUploadMockData, progressInPercents, progressStatus } = useMockapiService()

	return (
		<main>
			{/* <Button onClick={handleUploadMockData}>Init</Button>
			 <div>
				<span>Процесс загрузки данных: </span>
				<span>{progressInPercents}</span>
			 </div>
			 <div>
				<span>Статус: </span>
				<span>{progressStatus}</span>
			 </div> */}
			<TeammatesListPage />
		</main>
	)
}

export default Main
