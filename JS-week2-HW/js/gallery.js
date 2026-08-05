function upDate(previewPic) {
  // 1. Console log to verify event trigger
  console.log("Event triggered: Hovering over image");

  // 2. Print information about previewPic (alt and src)
  console.log("Alt text:", previewPic.alt);
  console.log("Image source:", previewPic.src);

  // 3. Change text of the element with id 'image'
  let imageDiv = document.getElementById("image");
  imageDiv.innerHTML = previewPic.alt;

  // 4. Change background image of the element with id 'image'
  imageDiv.style.backgroundImage = "url('" + previewPic.src + "')";
}

function undo() {
  // 1. Reset background image to empty url('')
  let imageDiv = document.getElementById("image");
  imageDiv.style.backgroundImage = "url('')";

  // 2. Reset text back to original text
  imageDiv.innerHTML = "Hover over an image below to display here.";
}
