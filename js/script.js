/* EJECUTAR LA FUNCIÓN AL CARGAR LA PÁGINA */
window.onload = getData();

const info = document.querySelector('.prin-info');

/* FUNCION ASINCRONA PARA TRAER LOS DATOS DEL JSON */
async function getData(){
    const response = await fetch('./data.json');
    const data = await response.json();
    createHTML(data);
}

/* FUNCIÓN PARA AGREGAR AL HTML CONTENIDO MEDIANTE LOS DATOS TRAIDOS DEL JSON */
function createHTML(array){
    info.innerHTML = ''
    let p = 1;
    array.forEach((mago) => {
        const card = `
        <div class="card">
            <div class="card-house">
                <div class="card-house-esc">
                    <img src="${mago.logo}" alt="">
                </div>
                <div class="card-house-log">
                    <img src="${mago.logc}" alt="">
                </div>
            </div>
            <div class="card-img">
                <img src="${mago.imagen}" alt="">
            </div>
            <div class="card-inf">
                <h2>${mago.nombre}</h2>
            </div>
        </div>`
        info.innerHTML += card
        p += 1;
        }
    )
}