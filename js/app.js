
//Textanimation operation

document.addEventListener("DOMContentLoaded", () => {
    const elements = document.querySelectorAll(".animText");

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if(entry.isIntersecting) {
                const el = entry.target;
                const fullText = el.getAttribute("data-text");
                let i = 0;
                const speed = 30; //Typing speed ms

                const type = () => {
                    if(i < fullText.length) {
                        el.textContent += fullText.charAt(i);
                        i++;
                        setTimeout(type, speed);
                    }
                };

                type();
                observer.unobserve(el); //Just once
            }
        });
    }, {threshold: 0.6}); //60% to 100%

    elements.forEach(el => observer.observe(el));
});

//Dom items

const DomItems = {
    menuBtn: document.querySelector('.menuBtn'),
    terminalBtn: document.querySelector('.terminalBtn'),
    terminalOpenBtn: document.querySelector('.terminalOpen'),
    minimizeBtn: document.querySelector('.minimizeBtn'),
    maximizeBtn: document.querySelector('.maximizeBtn'),
    closeBtn: document.querySelector('.closeBtn'),
    nav: document.querySelector('nav'),
    terminal: document.querySelector('.terminal'),
    letter: document.querySelector('#Letter'),
    aboutmeImage: document.querySelector('.aboutmeImage'),
    workBox: document.querySelectorAll('.workBox'),
    websiteProjects: document.getElementById('websiteProjects'),
    webAppProjects: document.getElementById('webAppProjects'),
    designProjects: document.getElementById('designProjects'),
    navButtons: document.querySelectorAll('nav ul li a')
}

//Window resize monitoring

function checkScreenSize() {
    if(window.innerWidth <= 768) {
        DomItems.nav.classList.add('hidden');
        DomItems.menuBtn.classList.remove('hidden');
        DomItems.navButtons.forEach(button => {
            button.addEventListener('click', function() {
                DomItems.nav.classList.add('hidden');
            });
        });
    } else {
        DomItems.nav.classList.remove('hidden');
        DomItems.menuBtn.classList.add('hidden');
    }
}

window.addEventListener("resize", checkScreenSize);
window.addEventListener("DOMContentLoaded", checkScreenSize);

//Button event listeners
if(DomItems.menuBtn) {
    DomItems.menuBtn.addEventListener('click', () => {
        DomItems.nav.classList.toggle('hidden');
    })
}

if(DomItems.terminalOpenBtn) {
    DomItems.terminalOpenBtn.addEventListener('click', () => {
        DomItems.terminal.classList.remove('hidden');
    })
}

if(DomItems.closeBtn) {
    DomItems.closeBtn.addEventListener('click', () => {
        DomItems.terminal.classList.add('hidden');
        DomItems.terminalBtn.classList.add('hidden');
        DomItems.terminal.classList.remove('maximizeTerminal');
    })
}

if(DomItems.minimizeBtn) {
    DomItems.minimizeBtn.addEventListener('click', () => {
        DomItems.terminal.classList.add('hidden');
        DomItems.terminalBtn.classList.remove('hidden');
        DomItems.terminal.classList.remove('maximizeTerminal');
    })
}

if(DomItems.terminalBtn) {
    DomItems.terminalBtn.addEventListener('click', () => {
        DomItems.terminal.classList.remove('hidden');
    })
}

if(DomItems.maximizeBtn) {
    DomItems.maximizeBtn.addEventListener('click', () => {
        DomItems.terminal.classList.toggle('maximizeTerminal');
    })
}

//Resize letter textarea

if(DomItems.letter) {
    DomItems.letter.addEventListener('input', function() {
        this.style.height = 'auto';
        this.style.height = this.scrollHeight + 'px';
    })
}


//WhatsApp

const phoneNumber = "36701549214";
const whatsappHref = "https://wa.me/" + phoneNumber;
document.getElementById('whatsappLink').setAttribute('href', whatsappHref);
document.getElementById('whatsappLink').setAttribute('target', '_blank');

//Gmail

const user = "zsoltnegyesi4";
const domain = "gmail.com";
const gmailHref = "mailto:" + user + "@" + domain;
document.getElementById('gmailLink').setAttribute('href', gmailHref);

//Animation

const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if(entry.isIntersecting) {
            entry.target.classList.add('cleared');
        } else {
            entry.target.classList.remove('cleared');
        }
    });
}, {
    threshold: 0.2
});

if(DomItems.aboutmeImage) {
    observer.observe(DomItems.aboutmeImage);
}

DomItems.workBox.forEach(box => observer.observe(box));

const contactItems = document.querySelectorAll('#Contact ul li');

const observerr = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('animated');
        } else {
            entry.target.classList.remove('animated');
        }
    });
}, {
    threshold: 0.4
});

contactItems.forEach(item => observerr.observe(item));

//Websites rendering

const websites = [
    {
        title: 'DolfTattoo',
        description: `This is the first website I’ve built, created for a friend who is a professional tattoo artist. The goal of the project was to design a modern, clean, and user-friendly online portfolio where he can showcase his work and connect with potential clients.During development, I used HTML, CSS, and JavaScript. This project is not only part of my professional growth, but it was also built for a real client, which makes me especially proud of it.`,
        link: 'https://4esi.github.io/DolfTattoo/',
        index: 0
    }
]

const expandBtn = DomItems.websiteProjects.querySelector('.expandBtn');

for(let i = 0;i < websites.length;i++) {
    const workBox = document.createElement('div');
    workBox.classList.add('workBox');

    workBox.innerHTML = `
            <img src="./assets/images/Websites/${websites[i].index}.jpg" alt="${websites[i].title}">
            <p class="workLinks">${websites[i].title}</p>
            <p class="workLinks hidden">${websites[i].description}</p>
            <a class="workLinks hidden" href="${websites[i].link}" target="blank">Visit to site</a>
    `;
    DomItems.websiteProjects.insertBefore(workBox, expandBtn);
    observer.observe(workBox);
    workBox.addEventListener('click', (event) => {
        if(event.target.tagName.toLowerCase() === 'a') {
            return;
        }
        workBox.classList.toggle('active');

        const hiddenDescription = workBox.querySelectorAll('.workLinks')[1];
        const hiddenLink = workBox.querySelectorAll('.workLinks')[2];
        if(hiddenDescription) {
            if(hiddenDescription.classList.contains('hidden')) {
                hiddenDescription.classList.remove('hidden');
            } else {
                hiddenDescription.classList.add('hidden');
            }
        }
        if(hiddenLink) {
            if(hiddenLink.classList.contains('hidden')) {
                hiddenLink.classList.remove('hidden');
            } else {
                hiddenLink.classList.add('hidden');
            }
        }
    })
}

//WebApplications rendering

const webApplications = [
    {
        title: 'CoolNotes',
        description: `My first app where I experimented with MVC architecture and localStorage in JavaScript. It's a simple note-taking app with dark mode support.`,
        link: 'https://4esi.github.io/CoolNotes/',
        index: 0
    }
]

const expandAppBtn = DomItems.webAppProjects.querySelector('.expandBtn');

for(let i = 0; i < webApplications.length; i++) {
    const appBox = document.createElement('div');
    appBox.classList.add('workBox');

    appBox.innerHTML = `
        <img src="./assets/images/WebApplications/${webApplications[i].index}.jpg" alt="${webApplications[i].title}">
        <p class="appLinks">${webApplications[i].title}</p>
        <p class="appLinks hidden">${webApplications[i].description}</p>
        <a class="appLinks hidden" href="${webApplications[i].link}" target="_blank">Visit the app</a>
    `;
    DomItems.webAppProjects.insertBefore(appBox, expandAppBtn);
    observer.observe(appBox);
    appBox.addEventListener('click', (event) => {
        if(event.target.tagName.toLowerCase() === 'a') return;
        appBox.classList.toggle('active');

        const hiddenDescription = appBox.querySelectorAll('.appLinks')[1];
        const hiddenLink = appBox.querySelectorAll('.appLinks')[2];

        if(hiddenDescription) {
            hiddenDescription.classList.toggle('hidden');
        }
        if(hiddenLink) {
            hiddenLink.classList.toggle('hidden');
        }
    });
}

//Design rendering

const design = [
    {
        title: 'Sorry, empty content',
        description: 'The design plans are under editing',
        link: '',
        index: 0
    }
]

const expandDesignBtn = DomItems.designProjects.querySelector('.expandBtn');

for(let i = 0; i < design.length; i++) {
    const appBox = document.createElement('div');
    appBox.classList.add('workBox');

    appBox.innerHTML = `
        <img src="./assets/images/Designs/${design[i].index}.png" alt="${design[i].title}">
        <p class="appLinks">${design[i].title}</p>
        <p class="appLinks hidden">${design[i].description}</p>
        <a class="appLinks hidden" href="${design[i].link}" target="_blank">Visit the plane</a>
    `;
    DomItems.designProjects.insertBefore(appBox, expandDesignBtn);
    observer.observe(appBox);
    appBox.addEventListener('click', (event) => {
        if(event.target.tagName.toLowerCase() === 'a') return;
        appBox.classList.toggle('active');

        const hiddenDescription = appBox.querySelectorAll('.appLinks')[1];
        const hiddenLink = appBox.querySelectorAll('.appLinks')[2];

        if(hiddenDescription) {
            hiddenDescription.classList.toggle('hidden');
        }
        if(hiddenLink) {
            hiddenLink.classList.toggle('hidden');
        }
    });
}
