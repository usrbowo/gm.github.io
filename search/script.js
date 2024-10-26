const images = [
    { src: 'gambar1.jpg', name: 'ayam' },
    { src: 'gambar2.jpg', name: 'bayam' },
    { src: 'gambar3.jpg', name: 'gambar3' }
];

// Fungsi untuk mengacak array
function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
}

// Mengacak gambar
shuffleArray(images);

let currentImageIndex = 0;

function loadImage() {
    const imageElement = document.getElementById('image');
    imageElement.src = images[currentImageIndex].src;
}

document.getElementById('submitBtn').addEventListener('click', function () {
    const inputName = document.getElementById('inputName').value;
    const messageElement = document.getElementById('message');

    if (inputName.toLowerCase() === images[currentImageIndex].name) {
        messageElement.textContent = 'Benar! Gambar berikutnya...';
        currentImageIndex++;
        if (currentImageIndex < images.length) {
            loadImage();
            document.getElementById('inputName').value = '';
        } else {
            messageElement.textContent = 'Selamat, Anda telah menyelesaikan semua gambar!';
        }
    } else {
        messageElement.textContent = 'Salah! Coba ulangi.';
    }
});

// Load gambar pertama saat halaman dibuka
loadImage();
