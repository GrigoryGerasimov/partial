export const validationRules = {
    isRequired: data => data.trim(),
    hasValidLength: (data, param) => data.length > param,
    isEmailValid: data => /^[0-9a-zA-Z-._]+@[0-9a-zA-Z-._]+\.[0-9a-zA-Z]+$/g.test(data),
    isPhoneValid: data => /^8-\d{3}-\d{3}-\d{2}-\d{2}$/g.test(data)
};
