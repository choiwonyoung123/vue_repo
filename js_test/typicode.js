
/*
let list = document.querySelector('#list');

let table = document.createElement('table');
let th = document.createElement('th');
let tr = document.createElement('tr');
let td = document.createElement('td');

td.innerText = 1;
tr.append(td);
table.append(tr);
list.append(table);
*/
$.ajax('https://jsonplaceholder.typicode.com/posts')
.done(function(e){
    for(let prop of e){
        console.log(prop);
    }
})