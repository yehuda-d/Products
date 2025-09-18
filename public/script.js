function addTitle(){
    let txt = "Products";
    document.getElementById("h1").innerText = txt;
}

async function getData() {
    try {
        let response = await fetch('/products');
        let data = await response.json();
        createGrid(data);
    } catch (err) {
        alert(err);
    }
}

function createGrid(data){
    let txt = "";
    for (obj of data) {
        if(obj){
            txt+=
            `<div class="card">
                    <div>
                    <img src="..//uploads/${obj.fileName}" alt="${obj.name}">
                    <p>${obj.name}</p>
                    <div>${obj.price}</div>
                </div>
                <div>
                    <button>Delete</button>
                    <button>Edit</button>
                </div>
            </div>`
        }
    }
    document.getElementById("main").innerHTML = txt;
}







getData();
addTitle();