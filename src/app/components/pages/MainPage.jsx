import React from 'react'

import ComponentContainer from '../common/componentContainer.jsx'

import TeammatesListPage from './TeammatesListPage.jsx'

const Main = () => {
	return (
		<main>

			<ComponentContainer>
				<TeammatesListPage />
			</ComponentContainer>

			<TeammatesListPage />

		</main>
	)
}

export default Main
