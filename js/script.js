const header = document.querySelector("header");

window.addEventListener("scroll", function(){
  header.classList.toggle("sticky", window.scrollY > 0);
});

<!--- Let menu = document.querySelector('#menu-icon'); --->
<!--- Let navbar = document.querySelector('.navbar') --->


menu.onclick = () => {
  menu.classList.toggle('bx-x');
  navbar.classList.toggle('open');
};

window.onscroll = () => {
  menu.classList.remove('bx-x');
  navbar.classList.remove('open');
};

const sr = ScrollReveal ({
  distance : '45px',
  duration : 2700,
  reset : true,
})

sr.reveal('.home-text',{ delay:350, origin:'left' });
sr.reveal('.home-img',{ delay:350, origin:'right' });

sr.reveal('.container, .about, .menu, .contact',{ delay:350, origin:'bottom' });
