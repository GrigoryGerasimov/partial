import * as yup from 'yup'

export const loginSchema = yup.object().shape({
	password: yup.string().required('Поле обезательно для заполнения'),
	email: yup
		.string()
		.required('Поле обезательно для заполнения')
		.email('email введён некоректно'),
})

export const signupSchema = yup.object().shape({
	password: yup
		.string()
		.required('Поле обезательно для заполнения')
		.matches(/^[^а-яА-Я]*$/g, 'Пароль должен содержать только латинские буквы')
		.matches(/[A-Z]/g, 'Пароль должен содержать 1 заглавную букву')
		.matches(/[0-9]+/g, 'Пароль должен содержать 1 цифру')
		.matches(/^[^ ]*$/g, "Пароль не должен содержать символ 'пробел' ")
		.min(8, 'Пароль должен состоять из 8 символов'),
	email: yup
		.string()
		.required('Поле обезательно для заполнения')
		.email('email введёт некоректно'),
	userName: yup
		.string()
		.required('Поле обезательно для заполнения')
		.min(5, 'Имя пользователя должно состоять хотя бы из 5 символов'),
})
