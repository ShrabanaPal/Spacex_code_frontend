const svg = document.querySelectorAll('img_container img');
const active = document.getElementsByClassName('active');

svg.addEventListener('click', ()=>{
    active.classList.toggle('show-menu');
});
   
   
   // JavaScript function to change the image
    function changeImage() {
        // Get all images
        let images = document.querySelectorAll('.image_container img');
        
        // Find the currently active image
        let activeIndex = Array.from(images).findIndex(img => img.classList.contains('active'));
        
        // Remove 'active' class from current image
        images[activeIndex].classList.remove('active');
        
        // Set 'active' class to the next image or back to the first image if it's the last one
        if (activeIndex === images.length - 1) {
            images[0].classList.add('active');
        } else {
            images[activeIndex + 1].classList.add('active');
        }
    }
