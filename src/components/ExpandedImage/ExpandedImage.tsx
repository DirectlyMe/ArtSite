
import React, { FunctionComponent } from "react";
import Context from "../../Context";
import "./styles.scss";

interface IExpandedImage {
    imageSrc: string,
    toggleExpandedScreenFunc: () => void;
}

const ExpandedImage: FunctionComponent<IExpandedImage> = ({ imageSrc, toggleExpandedScreenFunc }) => {
    return (
        <div className="expanded-image" onClick={() => toggleExpandedScreenFunc()}>
            <img
                src={imageSrc}
                className="expanded-image--image"
                alt="Project"
                onClick={() => toggleExpandedScreenFunc()}
            />
        </div>
    );
};

export default ExpandedImage;
