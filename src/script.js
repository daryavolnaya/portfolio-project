function open_photo(photo) {
  document.getElementById("big-photo").innerHTML =
    ("<img onclick='close_photo()' style='position: absolute;' src='" + photo + "'class='max-photo'>")
}

function close_photo() {
  document.getElementById("big-photo").innerHTML = ""
}