async function loadComponent(id, file) {
  try {
    // Determinar ruta base según dónde se encuentre la página
    const path = location.pathname.includes("/pages/") ? "" : "pages/";
    const res = await fetch(path + file);
    if (!res.ok) throw new Error("Archivo no encontrado");
    const html = await res.text();
    document.getElementById(id).innerHTML = html;
  } catch (err) {
    console.error("Error cargando", file, err);
  }
}

loadComponent("header", "header.html");
loadComponent("footer", "footer.html");
