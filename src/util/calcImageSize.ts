export function calcImageSize(viewWidth: number, viewHeight: number, imageWidth: number, imageHeight: number): [number, number] {
    if ((viewWidth + viewHeight) >= (imageWidth + imageHeight))
        return [imageWidth, imageHeight];

    const diff = (imageWidth + imageHeight) / (viewWidth + viewHeight);

    let newHeight = Math.floor(imageHeight / diff);
    let newWidth = Math.floor(imageWidth / diff);

    while (newWidth < viewWidth || newHeight < viewHeight) {
        newWidth = newWidth + 10;
        newHeight = newHeight + 10;
    }

    return [newWidth, newHeight];
}