

window.onload = init;

let alumnos;
let dtalumno;

function init() {
    alumnos = new Alumno();
}

function agregarFila() {
    var nombre = document.getElementById("txtnombre").value;
    var apellido = document.getElementById("txtapellido").value;
    var telefono = document.getElementById("txttelefono").value;
    var email = document.getElementById("txtemail").value;
    var edad = document.getElementById("txtedad").value;
    var estatura = document.getElementById("txtestatura").value;
    var peso = document.getElementById("txtpeso").value;
    dtalumno = new DatosAlumno(nombre, apellido, telefono, email, edad, estatura, peso);
    alumnos.Agregar(dtalumno);
}

function eliminarFila() {
    var table = document.getElementById("tablaprueba");
    var rowCount = table.rows.length;
    //console.log(rowCount);

    if (rowCount <= 1)
        alert('No se puede eliminar el encabezado');
    else
        table.deleteRow(rowCount - 1);
}

function MostrarDatos() {
    alumnos.Mostrar();
}

function Buscar() {
    var nombret = document.getElementById("txtnombre").value;
    alumnos.Busqueda(nombret);
}

function eliminarFila() {
    var table = document.getElementById("tablaprueba");
    var rowCount = table.rows.length;
    //console.log(rowCount);

    if (rowCount <= 1)
        alert('No se puede eliminar el encabezado');
    else
        table.deleteRow(rowCount - 1);
}

class DatosAlumno {
    constructor(nombre, apellido, telefono, email, edad, estatura, peso) {
        this.nombre = nombre;
        this.apellido = apellido;
        this.telefono = telefono;
        this.email = email;
        this.edad = edad;
        this.estatura = estatura;
        this.peso = peso;
    }

}
class Alumno {
    constructor() {
        this.list = [];
    }
    Agregar(DatosAlumno) {
        this.list.push(DatosAlumno);
        this.sort();
    }
    sort() {

        this.list.sort(Alumno.compareByName);
    }
    static compareByName(c1, c2) {

        if (c1.nombre < c2.nombre)
            return -1;

        if (c1.nombre > c2.nombre)
            return 1;

        return 0;
    }
    MostrarConsola() {
        this.list.forEach(function(e) {
            console.log(e.nombre);
        });
    }
    Mostrar() {
        document.getElementById("tablaprueba").innerHTML = "";
        this.list.forEach(function(dt) {
            document.getElementById("tablaprueba").insertRow(-1).innerHTML =
                '<td>' + dt.nombre + '</td><td>' + dt.apellido + '</td><td>' + dt.telefono + '</td><td>' + dt.email + '</td><td>' + dt.email + '</td><td>' + dt.edad + '</td><td>' + dt.estatura + '</td><td>' + dt.peso + '</td>';

        })
    }
    Busqueda(nombreb) {
        this.list.forEach(function(dt) {
            if (nombreb == dt.nombre) {
                document.getElementById("tablaprueba").innerHTML = "";
                document.getElementById("tablaprueba").insertRow(-1).innerHTML =
                    '<td>' + dt.nombre + '</td><td>' + dt.apellido + '</td><td>' + dt.telefono + '</td><td>' + dt.email + '</td><td>' + dt.email + '</td><td>' + dt.edad + '</td><td>' + dt.estatura + '</td><td>' + dt.peso + '</td>';
            }
        })
    }


}