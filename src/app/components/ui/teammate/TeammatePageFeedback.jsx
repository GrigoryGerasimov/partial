import React from 'react'
import { FormLayout } from '../../common/forms/FormLayout.jsx'
import { FormBasicField } from '../../common/forms/FormBasicField.jsx'
import { FormTextareaField } from '../../common/forms/FormTextareaField.jsx'
import { useForm } from '../../../hooks/useForm.jsx'
import Button from '../../common/Button'
import PropTypes from 'prop-types'

const TeammatePageFeedback = ({ feedbackClass }) => {
	const { formData, errors, handleChange, handleSubmit, handleFormScroll } = useForm()

	return (
		<article className={feedbackClass}>
			<FormLayout onSubmit={handleSubmit}>
				<FormBasicField
					formEntityClassname='form-entity flex flex-row justify-between w-80'
					id='firstName'
					label='Имя'
					name='firstName'
					value={formData.firstName}
					placeholder='Иван'
					error={errors.firstName}
					onChange={handleChange}
					onKeyDown={handleFormScroll}
					autoFocus
				/>
				<FormBasicField
					formEntityClassname='form-entity flex flex-row justify-between border-1'
					id='lastName'
					label='Фамилия'
					name='lastName'
					value={formData.lastName}
					placeholder='Ледорубов'
					error={errors.lastName}
					onChange={handleChange}
					onKeyDown={handleFormScroll}
				/>
				<FormBasicField
					formEntityClassname='form-entity flex flex-row justify-between border-1'
					id='email'
					type='email'
					label='E-Mail'
					name='email'
					value={formData.email}
					placeholder='ivan.ledorubov@mail.test.ru'
					error={errors.email}
					onChange={handleChange}
					onKeyDown={handleFormScroll}
				/>
				<FormBasicField
					formEntityClassname='form-entity flex flex-row justify-between border-1'
					id='tel'
					type='tel'
					label='Телефон'
					name='tel'
					value={formData.tel}
					placeholder='8-XXX-XXX-XX-XX'
					error={errors.tel}
					onChange={handleChange}
					onKeyDown={handleFormScroll}
				/>
				<FormTextareaField
					formEntityClassname='form-entity flex flex-row justify-between border-1'
					id='msg'
					label='Сообщение'
					name='msg'
					value={formData.message}
					placeholder='Ваше сообщение...'
					error={errors.message}
					onChange={handleChange}
					onKeyDown={handleFormScroll}
				/>
				<Button type='submit'>Отправить</Button>
				<Button type='reset'>Очистить</Button>
			</FormLayout>
		</article>
	)
}

export default TeammatePageFeedback

TeammatePageFeedback.propTypes = {
	feedbackClass: PropTypes.string,
}
