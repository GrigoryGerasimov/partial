import React from 'react'
import PropTypes from 'prop-types'
import { Badge } from '../../common/Badge'

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
				<Badge data={data} />
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
