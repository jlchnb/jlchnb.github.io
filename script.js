const downloadOptions = document.getElementById("download-options");
const isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);
const background = document.querySelector('.background');
const stepsSection = document.querySelector('.steps');

const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        stepsSection.classList.add('visible');
      }
    });
  });

  observer.observe(stepsSection);

window.addEventListener('scroll', () => {
    const scrollPosition = window.scrollY; 
    background.style.transform = `translateY(${scrollPosition * 0.1}px)`;
  });

if (isMobile) {
  downloadOptions.innerHTML = `
    <p>Descarga la app gratis<br>
      y no te pierdas de nada!</p>
    <button onclick="window.location.href='https://drive.google.com/file/d/1H07UKUbW_o-ASS5g9XvIMFnKvlf_C9z7/view?usp=sharing'">Descargar APK</button>
  `;
} else {
  downloadOptions.innerHTML = `
    <p>Escanea el código QR con tu teléfono para descargar la app:</p>
    <div class="qr-code">
      <img src="assets/qrcode-generado.png" alt="Código QR">
    </div>
  `;
}