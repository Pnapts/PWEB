
function allowDrop(ev) {
    ev.preventDefault();
}

function drag(ev) {
    ev.dataTransfer.setData("text", ev.target.id);
}

function drop(ev) {
    ev.preventDefault();
    var data = ev.dataTransfer.getData("text");
    var card = document.getElementById(data);
    ev.target.appendChild(card);
}


function createCard(columnId) {
    
    const cardId = 'card-' + Date.now();

    
    const card = document.createElement('div');
    card.setAttribute('id', cardId);
    card.setAttribute('class', 'card');
    card.setAttribute('draggable', 'true');
    card.setAttribute('ondragstart', 'drag(event)');

    
    const title = document.createElement('input');
    title.setAttribute('type', 'text');
    title.setAttribute('placeholder', 'Atividade');
    
    const responsavel = document.createElement('input');
    responsavel.setAttribute('type', 'text');
    responsavel.setAttribute('placeholder', 'Responsável');
    
    const dataLimite = document.createElement('input');
    dataLimite.setAttribute('type', 'date');

    
    card.appendChild(title);
    card.appendChild(responsavel);
    card.appendChild(dataLimite);

    
    const column = document.getElementById(columnId);
    column.appendChild(card);
}
