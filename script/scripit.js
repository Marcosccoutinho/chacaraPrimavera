// Inicialização do Swiper
const photoSwiper = new Swiper('.photo-carousel', {
  slidesPerView: 1,
  spaceBetween: 30,
  loop: true,
  autoplay: {
    delay: 3000,
    disableOnInteraction: false,
  },
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
});

const swiper = new Swiper('.swiper', {
  slidesPerView: 1,
  spaceBetween: 30,
  loop: true,
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  breakpoints: {
    640: {
      slidesPerView: 2,
    },
    968: {
      slidesPerView: 3,
    }
  }
});

// Initialize the holidays carousel
const feriadosSwiper = new Swiper('.feriados-swiper', {
  slidesPerView: 1,
  spaceBetween: 30,
  loop: true,
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  breakpoints: {
    640: {
      slidesPerView: 2,
    },
    968: {
      slidesPerView: 3,
    }
  }
});

// Scroll suave para as seções
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    const headerOffset = 80;
    const elementPosition = target.offsetTop;
    const offsetPosition = elementPosition - headerOffset;

    window.scrollTo({
      top: offsetPosition,
      behavior: "smooth"
    });
  });
});

// Formulário de contato
document.getElementById('contact-form').addEventListener('submit', function(e) {
  e.preventDefault();
  
  // Aqui você pode adicionar a lógica para enviar o formulário
  alert('Obrigado pelo contato! Em breve retornaremos.');
  this.reset();
});

// Animação de fade in para os elementos quando aparecem na tela
const observerOptions = {
  threshold: 0.1
};

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.style.opacity = 1;
      entry.target.style.transform = 'translateY(0)';
    }
  });
}, observerOptions);

document.querySelectorAll('section').forEach(section => {
  section.style.opacity = 0;
  section.style.transform = 'translateY(20px)';
  section.style.transition = 'all 0.5s ease-out';
  observer.observe(section);
});

// Add responsive navigation handling
const checkScreenSize = () => {
  const swiper = document.querySelector('.swiper').swiper;
  if (window.innerWidth < 768) {
    swiper.params.slidesPerView = 1;
  } else if (window.innerWidth < 968) {
    swiper.params.slidesPerView = 2;
  } else {
    swiper.params.slidesPerView = 3;
  }
  swiper.update();
};

window.addEventListener('resize', checkScreenSize);
window.addEventListener('load', checkScreenSize);

// Improve scroll performance on mobile
let ticking = false;
window.addEventListener('scroll', () => {
  if (!ticking) {
    window.requestAnimationFrame(() => {
      const header = document.querySelector('header');
      if (window.scrollY > 50) {
        header.classList.add('scrolled');
      } else {
        header.classList.remove('scrolled');
      }
      ticking = false;
    });
    ticking = true;
  }
});

// Initialize the map
function initMap() {
  const chacaraLocation = { lat: -23.614033, lng: -47.565988 }; // Replace with actual coordinates
  const map = new google.maps.Map(document.getElementById('map'), {
    zoom: 15,
    center: chacaraLocation,
    styles: [
      {
        featureType: 'all',
        elementType: 'all',
        stylers: [
          { saturation: 50 },
          { hue: '#2C5F2D' }
        ]
      }
    ]
  });
  
  const marker = new google.maps.Marker({
    position: chacaraLocation,
    map: map,
    title: 'Chácara Recanto Primavera'
  });
}

// Load Google Maps API
function loadGoogleMaps() {
  const script = document.createElement('script');
  script.src = script.src = script.src = `https://maps.googleapis.com/maps/api/js?key=AIzaSyCkXwSc8ZXQBxE0C4Jdq_FMqXqcb0blfrA&callback=initMap`;
  ;
  ;
  script.async = true;
  script.defer = true;
  document.head.appendChild(script);
}

window.onload = function() {
  loadGoogleMaps();
};