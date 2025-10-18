const video = document.getElementById('video');
const canvas = document.getElementById('canvas');
const snap = document.getElementById('snap');
const download = document.getElementById('download');
const context = canvas.getContext('2d');

// Aktifkan kamera
navigator.mediaDevices.getUserMedia({ video: true })
  .then(stream => {
    video.srcObject = stream;
  })
  .catch(err => {
    alert("Kamera tidak dapat diakses 😢");
  });

// Ambil foto dari video
snap.addEventListener('click', () => {
  canvas.width = video.videoWidth;
  canvas.height = video.videoHeight;
  context.drawImage(video, 0, 0);
});

// Download foto
download.addEventListener('click', () => {
  const link = document.createElement('a');
  link.download = 'fotobooth.png';
  link.href = canvas.toDataURL();
  link.click();
});
