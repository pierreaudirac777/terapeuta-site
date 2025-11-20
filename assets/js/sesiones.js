// assets/js/sesiones.js
(function () {
  const toggles = document.querySelectorAll('.more-toggle');

  function setExpanded(btn, panel, expanded) {
    btn.setAttribute('aria-expanded', String(expanded));
    panel.setAttribute('aria-hidden', String(!expanded));
    // Animación: medir contenido y ajustar max-height
    if (expanded) {
      const h = panel.scrollHeight;
      panel.style.maxHeight = h + 'px';
    } else {
      panel.style.maxHeight = '0px';
    }
  }

  toggles.forEach((btn) => {
    const panelId = btn.getAttribute('aria-controls');
    const panel = document.getElementById(panelId);
    if (!panel) return;

    // Estado inicial
    setExpanded(btn, panel, false);

    btn.addEventListener('click', () => {
      const expanded = btn.getAttribute('aria-expanded') === 'true';
      setExpanded(btn, panel, !expanded);
    });

    // Recalcula altura al redimensionar (por si cambia el layout)
    window.addEventListener('resize', () => {
      if (btn.getAttribute('aria-expanded') === 'true') {
        panel.style.maxHeight = panel.scrollHeight + 'px';
      }
    }, { passive: true });
  });
})();
