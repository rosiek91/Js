const list = document.querySelector("#list");

const dc = document.createDocumentFragment();

for(let i = 0; i < 150; i++) {
    const li = document.createElement("li");

    li.append(document.createTextNode(`Elementy listy ${i +1}`));

    dc.append(li);
}

list.append(dc);