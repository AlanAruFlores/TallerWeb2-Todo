document.addEventListener("DOMContentLoaded", (e)=>{

    document.getElementById("botonAgregar").addEventListener("click", ()=>{
        abrirFormulario();
    })

    document.getElementById("botonCerrar").addEventListener("click",()=>{
        cerrarFormulario();
    });

    document.getElementById("botonCrear").addEventListener("click", ()=>{
       cerrarFormulario();
    });

    
    

    function cerrarFormulario(){
        let formulario = document.getElementById("formulario");
        formulario.style.visibility="hidden";
        formulario.style.opacity="0";        
        //console.log("cerrar formulario");
    }

    function abrirFormulario(){
        let formulario = document.getElementById("formulario");
        formulario.style.visibility="visible";
        formulario.style.opacity="1";   
   //     console.log("abrir boton");
    }
});
