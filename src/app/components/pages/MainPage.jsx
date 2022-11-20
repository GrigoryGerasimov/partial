import React from 'react'
import { Navigate } from 'react-router-dom'
import ComponentContainer from '../common/Container.jsx'

const Main = () => {
	return (
		<main>
			<ComponentContainer>
				<Navigate to='teammates'/>
			</ComponentContainer>
		</main>
	)
}

export default Main
