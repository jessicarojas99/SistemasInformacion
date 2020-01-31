window.onload=init;
let cm;

function init()
{
   cm=new empleado1();
   cm.addTestData();
   cm.mostrarempleado();
   cm.mostrartabla("contenedor")
}
function agregar()
{
   let nombre=document.querySelector("#Name");
   let apellido=document.querySelector("#lastname");
   let cargo=document.querySelector("#cargo");
   let telefono=document.querySelector("#phone");
   let email=document.querySelector("#email");
   let direccion=document.querySelector("#adress");
   let newempleado=new empleado(nombre.value,apellido.value,cargo.options[cargo.selectedIndex].text,telefono.value,email.value,direccion.value);
   cm.add(newempleado);

   nombre.value="";
   apellido.value="";
   telefono.value="";
   email.value="";
   direccion.value="";

   cm.mostrartabla("contenedor");

   return false;
}
function eliminar()
{
   
   //var nombre=document.getElementById("Name").value;
   var em1=new empleado("Juan","Lopez","Profesor",4445590,"juanlopez@gmail.com","Av.Vanguardia");
   cm.remove(em1);
   cm.mostrartabla("contenedor");

   
}


function emptyList()
{
   cm.empty();
   cm.mostrartabla("contenedor");
}

function loadList()
{
   cm.load();
   cm.mostrartabla("contenedor");
}
class empleado
{
   constructor(nombre,apellido,cargo,telefono,email,direccion)
   {
   this.nombre=nombre;
   this.apellido=apellido;
   this.cargo=cargo;
   this.telefono=telefono;
   this.email=email;
   this.direccion=direccion;
   }
}
class empleado1
{
   constructor()
   {
      this.lista=[];
   }
   addTestData()
   {
      var em1=new empleado("Juan","Lopez","Profesor",4445590,"juanlopez@gmail.com","Av.Vanguardia");

      this.add(em1);

      this.sort();
   }
   empty()
   {
      this.lista=[];
   }
   add(empleado)
   {
      this.lista.push(empleado);
   }
   remove(nombre)
   {
      
      for(let i=0;i<this.lista.length;i++)
      {
         var n=this.lista[i];
         if(n.nombre===nombre.nombre)
         {
            this.lista.pop(i);
            break;
         }
      }
   }
   sort()
   {
         this.lista.sort(empleado1.comparenombre)
   }
   static comparenombre(c1,c2)
   {
      if(c1.nombre<c2.nombre)
      
         return -1;
      
      if(c1.nombre>c2.nombre)
      
         return 1
      
      return 0;
   }
   mostrarempleado()
   {
      this.lista.forEach(function(c)
      {
         console.log(c.name);
      });
   }
   load()
   {
      if(localStorage.contacts !== undefined)
      {
         this.lista=JSON.parse(localStorage.contacts)
      }
   }
   save()
   {
      localStorage.contacts=JSON.stringify(this.lista);
   }
   mostrartabla(id)
   {
      let contenedor=document.querySelector("#"+id);
      contenedor.innerHTML="";

      if(this.lista.length===0)
      {
         contenedor.innerHTML="<p>No exixte ningun empleado</p>";
      return;
      }

      let table = document.createElement("table");

      this.lista.forEach(function(empleadoact)
      {
         let row = table.insertRow();
        
         row.innerHTML="Nombre";
         
         row.innerHTML="<td>"+empleadoact.nombre+"</td>"
         +"<td>"+empleadoact.apellido+"</td>"
         +"<td>"+empleadoact.cargo+"</td>"
         +"<td>"+empleadoact.telefono+"</td>"
         +"<td>"+empleadoact.email+"</td>"
         +"<td>"+empleadoact.direccion+"</td>"
      });
      
      contenedor.appendChild(table);

   }
   
}





