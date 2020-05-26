const displayedImage = document.querySelector('.displayed-img');
const thumbBar = document.querySelector('.thumb-bar');

const btn = document.querySelector('button');
const overlay = document.querySelector('.overlay');

/* Looping through images */

for(let i = 1; i <= 5; i++) {
    let srcStr = 'images/pic' + i + '.jpg';

    const newImage = document.createElement('img');
    newImage.setAttribute('src', srcStr);
    thumbBar.appendChild(newImage);

    function changePic() {
        displayedImage.setAttribute('src', srcStr);
    }

    newImage.addEventListener('click', changePic);
}

/* Wiring up the Darken/Lighten button */

    function changeClass() {
        const nameClass = btn.getAttribute('class');
        btn.focus();

        if(nameClass === 'dark') {
            btn.setAttribute('class', 'light');
            btn.textContent = 'Lighten';
            overlay.style.backgroundColor = 'rgba(0,0,0,0.5)';
        }
        else {
            btn.setAttribute('class', 'dark');
            btn.textContent = 'Darken';
            overlay.style.backgroundColor = 'rgba(0,0,0,0)';
        }
    }

    btn.addEventListener('click', changeClass)
