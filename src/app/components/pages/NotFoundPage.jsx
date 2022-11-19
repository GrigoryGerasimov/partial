import React from 'react'
import { useNavigate } from 'react-router-dom'
import { BigTitle } from '../ui/typography'
import Button from '../common/Button'

const NotFoundPage = () => {
	const navigate = useNavigate()

	return (
		<>
			<BigTitle>Oops! Page not found :(</BigTitle>
			<Button onClick={() => navigate('/', { replace: true })}>Back to Main Page</Button>
		</>
	)
}

export default NotFoundPage
