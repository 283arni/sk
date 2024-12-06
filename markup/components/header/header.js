
(() => {
    const nav = document.querySelector('nav');
    const rules = document.querySelector('#rules');
    const body = document.querySelector('#body');

    nav.addEventListener('click', (e) => {
        if(e.target.tagName == 'A' && e.target.classList.contains('rules-show')) {
            rules.classList.add('show');
            body.classList.add('off-scroll');
            return;
        }

        if(e.target.tagName == 'A' && !e.target.classList.contains('rules-show')) {
            rules.classList.remove('show');
            body.classList.remove('off-scroll');
        }
    }); 
})();


(() => {
    const nav = document.querySelector('#menu-nav');
    const rules = document.querySelector('#rules');
    const body = document.querySelector('#body');
    const menuCloseBtn = document.querySelector('#menu-close');
    const menuOpenBtn = document.querySelector('#menu-open');
    const menu = document.querySelector('#menu');
    
    nav.addEventListener('click', (e) => {
        if(e.target.tagName == 'A' && e.target.classList.contains('rules-show')) {
            rules.classList.add('show');
            body.classList.add('off-scroll');
            menu.classList.remove('show');
            return;
        }

        if(e.target.tagName == 'A' && !e.target.classList.contains('rules-show')) {
            rules.classList.remove('show');
            body.classList.remove('off-scroll');
            menu.classList.remove('show');
        }
    });

    menuCloseBtn.addEventListener('click',() => {
        menu.classList.remove('show');
    });

    menuOpenBtn.addEventListener('click',() => {
        menu.classList.add('show');
    });
})(); 