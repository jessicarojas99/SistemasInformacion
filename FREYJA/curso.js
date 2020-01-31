window.onload=init;
let cm;

function init()
{
   cm=new curso1();
   cm.addTestData();
   cm.mostrarcurso();
   cm.mostrartabla("contenedor")
}
function agregar()
{
   let nombre=document.querySelector("#Name");
   let Descripcion=document.querySelector("#Descripcion");
   let costo=document.querySelector("#costo");
  
   let newcurso=new curso(nombre.value,Descripcion.value,costo.value);
   cm.add(newcurso);

   nombre.value="";
   Descripcion.value="";
   costo.value="";

   cm.mostrartabla("contenedor");

   return false;
}
function eliminar()
{
   
   var nombre=document.getElementById("Name").value;
   console.log("aqui"  + nombre);
   var em1=new empleado("Juan","Lopez","Profesor",4445590,"juanlopez@gmail.com","Av.Vanguardia");
     console.log("aqui"  + nombre);
   console.log("Borrando")
   cm.remove(em1);
   console.log(nombre);
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
class curso
{
   constructor(nombre,descripcion,costo)
   {
   this.nombre=nombre;
   this.descripcion=descripcion;
   this.costo=costo;
   }
}
class curso1
{
   constructor()
   {
      this.lista=[];
   }
   addTestData()
   {
      var c1=new curso("Ingles","2 horas",100);

      this.add(c1);

      this.sort();
   }
   empty()
   {
      this.lista=[];
   }
   add(curso)
   {
      this.lista.push(curso);
   }
   remove(nombre)
   {
      
      for(let i=0;i<this.lista.length;i++)
      {
         var n=this.lista[i];
         if(n.nombre===nombre.nombre)
         {
            this.lista.splice(i,1);
            break;
         }
      }
   }
   sort()
   {
         this.lista.sort(curso1.comparenombre)
   }
   static comparenombre(c1,c2)
   {
      if(c1.nombre<c2.nombre)
      
         return -1;
      
      if(c1.nombre>c2.nombre)
      
         return 1
      
      return 0;
   }
   mostrarcurso()
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

      this.lista.forEach(function(cursoact)
      {
         let row = table.insertRow();
         row.innerHTML="<td>"+cursoact.nombre+"</td>"
         +"<td>"+cursoact.descripcion+"</td>"
         +"<td>"+cursoact.costo+"</td>"
         
      });
      
      contenedor.appendChild(table);

   }
   
}
