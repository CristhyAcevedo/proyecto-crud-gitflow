// CRUD - Operaciones principales

// CREATE - Crear usuario
function crearUsuario(nombre, email) {
    return { id: Date.now(), nombre, email };
}

// READ - Leer usuario
function leerUsuario(usuarios, id) {
    return usuarios.find(u => u.id === id);
}

// UPDATE - Actualizar usuario
function actualizarUsuario(usuarios, id, nuevosDatos) {
    const index = usuarios.findIndex(u => u.id === id);
    if (index !== -1) {
        usuarios[index] = { ...usuarios[index], ...nuevosDatos };
        return usuarios[index];
    }
    return null;
}

// DELETE - Eliminar usuario
function eliminarUsuario(usuarios, id) {
    const index = usuarios.findIndex(u => u.id === id);
    if (index !== -1) {
        return usuarios.splice(index, 1)[0];
    }
    return null;
}

// Exportar funciones
module.exports = { crearUsuario, leerUsuario, actualizarUsuario, eliminarUsuario };
