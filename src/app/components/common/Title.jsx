import React from 'react'
import PropTypes from 'prop-types'

const Title = ({ title }) => {
	return (
		<div className='my-[50px] text-slate-900 text-center text-6xl capitalize'>
			<div>{title}</div>
		</div>
	)
}

Title.propTypes = {
	title: PropTypes.string,
}

export default Title
