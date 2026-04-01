// Módulo de validación de usuario
function validarEmail(email) {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
}

function validarTelefono(telefono) {
    const regex = /^\d{10}$/;
    return regex.test(telefono);
}
