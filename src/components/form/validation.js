export default function validation(userDta) {
    const error = {}

    const regexEmail = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i;

    const regexpass = /^[a-zA-Z0-9!@#$%^&*]{6,16}$/

    if (!regexEmail.test(userDta.username)) {
        error.username = "Debe ser un correo electronico "
    }
    else if (!userDta.username) {
        error.username = 'El usurario no puede estar vacio'
    }
    else if (userDta.username.length > 35) {
        error.username = 'El usuario no puede tener mas 35 caracteres'
    }
    else if (!regexpass.test(userDta.password)) {
        error.password = 'No valido minimo entre 6-10 caracteres'
    }
    else if (userDta.password.length < 6 && userDta.password.length > 10) error.password = 'La contraseña debe ser mayor a 6 y menor a 10 caracteres'
    return error
}