import React, { useState, useEffect } from 'react'
import { NavLink } from 'react-router-dom'
import Button from '../../components/common/Button'
import Card from '../common/Card'
import { loginSchema } from '../../utils/yupSchemas'
import TextField from '../common/fields/TextField'

const LoginPage = () => {
	const [data, setData] = useState({
		email: '',
		password: '',
	})
	const [errors, setErrors] = useState({})

	useEffect(() => {
		validate()
	}, [data])

	const validate = () => {
		loginSchema
			.validate(data)
			.then(() => setErrors({}))
			.catch((error) => setErrors({ [error.path]: error.message }))
		return Object.keys(errors).length === 0
	}

	const handleChange = (target) => {
		setData((prevStare) => ({
			...prevStare,
			[target.name]: target.value,
		}))
	}

	const handleSubmit = (e) => {
		e.preventDefault()
	}
	return (
		<>
			<Card.Title>Log In</Card.Title>
			<form onSubmit={handleSubmit}>
				<TextField
					name='email'
					label='e-mail'
					value={data.email}
					onChange={handleChange}
					error={errors.email}
				/>

				<TextField
					name='password'
					label='password'
					type='password'
					value={data.password}
					onChange={handleChange}
					error={errors.password}
				/>
				<div className='text-center mt-5'>
					<Button>Log In</Button>
					<NavLink
						to='auth/signup'
						className='transition-all hover:text-red-400 hover:underline'
					>{`I don't have account`}</NavLink>
				</div>
			</form>
		</>
	)
}

export default LoginPage
