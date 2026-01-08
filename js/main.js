const WA_ADMIN = "6283854859219"; // GANTI DENGAN NOMOR WA ANDA

const LIST_PAKET = [
    { n: "RAM 1GB", p: "1.000" }, { n: "RAM 2GB", p: "2.000" },
    { n: "RAM 3GB", p: "3.000" }, { n: "RAM 4GB", p: "4.000" },
    { n: "RAM 5GB", p: "5.000" }, { n: "RAM 6GB", p: "6.000" },
    { n: "RAM 7GB", p: "7.000" }, { n: "RAM 8GB", p: "8.000" },
    { n: "RAM 9GB", p: "9.000" }, { n: "RAM 10GB", p: "10.000" },
    { n: "RAM UNLIMITED", p: "7.000" }
];

// 1. Render Catalog
const grid = document.getElementById('productGrid');
LIST_PAKET.forEach(item => {
    const card = document.createElement('div');
    card.className = 'card';
    card.innerHTML = `
        <h3>${item.n}</h3>
        <span class="price">Rp ${item.p}</span>
        <button class="btn btn-blue" style="padding:8px">Pilih</button>
    `;
    card.onclick = () => openOrder(item.n);
    grid.appendChild(card);
});

// 2. Split Screen Logic
function openOrder(namaPaket) {
    document.getElementById('order_paket').value = namaPaket;
    document.getElementById('masterWrapper').classList.add('split-active');
    window.scrollTo({ top: 0, behavior: 'smooth' });
}

function closeOrder() {
    document.getElementById('masterWrapper').classList.remove('split-active');
}

// 3. WhatsApp Logic
function processOrder() {
    const paket = document.getElementById('order_paket').value;
    const user = document.getElementById('order_username').value;
    const email = document.getElementById('order_email').value;
    const orderId = "KAEL-" + Math.floor(1000 + Math.random() * 9000);

    if(!user || !email) return alert("Harap isi semua data!");

    const text = `Halo admin KAEL-STORE,
Saya sudah melakukan pembayaran manual.

Order ID : ${orderId}
Username : ${user}
Email    : ${email}
Paket    : ${paket}

Bukti transfer terlampir.`;

    const url = `https://wa.me/${WA_ADMIN}?text=${encodeURIComponent(text)}`;
    window.open(url, '_blank');
}

// 4. Modal Info (FAQ/Policy)
const modal = document.getElementById('infoModal');
function showPage(type) {
    let content = "";
    if(type === 'faq') content = "<h2>FAQ</h2><p>Masa aktif 30 hari. Garansi penuh jika server mati.</p>";
    if(type === 'policy') content = "<h2>Privasi</h2><p>Data email hanya untuk pembuatan akun panel.</p>";
    
    document.getElementById('modalText').innerHTML = content;
    modal.style.display = 'block';
}

function closeModal() { modal.style.display = 'none'; }
