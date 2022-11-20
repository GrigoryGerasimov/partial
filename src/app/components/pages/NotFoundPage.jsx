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
				func={() => navigate('/', { replace: true })}
				color='indigo-500'
				name='Вернуться назад'
				isRounded={true}
			/>
		</>

	)
}

export default NotFoundPage
