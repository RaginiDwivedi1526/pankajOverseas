function toggleMenu() {
  const nav = document.getElementById("navLinks");
  nav.classList.toggle("show");
}

const materialsLogos = [
  "img/c1.jpg",
  "img/c2.jpg",
  "img/c3.jpg",
  "img/c4.jpg",
  "img/c5.jpg",
  "img/c6.png",
  "img/c7.png"
];

const environmentalLogos = [
  "img/cc1.jpg",
  "img/cc2.jpg",
  "img/cc3.jpg",
  "img/cc4.jpg"
];

const complianceLogos = [
  "img/cd1.jpg",
  "img/cd2.jpg",
  "img/cd3.jpg",
  "img/cd4.png",
  "img/cd5.jpg",
  "img/cd6.jpg"
];

const partnershipLogos = [
  "img/1.png",
  "img/2.png",
  "img/3.png",
  "img/4.png",
  "img/5.png",
  "img/6.png",
  "img/7.png",
  "img/8.png",
  "img/9.png"
];

function loadLogos(containerId, logoList) {
  const container = document.getElementById(containerId);
  logoList.forEach(src => {
    const div = document.createElement('div');
    div.className = 'logo-card';
    const img = document.createElement('img');
    img.src = src;
    img.alt = "Certification Logo";
    div.appendChild(img);
    container.appendChild(div);
  });
}

loadLogos("materials-logos", materialsLogos);
loadLogos("environmental-logos", environmentalLogos);
loadLogos("compliance-logos", complianceLogos);
loadLogos("partnership-logos", partnershipLogos);

function toggleCollapse(element) {
  const content = element.nextElementSibling;
  content.style.display = content.style.display === "block" ? "none" : "block";
}

function validateForm() {
    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const subject = document.getElementById("subject").value.trim();
    const message = document.getElementById("message").value.trim();

    if (!name || !email || !subject || !message) {
        alert("Please fill in all required fields.");
        return false;
    }
    alert("Message sent successfully!");
    return true;
}
