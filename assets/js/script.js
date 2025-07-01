function generateRandomImages(nbPhotos) {

    for (index = 0; index < nbPhotos; index++) {
        let randomIndex = Math.floor(Math.random() * 100)

        document.getElementById("img-div").innerHTML += `
        <a class="images" href="https://picsum.photos/id/${randomIndex}/800/1200.webp" data-lightbox="example-set"
                data-title="Click the right half of the image to move forward."><img class="example-image"
                    src="https://picsum.photos/id/${randomIndex}/200/300.webp" alt="" /></a>
                    `
    }
}

// On appelle notre fonction pour la faire fonctionner
generateRandomImages(10)


// Scroll infini
window.addEventListener('scroll', () => { // Dès qu'il y a un scroll
    console.log(window.scrollY) //scrolled from top
    console.log(window.innerHeight) //visible part of screen
    if (window.scrollY + window.innerHeight >=
        document.documentElement.scrollHeight) {
        generateRandomImages(10);
    }
})


