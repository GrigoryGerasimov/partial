import React from 'react'

import ComponentContainer from '../common/Container.jsx'

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
