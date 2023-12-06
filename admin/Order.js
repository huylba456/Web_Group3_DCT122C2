const orders = [
    { id: 1, date: '2023-01-01', status: 'Processing', items: [{ name: 'Product 1', quantity: 2 }, { name: 'Product 2', quantity: 1 }] },
    { id: 2, date: '2023-01-02', status: 'Completed', items: [{ name: 'Product 3', quantity: 3 }] },
];

function renderOrderList() {
    const orderList = document.getElementById('order-list');
    orderList.innerHTML = '';

    orders.forEach(order => {
        const listItem = document.createElement('li');
        listItem.className = 'order-item';
        listItem.innerHTML = `
            <div>
                <strong>Order #${order.id}</strong> - ${order.date} - Status: ${order.status}
            </div>
            <div>
                <button onclick="viewOrderDetails(${order.id})">View Details</button>
                <button onclick="markOrder(${order.id})">${order.status === 'Processing' ? 'Complete' : 'Processing'}</button>
            </div>
        `;
        orderList.appendChild(listItem);
    });
}

function viewOrderDetails(orderId) {
    const orderDetailContent = document.getElementById('order-detail-content');
    const orderDetail = orders.find(order => order.id === orderId);

    if (orderDetail) {
        orderDetailContent.innerHTML = `
            <p><strong>Order ID:</strong> ${orderDetail.id}</p>
            <p><strong>Date:</strong> ${orderDetail.date}</p>
            <p><strong>Status:</strong> ${orderDetail.status}</p>
            <p><strong>Items:</strong></p>
            <ul>
                ${orderDetail.items.map(item => `<li>${item.name} - Quantity: ${item.quantity}</li>`).join('')}
            </ul>
        `;

        const orderDetailContainer = document.getElementById('order-detail');
        orderDetailContainer.style.display = 'block';
    }
}

function markOrder(orderId) {
    const order = orders.find(order => order.id === orderId);

    if (order) {
        order.status = order.status === 'Processing' ? 'Completed' : 'Processing';
        renderOrderList();

        const orderDetailContainer = document.getElementById('order-detail');
        orderDetailContainer.style.display = 'none';
    }
}

function showAddOrderForm() {
    const addOrderForm = document.getElementById('add-order-form');
    addOrderForm.style.display = 'block';
}

function addOrder() {
    const orderDateInput = document.getElementById('orderDate');

    const newOrder = {
        id: orders.length + 1,
        date: orderDateInput.value,
        status: 'Processing', 
        items: [], 
    };

    orders.push(newOrder);
    renderOrderList();

    orderDateInput.value = '';

    const addOrderForm = document.getElementById('add-order-form');
    addOrderForm.style.display = 'none';
}

renderOrderList();