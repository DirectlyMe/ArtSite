import React from "react";
import { MemoryRouter } from "react-router-dom";
import GalleryScroller from "../GalleryScroller";
import renderer from "react-test-renderer";
import { getGalleryItems } from "../../../api/GalleryCalls";

describe("The GalleryScroller", () => {
    it("Renders as expected", async () => {
        const galleryItems = await getGalleryItems();
        const tree = renderer
            .create(
                <MemoryRouter>
                    <GalleryScroller
                        galleryItems={galleryItems}
                        height={window.innerHeight}
                    />
                </MemoryRouter>
            )
            .toJSON();

        expect(tree).toMatchSnapshot();
    });
});
