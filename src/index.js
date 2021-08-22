const fila = document.querySelector('.container-carousel')
const peliculas = document.querySelectorAll('.pelicula')
const flechaIzquierda = document.querySelector('#left')
const flechaDerecha = document.querySelector('#right')

// Flecha derecha event listener
flechaDerecha.addEventListener('click', () =>{
    fila.scrollLeft += fila.offsetWidth;
    const indicadorActivo = document.querySelector('.indicadores .active');
    if(indicadorActivo.nextSibling){
        indicadorActivo.nextSibling.classList.add('active')
        indicadorActivo.classList.remove('active')
    }
})

// Flecha izquierda event listener
flechaIzquierda.addEventListener('click', () =>{
    fila.scrollLeft -= fila.offsetWidth;
    const indicadorActivo = document.querySelector('.indicadores .active');
    if (indicadorActivo.previousSibling){
        indicadorActivo.previousSibling.classList.add('active')
        indicadorActivo.classList.remove('active')
    }
})

// Paginacion
const numeroPaginas = Math.ceil(peliculas.length / 5);
const containerIndicador = document.querySelector('.indicadores'); 
for (let i = 0; i < numeroPaginas; i++){
    const indicador = document.createElement('button');

    if (i === 0){
        indicador.classList.add('active')
    }

    containerIndicador.appendChild(indicador);

    indicador.addEventListener('click', (e) =>{
        console.log(i);
        fila.scrollLeft = i * fila.offsetWidth;
        document.querySelector('.indicadores .active').classList.remove('active');
        e.target.classList.add('active');
    })
}

// HOVER

peliculas.forEach( pelicula =>{
    // Por cada pelicula agrego un event Listener para cuando pase el mouse por arriba
    pelicula.addEventListener('mouseenter', (e) =>{
        const elemento = e.currentTarget;
        console.log(elemento)
        setTimeout( () =>{
            // Elimino la clase hover de todas las peliculas 
            peliculas.forEach( pelicula => pelicula.classList.remove('hover'))
            // Agrego la clase hover a la pelicula en la que me posicione
            elemento.classList.add('hover')
        },150)
    })
})

// Cuando salgo del container peliculas elimino la clase hover
fila.addEventListener('mouseleave', () =>{
    peliculas.forEach(pelicula => pelicula.classList.remove('hover'))
})