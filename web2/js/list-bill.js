const productDetails = document.querySelector('.container-bill');
const closeDetail = document.querySelectorAll('.fa-xmark');
const showBillButtons = document.querySelectorAll('.show-detail');
const darkOverlay = document.querySelector('.dark-overlay');

showBillButtons.forEach(button => {
  button.addEventListener('click', function() {
    productDetails.classList.remove("hide");
    darkOverlay.style.display = 'block';
  })
})

closeDetail.forEach(button => {
  button.addEventListener('click', function() {
    productDetails.classList.add("hide");
    darkOverlay.style.display = 'none';
  })
})

// load lich su don hang
function loadtable() {
    $.ajax({
        url: './controller/HistoryBillController.php',
        type: 'POST',
        data: {
        request: 'getHistoryBill'
        },
        success: function(data) {
        console.log(data);

        }
    })
}