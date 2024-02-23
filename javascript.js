let menusection = document.querySelector('.menu-section');
      document.querySelector('.menu-icon').onclick = () => {
        menusection.classList.toggle('show');
      }

      let sections = document.querySelectorAll('section');
      let navlinks = document.querySelectorAll('header nav a');
      window.onscroll = () => {
        sections.forEach(sec => {
          let top = window.scrollY;
          let offset = sec.offsetTop;
          let height = sec.offsetHeight;
          let id = sec.getAttribute('id');

          if (top >= offset && top < offset + height) {
            navlinks.forEach(links => {
              links.classList.remove('active');
              document.querySelector('header nav a [href*=' + id + ']').classList.add('active');
            });
          };
        });
      };

let sub10 = document.querySelector('.sb10');
let sub11 = document.querySelector('.sb11');
let sub12 = document.querySelector('.sb12');
let showtheme10 = document.querySelector('.show-theme10');
let showtheme11 = document.querySelector('.show-theme11');
let showtheme12 = document.querySelector('.show-theme12');

sub10.addEventListener('click', () => {
  showtheme10.classList.toggle('appear');
});

sub11.addEventListener('click', () => {
  showtheme11.classList.toggle('appear');
});

sub12.addEventListener('click', () => {
  showtheme12.classList.toggle('appear');
});

let m10 = document.querySelector('.show-theme10 .ad10');
m10.addEventListener('click', () => {
  window.location.href = "daiso10.html";
});

let m10h = document.querySelector('.show-theme10 .ah10');
m10h.addEventListener('click', () => {
  window.location.href = "hinhhoc10.html";
});

let m11 = document.querySelector('.show-theme11 .ad11');
m11.addEventListener('click', () => {
  window.location.href = "daisogiaitich11.html";
});

let m11h = document.querySelector('.show-theme11 .ah11');
m11h.addEventListener('click', () => {
  window.location.href = "hinhhoc11.html";
});

let m12 = document.querySelector('.show-theme12 .ad12');
m12.addEventListener('click', () => {
  window.location.href = "giaitich12.html";
});

let gt1 = document.querySelector('.subject .gt1');
gt1.addEventListener('click', () => {
  window.location.href = "giaitich1.html";
});


let gt2 = document.querySelector('.subject .gt2');
gt2.addEventListener('click', () => {
  window.location.href = "giaitich2.html";
});


let gt3 = document.querySelector('.subject .gt3');
gt3.addEventListener('click', () => {
  window.location.href = "giaitich3.html";
});


let dstt1 = document.querySelector('.subject .dstt1');
dstt1.addEventListener('click', () => {
  window.location.href = "dstt1.html";
});


let dstt2 = document.querySelector('.subject .dstt2');
dstt2.addEventListener('click', () => {
  window.location.href = "dstt2.html";
});


