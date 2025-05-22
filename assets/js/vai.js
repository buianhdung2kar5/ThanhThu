let quantity = 1;
let cartQuantity = 2;
const pricePerItem = 79000;

// Định dạng giá tiền
function formatPrice(price) {
    return price.toLocaleString('vi-VN') + ' đ';
}

// Giảm số lượng sản phẩm (trang chi tiết)
function decreaseQuantity() {
    if (quantity > 1) {
        quantity--;
        document.getElementById('quantity').value = quantity;
    }
}

// Tăng số lượng sản phẩm (trang chi tiết)
function increaseQuantity() {
    quantity++;
    document.getElementById('quantity').value = quantity;
}

// Giảm số lượng trong giỏ hàng
function decreaseCartQuantity() {
    if (cartQuantity > 1) {
        cartQuantity--;
        updateCart();
    }
}

// Tăng số lượng trong giỏ hàng
function increaseCartQuantity() {
    cartQuantity++;
    updateCart();
}

// Cập nhật giỏ hàng (hiển thị giá, số lượng)
function updateCart() {
    document.getElementById('cartQuantity').value = cartQuantity;
    document.getElementById('itemPrice').textContent = formatPrice(pricePerItem * cartQuantity);
    document.getElementById('totalPrice').textContent = formatPrice(pricePerItem * cartQuantity);
    document.getElementById('itemCount').textContent = cartQuantity + ' ';
}

// Thêm vào giỏ hàng
function addToCart() {
    cartQuantity = quantity;
    updateCart();
    document.getElementById('cartModal').classList.add('active');
}

// Đóng modal giỏ hàng
function closeModal() {
    document.getElementById('cartModal').classList.remove('active');
}

// Khởi tạo sự kiện khi DOM tải xong
document.addEventListener('DOMContentLoaded', function() {
    // Lấy các nút từ DOM
    const decreaseBtn = document.querySelector('.decrease');
    const increaseBtn = document.querySelector('.increase');
    const decreaseCartBtn = document.querySelector('.cart-quantity button:first-child');
    const increaseCartBtn = document.querySelector('.cart-quantity button:last-child');
    const addToCartBtn = document.querySelector('.add-to-cart-btn');
    const closeModalBtn = document.querySelector('.close-modal');

    // Gắn sự kiện cho nút giảm/tăng số lượng sản phẩm
    if (decreaseBtn) decreaseBtn.addEventListener('click', decreaseQuantity);
    if (increaseBtn) increaseBtn.addEventListener('click', increaseQuantity);

    // Gắn sự kiện cho nút giảm/tăng số lượng trong giỏ hàng
    if (decreaseCartBtn) decreaseCartBtn.addEventListener('click', decreaseCartQuantity);
    if (increaseCartBtn) increaseCartBtn.addEventListener('click', increaseCartQuantity);

    // Gắn sự kiện cho nút thêm vào giỏ hàng
    if (addToCartBtn) addToCartBtn.addEventListener('click', addToCart);

    // Gắn sự kiện cho nút đóng modal
    if (closeModalBtn) closeModalBtn.addEventListener('click', closeModal);
});

function openTab(tabName) {
    //ẩn nội dung tab
    var tabContents = document.getElementsByClassName("tab-content");
    for( var i=0; i < tabContents.length; i++){
        tabContents[i].classList.remove("active");
    }

    //xóa active từ tất cả nút tab
    var tabButtons = document.getElementsByClassName("tab-button");
    for (var i=0; i < tabButtons.length; i++) {
        tabButtons[i].classList.remove("active");
    }

    //hiển thị tab được chọn và kích hoạt nút tương ứng
    document.getElementById(tabName).classList.add("active");

    //kích hoạt nút 
    if (tabName === "mo-ta") {
        document.getElementById("mo-ta-btn").classList.add("active");
    } else  if (tabName === "thong-tin") {
        document.getElementById("thong-tin-btn").classList.add("active");
    }
}