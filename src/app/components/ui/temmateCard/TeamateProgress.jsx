import PropTypes from 'prop-types'

const TeamateProgress = ({ HTML, CSS, JScript, React }) => {
	const technology = { HTML, CSS, JScript, React }
	const colours = {
		HTML: 'orange-500',
		CSS: 'blue-500',
		JScript: 'yellow-500',
		React: 'blue-300',
	}
	console.log(
		'🚀 ~ file: TeamateProgress.jsx ~ line 11 ~ TeamateProgress ~ colours',
		colours,
	)
	return (
		<div className='flex flex-col max-w-sm h-100 gap-1 bg-stone-800 p-2 text-white rounded-md'>
			<h2>Знание технологий</h2>
			{Object.entries(technology).map(([key, value]) => (
				<div
					key={'technology' + key}
					className={`flex place-content-between px-2 bg-gradient-to-l from-${colours[key]} gap-1 rounded-r-lg`}
					style={{ width: `${value}%` }}
				>
					<div>{key}</div>
					<div>{value + '%'}</div>
				</div>
			))}
		</div>
	)
}

TeamateProgress.defaultProps = {
	HTML: 0,
	CSS: 0,
	JScript: 0,
	React: 0,
}

TeamateProgress.propTypes = {
	CSS: PropTypes.number,
	HTML: PropTypes.number,
	JScript: PropTypes.number,
	React: PropTypes.number,
}

export default TeamateProgress
