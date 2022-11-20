import React from 'react'
import { useNavigate } from 'react-router-dom'
import { BigTitle } from '../ui/typography'
import Button from '../common/Button'

const NotFoundPage = () => {
	const navigate = useNavigate()

	return (
		<div className='flex gap-10 flex-col h-80'>
			<BigTitle>Oops! Page not found :(</BigTitle>
			<div className='max-w-sm flex m-auto'>
				<Button onClick={() => navigate('/', { replace: true })}>
					Back to Main Page
				</Button>
			</div>
		</div>
	)
}

export default NotFoundPage
