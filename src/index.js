import _ from 'lodash';

function component() {
    let element = document.createElement('div');
    element.innerHTML = _.join(['hi', 'dullat']);
    console.log("runing");
    return element;
}

document.body.appendChild(component());