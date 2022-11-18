export const validationConfig = {
    firstName: {
        isRequired: {
            message: "Поле обязательно для заполнения"
        },
        hasValidLength: {
            message: "Поле должно содержать более 1 символа",
            param: 1
        }
    },
    lastName: {
        isRequired: {
            message: "Поле обязательно для заполнения"
        },
        hasValidLength: {
            message: "Поле должно содержать более 1 символа",
            param: 1
        }
    },
    email: {
        isRequired: {
            message: "Поле обязательно для заполнения"
        },
        isEmailValid: {
            message: "Введённый адрес электронной почты некорректен"
        }
    },
    tel: {
        isRequired: {
            message: "Поле обязательно для заполнения"
        },
        isPhoneValid: {
            message: "Введённый формат телефонного номера некорректен"
        }
    },
    file: {
        isRequired: {
            message: "Поле обязательно для заполнения"
        }
    },
    message: {
        isRequired: {
            message: "Поле обязательно для заполнения"
        }
    }
};
