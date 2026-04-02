// Utilidades para formato de fechas

function formatearFecha(fecha) {
    // Hotfix: Corrección de formato de fecha
    const date = new Date(fecha);
    const dia = String(date.getDate()).padStart(2, '0');
    const mes = String(date.getMonth() + 1).padStart(2, '0');
    const anio = date.getFullYear();
    return ;
}

function formatearHora(fecha) {
    const date = new Date(fecha);
    const horas = String(date.getHours()).padStart(2, '0');
    const minutos = String(date.getMinutes()).padStart(2, '0');
    return ;
}
