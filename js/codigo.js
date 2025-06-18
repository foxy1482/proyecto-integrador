const fondo = document.querySelector(".fondo");
const ul = document.querySelector(".fondo > pre > ul");

const cargarCodigo = ()=>
{
    fetch('../codigo.txt')
        .then(res => res.text())
        .then(data => {
            const lineas = data.split("\n"); //Esto separa cada línea
            ul.innerHTML = "";

            let i = 0;
            lineas.forEach(linea =>
            {
                i++;
                const li = document.createElement("li");
                li.className = "linea";

                linea = colorearCodigo(linea);
                if (i == 1) // Esto evita que no aparezca parte de la primera línea
                {
                    li.innerHTML = `<span class="numeracion">${i}</span>#include <span><</span>LiquidCrystal.h<span>></span>`;
                }
                else { 
                    li.innerHTML = `<span class="numeracion">${i}</span>` + linea;
                }
                ul.appendChild(li);
            })
        })
        .catch(e => alert("No se pudo cargar el archivo del código."));
}

const colorearCodigo = (codigo)=>
{
    // Usé expresiones regulares para 
    codigo = codigo.replace(/\b(int|void|long|if|else|return)\b/g, 
        `<span class="palabra-reservada">$1</span>`
    );

    codigo = codigo.replace(/(\{|\}|\(|\)|;)/g,
        `<span class="simbolo-reservado">$1</span>`
    )
    return codigo;
}


cargarCodigo();