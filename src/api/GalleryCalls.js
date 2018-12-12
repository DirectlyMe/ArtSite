import { serverConfig as config } from "../config/serverConfig";


export function getGalleryItems() {
  return fetch(`http://${config.IP}:${config.PORT}/gallery/get-gallery`, {
      method: "GET",
      mode: "cors",
      credentials: "same-origin"
    })
      .then(response => response.json())
      .catch(err => err);
}

export function getSingleItem(itemId) {
return fetch(
        `http://${config.IP}:${config.PORT}/gallery/getGalleryItem/${itemId}`
      )
      .then(response => response.json())
      .catch(err => err);
}
