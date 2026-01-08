import React from 'react'
import { CardCarousel } from '../ui/card-carousel'

const CardCarouselParent = () => {
    const images = [
        { src: "/card1.webp", alt: "Image 1" },
        { src: "/card2.webp", alt: "Image 2" },
        { src: "/card3.webp", alt: "Image 3" },
    ]
    return (
        <div>
            <CardCarousel
                images={images}
                autoplayDelay={2000}
                showPagination={true}
                showNavigation={true}
            />
        </div>
    )
}

export default CardCarouselParent
