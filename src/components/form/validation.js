export default function validation(inputs) {
    const error = {}

    const regexEmail = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i;

    const regexpass = new RegExp(/^[a-zA-Z0-9!@#$%^&*]{6,16}$/)

    if (!regexEmail.test(inputs.username)) {
        error.username = "Debe ser un correo electronico "
    }
    if (!inputs.username) {
        error.username = 'add your name'
    }
    if (inputs.username.length > 35) {
        error.username = 'Max 35 caracteres'
    }
    if (!regexpass.test(inputs.password)) {
        error.password = 'No valido minimo entre 6-10 caracteres'
    }
    return error
}