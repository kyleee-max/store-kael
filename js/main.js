const WA_ADMIN = "6283854859219"; // INPUT NOMOR WA
const PACKAGES = [
    {id: 1, ram: "1GB", price: "1.000"}, {id: 2, ram: "2GB", price: "2.000"},
    {id: 3, ram: "3GB", price: "3.000"}, {id: 4, ram: "4GB", price: "4.000"},
    {id: 5, ram: "5GB", price: "5.000"}, {id: 6, ram: "6GB", price: "6.000"},
    {id: 7, ram: "7GB", price: "7.000"}, {id: 8, ram: "8GB", price: "8.000"},
    {id: 9, ram: "9GB", price: "9.000"}, {id: 10, ram: "10GB", price: "10.000"},
    {id: 0, ram: "UNLIMITED", price: "7.000"}
];

const grid = document.getElementById('grid');
const master = document.getElementById('master');

// Render Heavy-Duty Cards
PACKAGES.forEach(pkg => {
    const card = document.createElement('div');
    card.className = 'hd-card';
    card.innerHTML = `
        <h3>RAM ${pkg.ram}</h3>
        <span class="price">Rp ${pkg.price}</span>
        <div style="font-size: 0.7rem; color: #555;">R8 C4 • 30D</div>
    `;
    card.onclick = () => initOrder(pkg.ram, pkg.price);
    grid.appendChild(card);
});

function initOrder(name, price) {
    document.getElementById('p_name').value = `RAM ${name.toUpperCase()}`;
    document.getElementById('p_price').innerText = `Rp ${price}`;
    master.classList.add('active');
    window.scrollTo({top: 0, behavior: 'smooth'});
}

function abortOrder() {
    master.classList.remove('active');
}

// FUNGSI ALERT CUSTOM
function showAlert(message) {
    document.getElementById('alertMessage').innerText = message;
    document.getElementById('customAlert').style.display = 'flex';
}

function closeAlert() {
    document.getElementById('customAlert').style.display = 'none';
}

// UPDATE FUNGSI SEND ORDER
function sendOrder() {
    const paket = document.getElementById('p_name').value;
    const user = document.getElementById('p_user').value;
    const email = document.getElementById('p_email').value;
    const orderId = "KAEL-X" + Math.floor(100000 + Math.random() * 900000);

    if(!user || !email) {
        showAlert("ACCESS DENIED: Harap isi semua data sebelum melanjutkan!");
        return;
    }

    const msg = `[SYSTEM LOG - KAEL STORE]
Status: SUCCESSFUL PAYMENT
--------------------------
Order ID : ${orderId}
Username : ${user}
Email    : ${email}
Package  : ${paket}
--------------------------
Note: Bukti transfer sudah terlampir.`;

    window.open(`https://wa.me/${WA_ADMIN}?text=${encodeURIComponent(msg)}`, '_blank');
}

// UPDATE FUNGSI INFO
function showInfo(type) {
    if(type === 'faq') {
        showAlert("FAQ: Panel aktif 30 hari. Garansi penuh jika server mati mendadak.");
    } else if(type === 'garansi') {
        showAlert("GARANSI: Klaim garansi via WA dengan menyertakan bukti Order ID.");
    }
}
