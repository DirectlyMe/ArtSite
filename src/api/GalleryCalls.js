import axios from 'axios'

export function getGalleryItems() {
	return new Promise((resolve, reject) => {
		axios
			.get('http://192.168.1.120:8080/gallery/getGallery')
			.then(response => resolve(response.data))
			.catch(err => reject(err))
	})
}

export function getSingleItem(itemId) {
	return new Promise((resolve, reject) => {
		axios
			.get(`http://192.168.1.120:8080/gallery/getGalleryItem/${itemId}`)
			.then(response => resolve(response.data))
			.catch(err => reject(err))
	})
}
