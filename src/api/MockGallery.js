let roses = require('../Images/Roses.jpg')
let jump = require('../Images/Jump.jpg')
let abstract = require('../Images/abstract.jpg')

export function getGalleryItems() {
    return [
        {
            id: '12345',
            imagePath: roses,
            title: 'Beautiful Roses',
            description: 'test description'
        },
        {
            id: '23451',
            imagePath: jump,
            title: 'Lorem Ipsum',
            description: 'Lorem Ipsum Opsem'
        },
        {
            id: '23421',
            imagePath: abstract,
            title: 'Lorem Ipsum',
            description: 'Lorem Ipsum Opsem'
        },
    ]
}
