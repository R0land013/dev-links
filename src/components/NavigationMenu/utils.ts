
export const showNavigationMenu = () => {
    const element = document.querySelector('#nav-menu');
    
    if(element.classList.contains('hidden-nav-menu')) {
        element.classList.toggle('hidden-nav-menu');
    }
    
    addBackgroundForNavigationMenu();
    element.classList.toggle('shown-nav-menu');
    
};

export const hideNavigationMenu = () => {

    const element = document.querySelector('#nav-menu');
    const classList = element.classList;
    
    if(classList.contains('shown-nav-menu')){
        
        element.classList.remove('shown-nav-menu');

        classList.toggle('hidden-nav-menu');
        removeBackgroundForNavigationMenu();
    }

    
};

const addBackgroundForNavigationMenu = () => {
    
    if(!document.getElementById('nav-menu-container-modal')) {

        const body = document.querySelector('body');
        
        const navigationMenuBackground = document.createElement('div');
        navigationMenuBackground.setAttribute('id', 'nav-menu-container-modal');
        navigationMenuBackground.addEventListener('click', () => {
            hideNavigationMenu();
        });
        
        body.appendChild(navigationMenuBackground);
        
    }
};

const removeBackgroundForNavigationMenu = () => {
    if(document.getElementById('nav-menu-container-modal')) {
        const element = document.getElementById('nav-menu-container-modal');
        element.remove();
    }
};