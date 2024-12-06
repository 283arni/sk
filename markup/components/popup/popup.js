(() => {
    const popup = document.querySelector('#popup');
    const popupOpenBtns = document.querySelectorAll('.popup-open');
    
    
    if(!popup || !popupOpenBtns.length) {
        return;
    }

    const body = document.querySelector('#body');
    const popupCloseBtn = popup.querySelector('#popup-close');

    popupOpenBtns.forEach((popupOpenBtn) => {
        popupOpenBtn.addEventListener('click', () => {
            popup.classList.add('show');
            body.classList.add('off-scroll');
        });
    })


    popupCloseBtn.addEventListener('click', () => {
        popup.classList.remove('show');
        body.classList.remove('off-scroll');
    });

    popup.addEventListener('click', (e) => {
        if(e.target != popup) {
            return;
        }

        popup.classList.remove('show');
        body.classList.remove('off-scroll');
    });

})();
