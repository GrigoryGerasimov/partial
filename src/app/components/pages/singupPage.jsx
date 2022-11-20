import React, { useState, useEffect } from 'react'
import { NavLink } from 'react-router-dom'
import Button from '../common/Button'
import Card from '../common/Сard'
import { signupSchema } from '../../utils/yupSchemas'
import TextField from '../common/fields/TextField'

const SingupPage = () => {
	const [data, setData] = useState({
		userName: '',
		email: '',
		password: '',
	})

	const [errors, setErrors] = useState({})

	useEffect(() => {
		validate()
	}, [data])

	const validate = () => {
		signupSchema
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
		const isValid = validate()
		if (!isValid) return
		console.log(data)
	}

	return (
		<>
			<Card.Title>Sing Up</Card.Title>
			<form onSubmit={handleSubmit}>
				<TextField
					name='userName'
					label='Your Full Name'
					value={data.userName}
					onChange={handleChange}
					error={errors.userName}
				/>

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
					<Button>Sing Up</Button>
					<NavLink
						to='/auth/login'
						className='transition-all hover:text-red-400 hover:underline'
					>{`I have account`}</NavLink>
				</div>
			</form>
		</>
	)
}

export default SingupPage
