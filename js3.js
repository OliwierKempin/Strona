let score = 0;

function createFrog() {
    const frog = document.createElement('img');
    frog.src = 'frog.png';
    frog.className = 'frog';
    
    const container = document.getElementById('frogContainer');
    container.appendChild(frog);

    const maxWidth = window.innerWidth - 100;
    const x = Math.floor(Math.random() * maxWidth);

    frog.style.position = 'absolute';
    frog.style.top = '0';
    frog.style.left = x + 'px';
    
    frog.onclick = function() {
        score++;
        document.getElementById('scoreValue').textContent = score;
        container.removeChild(frog);
        createFrog();
    }

    animateFrog(frog);
}

function animateFrog(frog) {
    let position = 0;
    const speed = Math.floor(Math.random() * 5) + 2;

    const id = setInterval(frame, 10);
    function frame() {
        if (position >= window.innerHeight) {
            clearInterval(id);
            frog.parentNode.removeChild(frog);
            createFrog();
        } else {
            position += speed;
            frog.style.top = position + 'px';
        }
    }
}

createFrog();
