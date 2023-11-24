function getTotalMoneyAllOrder() {
    var orders = order.getOrders();
    var sum = 0;
    orders.forEach((item) => {
        item.cartList.forEach((itemz) => {
            sum += itemz.product_price;
        })
    })
    return sum;

}

function filterOrderbyBrand(brand, month) {
    var orders = order.getOrders();
    var result = new Array(32).fill(0);
    var sumMonth = 0;
    if (brand == "all") {
        orders.forEach((item) => {
            if(time.getOnlyMonth(item.orderTime) == month) {
                item.cartList.forEach((itemz) => {
                  var day = parseInt(time.getOnlyDate(item.orderTime));
                    result[day] += itemz.product_price;
                    sumMonth += itemz.product_price;
                })
            }
        })
        return {result, sumMonth};
    }

    else { 
      orders.forEach((item) => {
        if(time.getOnlyMonth(item.orderTime) == month) {
            item.cartList.forEach((itemz) => {
              if (itemz.storeProduct.brand == brand) {
                var day = parseInt(time.getOnlyDate(item.orderTime));
                result[day] += itemz.product_price;
                sumMonth += itemz.product_price;
              }
            })
        }
    })
    return {result, sumMonth};
    }
}

var xValues = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12', '13', '14', '15', '16', '17', '18', '19', '20', '21', '22', '23', '24', '25', '26', '27', '28', '29', '30'];
var yValues = filterOrderbyBrand("all", 1).result;
var labelz = `Doanh thu tháng 1/2023 (${money.vnd(filterOrderbyBrand("all", 1).sumMonth)}, chiếm ${(filterOrderbyBrand("all", 1).sumMonth / getTotalMoneyAllOrder()).toFixed(2)}%)`;
renderChart();
function renderChart() {
  var existingChart = Chart.getChart("myChart"); 
  if (existingChart) {
    existingChart.destroy(); 
  }
new Chart("myChart", {
  type: "line",
  data: {
    labels: xValues,
    datasets: [{
      label: labelz,
      fill: false,
      backgroundColor: "rgba(0,0,255,1.0)",
      borderColor: "rgba(0,0,255,0.3)",
      data: yValues
    }]
  },
});
}
// Theem su kien cho nut loc theo thang va theo brand
var filtermonth = document.getElementById('product-month-select');
var filterbrand = document.getElementById('product-type-select');

filtermonth.addEventListener('change', () => {
    var month = filtermonth.value;
    var brand = filterbrand.value;
    yValues = filterOrderbyBrand(brand, month).result;
    labelz = "Doanh thu tháng " + month + "/2023" + `(${money.vnd(filterOrderbyBrand(brand, month).sumMonth)}, chiếm ${(filterOrderbyBrand(brand, month).sumMonth / getTotalMoneyAllOrder()).toFixed(2)}%)`;
    renderChart();
})

filterbrand.addEventListener('change', () => {
    var brand = filterbrand.value;
    var month = filtermonth.value;
    yValues = filterOrderbyBrand(brand, month).result;
    labelz = "Doanh thu tháng " + month + "/2023";
    labelz = "Doanh thu tháng " + month + "/2023" + `(${money.vnd(filterOrderbyBrand(brand, month).sumMonth)}, chiếm ${(filterOrderbyBrand(brand, month).sumMonth / getTotalMoneyAllOrder()).toFixed(2)}%)`;
    renderChart();
})