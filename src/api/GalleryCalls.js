import { serverConfig as config } from "../config/serverConfig";

export async function getGalleryItems() {
    try {
        let response;
        if (process.env.NODE_ENV === "development") {
            response = await fetch(`${config.IP}:${config.PORT}/gallery/get-gallery`, {
                method: "GET",
                mode: "cors",
                credentials: "same-origin"
            });
        } else {
            response = await fetch(`${config.IP}/api/gallery/get-gallery`, {
                method: "GET",
                mode: "cors",
                credentials: "same-origin"
            });
        }
        return await response.json();
    } catch (err) {
        return err;
    }
}

export async function getSingleItem(itemId) {
    try {
        let response;
        
        if (process.env.NODE_ENV === "development") { 
            response = await fetch(`${config.IP}:${config.PORT}/gallery/getGalleryItem/${itemId}`);
        } else {
            response = await fetch(`${config.IP}/api/gallery/getGalleryItem/${itemId}`);
        }
        
        return await response.json();
    } catch (err) {
        return err;
    }
}

export async function getFeaturedItems() {
    try {
        let response;

        if (process.env.NODE_ENV === "development") { 
            response = await fetch(`${config.IP}:${config.PORT}/gallery/get-featured`, {
                method: "GET",
                mode: "cors",
                credentials: "same-origin"
            });
        } else {
            response = await fetch(`${config.IP}/api/gallery/get-featured`, {
                method: "GET",
                mode: "cors",
                credentials: "same-origin"
            });
        }

        return await response.json();
    } catch (err) {
        return err;
    }
}
