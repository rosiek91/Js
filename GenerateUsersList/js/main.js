const button = document.querySelector("button");

function renderRows(users) {
     return users.map(user => {
        return `
        <tr>
                <td>${user.id}</td>
                <td>${user.name}</td>
                <td>${user.username}</td>
                <td><a href="${user.email}">${user.email}</a></td>
        </tr>
        `
     }).join("\n");   

    
}
    function renderTable(users) {
        const table = `
        <table class="table is-fullwidth is-bordered is-striped mt-6">
        <thead>
            <tr>
                <th>ID</th>
                <th>Imię i nazwisko</th>
                <th>Nazwa użytkownika</th>
                <th>Adres e-mail</th>
            </tr>
            </thead>
                ${renderRows(users)}
            <tbody>
        </table>
        `;

        const div = document.createElement("div");

        div.innerHTML = table;
        document.querySelector(".container").append(div);
}


button.addEventListener("click", function () {      
    fetch("https://jsonplaceholder.typicode.com/users")        // Source users
        .then(res => res.json())
        .then(data => renderTable(data))
        .then(() => {                                       // It disappears when pressed
            button.remove();
        });
    });

    
