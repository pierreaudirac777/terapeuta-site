document.addEventListener('DOMContentLoaded', () => {
  // Toggle "Leer más"
  document.querySelectorAll('.more-toggle').forEach(btn => {
    btn.addEventListener('click', () => {
      const sel = btn.getAttribute('data-target');
      const box = document.querySelector(sel);
      if (box) box.classList.toggle('is-open');
    });
  });

  // Año en el footer
  const anio = document.getElementById('anio');
  if (anio) anio.textContent = new Date().getFullYear();
});
const blog = document.querySelector('main .blog-grid');
if (blog) {
  blog.addEventListener('click', (e) => {
    const a = e.target.closest('a'); 
    if (!a || !blog.contains(a)) return;
    // ... lógica del blog ...
  });
}
document.addEventListener('DOMContentLoaded', () => {
  // Toggle "Leer más"
  document.querySelectorAll('.more-toggle').forEach(btn => {
    btn.addEventListener('click', () => {
      const sel = btn.getAttribute('data-target');
      const box = document.querySelector(sel);
      if (box) box.classList.toggle('is-open'); 
    });
  }); 

  // Año en el footer
  const anio = document.getElementById('anio');
  if (anio) anio.textContent = new Date().getFullYear();

  // Lógica del blog
  const blog = document.querySelector('main .blog-grid');
  if (!blog) return;  // ✅ aquí sí se puede usar return porque estás dentro de una función (la del callback)
  blog.addEventListener('click', (e) => {
    const a = e.target.closest('a'); 
    if (!a || !blog.contains(a)) return;
    // ... lógica del blog ...
  });
}); 
document.addEventListener('DOMContentLoaded', () => {
  // ... aquí dejas lo que ya tenías: Leer más, año del footer, blog, etc. ...

  const form = document.getElementById('contact-form');
  if (!form) return; // Si no estamos en la página de contacto, salimos.

  const nameInput = form.querySelector('input[name="name"]');
  const phoneInput = form.querySelector('input[name="phone"]');
  const nameError = document.getElementById('name-error');
  const phoneError = document.getElementById('phone-error');

  form.addEventListener('submit', (e) => {
    let isValid = true;

    // Reset de mensajes
    if (nameError) nameError.textContent = '';
    if (phoneError) phoneError.textContent = '';

    // --- Validación del NOMBRE ---
    if (nameInput) {
      const nameValue = nameInput.value.trim();
      const nameRegex = /^[A-Za-zÁÉÍÓÚáéíóúÜüÑñ\s]{2,50}$/;

      if (!nameRegex.test(nameValue)) {
        isValid = false;
        if (nameError) {
          nameError.textContent = 'El nombre solo puede contener letras y espacios (mínimo 2 caracteres).';
        }
      }
    }

    // --- Validación del TELÉFONO (España) ---
    if (phoneInput) {
      const raw = phoneInput.value.trim();

      // Si está vacío, lo dejamos pasar (si quieres que sea obligatorio, cambia esto)
      if (raw !== '') {
        // Eliminamos espacios
        const sanitized = raw.replace(/\s+/g, '');

        // España:
        //   - Puede empezar con +34 o no
        //   - Luego 9 dígitos
        //   - Empezando por 6, 7, 8 o 9
        const esRegex = /^(\+34)?[6789]\d{8}$/;

        if (!esRegex.test(sanitized)) {
          isValid = false;
          if (phoneError) {
            phoneError.textContent = 'Introduce un teléfono válido de España (9 dígitos, con o sin +34).';
          }
        }
      }
    }

    // Si algo no es válido, bloqueamos el envío
    if (!isValid) {
      e.preventDefault();
    }
  });
});
