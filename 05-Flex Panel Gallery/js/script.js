
    const panels = document.querySelectorAll('.panel');

    //this function will add .open class to panel
    function toggleOpen(){
      // console.log('hello');
      this.classList.toggle('open');
    }

    //this function will toggle .open-active class to pane so that 
    //first and last word comes back to original position
    function toggleActive(e){
      // console.log(e.propertyName);
        if(e.propertyName.includes('flex')){
            //checks if a css transition property ending on the 
            //element contains the string 'flex'
          this.classList.toggle('open-active');
          //toggle the .open-active class to that panel
        
      }
    }
    
    //on click event the toggleOpen will be called to expand the panel
    panels.forEach(panel => panel.addEventListener('click', toggleOpen));

    //when a css transition has ended on any of these elements the toggleActive function is called
    panels.forEach(panel => panel.addEventListener('transitionend', toggleActive));
 
    //CONCEPTS
    //The CLASSLIST property returns the CSS classnames of an element.
    //toggle()	Toggles between tokens in the list

  