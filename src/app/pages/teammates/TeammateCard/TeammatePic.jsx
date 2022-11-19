import React from 'react'
import PropTypes from 'prop-types'

const TeammatePic = ({ imgClass, imgPath, imgParams }) => {
	return (
		<img className={imgClass} src={`${imgPath}${imgParams}`} alt='teammate-profile-pic' />
	)
}

export default React.memo(TeammatePic)

TeammatePic.defaultProps = {
	imgParams: '',
}

TeammatePic.propTypes = {
	imgClass: PropTypes.string,
	imgPath: PropTypes.string,
	imgParams: PropTypes.string,
}
