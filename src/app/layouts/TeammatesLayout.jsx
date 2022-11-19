import React from 'react'
import { Outlet } from 'react-router-dom'
import ComponentContainer from '../components/common/componentContainer'

const Teammates = () => {
	return (
		<ComponentContainer>
			<Outlet />
		</ComponentContainer>
	)
}

export default Teammates
