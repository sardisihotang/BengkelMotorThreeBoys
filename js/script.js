// Toggle icon navbar
let menuIcon = document.querySelector("#menu-icon");
let navbar = document.querySelector(".navbar");

menuIcon.onclick = () => {
  menuIcon.classList.toggle("bx-x");
  navbar.classList.toggle("active");
};

// Scroll Section active link
let sections = document.querySelectorAll("section");
let navLinks = document.querySelectorAll("header nav a");

window.onscroll = () => {
  sections.forEach((sec) => {
    let top = window.scrollY;
    let offset = sec.offsetTop - 150;
    let height = sec.offsetHeight;
    let id = sec.getAttribute("id");

    if (top >= offset && top < offset + height) {
      navLinks.forEach((links) => {
        links.classList.remove("active");
        document
          .querySelector("header nav a[href*=" + id + "]")
          .classList.add("active");
      });
    }
  });

  //   Sticky navbar
  let header = document.querySelector("header");

  header.classList.toggle("sticky", window.scrollY > 100);

  //   Remove toggle icon and navbar when click navbar link (scroll)
  menuIcon.classList.remove("bx-x");
  navbar.classList.remove("active");
};

// Scroll Reveal
ScrollReveal({
  //   reset: true,
  distance: "80px",
  duration: 2000,
  delay: 200,
});

ScrollReveal().reveal(".home-content, .heading", { origin: "top" });
ScrollReveal().reveal(
  ".home-img, .services-container, .products-container, .location-container, .contact form",
  {
    origin: "bottom",
  }
);
ScrollReveal().reveal(".home-content h1,.about-img", {
  origin: "left",
});
ScrollReveal().reveal(".home-content p,.about-content", {
  origin: "right",
});

// Typed Js
const typed = new Typed(".multiple-text", {
  strings: ["BENGKEL MOTOR THREE BOYS."],
  typeSpeed: 100,
  backSpeed: 100,
  backDelay: 100,
  loop: true,
});

// Form Ke WhatsApp
document.getElementById("contactForm").addEventListener("submit", function (e) {
  e.preventDefault(); // Mencegah form submit default

  let name = document.getElementById("name").value.trim();
  let email = document.getElementById("email").value.trim();
  let phone = document.getElementById("phone").value.trim();
  let subject = document.getElementById("subject").value.trim();
  let message = document.getElementById("message").value.trim();

  // Cek jika ada yang kosong
  if (!name || !email || !phone || !subject || !message) {
    alert("Harap isi semua kolom terlebih dahulu!");
    return;
  }

  // Nomor WhatsApp tujuan (ganti dengan nomor Anda)
  let phoneNumber = "628127139974354"; // Format: 62 untuk Indonesia

  // Format pesan yang dikirim ke WhatsApp
  let whatsappMessage = `Halo, saya ${name}\n📧 Email: ${email}\n📞 Telepon: ${phone}\n🗒 Subjek: ${subject}\n\n${message}`;

  // Encode pesan agar URL-friendly
  let encodedMessage = encodeURIComponent(whatsappMessage);

  // Buat URL WhatsApp
  let whatsappURL = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;

  // Arahkan ke WhatsApp
  window.open(whatsappURL, "_blank");

  // Beri notifikasi sukses
  alert("Pesan berhasil dikirim ke WhatsApp!");

  // Reload halaman setelah user klik OK di alert
  location.reload();
});

// Live Chat
document
  .getElementById("livechat-button")
  .addEventListener("click", function (event) {
    document.getElementById("livechat-frame").style.display = "block";
    event.stopPropagation(); // Mencegah event klik menyebar ke elemen lain
  });

document.getElementById("close-chat").addEventListener("click", function () {
  document.getElementById("livechat-frame").style.display = "none";
});

// Tutup live chat jika user mengklik di luar area chat
document.addEventListener("click", function (event) {
  let chatFrame = document.getElementById("livechat-frame");
  let chatButton = document.getElementById("livechat-button");

  // Pastikan yang diklik bukan area chat atau tombol buka chat
  if (
    chatFrame.style.display === "block" &&
    !chatFrame.contains(event.target) &&
    !chatButton.contains(event.target)
  ) {
    chatFrame.style.display = "none";
  }
});
