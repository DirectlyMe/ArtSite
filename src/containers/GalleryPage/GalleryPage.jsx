import React from 'react';
import NavBarContainer from '../NavBarContainer/NavBarContainer'
import GalleryItemsContainer from '../GalleryItemsContainer/GalleryItemsContainer'
import Footer from '../../components/Footer/Footer'
import PageHeading from '../../components/PageHeading/PageHeading';


function GalleryPage() {
    return (  
            <div>
                <NavBarContainer />
                <PageHeading text={'Gallery'} />
                <GalleryItemsContainer />
                <Footer />
            </div>
        );
}

export default GalleryPage;