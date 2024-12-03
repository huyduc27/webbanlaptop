function checkLogin() {
    // Giả sử trạng thái đăng nhập được lưu trong localStorage
    const isLoggedIn = localStorage.getItem('loggedIn');

    if (isLoggedIn) {
        // Nếu đã đăng nhập, chuyển hướng đến giỏ hàng
        window.location.href = 'cart.html';
    } else {
        // Nếu chưa đăng nhập, chuyển hướng đến trang đăng nhập`
        alert('Vui lòng đăng nhập trước khi vào giỏ hàng.');
        window.location.href = 'login.html';
    }
}   

        document.addEventListener("DOMContentLoaded", () => {
            const cartItems = document.querySelector(".cart-items");
            const summary = document.getElementById("summary");
            const cardInfo = document.getElementById("card-info");
            const addressInputs = document.querySelectorAll('input[name="address"]');
            const paymentInputs = document.querySelectorAll('input[name="payment"]');
        
            // Update total
            function updateTotal() {
                let total = 0;
                cartItems.querySelectorAll(".cart-item").forEach(item => {
                    const price = parseFloat(item.querySelector(".product-price").textContent.replace("₫", "").replace(",", ""));
                    const quantity = parseInt(item.querySelector(".quantity").textContent);
                    const itemTotal = price * quantity;
                    item.querySelector(".item-total-price").textContent = `₫${itemTotal.toLocaleString()}`;
                    total += itemTotal;
                });
                summary.textContent = `Tổng tiền: ₫${total.toLocaleString()}`;
            }
        
            // Handle quantity buttons
            cartItems.addEventListener("click", (e) => {
                if (e.target.classList.contains("btn-increase") || e.target.classList.contains("btn-decrease")) {
                    const quantityElem = e.target.closest(".cart-item").querySelector(".quantity");
                    let quantity = parseInt(quantityElem.textContent);
                    quantity += e.target.classList.contains("btn-increase") ? 1 : -1;
                    if (quantity < 1) quantity = 1;
                    quantityElem.textContent = quantity;
                    updateTotal();
                }
        
                if (e.target.classList.contains("btn-delete")) {
                    e.target.closest(".cart-item").remove();
                    updateTotal();
                }
            });
        
            // Handle payment info
            paymentInputs.forEach(input => {
                input.addEventListener("change", () => {
                    cardInfo.style.display = input.value === "card" ? "block" : "none";
                });
            });
        
            // Enable/disable address input
            addressInputs.forEach(input => {
                input.addEventListener("change", () => {
                    document.getElementById("new-address").disabled = input.value !== "new";
                });
            });
        
            updateTotal();
        
        });
        // Open Search Advanced
        document.querySelector(".filter-btn").addEventListener("click",(e) => {
            e.preventDefault();
            document.querySelector(".advanced-search").classList.toggle("open");
            document.getElementById("home-service").scrollIntoView();
        })
        
        document.querySelector(".form-search-input").addEventListener("click",(e) => {
            e.preventDefault();
            document.getElementById("home-service").scrollIntoView();
        })
        
        function closeSearchAdvanced() {
            document.querySelector(".advanced-search").classList.toggle("open");
        }

        


        //Open Search Mobile 
        function openSearchMb() {
            document.querySelector(".header-middle-left").style.display = "none";
            document.querySelector(".header-middle-center").style.display = "block";
            document.querySelector(".header-middle-right-item.close").style.display = "block";
            let liItem = document.querySelectorAll(".header-middle-right-item.open");
            for(let i = 0; i < liItem.length; i++) {
                liItem[i].style.setProperty("display", "none", "important")
            }
        }