$(document).ready(function () {
    /* Es un controlador de eventos para el envió de formulario seleccionado y define el comportamiento 
    del formulario cuando se envíe. */
    $("#formulario").submit(function (event) {
        // Confirmar el envío de los datos
        let response = confirm("¿Está seguro de enviar los datos?");
        if (response) {
            // Obtener los valores ingresados por el usuario
            let txtNombre = $("#txtNombre").val();
            let txtApellido = $("#txtApellido").val();
            let txtEmail = $("#txtEmail").val();

            /* Validar el valor del campo nombre */
            if (txtNombre.length > 50 || txtNombre.length < 2) {
                $("#txtNombre").addClass("is-invalid"); // Agregar clase is-invalid al campo de nombre
                alert("Nombre incorrecto."); /* Mostrará si el nombre es incorrecto */
                return false;
            } else {
                $("#txtNombre").removeClass("is-invalid"); // Remover clase is-invalid del campo de nombre si no hay error
                alert("Nombre correcto."); /* Mostrará si el nombre es correcto */
            }

            /* Validar el valor del campo apellido */
            if (txtApellido.length > 50 || txtApellido.length < 2) {
                $("#txtApellido").addClass("is-invalid"); // Agregar clase is-invalid al campo de nombre
                alert("Apellido incorrecto."); /* Mostrará si el apellido es incorrecto */
                return false;
            } else {
                $("#txtApellido").removeClass("is-invalid"); // Remover clase is-invalid del campo de nombre si no hay error
                alert("Apellido correcto."); /* Mostrará si el apellido es correcto */
            }

            /* Validar el valor del campo correo */
            if (txtEmail.match(/^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/) == null) {
                alert("Correo incorrecto."); /* Mostrará si el correo es incorrecto */
                return false;
            } else {
                alert("Correo correcto."); /* Mostrará si el correo es correcto */
            }

        // Mostrar mensaje de envío exitoso
        alert("Los datos han sido enviados correctamente.");
        } 
        /* Se recarga la página nuevamente cuando el usuario de cancelar */
        else {
            return false;
        }
    });
});