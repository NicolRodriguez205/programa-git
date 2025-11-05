// ...existing code...
document.addEventListener('DOMContentLoaded', function() {
    const formregistrarse = document.getElementById('form-registrarse');
    if (formregistrarse) {
        formregistrarse.addEventListener('submit', function(e) {
            e.preventDefault();
            const nombre = document.getElementById('nombre').value.trim();
            const telefono = document.getElementById('telefono').value.trim();
            const correo = document.getElementById('correo').value.trim();
            const contrasena = document.getElementById('contrasena').value.trim();
            const confirmarContrasena = document.getElementById('confirmar-contrasena').value.trim();

            if (contrasena !== confirmarContrasena) {
                alert('Las contraseñas no coinciden');
                return;
            }

            const usuario = { nombre, correo, telefono, contrasena };
            localStorage.setItem('usuario', JSON.stringify(usuario));
            alert('Registro exitoso');
            window.location.href = 'iniciodesesion.html';
        });
    }

    const formlogin = document.getElementById('form-login') || document.getElementById('form-iniciodesesion');
    if (formlogin) {
        formlogin.addEventListener('submit', function(e) {
            e.preventDefault();
            const correoInput = document.getElementById('correo');
            const correo = correoInput ? correoInput.value.trim() : '';
            const contrasena = document.getElementById('contrasena') ? document.getElementById('contrasena').value.trim() : '';

            const usuarioGuardado = JSON.parse(localStorage.getItem('usuario'));
            if (!usuarioGuardado) {
                alert('No hay usuarios registrados');
                return;
            }

            if (correo === usuarioGuardado.correo && contrasena === usuarioGuardado.contrasena) {
                alert('Inicio de sesión exitoso');
                window.location.href = 'index.html';
            } else {
                alert('credenciales incorrectas');
            }
        });
    }
});

