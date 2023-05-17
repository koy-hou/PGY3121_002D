document.getElementById("valNombre").style.display = "none";
document.getElementById("valApellido").style.display = "none";
document.getElementById("valCelular").style.display = "none";
document.getElementById("valCorreo").style.display = "none";
document.getElementById("valPais").style.display = "none";
document.getElementById("valCiudad").style.display = "none";

function validacionFormulario(){
    let nombre = document.getElementById("txtNombre").value;
    let apellido = document.getElementById("txtApellido").value;
    let celular = document.getElementById("txtCelular").value;
    let correo = document.getElementById("txtCorreo").value;
    let pais = document.getElementById("txtPais").value;
    let ciudad = document.getElementById("txtCiudad").value;
    let motivo = document.getElementById("txtMotivo").value;

    localStorage.setItem("nombre", nombre);
    localStorage.setItem("apellido", apellido);
    localStorage.setItem("celular", celular);
    localStorage.setItem("correo", correo);
    localStorage.setItem("pais", pais);
    localStorage.setItem("ciudad", ciudad);
    localStorage.setItem("motivo", motivo);


    if (nombre.length == 0) {
      document.getElementById("valNombre").style.display = "inline";
      document.getElementById("txtNombre").classList.add("is-invalid");

    }else{
      document.getElementById("valNombre").style.display = "none";
      document.getElementById("txtNombre").classList.remove("is-invalid");
      document.getElementById("txtNombre").classList.add("is-valid");
      localStorage.setItem("nombre", nombre);
    }
    if (apellido.length == 0) {

      document.getElementById("valApellido").style.display = "inline";
      document.getElementById("txtApellido").classList.add("is-invalid");

    }else{
      document.getElementById("valApellido").style.display = "none";
      document.getElementById("txtApellido").classList.remove("is-invalid");
      document.getElementById("txtApellido").classList.add("is-valid");
    }

    if (celular.length == 0) {
      document.getElementById("valCelular").style.display = "inline";
      document.getElementById("txtCelular").classList.add("is-invalid");
    }else{
      document.getElementById("valCelular").style.display = "none";
      document.getElementById("txtCelular").classList.remove("is-invalid");
      document.getElementById("txtCelular").classList.add("is-valid");
    }

    if (correo.length == 0) {
      document.getElementById("valCorreo").style.display = "inline";
      document.getElementById("txtCorreo").classList.add("is-invalid");
    }else{
      document.getElementById("valCorreo").style.display = "none";
      document.getElementById("txtCorreo").classList.remove("is-invalid");
      document.getElementById("txtCorreo").classList.add("is-valid");
    }

    if (ciudad.length == 0) {
      document.getElementById("valCiudad").style.display = "inline";
      document.getElementById("txtCiudad").classList.add("is-invalid");
    }else{
      document.getElementById("valCiudad").style.display = "none";
      document.getElementById("txtCiudad").classList.remove("is-invalid");
      document.getElementById("txtCiudad").classList.add("is-valid");
    }

    if (pais.length == 0) {
        document.getElementById("valPais").style.display = "inline";
        document.getElementById("txtPais").classList.add("is-invalid");
      }else{
        document.getElementById("valPais").style.display = "none";
        document.getElementById("txtPais").classList.remove("is-invalid");
        document.getElementById("txtPais").classList.add("is-valid");
      }
    
    if (document.getElementById("txtNombre").classList.contains("is-valid") &&
    document.getElementById("txtApellido").classList.contains("is-valid")&&
    document.getElementById("txtCelular").classList.contains("is-valid")&&
    document.getElementById("txtCorreo").classList.contains("is-valid")&&
    document.getElementById("txtCiudad").classList.contains("is-valid")&&
    document.getElementById("txtPais").classList.contains("is-valid")) {  
        var nombreGuardado = localStorage.getItem("nombre");
        var apellidoGuardado = localStorage.getItem("apellido");
        var celularGuardado = localStorage.getItem("celular");
        var correoGuardado = localStorage.getItem("correo");
        var paisGuardado = localStorage.getItem("pais");
        var ciudadGuardado = localStorage.getItem("ciudad");
        var resultado = document.getElementById("resultado");
        resultado.innerHTML = "Nombre: " + nombreGuardado + "<br>" +
                              "Apellido: " + apellidoGuardado + "<br>" +
                              "Celular: " + celularGuardado + "<br>" +
                              "Correo: " + correoGuardado + "<br>" +
                              "País: " + paisGuardado + "<br>" +
                              "Ciudad: " + ciudadGuardado;
        if (motivo.length > 0) {
            var motivoGuardado = localStorage.getItem("motivo");
            resultado.innerHTML += "<br>Motivo: " + motivoGuardado;
        } else {
            resultado.innerHTML += "<br>No se ingresó un motivo.";
        }
    }
}

