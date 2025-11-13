// List all images in your Pictures/ folder
const photos = [
  "20200919_133638.jpg",
  "20200928_125312.jpg",
  "20200928_125317.jpg",
  "20210203_214526.jpg",
  "20210516_170301.jpg",
  "20210516_170305.jpg",
  "20220101_153553.jpg",
  "Alone.jpg",
  "FB_IMG_1664900855785.jpg",
  "FB_IMG_1664900880231.jpg",
  "FB_IMG_1664900885648.jpg",
  "FB_IMG_1664900891331.jpg",
  "FB_IMG_1664900894113.jpg",
  "FB_IMG_1664900900161.jpg",
  "FB_IMG_1664900903463.jpg",
  "jrandmywife.jpg",
  "KissingForehead.jpg",
  "mywifeandkids.jpg",
  "OliHandUp.jpg",
  "Selfiewithbasket.jpg",
  "WeddingFamily.jpg",
  "WithAuntNessa.jpg",
  "WithJim.jpg",
  "1000000089.jpg"
];

// Function to create each photo element
function addPicture(src) {
  const gallery = document.getElementById("photo-gallery");
  const photoDiv = document.createElement("div");
  photoDiv.className = "photo";

  const img = document.createElement("img");
  img.src = `Pictures/${src}`;   // reference your folder here
  img.alt = "Precious memory";
  img.loading = "lazy";          // lazy-load for performance

  photoDiv.appendChild(img);
  gallery.appendChild(photoDiv);
}

// Dynamically add all photos
photos.forEach(photo => addPicture(photo));
