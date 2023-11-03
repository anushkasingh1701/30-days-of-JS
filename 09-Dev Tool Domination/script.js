
//An array of objects:-
const dogs = [{ name: 'Snickers', age: 2 }, { name: 'hugo', age: 8 }, { name: 'Zayn', age: 10 } ];

//a function to style element p
function makeGreen() {
  const p = document.querySelector('p');
  p.style.color = '#BADA55';
  p.style.fontSize = '50px';
}

// Regular
console.log('hello');

// Interpolated
console.log('Hello I am a %s string!', 'poop')

// Styled
console.log("%c I am some great text", 'font-size:50px; background:pink; color: white; text-shadow: 3px 3px 0 black ')

// warning!
console.warn("Don't do");

// Error :|
console.error("Shit!")

// Info
console.info("That's important")

// Testing
const p = document.querySelector('p');
console.assert(p.classList.contains('B'), 'That is wrong');

// clearing
console.clear();

// Viewing DOM Elements
console.log(p);
console.dir(p)

// Grouping together
dogs.forEach(dog => {
  console.groupCollapsed(`${dog.name}`)
  console.log(`This is ${dog.name}`);
  console.log(`${dog.name} is ${dog.age} years old.`);
  console.groupEnd(`${dog.name}`)
})

// counting
console.count('lisa');
console.count('lisa');
console.count('lisa');

// timing
console.time('fetching data');
fetch('https://api.github.com/users/wesbos')
.then(data => data.json())
.then(data => {
  console.timeEnd('fetching data');
  console.log(data);
})

