// Módulo del panel de usuario (Dashboard)

class UserDashboard {
    constructor(userId) {
        this.userId = userId;
        this.datos = {};
    }

    async cargarDatosUsuario() {
        // Simular carga de datos del usuario
        this.datos = {
            nombre: 'Usuario Ejemplo',
            email: 'usuario@ejemplo.com',
            membresia: 'Premium',
            pedidos: 15
        };
        return this.datos;
    }
}
