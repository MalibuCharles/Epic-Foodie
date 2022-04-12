alert('Welcome')

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

    arrowRight.addEventListener('click', e =>{
        // prevent default button behavior 
    })
}