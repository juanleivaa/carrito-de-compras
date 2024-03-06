// Lista de productos (se inicializa con los productos almacenados localmente o vacío si no hay ninguno)
let products = JSON.parse(localStorage.getItem('products')) || [];

// Función para mostrar la lista de productos
function displayProducts(filteredProducts) {
    const productList = document.getElementById('productList');
    productList.innerHTML = '';

    (filteredProducts || products).forEach((product, index) => {
        const listItem = document.createElement('li');
        listItem.className = 'list-group-item';
        listItem.innerHTML = `
            <div class="d-flex justify-content-between">
                <span>${product.name}</span>
                <div>
                    <button type="button" class="btn btn-sm btn-info mr-2" onclick="modifyProduct(${index})">Modificar</button>
                    <button type="button" class="btn btn-sm btn-danger" onclick="deleteProduct(${index})">Eliminar</button>
                </div>
            </div>
        `;
        productList.appendChild(listItem);
    });
}

// Función para agregar un producto
function addProduct(name) {
    products.push({ name });
    saveProducts(); // Guardar productos en el almacenamiento local
    displayProducts();
}

// Función para modificar un producto
function modifyProduct(index) {
    $('#modifyInput').val(products[index].name);
    $('#modifyModal').modal('show');

    $('#saveModifyBtn').off('click').on('click', () => {
        products[index].name = $('#modifyInput').val();
        saveProducts(); // Guardar productos en el almacenamiento local
        displayProducts();
        $('#modifyModal').modal('hide');
    });
}

// Función para eliminar un producto
function deleteProduct(index) {
    products.splice(index, 1);
    saveProducts(); // Guardar productos en el almacenamiento local
    displayProducts();
}

// Función para guardar los productos en el almacenamiento local
function saveProducts() {
    localStorage.setItem('products', JSON.stringify(products));
}

// Función para filtrar productos
$('#searchInput').on('input', function () {
    const searchValue = $(this).val().toLowerCase();
    const filteredProducts = products.filter(product => product.name.toLowerCase().includes(searchValue));
    displayProducts(filteredProducts);
});

// Botón para agregar producto
$('#addProductBtn').on('click', () => {
    const productName = $('#newProductInput').val();
    if (productName) {
        addProduct(productName);
        $('#newProductInput').val('');
    }
});

// Agregar producto al presionar Enter en el campo de texto
$('#newProductInput').on('keypress', function (e) {
    if (e.key === 'Enter') {
        const productName = $(this).val();
        if (productName) {
            addProduct(productName);
            $(this).val('');
        }
    }
});

// Mostrar productos iniciales
displayProducts();
