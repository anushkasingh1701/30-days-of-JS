
    function debounce(func, wait = 20, immediate = true) {
      var timeout;
      return function() {
        var context = this, args = arguments;
        var later = function() {
          timeout = null;
          if (!immediate) func.apply(context, args);
        };
        var callNow = immediate && !timeout;
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
        if (callNow) func.apply(context, args);
      };
    }

    const slideImages = document.querySelectorAll('.slide-in');
    
    function checkSlide(e){
      slideImages.forEach(slideImages => {
        //half way through the image
        const slideAt = (window.scrollY + window.innerHeight) - slideImages.height/2;
        //bottom of the image
        const imageBottom = slideImages.offsetTop + slideImages.height;
        const isHalfShown = slideAt > slideImages.offsetTop;
        const isNotScrolledPast = window.scrollY < imageBottom;
        if(isHalfShown && isNotScrolledPast){
          slideImages.classList.add('active');
        } else{
          slideImages.classList.remove('active');
        }
      })
    }
    window.addEventListener('scroll', checkSlide)
 