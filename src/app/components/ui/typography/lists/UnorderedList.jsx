import React from 'react'
import { SmallTitle } from '../titles/SmallTitle.jsx'
import PropTypes from 'prop-types'

export const UnorderedList = ({ listClass, children }) => {
	if (!React.Children.count(children)) return <SmallTitle>List is empty</SmallTitle>
	return <ul className={listClass}>{children}</ul>
}

export default UnorderedList

UnorderedList.propTypes = {
	listClass: PropTypes.string,
	children: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.node), PropTypes.node]),
}
