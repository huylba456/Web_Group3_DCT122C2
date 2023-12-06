const products = [
    { id: 1, name: 'iPhone',type: 'điện thoại' ,imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT5G22ODLEylyV4cyoI41JW75gwpmcJ8H9Zsg&usqp=CAU' },
    ];

    function renderProductList() {
        const productList = document.getElementById('product-list');
        productList.innerHTML = '';

        products.forEach(product => {
            const listItem = document.createElement('li');
            listItem.className = 'product-item';
            listItem.innerHTML = `
                <div>
                    <img src="${product.imageUrl}" alt="${product.name}">
                    <strong>${product.name}</strong>
                </div>
                <div>
                    <button onclick="editProduct(${product.id})">Edit</button>
                    <button onclick="confirmDeleteProduct(${product.id})">Delete</button>
                </div>
            `;
            productList.appendChild(listItem);
        });
    }

    function showAddProductForm() {
        const addProductForm = document.getElementById('add-product-form');
        addProductForm.style.display = 'block';
    }

    function addProduct() {
        const productNameInput = document.getElementById('productName');
        const productTypeInput = document.getElementById('productType');
        const productImageInput = document.getElementById('productImage');

        const newProduct = {
            id: products.length + 2,
            name: productNameInput.value,
            type: productTypeInput.value,
            imageUrl: URL.createObjectURL(productImageInput.files[0]),
        };

        products.push(newProduct);
        renderProductList();
        
        productNameInput.value = '';
        productTypeInput.value = '';
        productImageInput.value = '';

        const addProductForm = document.getElementById('add-product-form');
        addProductForm.style.display = 'none';
    }

    function editProduct(productId) {
        console.log(`Editing product with ID ${productId}`);
    }

    function confirmDeleteProduct(productId) {
        const confirmDelete = confirm('Are you sure you want to delete this product?');
        if (confirmDelete) {
            deleteProduct(productId);
        }
    }

    function deleteProduct(productId) {
        const index = products.findIndex(product => product.id === productId);
        if (index !== -1) {
            products.splice(index, 1);
            renderProductList();
        }
    }
    function renderProductList() {
        const productList = document.getElementById('product-list');
        productList.innerHTML = '';

        products.forEach(product => {
            const listItem = document.createElement('li');
            listItem.className = 'product-item';
            listItem.innerHTML = `
                <div>
                    <img src="${product.imageUrl}" alt="${product.name}">
                    <strong>${product.name}</strong>
                    <p>Loại: ${product.type}</p>
                </div>
                <div>
                    <button onclick="editProduct(${product.id})">Edit</button>
                    <button onclick="confirmDeleteProduct(${product.id})">Delete</button>
                </div>
            `;
            productList.appendChild(listItem);
        });
    }