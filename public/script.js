jQuery( document ).ready( function( $ ) {
    particlesJS('particles-js', {
        "particles": {
            "number": {
                "value": 75,
                "density": {
                    "enable": false,
                    "value_area": 1500.2328774690454
                }
            },
            "color": {
                "value": "#ffffff"
            },
            "shape": {
                "type": "star",
                "stroke": {
                    "width": 0,
                    "color": "#000000"
                },
                "polygon": {
                    "nb_sides": 5
                },
                "image": {
                    "src": "img/github.svg",
                    "width": 100,
                    "height": 100
                }
            },
            "opacity": {
                "value": 0.5,
                "random": false,
                "anim": {
                    "enable": false,
                    "speed": 1,
                    "opacity_min": 0.1,
                    "sync": false
                }
            },
            "size": {
                "value": 3,
                "random": true,
                "anim": {
                    "enable": true,
                    "speed": 2.3976023976023977,
                    "size_min": 0.1,
                    "sync": false
                }
            },
            "line_linked": {
                "enable": false,
                "distance": 150,
                "color": "#ffffff",
                "opacity": 0.4,
                "width": 1
            },
            "move": {
                "enable": true,
                "speed": 1.7,
                "direction": "bottom",
                "random": true,
                "straight": false,
                "out_mode": "out",
                "bounce": false,
                "attract": {
                    "enable": false,
                    "rotateX": 1042.21783956259,
                    "rotateY": 2485.28869434156
                }
            }
        },
        "interactivity": {
            "detect_on": "canvas",
            "events": {
                "onhover": {
                    "enable": false,
                    "mode": "repulse"
                },
                "onclick": {
                    "enable": false,
                    "mode": "push"
                },
                "resize": true
            },
            "modes": {
                "grab": {
                    "distance": 400,
                    "line_linked": {
                        "opacity": 1
                    }
                },
                "bubble": {
                    "distance": 400,
                    "size": 40,
                    "duration": 2,
                    "opacity": 8,
                    "speed": 3
                },
                "repulse": {
                    "distance": 200,
                    "duration": 0.4
                },
                "push": {
                    "particles_nb": 4
                },
                "remove": {
                    "particles_nb": 2
                }
            }
        },
        "retina_detect": true
    });
    
    // Countdown Timer
    const countdown = document.getElementById('countdown');
    const weddingDate = new Date('February 21, 2025 00:00:00').getTime();
    
    var mainMode = true;
    
    const x = setInterval(function () {
        const now = new Date().getTime();
        const distance = weddingDate - now;
    
        const days = Math.floor(distance / (1000 * 60 * 60 * 24));
        const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((distance % (1000 * 60)) / 1000);
    
        countdown.innerHTML = `${days}d ${hours}h ${minutes}m ${seconds}s`;
    
        if (distance < 0) {
            clearInterval(x);
            countdown.innerHTML = "The big day is here!";
        }
    }, 1000);
    
    // music
    const muteButton = document.getElementById('muteButton');
    const soundIcon = document.getElementById('soundIcon');
    const backgroundAudio = document.getElementById('backgroundAudio');
    soundIcon.src = 'unmute.png'; // Change to the mute icon
    
    muteButton.addEventListener('click', function() {
        if (backgroundAudio.paused) {
            backgroundAudio.play();
            soundIcon.src = 'mute.png'; // Change to the mute icon
        } else {
            backgroundAudio.pause();
            soundIcon.src = 'unmute.png'; // Change to the unmute icon
        }
    });
    
    // Modal
    const modal = document.getElementById('myModal');
    const openModalButton = document.getElementById('openModalButton');
    const closeModalButton = document.querySelector('.modal .close');
    
    
    // Close the modal when clicking outside of the modal content
    window.onclick = function (event) {
        if (event.target === modal) {
            modal.style.display = 'none';
        }
    }
    
    // Info Modal
    const infoModal = document.getElementById('infoModal');
    const infoButton = document.getElementById('infoButton');
    const closeInfoButton = document.querySelector('#infoModal .close');
    
    $("#info_page").hide();
    $("#infoButton").click(function() {
        mainMode = !mainMode
        if (mainMode) {
            $("#main_page").fadeIn();
            $("#info_page").fadeOut();
        } else {
            $("#main_page").fadeOut();
            $("#info_page").fadeIn();
        }
        
      });
    
    window.onclick = function (event) {
        if (event.target === infoModal) {
            infoModal.style.display = 'none';
        }
    }
    
    // Background Image Cycling
    const backgroundImages = ['bg_blur1.png', 'bg_blur2.png', 'bg_blur3.png', 'bg_blur4.png', 'bg_blur5.png'];
    let currentIndex = -1;
    
    function changeBackgroundImage() {
        currentIndex = (currentIndex + 1) % backgroundImages.length;
        const newBackgroundImage = `url(${backgroundImages[currentIndex]})`;
        const particlesContainer = document.getElementById('particles-js');
        particlesContainer.style.opacity = '0';
    
        setTimeout(() => {
            particlesContainer.style.backgroundImage = newBackgroundImage;
            particlesContainer.style.opacity = '1';
        }, 1000);
    }
    changeBackgroundImage();
    setInterval(changeBackgroundImage, 10000);
});



