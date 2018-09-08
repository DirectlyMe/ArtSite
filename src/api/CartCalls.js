import axios from 'axios'

export function addToCart(id) {
	axios
		.post(`http://localhost:8080/cart/additem/${id}`)
		.then(res => console.log(res))
}

export function getCart() {
	return new Promise((resolve, reject) => {
		axios
			.get(`http://localhost:8080/cart/getcart`)
			.then(response => resolve(response.data))
			.catch(err => reject(err))
	})
}

export function removeFromCart(id) {
	return new Promise((resolve, reject) => {
		axios.get(`http://localhost:8080/cart/deleteitem/${id}`)
	.then(res => resolve(res.data))
	.catch(err => reject(err))
	})
}
