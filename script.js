// tooglebar and side bar
	const modal = document.querySelector('.sidebar');
	// const closemodal = document.querySelector('.close');

document.querySelector('#togglebar').addEventListener('click', function(){
  modal.classList.remove("hidden");
})

document.querySelector('.close').addEventListener('click', function(){
  modal.classList.add("hidden");
})

// alert('hhh');
