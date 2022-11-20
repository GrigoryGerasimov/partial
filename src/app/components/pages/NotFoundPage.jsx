import React from 'react'
import { useNavigate } from 'react-router-dom'
import { BigTitle } from '../ui/typography'
import Button from '../common/Button'

const NotFoundPage = () => {
	const navigate = useNavigate()

	return (
		<>
			<BigTitle>Oops! Page not found!</BigTitle>
			<Button
				func={() => navigate('/partial', { replace: true })}
				color='indigo-500'
				isRounded={true}
			>
				Вернуться назад
			</Button>
		</>
	)
}

export default NotFoundPage
