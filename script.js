function toggleMenu() {
    const navMenu = document.getElementById('nav-menu');
    navMenu.classList.toggle('show');
}

function filterProjects(category) {
    const projects = document.querySelectorAll('.project');
    projects.forEach(project => {
        if (category === 'all' || project.getAttribute('data-category') === category) {
            project.style.display = 'block';
        } else {
            project.style.display = 'none';
        }
    });
}

function openLightbox(img) {
    const lightbox = document.getElementById('lightbox');
    const lightboxImg = document.getElementById('lightbox-img');
    lightbox.style.display = 'flex';
    lightboxImg.src = img.src;
}

function closeLightbox() {
    const lightbox = document.getElementById('lightbox');
    lightbox.style.display = 'none';
}

function validateForm() {
    let isValid = true;

    const name = document.getElementById('name');
    const email = document.getElementById('email');
    const message = document.getElementById('message');

    const nameError = document.getElementById('name-error');
    const emailError = document.getElementById('email-error');
    const messageError = document.getElementById('message-error');

    if (name.value.trim() === '') {
        nameError.textContent = 'Name is required.';
        nameError.style.display = 'block';
        isValid = false;
    } else {
        nameError.style.display = 'none';
    }

    if (email.value.trim() === '') {
        emailError.textContent = 'Email is required.';
        emailError.style.display = 'block';
        isValid = false;
    } else if (!validateEmail(email.value.trim())) {
        emailError.textContent = 'Invalid email format.';
        emailError.style.display = 'block';
        isValid = false;
    } else {
        emailError.style.display = 'none';
    }

    if (message.value.trim() === '') {
        messageError.textContent = 'Message is required.';
        messageError.style.display = 'block';
        isValid = false;
    } else {
        messageError.style.display = 'none';
    }

    return isValid;
}

function validateEmail(email) {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
}

document.getElementById('name').addEventListener('input', () => {
    const nameError = document.getElementById('name-error');
    if (document.getElementById('name').value.trim() === '') {
        nameError.textContent = 'Name is required.';
        nameError.style.display = 'block';
    } else {
        nameError.style.display = 'none';
    }
});

document.getElementById('email').addEventListener('input', () => {
    const emailError = document.getElementById('email-error');
    const email = document.getElementById('email').value.trim();
    if (email === '') {
        emailError.textContent = 'Email is required.';
        emailError.style.display = 'block';
    } else if (!validateEmail(email)) {
        emailError.textContent = 'Invalid email format.';
        emailError.style.display = 'block';
    } else {
        emailError.style.display = 'none';
    }
});

document.getElementById('message').addEventListener('input', () => {
    const messageError = document.getElementById('message-error');
    if (document.getElementById('message').value.trim() === '') {
        messageError.textContent = 'Message is required.';
        messageError.style.display = 'block';
    } else {
        messageError.style.display = 'none';
    }
});