// ...existing code...
document.addEventListener('DOMContentLoaded', function () {
    // Registro (form-registrarse)
    const formRegistrarse = document.getElementById('form-registrarse');
    if (formRegistrarse) {
        formRegistrarse.addEventListener('submit', function (e) {
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

    // Inicio de sesión (soporta form-login o form-iniciodesesion)
    const formLogin = document.getElementById('form-login') || document.getElementById('form-iniciodesesion');
    if (formLogin) {
        formLogin.addEventListener('submit', function (e) {
            e.preventDefault();

            const correoInput = document.getElementById('correo');
            const usuarioInput = document.getElementById('usuario');
            const correo = correoInput ? correoInput.value.trim() : null;
            const usuarioValor = usuarioInput ? usuarioInput.value.trim() : null;
            const contrasena = (document.getElementById('contrasena') || {}).value ? document.getElementById('contrasena').value.trim() : '';

            const usuarioGuardado = JSON.parse(localStorage.getItem('usuario'));
            if (!usuarioGuardado) {
                alert('No hay usuarios registrados');
                return;
            }

            const validoPorCorreo = correo && correo === usuarioGuardado.correo && contrasena === usuarioGuardado.contrasena;
            const validoPorNombre = usuarioValor && (usuarioValor === usuarioGuardado.nombre || usuarioValor === usuarioGuardado.correo) && contrasena === usuarioGuardado.contrasena;

            if (validoPorCorreo || validoPorNombre) {
                alert('Inicio de sesión exitoso');
                window.location.href = 'index.html';
            } else {
                alert('Credenciales incorrectas');
            }
        });
    }
});
