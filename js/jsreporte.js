function validar() {

    nombre = document.getElementById("nombre").value;
    if (nombre == ""){
       swal ('Campo vacio', 'nombre', 'error')
       return false;
    }
    
    correo = document.getElementById("correo").value;
    if (correo == ""){
       swal ('Campo vacio', 'correo', 'error')
       return false;
    }
    
    queja = document.getElementById ("").value;
    if (queja ==""){
    swal ('Campo vacio', 'queja', 'error')
    return false;
    }
    
   
    else{
       swal('Bien', 'Cita Programada Correctamente', 'success');
       return false;
    }
    
    }