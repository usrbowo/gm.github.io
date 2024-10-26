let image_choice = [
    '1.jpg','2.jpg','3.jpg','4.jpg','5.jpg','6.jpg','7.jpg','8.jpg','9.jpg','10.jpg','11.jpg','12.jpg','13.jpg','14.jpg','15.jpg','16.jpg','17.jpg','18.jpg','19.jpg',
    '20.jpg','21.jpg','22.jpg','23.jpg','24.jpg','25.jpg','26.jpg','27.jpg','28.jpg','29.jpg','30.jpg','31.jpg','32.jpg','33.jpg','34.jpg','35.jpg','36.jpg','37.jpg',
    '38.jpg','39.jpg','40.jpg','41.jpg','42.jpg','43.jpg','44.jpg','45.jpg','46.jpg','47.jpg','48.jpg','49.jpg'
];

function get_random_image() {
    let random_index = Math.floor(Math.random() * image_choice.length);
    let selected_image = image_choice[random_index];

    document.getElementById('image').src = `./image/${selected_image}`;
};

const images = [
  { src: "image/1.jpg", name: "tabemasu" },
  { src: "image/2.jpg", name: "nomimasu" },
  { src: "image/3.jpg", name: "kaimasu" },
  { src: "image/4.jpg", name: "hanashimasu" },
  { src: "image/5.jpg", name: "kikimasu" },
  { src: "image/6.jpg", name: "mimasu" },
  { src: "image/7.jpg", name: "nemasu" },
  { src: "image/8.jpg", name: "asobimasu" },
  { src: "image/9.jpg", name: "kaerimasu" },
  { src: "image/10.jpg", name: "kimasu" },
  { src: "image/11.jpg", name: "ikimasu" },
  { src: "image/12.jpg", name: "okimasu" },
  { src: "image/13.jpg", name: "tsukurimasu" },
  { src: "image/14.jpg", name: "isogimasu" },
  { src: "image/15.jpg", name: "utaimasu" },
  { src: "image/16.jpg", name: "arimasu" },
  { src: "image/17.jpg", name: "kashimasu" },
  { src: "image/18.jpg", name: "oshiemasu" },
  { src: "image/19.jpg", name: "waraimasu" },
  { src: "image/20.jpg", name: "kangaemasu" },
  { src: "image/21.jpg", name: "kirimasu" },
  { src: "image/22.jpg", name: "sagashimasu" },
  { src: "image/23.jpg", name: "tsukaimasu" },
  { src: "image/24.jpg", name: "tetsudaimasu" },
  { src: "image/25.jpg", name: "sumimasu" },
  { src: "image/26.jpg", name: "kanjimasu" },
  { src: "image/27.jpg", name: "mochimasu" },
  { src: "image/28.jpg", name: "tachimasu" },
  { src: "image/29.jpg", name: "omoimasu" },
  { src: "image/30.jpg", name: "ugokimasu" },
  { src: "image/31.jpg", name: "iremasu" },
  { src: "image/32.jpg", name: "shimasu" },
  { src: "image/33.jpg", name: "negaimasu" },
  { src: "image/34.jpg", name: "sukimasu" },
  { src: "image/35.jpg", name: "kimemasu" },
  { src: "image/36.jpg", name: "araimasu" },
  { src: "image/37.jpg", name: "shinimasu" },
  { src: "image/38.jpg", name: "wakarimasu" },
  { src: "image/39.jpg", name: "sawarimasu" },
  { src: "image/40.jpg", name: "oboemasu" },
  { src: "image/41.jpg", name: "kikimasu" },
  { src: "image/42.jpg", name: "machimasu" },
  { src: "image/43.jpg", name: "kaeru" },
  { src: "image/44.jpg", name: "mitsukemasu" },
  { src: "image/45.jpg", name: "suteru" },
  { src: "image/46.jpg", name: "sakeru" },
  { src: "image/47.jpg", name: "akemasu" },
  { src: "image/48.jpg", name: "akemasu" },
  { src: "image/49.jpg", name: "akemasu" },
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
  const imageElement = document.getElementById("imager");
  imageElement.src = images[currentImageIndex].src;
}

document.getElementById("BtnImage").addEventListener("click", function () {
  const inputName = document.getElementById("inputName").value;
  const messageElement = document.getElementById("message");

  if (inputName.toLowerCase() === images[currentImageIndex].name) {
    messageElement.textContent = "Benar! Gambar berikutnya...";
    currentImageIndex++;
    if (currentImageIndex < images.length) {
      loadImage();
      document.getElementById("inputName").value = "";
    } else {
      messageElement.textContent =
        "Selamat, Anda telah menyelesaikan semua gambar!";
    }
  } else {
    messageElement.textContent = "Salah! Coba ulangi.";
  }
});

// Load gambar pertama saat halaman dibuka
loadImage();
