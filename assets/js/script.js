let nbPhotos = 16



function generateRandomImages() {

    for (index = 1; index < nbPhotos; index++) {
        let randomIndex = Math.floor(Math.random() * 100)

        document.getElementById("img-div").innerHTML += `<a class="images" href="https://picsum.photos/id/${randomIndex}/200/300.webp" data-lightbox="example-set"
                data-title="Click the right half of the image to move forward."><img class="example-image"
                    src="https://picsum.photos/id/${randomIndex}/200/300.webp" alt="" /></a>`
    }


    // for (index = 0; index < nbPhotos; index++) {
    //     document.getElementById("img-div").innerHTML += `<a class="images" href="https://picsum.photos/500/700?random=${index}" data-lightbox="example-set"
    //             data-title="Click the right half of the image to move forward."><img class="example-image"
    //                 src="https://picsum.photos/500/700?random=${index}" alt="" /></a>`
    // }
}






generateRandomImages()


// // for (let index = 0; index < word.length; index++) {
// document.getElementById("guessWord").innerHTML += `
//     <div id="letter-${index}" class="letter"></div>