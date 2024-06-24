import { loadPacotes } from "./stub.js";

function onLoadPacotes() {
    const placeholder = document.getElementById("placeholder");
    placeholder.innerHTML = "<p>Loading</p>"
    loadPacotes((data) => {
    let html = '<table>';
    for(let i =0;i < data.length ; i++){
        let nomeHotel = data[i].items.filter((item) => !!item.nomeHotel)[0].nomeHotel;
        html += `<tr><td>${data[i].descricao}</td>
                 <td>${data[i].localidade.descricao}</td>
                 <td>${data[i].valor}</td>
                 <td>${nomeHotel}</td></tr>`
    }
    html += '</table>';
        placeholder.innerHTML= html;
    })
}


export { onLoadPacotes };