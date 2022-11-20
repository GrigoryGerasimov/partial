import React from 'react'
import { Badge } from '../../common/Badge.jsx'
import PropTypes from 'prop-types'

const TeammatePageInfo = ({ infoClass, data }) => {
	return (
		<div className={infoClass}>
			<div className='mb-2 p-2 border rounded-lg shadow-md text-center'>
				<span className='block mb-2 text-3xl font-bold'>Имя:</span>
				<span className='block text-2xl'>{`${data.firstName} ${data.lastName}`}</span>
			</div>
			<div className='mb-2 p-2 border rounded-lg shadow-md text-center'>
				<span className='block mb-2 text-3xl font-bold'>Возраст:</span>
				<span className='block text-2xl'>{data.age}</span>
			</div>
			<div className='mb-2 p-2 border rounded-lg shadow-md text-center'>
				<span className='block mb-2 text-3xl font-bold'>Должность:</span>
				<span className='block text-2xl'>{data.position}</span>
				{data.role === 'teamlead' && <Badge color='red' label='TL' />}
			</div>
			<div className='mb-2 p-2 border rounded-lg shadow-md text-center'>
				<span className='block mb-2 text-3xl font-bold'>Команда:</span>
				<span className='block text-2xl'>{data.team}</span>
			</div>
			<div className='mb-2 p-2 border rounded-lg shadow-md text-center'>
				<span className='block mb-2 text-3xl font-bold'>О себе:</span>
				<span className='block text-2xl'>{data.intro}</span>
			</div>
		</div>
	)
}

export default TeammatePageInfo

TeammatePageInfo.propTypes = {
	infoClass: PropTypes.string,
	data: PropTypes.object,
}
