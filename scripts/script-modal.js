const modalVideos = document.querySelectorAll('.modal-video');
const modalCloseButtons = document.querySelectorAll('.btn-close');

modalCloseButtons.forEach(button => {
    button.addEventListener('click', function () {
        modalVideos.forEach(video => {
            video.pause();
        });
    });
});

window.addEventListener('click', function (event) {
    if (event.target.classList.contains('modal')) {
        modalVideos.forEach(video => {
            video.pause();
        });
    }
});