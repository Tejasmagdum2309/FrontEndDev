const menuToggle = document.getElementById('menu-toggle');
const mobileMenu = document.getElementById('mobile-menu');

// menuToggle.addEventListener('click', () => {
//     mobileMenu.classList.toggle('hidden');
// });

const playButtons = document.querySelectorAll('.playButton');
const videoModal = document.getElementById('videoModal');
const closeButton = document.getElementById('closeButton');
const youtubePlayer = document.getElementById('youtubePlayer');

// Open Modal with Dynamic Video
playButtons.forEach(button => {
    button.addEventListener('click', () => {
        const videoId = button.getAttribute('data-video'); // Expecting only VIDEO_ID now
        youtubePlayer.src = `https://www.youtube.com/embed/${videoId}?autoplay=1`;
        videoModal.classList.remove('hidden');
    });
});

// Close Modal
closeButton.addEventListener('click', () => {
    videoModal.classList.add('hidden');
    youtubePlayer.src = '';
});

// Close Modal on Outside Click
videoModal.addEventListener('click', (e) => {
    if (e.target === videoModal) {
        videoModal.classList.add('hidden');
        youtubePlayer.src = '';
    }
});


