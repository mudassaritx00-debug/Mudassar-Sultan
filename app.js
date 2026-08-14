document.addEventListener("DOMContentLoaded", () => {
  const photoGrid = document.getElementById("photoGrid");
  const videoGrid = document.getElementById("videoGrid");

  for (let i = 1; i <= 20; i++) {
    if (photoGrid) {
      const card = document.createElement("div");
      card.className = "media-card";
      card.innerHTML = `
        <img src="images/photo${i}.jpg" alt="Mudassar photo ${i}"
             onerror="this.parentElement.classList.add('missing')">
        <span>Photo ${i}</span>`;
      photoGrid.appendChild(card);
    }

    if (videoGrid) {
      const card = document.createElement("div");
      card.className = "video-card";
      card.innerHTML = `
        <video controls preload="metadata">
          <source src="videos/video${i}.mp4" type="video/mp4">
          Your browser does not support video.
        </video>
        <span>Video ${i}</span>`;
      videoGrid.appendChild(card);
    }
  }
});