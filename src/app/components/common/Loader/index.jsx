import React from 'react'

const Loader = () => {
	return (
		<div>
			{[{}, {}, {}].map((_, index) => (
				<div
					key={index}
					className='inline-block w-2.5 h-2.5 rounded-full m-2.5 bg-red-100 bg-opacity-60 animate-flickerlights'
				></div>
			))}
		</div>
	)
}

export default Loader
