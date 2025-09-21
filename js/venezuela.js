// Mostrar álbum al clickear portada

document.querySelectorAll(".album").forEach((album) => {
  album.addEventListener("click", () => {
    const albumId = `album-${album.dataset.album}`;
    document
      .querySelectorAll(".album-content")
      .forEach((a) => (a.style.display = "none"));
    document.getElementById(albumId).style.display = "block";
    window.scrollTo({ top: 0, behavior: "smooth" });
  });
});

document.querySelectorAll(".close-album").forEach((btn) => {
  btn.addEventListener(
    "click",
    () => (btn.parentElement.style.display = "none")
  );
});
