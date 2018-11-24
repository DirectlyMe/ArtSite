import axios from "axios";
import { serverConfig as config } from "../config/serverConfig";

export function getGalleryItems() {
  return new Promise((resolve, reject) => {
    axios
      .get(`http://${config.IP}:${config.PORT}/gallery/getGallery`)
      .then(response => resolve(response.data))
      .catch(err => reject(err));
  });
}

export function getSingleItem(itemId) {
  return new Promise((resolve, reject) => {
    axios
      .get(`http://${config.IP}:${config.PORT}/gallery/getGalleryItem/${itemId}`)
      .then(response => resolve(response.data))
      .catch(err => reject(err));
  });
}
