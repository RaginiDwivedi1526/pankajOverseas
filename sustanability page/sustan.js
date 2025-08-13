function toggleMenu() {
  const nav = document.getElementById("navLinks");
  nav.classList.toggle("show");
}

const materialsLogos = [
  "c1.jpg",
  "c2.jpg",
  "c3.jpg",
  "c4.jpg",
  "c5.jpg",
  "c6.png",
  "c7.png"
];

const environmentalLogos = [
  "cc1.jpg",
  "cc2.jpg",
  "cc3.jpg",
  "cc4.jpg"
];

const complianceLogos = [
  "cd1.jpg",
  "cd2.jpg",
  "cd3.jpg",
  "cd4.png",
  "cd5.jpg",
  "cd6.jpg"
];

const partnershipLogos = [
  "1.png",
  "2.png",
  "3.png",
  "4.png",
  "5.png",
  "6.png",
  "7.png",
  "8.png",
  "9.png"
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
