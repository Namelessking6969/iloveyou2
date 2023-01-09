function addPicture(src) {
    var img = document.createElement("img");
    img.src = src;
    document.body.appendChild(img);
  }
  
  addPicture("20200919_13638.jpg");
  addPicture("image2.jpg");
  addPicture("image3.jpg");