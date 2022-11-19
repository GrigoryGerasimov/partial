import React, { useState, useContext, useMemo, useCallback } from 'react'
// import { validationConfig } from "../pages/teammates/TeammatePage/validationConfig.js";
import PropTypes from 'prop-types'

const FormContext = React.createContext()

export const useForm = () => useContext(FormContext)

export const FormProvider = ({ children }) => {
	const [formData, setFormData] = useState({})
	const [errors] = useState({})

	// const checkValidation = useCallback((data, config) => {
	//     const error = validate(data, config);
	//     setErrors(error);
	// }, [formData, validationConfig]);

	// useEffect(() => {
	//     if (Object.keys(formData)) {
	//         checkValidation(formData, validationConfig);
	//     }
	// }, [checkValidation]);

	const handleChange = useCallback(
		({ target }) => {
			const { name, value } = target
			setFormData((prevData) => ({
				...prevData,
				[name]: value,
			}))
		},
		[formData],
	)

	const handleSubmit = useCallback(
		(evt) => {
			evt.preventDefault()
			console.log(formData)
		},
		[formData],
	)

	const handleFormScroll = useCallback((evt) => {
		if (evt.keyCode === 13) {
			evt.preventDefault()
			const { form } = evt.target
			const index = Array.prototype.indexOf.call(form, evt.target)
			form.elements[index + 1].focus()
		}
	}, [])

	return (
		<FormContext.Provider
			value={useMemo(
				() => ({
					formData,
					errors,
					handleChange,
					handleSubmit,
					handleFormScroll,
				}),
				[],
			)}
		>
			{children}
		</FormContext.Provider>
	)
}

FormProvider.propTypes = {
	children: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.node), PropTypes.node]),
}
