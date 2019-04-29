import React, { Component } from "react";
import Context from "../Context";
import GalleryItemsPage from "../screens/GalleryPage/GalleryPage";

interface IState {
    galleryItems: ArtProduct[];
}

class GalleryItemsContainer extends Component<{}, IState> {
    constructor(props: any) {
        super(props);
        this.state = {
            galleryItems: []
        };
    }

    componentDidMount() {
        this.setState({ galleryItems: this.context.galleryItems });
    }

    componentDidUpdate(prevProps: any) {
        if (prevProps === this.props) return;

        this.setState({ galleryItems: this.context.galleryItems });
    }

    render() {
        return <GalleryItemsPage products={this.state.galleryItems} />
    }
}
GalleryItemsContainer.contextType = Context;

export default GalleryItemsContainer;
