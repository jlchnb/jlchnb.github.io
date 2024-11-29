const downloadOptions = document.getElementById("dynamic-download-options");
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
  stepsSection.innerHTML = `
    <h2>¿Cómo obtenerla?</h2>
    <ol>
      <li>Descarga la app usando el botón de abajo.</li>
      <li>Habilita la instalación de apps desde fuentes desconocidas en tu dispositivo.</li>
      <li>Instala el archivo APK y ¡listo!</li>
    </ol>
    <div id="dynamic-download-options">
      <p>¡Es muy facil!</p>
      <button class="btn" onclick="window.location.href='https://drive.google.com/file/d/1ARttnESQcj7H0O_tCMl2siqZR7JGvwfq/view?usp=sharing'">
        <i class="fa fa-download"></i> Descargar APK
      </button>
    </div>
  `;
} else {
  stepsSection.innerHTML = `
    <h2>¿Cómo obtenerla?</h2>
    <ol>
      <li>Escanea el código QR con tu celular</li>
      <li>Habilita la instalación de apps desde fuentes desconocidas en tu dispositivo.</li>
      <li>Instala el archivo APK y ¡listo!</li>
    </ol>
    <div id="dynamic-download-options">
      <p>Escanea el código QR con tu teléfono para descargar la app:</p>
      <div class="qr-code">
        <img src="assets/frame.png" alt="Código QR">
      </div>
    </div>
  `;
}

document.addEventListener('DOMContentLoaded', function() {
  const carouselItems = document.querySelectorAll('.carousel-item');

  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
      }
    });
  }, {
    threshold: 0.5
  });
  
  carouselItems.forEach(item => {
    observer.observe(item);
  });
});