//selects input elements with class=controls
//querrySelector stores elements in array like Node-list
const inputs = document.querySelectorAll('.controls input'); 

function handleUpdate(){
    // function to update value of css variables as per inputs
  const suffix = this.dataset.sizing || '';  // add unit as pixel

  //sets the css variable value using style.setproperty
  //.name directs to current element
  document.documentElement.style.setProperty(`--${this.name}`, this.value + suffix);
                                                               //value + pixels
}
//for taking inputs:-
inputs.forEach(input => input.addEventListener('change', handleUpdate));//takes input on change event
inputs.forEach(input => input.addEventListener('mousemove', handleUpdate));//takes inputs on mousemove event

