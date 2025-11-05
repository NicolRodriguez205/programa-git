// ...existing code...
document.addEventListener('DOMContentLoaded', function () {
    // Registro (form-registrarse)
    const formRegistrarse = document.getElementById('form-registrarse');
    if (formRegistrarse) {
        formRegistrarse.addEventListener('submit', function (e) {
            e.preventDefault();
            const nombre = (document.getElementById('nombre') || {}).value?.trim() || '';
            const telefono = (document.getElementById('telefono') || {}).value?.trim() || '';
            const correo = (document.getElementById('correo') || {}).value?.trim() || '';
            const contrasena = (document.getElementById('contrasena') || {}).value?.trim() || '';
            const confirmarContrasena = (document.getElementById('confirmar-contrasena') || {}).value?.trim() || '';

            if (!correo || !contrasena) {
                alert('Correo y contraseña son obligatorios');
                return;
            }

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

    // Inicio de sesión (soporta form-iniciodesesion o form-login)
    const formLogin = document.getElementById('form-iniciodesesion') || document.getElementById('form-login');
    if (formLogin) {
        formLogin.addEventListener('submit', function (e) {
            e.preventDefault();
            const correoEl = document.getElementById('correo') || document.getElementById('correo-login');
            const claveEl = document.getElementById('contrasena') || document.getElementById('contrasena-login');
            const correo = correoEl?.value?.trim().toLowerCase() || '';
            const contrasena = claveEl?.value?.trim() || '';

            if (!correo || !contrasena) {
                alert('Ingresa correo y contraseña');
                return;
            }

            const usuarioGuardado = JSON.parse(localStorage.getItem('usuario') || 'null');
            if (!usuarioGuardado) {
                alert('No hay usuarios registrados');
                return;
            }

            const correoGuardado = (usuarioGuardado.correo || '').toLowerCase();
            if (correo === correoGuardado && contrasena === usuarioGuardado.contrasena) {
                alert('Inicio de sesión exitoso');
                window.location.href = 'bienvenida.html';
            } else {
                alert('Correo o contraseña incorrectos');
            }
        });
    }
});
// ...existing code...

