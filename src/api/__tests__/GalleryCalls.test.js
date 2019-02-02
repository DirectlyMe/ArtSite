import * as galleryCalls from "../GalleryCalls";

describe("Retrieves gallery item/items from server", () => {
    it("Gets gallery items", async () => {
        const galleryItems = await galleryCalls.getGalleryItems();
        expect(galleryItems.length).toBeGreaterThan(0);
    });

    it("Gets a single gallery item", async () => {
        const galleryItem = await galleryCalls.getSingleItem(7);
        expect(galleryItem).toBeDefined();
    });
});