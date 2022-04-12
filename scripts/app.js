// alert('Welcome')

window.onload = () => {
    const listings = Array.from(document.getElementsByClassName('listings'))

    //loop thru listings
listings.forEach(listing => handleSlider(listing))
}

// define function to handle slider
const handleSlider = listing => {
    const listingsGrid = listing.getElementsByClassName('listings-grid')[0]
    const arrowLeft = listing.getElementsByClassName('left')[0]
    const arrowRight = listing.getElementsByClassName('right')[0]

    if (!listingsGrid || !arrowLeft || arrowRight){
        console.log(listing)
        return
    }

    arrowCircleRight.addEventListener('click', e =>{
        // prevent default button behavior
        e.preventDefault()

        handleClassChange('right')
        
        listingsGrid.scrollTo({
            left: listingsGrid.offsetWidth,
            behaviour: 'smooth'
        })
    })

    arrowCircleLeft.addEventListener('click', e => {
        // prevent default button behavior
        e.preventDefault()

        handleClassChange('left')
        
        listingsGrid.scrollTo({
            left: 0,
            behaviour: 'smooth'
        })
    })

    const handleClassChange = direction => {

        if (direction == 'right') {
            arrowCircleRight.classList.remove('darker')
            arrowCircleLeft.classList.add('darker')
        } else if (direction == 'left'){
            arrowLeft.classList.remove('darker')
            arrowRight.classList.add('darker')
        }
    }
}