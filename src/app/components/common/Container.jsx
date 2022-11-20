import React from 'react'
import PropTypes from 'prop-types'

const Container = ({ children }) => {
	return <div className='w-4/5 m-auto'>{children}</div>
}

Container.propTypes = {
	children: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.node), PropTypes.node]),
}

export default Container
