import axios from 'axios';

export function getGalleryItems() {
  return new Promise((resolve, reject) => {
    axios.get('http://localhost:8080/gallery/getGallery')
      .then(response => resolve(response.data))
      .catch(err => reject(err))
  })
}