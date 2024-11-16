document.addEventListener("DOMContentLoaded", ()=>{

    document.getElementById("botonAgregar").addEventListener("click", ()=>{
        let formulario = document.getElementById("formulario");
        formulario.style.visibility="visible";
        formulario.style.opacity="1";
        
        console.log("abrir boton");
    })

    document.getElementById("botonCerrar").addEventListener("click",()=>{
        let formulario = document.getElementById("formulario");
        formulario.style.visibility="hidden";
        formulario.style.opacity="0";
        
        console.log("cerrar boton");
    });

    document.getElementById("botonCrear").addEventListener("click", ()=>{
        console.log("qwdqwdqw")
        let formulario = document.getElementById("formulario");
        formulario.style.visibility="hidden";
        formulario.style.opacity="0";
        
        console.log("cerrar boton");

    });
    
});
