const trail = document.createElement('div');
trail.classList.add('trail');
document.body.appendChild(trail);

const hiddenText = document.querySelector('.hidden-text');
const paragraph = hiddenText.querySelector('p');
const words = paragraph.textContent.split(' ');

paragraph.innerHTML = ''; // Clear original content

words.forEach(word => {
    const span = document.createElement('span');
    span.textContent = word;
    paragraph.appendChild(span);
    paragraph.innerHTML += ' ';
});

const spans = paragraph.querySelectorAll('span');

document.addEventListener('mousemove', (e) => {
    trail.style.left = `${e.clientX - 25}px`;
    trail.style.top = `${e.clientY - 25}px`;

    spans.forEach(span => {
        const rect = span.getBoundingClientRect();
        const inBounds =
            e.clientX >= rect.left &&
            e.clientX <= rect.right &&
            e.clientY >= rect.top &&
            e.clientY <= rect.bottom;

        span.style.color = inBounds ? '#fff' : 'transparent';
    });
});
