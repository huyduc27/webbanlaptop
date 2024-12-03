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
<<<<<<< HEAD


        const products = [
            { id: 1, name: 'Sản phẩm 1' },
            { id: 2, name: 'Sản phẩm 2' },
            { id: 3, name: 'Sản phẩm 3' },
            { id: 4, name: 'Sản phẩm 4' },
            { id: 5, name: 'Sản phẩm 5' },
            { id: 6, name: 'Sản phẩm 6' },
            { id: 7, name: 'Sản phẩm 7' },
            { id: 8, name: 'Sản phẩm 8' },
            { id: 9, name: 'Sản phẩm 9' },
            { id: 10, name: 'Sản phẩm 10' },
            { id: 11, name: 'Sản phẩm 11' },
        ];

        const itemsPerPage = 5;
        let currentPage = 1;

        const searchButton = document.getElementById('searchButton');
        const searchInput = document.getElementById('searchInput');
        const resultsContainer = document.getElementById('results');
        const paginationContainer = document.getElementById('pagination');

        function renderResults(filteredProducts) {
            resultsContainer.innerHTML = '';
            const startIndex = (currentPage - 1) * itemsPerPage;
            const endIndex = startIndex + itemsPerPage;
            const paginatedProducts = filteredProducts.slice(startIndex, endIndex);

            if (paginatedProducts.length === 0) {
                resultsContainer.innerHTML = '<p>Không tìm thấy sản phẩm nào.</p>';
            } else {
                paginatedProducts.forEach(product => {
                    const productDiv = document.createElement('div');
                    productDiv.className = 'product';
                    productDiv.textContent = product.name;
                    resultsContainer.appendChild(productDiv);
                });
            }
        }

        function renderPagination(totalItems) {
            paginationContainer.innerHTML = '';
            const totalPages = Math.ceil(totalItems / itemsPerPage);

            for (let i = 1; i <= totalPages; i++) {
                const button = document.createElement('button');
                button.textContent = i;
                button.disabled = i === currentPage;
                button.className = i === currentPage ? 'disabled' : '';
                button.addEventListener('click', () => {
                    currentPage = i;
                    performSearch();
                });
                paginationContainer.appendChild(button);
            }
        }

        function performSearch() {
            const query = searchInput.value.trim().toLowerCase();
            const filteredProducts = products.filter(product =>
                product.name.toLowerCase().includes(query)
            );
            renderResults(filteredProducts);
            renderPagination(filteredProducts.length);
        }

        searchButton.addEventListener('click', () => {
            currentPage = 1;
            performSearch();
        });
=======
const addToCartButton = document.querySelector('.add-to-cart');
const notification = document.querySelector('.notification');

addToCartButton.addEventListener('click', () => {
    notification.style.display = 'block';
    // Thêm logic để ẩn thông báo sau một khoảng thời gian
    setTimeout(() => {
        notification.style.display = 'none';
    }, 2000);
});
>>>>>>> 9a1b8147963250f72777d41aaa40e48a87de45e1
