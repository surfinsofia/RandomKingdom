//check javascript working 
console.log('aloha');

//no magic, show quote
function nobtn () {
    alert('haha')
    }
    
//show white rabbit and quiz
function yesbtn () {
    document.getElementById("yes").onclick = 
        function fun() {  
            alert('Welcome, your task awaits')
        document.getElementById("yes").innerHTML = "Follow the white rabbit";   
        }  
.then

// Create a white rabbit element
const rabbit = document.createElement('img');
rabbit.src = "https://i.pinimg.com/originals/b8/25/e1/b825e1484a21bb183466a3890df21c39.jpg"; // Replace 'rabbit-image-url.jpg' with the actual URL of the rabbit image
rabbit.style.width = '100px';
rabbit.style.height = '100px';
rabbit.style.position = 'absolute';
rabbit.style.top = '50%';
rabbit.style.left = '50%';
rabbit.style.transform = 'translate(-50%, -50%)';
document.body.appendChild(rabbit);

// Function to make the rabbit jump randomly
function jumpRabbit() {
  const maxX = window.innerWidth - rabbit.offsetWidth;
  const maxY = window.innerHeight - rabbit.offsetHeight;
  const randomX = Math.floor(Math.random() * maxX);
  const randomY = Math.floor(Math.random() * maxY);
  rabbit.style.transform = `translate(${randomX}px, ${randomY}px)`;
}

// Event listener to make the rabbit jump when clicked
rabbit.addEventListener('click', () => {
  // Create fireworks elements
  const fireworks = document.createElement('div');
  fireworks.style.width = '100%';
  fireworks.style.height = '100%';
  fireworks.style.background = 'black';
  fireworks.style.position = 'fixed';
  fireworks.style.top = '0';
  fireworks.style.left = '0';
  fireworks.style.zIndex = '9999';
  document.body.appendChild(fireworks);

  // Remove fireworks after 3 seconds
  setTimeout(() => {
    document.body.removeChild(fireworks);
  }, 3000);
});

// Make the rabbit jump every 2 seconds
setInterval(jumpRabbit, 03000);





    };

