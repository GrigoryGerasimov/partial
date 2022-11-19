import config from '../../config.json'

export const teammates = [
	{
		_category: 'teammates',
		_id: 'mate1',
		firstName: 'Григорий',
		lastName: 'Герасимов',
		age: '33',
		team: 'Hackathon Team 5',
		position: 'Team Lead',
		intro: 'Полный список задач будет позднее',
		imgPath: `${config.unsplashEndpoint}photo-1570295999919-56ceb5ecca61`,
		hobbies: ['#webtech', '#webdes', '#mus', '#vid', '#cul', '#cyc', 'hik'],
		contacts: {
			linkedIn: {
				_id: '#linkedIn',
				urlPath: 'https://www.linkedin.com/in/john-doe',
			},
			tme: {
				_id: '#telegram',
				urlPath: '@JohnDoe',
			},
		},
	},
	{
		_category: 'teammates',
		_id: 'mate2',
		firstName: 'Роман',
		lastName: 'Василаки',
		age: '30',
		team: 'Hackathon Team 5',
		position: 'Tech Lead',
		intro: 'Полный список задач будет позднее',
		imgPath: `${config.unsplashEndpoint}photo-1485217988980-11786ced9454`,
		hobbies: ['#webtech', '#vid', '#cul', '#cyc'],
		contacts: {
			linkedIn: {
				_id: '#linkedIn',
				urlPath: 'https://www.linkedin.com/in/jane-doe',
			},
			tme: {
				_id: '#telegram',
				urlPath: '@JaneDoe',
			},
		},
	},
	{
		_category: 'teammates',
		_id: 'mate3',
		firstName: 'Станислав',
		lastName: 'Кадыков',
		age: '',
		team: 'Hackathon Team 5',
		position: 'Front-End Engineer',
		intro: 'Полный список задач будет позднее',
		imgPath: `${config.unsplashEndpoint}photo-1568602471122-7832951cc4c5`,
		hobbies: ['#webdes', '#mus', '#vid'],
		contacts: {
			linkedIn: {
				_id: '#linkedIn',
				urlPath: 'https://www.linkedin.com/in/mickey-ramirez',
			},
			tme: {
				_id: '#telegram',
				urlPath: '@MickeyRamirez',
			},
		},
	},
	{
		_category: 'teammates',
		_id: 'mate4',
		firstName: 'Артём',
		lastName: 'Кузнецов',
		age: '32',
		team: 'Hackathon Team 5',
		position: 'Front-End Engineer',
		intro: 'Полный список задач будет позднее',
		imgPath: `${config.unsplashEndpoint}photo-1482961674540-0b0e8363a005`,
		hobbies: ['#cul', '#cyc', 'hik'],
		contacts: {
			linkedIn: {
				_id: '#linkedIn',
				urlPath: 'https://www.linkedin.com/in/janusz-wasilewski',
			},
			tme: {
				_id: '#telegram',
				urlPath: '@JanuszWasilewski',
			},
		},
	},
]
