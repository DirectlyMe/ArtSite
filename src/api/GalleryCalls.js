import { serverConfig as config } from "../config/serverConfig";

export async function getGalleryItems() {
    try {
        const response = await fetch(`${config.IP}/api/gallery/get-gallery`, {
            method: "GET",
            mode: "cors",
            credentials: "same-origin"
        });
        return await response.json();
    } catch (err) {
        return err;
    }
}

export async function getSingleItem(itemId) {
    try {
        const response = await fetch(`${config.IP}/api/gallery/getGalleryItem/${itemId}`);
        return await response.json();
    } catch (err) {
        return err;
    }
}

export async function getFeaturedItems() {
    try {
        const response = await fetch(`${config.IP}/api/gallery/get-featured`, {
            method: "GET",
            mode: "cors",
            credentials: "same-origin"
        });

        return await response.json();
    } catch (err) {
        return err;
    }
}
