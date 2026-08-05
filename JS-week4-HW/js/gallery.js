function upDate(previewPic) {
  console.log("Event triggered: Updating image preview");
  console.log("Alt text:", previewPic.alt);
  console.log("Image source:", previewPic.src);

  let imageDiv = document.getElementById("image");
  imageDiv.innerHTML = previewPic.alt;
  imageDiv.style.backgroundImage = "url('" + previewPic.src + "')";
}

function undo() {
  console.log("Event triggered: Resetting image preview");
  let imageDiv = document.getElementById("image");
  imageDiv.style.backgroundImage = "url('')";
  imageDiv.innerHTML = "Hover over or tab to an image below to display here.";
}

function addTabFocus() {
  console.log("Page loaded: Adding tabindex attributes to images");
  let images = document.querySelectorAll(".preview");

  for (let i = 0; i < images.length; i++) {
    images[i].setAttribute("tabindex", "0");
  }
}
