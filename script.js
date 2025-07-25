document.addEventListener('DOMContentLoaded', () => {
    // --- Data Produk ---
    const products = [
        // Konsol
        {
            id: 'ps5-disk',
            type: 'console',
            name: 'PlayStation 5 Disk Edition',
            image: 'https://images.tokopedia.net/img/cache/700/VqbcmM/2023/2/27/9014a585-c8f1-4b46-bebe-4a2e69b92902.jpg',
            price: 150000,
            description: 'Konsol PS5 standar dengan drive disk, nikmati game fisik & digital.'
        },
        {
            id: 'ps5-digital',
            type: 'console',
            name: 'PlayStation 5 Digital Edition',
            image: 'https://awsimages.detik.net.id/visual/2023/10/11/ps5-playstationcom_169.png',
            price: 130000,
            description: 'Konsol PS5 versi digital ramping, khusus game unduhan.'
        },
        {
            id: 'ps4-pro',
            type: 'console',
            name: 'PlayStation 4 Pro',
            image: 'https://images.tokopedia.net/img/cache/700/OJWluG/2022/6/24/0b210adb-16a9-43b8-b47c-a1e33716ade4.jpg',
            price: 100000,
            description: 'PS4 Pro dengan performa 4K, grafis lebih tajam.'
        },
        {
            id: 'ps4-slim',
            type: 'console',
            name: 'PlayStation 4 Slim',
            image: 'https://images-cdn.ubuy.co.id/64c004160e5b630ac57e7c49-sony-playstation-4-500gb-slim-system.jpg',
            price: 80000,
            description: 'PS4 Slim, lebih ringkas, hemat daya, dan ringan.'
        },
        // Permainan
        {
            id: 'game-god-of-war',
            type: 'game',
            name: 'God of War Ragnarök',
            image: 'https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/2322010/header.jpg',
            price: 50000,
            description: 'Petualangan epik Kratos & Atreus di mitologi Nordik.'
        },
        {
            id: 'game-fifa',
            type: 'game',
            name: 'EA Sports FC 25',
            image: 'https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/2669320/ec3fb7747fd8080ef53d7686e0d98c5abe1f51f1/header.jpg',
            price: 40000,
            description: 'Game sepak bola realistis terbaru.'
        },
        {
            id: 'game-spiderman',
            type: 'game',
            name: 'Marvel\'s Spider-Man 2',
            image: 'https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/2651280/header.jpg',
            price: 55000,
            description: 'Bertarung sebagai Peter Parker & Miles Morales.'
        },
        {
            id: 'game-cod',
            type: 'game',
            name: 'Call of Duty: Modern Warfare III',
            image: 'https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/2519060/header.jpg',
            price: 45000,
            description: 'Game tembak-menembak militer intens.'
        },
        // Perangkat VR & Aksesoris
        {
            id: 'vr-psvr2',
            type: 'vr-accessory',
            name: 'PlayStation VR2',
            image: 'https://mms.businesswire.com/media/20230222005126/en/1718672/5/PSVR2_16X9.jpg',
            price: 70000,
            description: 'Headset VR generasi terbaru untuk PS5.'
        },
        {
            id: 'acc-dualsense',
            type: 'vr-accessory',
            name: 'DualSense Controller',
            image: 'https://eshop.hkcsl.com/on/demandware.static/-/Sites-master-hkt-hk/default/dwb97b9adb/images/4128511scol/4128511_1__2.jpg',
            price: 25000,
            description: 'Kontroler haptik canggih untuk PS5.'
        },
        {
            id: 'acc-dualshock4',
            type: 'vr-accessory',
            name: 'DualShock 4 Controller',
            image: 'https://plazakamera.com/wp-content/uploads/2023/08/Jual-PS4-DualShock-4-Wireless-Controller-Black-harga-terbaik.jpg',
            price: 20000,
            description: 'Kontroler standar untuk PS4.'
        },
        {
            id: 'acc-monitor',
            type: 'vr-accessory',
            name: 'Monitor Gaming 24"',
            image: 'https://www.static-src.com/wcsstore/Indraprastha/images/catalog/full/catalog-image/MTA-177785231/lg_lg_24gs60f-b_monitor_gaming_24-inch_ultra_gear_full_hd_180_hz_ips_1ms_-gtg-_hdr10_full02_ivlspdj1.jpeg',
            price: 60000,
            description: 'Monitor Full HD responsif untuk pengalaman gaming.'
        }
    ];

    // Mengambil data keranjang dari localStorage atau inisialisasi sebagai array kosong
    let cart = JSON.parse(localStorage.getItem('arcadiaCart')) || [];

    // --- Elemen DOM ---
    const consoleListDiv = document.getElementById('console-list');
    const gameListDiv = document.getElementById('game-list');
    const vrAccessoriesListDiv = document.getElementById('vr-accessories-list');
    const cartItemsDiv = document.getElementById('cart-items'); // Hanya di index.html
    const cartTotalSpan = document.getElementById('cart-total'); // Hanya di index.html
    const cartCountSpan = document.getElementById('cart-count'); // Di semua halaman
    const checkoutBtn = document.getElementById('checkout-btn'); // Hanya di index.html
    const emptyCartMessage = document.getElementById('empty-cart-message'); // Hanya di index.html
    const checkoutSection = document.getElementById('checkout-section'); // Hanya di index.html
    const cartSection = document.getElementById('cart'); // Hanya di index.html
    const checkoutForm = document.getElementById('checkout-form'); // Hanya di index.html
    const checkoutConfirmation = document.getElementById('checkout-confirmation'); // Hanya di index.html
    const backToCartBtn = document.getElementById('back-to-cart-btn'); // Hanya di index.html
    const continueShoppingBtn = document.getElementById('continue-shopping-btn'); // Hanya di index.html
    const exploreBtn = document.getElementById('exploreBtn'); // Hanya di index.html

    // --- Fungsi Bantuan ---
    function formatRupiah(amount) {
        return new Intl.NumberFormat('id-ID', {
            style: 'currency',
            currency: 'IDR',
            minimumFractionDigits: 0
        }).format(amount);
    }
    function updateCartDisplay() {
        // ... kode yang sudah ada untuk menampilkan item keranjang ...

        if (cartItemsDiv && cartTotalSpan && emptyCartMessage && checkoutBtn) { // Pastikan elemen ada
            // ... kode sebelumnya untuk menampilkan item ...

            // --- INI "TANGAN AJAIB" BARU UNTUK TOMBOL HAPUS DAN JUMLAH ---
            // Tambahkan event listener untuk tombol hapus di keranjang
            document.querySelectorAll('.remove-btn').forEach(button => {
                button.addEventListener('click', (event) => {
                    const productId = event.target.dataset.id;
                    removeFromCart(productId);
                });
            });

            // Tambahkan event listener untuk perubahan kuantitas
            document.querySelectorAll('.item-quantity').forEach(input => {
                input.addEventListener('change', (event) => {
                    const productId = event.target.dataset.id;
                    const newQuantity = parseInt(event.target.value);
                    updateCartQuantity(productId, newQuantity);
                });
            });
            // --- AKHIR DARI "TANGAN AJAIB" ---
        }
        // ... sisa kode updateCartDisplay() ...
    }

    function saveCart() {
        localStorage.setItem('arcadiaCart', JSON.stringify(cart));
    }

    function createProductCard(product) {
        const div = document.createElement('div');
        div.classList.add('product-item');
        div.innerHTML = `
            <img src="${product.image}" alt="${product.name}">
            <h3>${product.name}</h3>
            <p>${product.description}</p>
            <p class="price">${formatRupiah(product.price)} / Hari</p>
            <button class="btn primary-btn add-to-cart-btn" data-id="${product.id}">Tambah ke Keranjang</button>
        `;
        return div;
    }

    function renderProducts() {
        // Hanya render jika elemen penampungnya ada di halaman ini
        if (consoleListDiv) {
            consoleListDiv.innerHTML = ''; // Kosongkan dulu
            products.filter(p => p.type === 'console').forEach(product => {
                consoleListDiv.appendChild(createProductCard(product));
            });
        }

        if (gameListDiv) {
            gameListDiv.innerHTML = ''; // Kosongkan dulu
            products.filter(p => p.type === 'game').forEach(product => {
                gameListDiv.appendChild(createProductCard(product));
            });
        }

        if (vrAccessoriesListDiv) {
            vrAccessoriesListDiv.innerHTML = ''; // Kosongkan dulu
            products.filter(p => p.type === 'vr-accessory').forEach(product => {
                vrAccessoriesListDiv.appendChild(createProductCard(product));
            });
        }

        // Add event listeners for "Add to Cart" buttons
        document.querySelectorAll('.add-to-cart-btn').forEach(button => {
            button.addEventListener('click', (event) => {
                const productId = event.target.dataset.id;
                addToCart(productId);
            });
        });
    }

    function updateCartDisplay() {
        // Cek apakah elemen keranjang ada di halaman ini (hanya di index.html)
        if (cartItemsDiv && cartTotalSpan && emptyCartMessage && checkoutBtn) {
            cartItemsDiv.innerHTML = '';
            let total = 0;

            if (cart.length === 0) {
                emptyCartMessage.style.display = 'block';
                checkoutBtn.disabled = true;
            } else {
                emptyCartMessage.style.display = 'none';
                checkoutBtn.disabled = false;
                cart.forEach(item => {
                    const product = products.find(p => p.id === item.id);
                    if (product) {
                        const cartItemDiv = document.createElement('div');
                        cartItemDiv.classList.add('cart-item');
                        cartItemDiv.innerHTML = `
                            <img src="${product.image}" alt="${product.name}">
                            <div class="cart-item-details">
                                <h4>${product.name}</h4>
                                <p>${formatRupiah(product.price)} / Hari</p>
                            </div>
                            <div class="cart-item-actions">
                                <label for="qty-${item.id}">Qty:</label>
                                <input type="number" id="qty-${item.id}" min="1" value="${item.quantity}" data-id="${item.id}" class="item-quantity">
                                <button class="btn remove-btn" data-id="${item.id}"><i class="fas fa-trash-alt"></i> Hapus</button>
                            </div>
                        `;
                        cartItemsDiv.appendChild(cartItemDiv);
                        total += product.price * item.quantity;
                    }
                });
            }
            cartTotalSpan.textContent = formatRupiah(total);

            // Tambahkan event listener untuk tombol hapus di keranjang
            document.querySelectorAll('.remove-btn').forEach(button => {
                button.addEventListener('click', (event) => {
                    const productId = event.target.dataset.id;
                    removeFromCart(productId);
                });
            });

            // Tambahkan event listener untuk perubahan kuantitas
            document.querySelectorAll('.item-quantity').forEach(input => {
                input.addEventListener('change', (event) => {
                    const productId = event.target.dataset.id;
                    const newQuantity = parseInt(event.target.value);
                    updateCartQuantity(productId, newQuantity);
                });
            });
        }

        // Update cart count di header (ini ada di semua halaman)
        if (cartCountSpan) {
            let totalUniqueItems = cart.length; // Jumlah item unik di keranjang
            // Jika kamu ingin menghitung total quantity dari semua item, pakai ini:
            // let totalQuantity = cart.reduce((sum, item) => sum + item.quantity, 0);
            cartCountSpan.textContent = totalUniqueItems;
        }

        saveCart(); // Simpan keranjang setiap kali ada perubahan
    }

    function addToCart(productId) {
        const existingItem = cart.find(item => item.id === productId);
        if (existingItem) {
            existingItem.quantity++;
        } else {
            cart.push({ id: productId, quantity: 1 });
        }
        updateCartDisplay();
        alert('Produk berhasil ditambahkan ke keranjang!');
    }

    function updateCartQuantity(productId, newQuantity) {
        const itemIndex = cart.findIndex(item => item.id === productId);
        if (itemIndex > -1) {
            if (newQuantity > 0) {
                cart[itemIndex].quantity = newQuantity;
            } else {
                // Hapus item jika kuantitasnya menjadi 0 atau kurang
                cart.splice(itemIndex, 1);
            }
        }
        updateCartDisplay();
    }

    function removeFromCart(productId) {
        cart = cart.filter(item => item.id !== productId);
        updateCartDisplay();
        alert('Produk dihapus dari keranjang.');
    }

    // --- Event Listeners ---
    // Pastikan elemennya ada sebelum menambahkan event listener
    if (exploreBtn) {
        exploreBtn.addEventListener('click', () => {
            document.getElementById('consoles').scrollIntoView({ behavior: 'smooth' });
        });
    }

    if (checkoutBtn && cartSection && checkoutSection) {
        checkoutBtn.addEventListener('click', () => {
            cartSection.classList.add('hidden'); // Sembunyikan keranjang
            checkoutSection.classList.remove('hidden'); // Tampilkan form checkout
            checkoutConfirmation.style.display = 'none'; // Sembunyikan konfirmasi
            checkoutForm.style.display = 'block'; // Pastikan form checkout terlihat
            document.getElementById('checkout-section').scrollIntoView({ behavior: 'smooth' });

            // Atur tanggal minimal untuk input tanggal sewa agar tidak bisa memilih masa lalu
            const today = new Date();
            const yyyy = today.getFullYear();
            const mm = String(today.getMonth() + 1).padStart(2, '0'); // Months start at 0!
            const dd = String(today.getDate()).padStart(2, '0');
            const todayFormatted = `${yyyy}-${mm}-${dd}`;
            document.getElementById('start-date').min = todayFormatted;
            document.getElementById('end-date').min = todayFormatted;
        });
    }

    if (backToCartBtn && checkoutSection && cartSection) {
        backToCartBtn.addEventListener('click', () => {
            checkoutSection.classList.add('hidden'); // Sembunyikan form checkout
            cartSection.classList.remove('hidden'); // Tampilkan keranjang
            document.getElementById('cart').scrollIntoView({ behavior: 'smooth' });
        });
    }

    if (checkoutForm && checkoutConfirmation && checkoutSection) {
        checkoutForm.addEventListener('submit', (event) => {
            event.preventDefault(); // Mencegah reload halaman

            const nama = document.getElementById('nama').value;
            const email = document.getElementById('email').value;
            const telepon = document.getElementById('telepon').value;
            const alamat = document.getElementById('alamat').value;
            const startDate = document.getElementById('start-date').value;
            const endDate = document.getElementById('end-date').value;

            const start = new Date(startDate);
            const end = new Date(endDate);

            // Validasi tanggal
            if (start > end) {
                alert('Tanggal selesai sewa tidak boleh lebih awal dari tanggal mulai sewa.');
                return;
            }

            // Menghitung durasi sewa (dalam hari)
            const diffTime = Math.abs(end - start);
            const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24)) + 1; // +1 karena perhitungan inklusif

            let totalSewa = 0;
            const rentedItems = [];

            cart.forEach(item => {
                const product = products.find(p => p.id === item.id);
                if (product) {
                    const itemPriceForDuration = product.price * item.quantity * diffDays;
                    totalSewa += itemPriceForDuration;
                    rentedItems.push({
                        name: product.name,
                        quantity: item.quantity,
                        pricePerDay: product.price,
                        totalPrice: itemPriceForDuration,
                        durationDays: diffDays
                    });
                }
            });

            console.log('Pesanan dikirim:', {
                items: rentedItems,
                customer: { nama, email, telepon, alamat },
                rentalDates: { startDate, endDate, durationDays: diffDays },
                totalAmount: formatRupiah(totalSewa)
            });

            alert('Pesanan Anda berhasil diproses! Detail akan dikirimkan ke email Anda. Total sewa: ' + formatRupiah(totalSewa));

            // Setelah pesanan berhasil, kosongkan keranjang dan local storage
            cart = [];
            saveCart(); // Simpan keranjang kosong
            updateCartDisplay();
            checkoutForm.reset(); // Reset form

            // Tampilkan konfirmasi dan sembunyikan form
            checkoutForm.style.display = 'none';
            checkoutConfirmation.style.display = 'block';
        });
    }

    if (continueShoppingBtn) {
        continueShoppingBtn.addEventListener('click', () => {
            checkoutSection.classList.add('hidden'); // Sembunyikan bagian checkout
            // Ini akan kembali ke halaman utama dan otomatis scroll ke atas karena ada #hero di URL
            window.location.href = 'index.html#hero';
        });
    }

    // --- Inisialisasi ---
    // Panggil renderProducts() di semua halaman
    // Ini akan mengisi div produk yang kosong dan menambahkan event listener
    renderProducts();

    // Perbarui tampilan keranjang saat halaman dimuat (dari localStorage)
    updateCartDisplay();

    // Sembunyikan bagian checkout saat pertama kali dimuat (hanya di index.html)
    if (checkoutSection) {
        checkoutSection.classList.add('hidden');
    }
});