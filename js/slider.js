// ---------------
// IMAGE SLIDER
//----------------

// When the page is loaded do this
$(document).ready(function(){

    // create a variable to image index
    var currentIndex = 0;

    // store the images in an array
    var items = $('.slider-container div');

    // create a variable for array length
    var itemLength = items.length;

    var autoSlide;

    slide();

    // create a function to cycle through items
    function cycleItems(){
        var item = $('.slider-container div').eq(currentIndex);
        items.hide();
        item.css('display', 'inline-block');
    }

    // auto slide the items
    function slide() {
        autoSlide = setInterval(function () {
            currentIndex += 1;
            if (currentIndex > itemLength - 1) {
                currentIndex = 0;
            }
            cycleItems();
        }, 8000);
    }

    // when next button is clicked
    $('.next').click(function () {
        currentIndex = currentIndex + 1;
        if (currentIndex > itemLength - 1) {
            currentIndex = 0;
        }
        cycleItems();
        slide();
    });

    // when previous button is clicked
    $('.previous').click(function () {
        clearInterval(autoSlide);
        currentIndex = currentIndex - 1;
        if (currentIndex < 0) {
            currentIndex = itemLength - 1;
        }
        cycleItems();
        slide();
    });
})


