import React from 'react'
import { SmallTitle } from '../ui/typography'
import PropTypes from 'prop-types'

export const Badge = ({ color, label }) => {
    const badgeColor = `bg-${color}-500`
    const textColor = `text-${color === 'yellow' || color === 'blue' || color === 'white' ? 'black' : 'white'}`
    return (
        <div className={`w-max ${badgeColor} p-2 ${textColor} rounded-md`}>
            <SmallTitle>
                {label}
            </SmallTitle>
        </div>
    )
}

Badge.propTypes = {
    color: PropTypes.string,
    label: PropTypes.string,
}
