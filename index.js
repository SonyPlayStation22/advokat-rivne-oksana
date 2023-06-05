
const canvas = document.querySelector('#canvas1');

 
const context = canvas.getContext('2d');


context.canvas.width = window.innerWidth;
context.canvas.height = window.innerHeight;

let particleArray;

function Particle(x, y, directionX, directionY, size, color){
	this.x = x;
	this.y = y;
	this.directionX = directionX;
	this.directionY = directionY;
	this.size = size;
	this.color = color;
}


Particle.prototype.draw = function(){
	context.beginPath();
	context.arc(this.x, this.y, this.size, 0, Math.PI * 2, false);
	context.fillStyle = this.color;
	context.fill();
}

const particle1 = new Particle(10, 10, 1, 1, 20, 'white')


particle1.draw(); 


Particle.prototype.update = function(){

	if(this.x + this.size > canvas.width || this.x - this.size < 0){
		this.directionX = -this.directionX;
	}
	if(this.y + this.size > canvas.height ||this.y - this.size < 0){
		this.directionY = -this.directionY;
	}
	this.x += this.directionX;
	this.y += this.directionY;
	
	this.draw();
}


function init(){
	particleArray = [];
	for(let i=0; i < 55; i++){
		let size = Math.random() * 20;
		let x = Math.random() * (innerWidth - size * 2);
		let y = Math.random() * (innerHeight - size * 2);
		let directionX = (Math.random() * .4) - .2;
		let directionY = (Math.random() * .4) - .2;
		let color = "#FFF0F5";
		
		particleArray.push(new Particle(x, y, directionX, directionY, size, color));
		
	} 
}

// animation loop 
function animate(){
	requestAnimationFrame(animate);
	context.clearRect(0, 0, innerWidth, innerHeight);
	
	for(let i=0; i < particleArray.length; i++){
		particleArray[i].update();
	}
}

init();
animate();

//navbar
const toggleButton = document.getElementsByClassName('toggle-button')[0]
const navbarLinks = document.getElementsByClassName('navbar-links')[0]

toggleButton.addEventListener('click', () => {
  navbarLinks.classList.toggle('active')
});

//sendMail
/*function sendMail() {
    var params = {
      name: document.getElementById("name").value,
	  telNumber: document.getElementById("telNumber").value,
      gmail: document.getElementById("gmail").value,
      message: document.getElementById("message").value,
    };
  
    const serviceID = "service_ldk22rd";
    const templateID = "template_e71kg8w";
  
      emailjs.send(serviceID, templateID, params)
      .then(res=>{
          document.getElementById("name").value;
		  document.getElementById("telNumber").value;
          document.getElementById("gmail").value;
          document.getElementById("message").value;
          alert("Ваше повідомлення успішно надіслано!")
      })
      .catch(err=>console.log(err));
  
  }*/

  //accordion
  const accordion = document.querySelectorAll(".contentBox");

  for(let i = 0; i < accordion.length; i++){
	  accordion[i].addEventListener("click", function(){
		 this.classList.toggle("active");
	  });
  }

  //scrolling btn
  let btnTop = document.querySelector(".scrollTop");

  btnTop.addEventListener("click", function(){
	window.scrollTo({
		top: 0,
		behavior: "smooth"
	})
  })

  window.addEventListener("scroll", function(){
	if(window.scrollY > 700){
		btnTop.classList.add("isShowBtn");
	}else if(window.scrollY < 700){
		btnTop.classList.remove("isShowBtn");
	}
  })