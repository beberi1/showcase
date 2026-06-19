const projects = [
    {
        title: "Finance Planner",
        description: "Web-based financial budgeting application.",
        url: "projects/finance_planner/index.html",
        image: "images/finance_planner.png",
        github: "https://github.com/beberi1/finance_planner"
    },
    {
        title: "Jruanteli Clicker",
        description: "My clicker game project.",
        url: "projects/jruanteli_clicker/index.html",
        image: "images/jruanteli_clicker.png",
        github: "https://github.com/beberi1/showcase/tree/main/projects/jruanteli_clicker"
    },
    {
        title: "Zkumshva",
        description: "Compressing program which integrates with windows.",
        url: "projects/zkumshva/index.html",
        image: "images/zkumshva.jpg",
        github: "https://github.com/beberi1/Zkumshva"
    },
    {
        title: "YouTube Video Downloader",
        description: "A Python script to easily download YouTube videos for offline viewing.",
        url: "projects/youtube_video_downloader/index.html",
        image: "images/youtube_video_downloader.png",
        github: "https://github.com/beberi1/YouTube_video_downloader"
    },
    {
        title: "ReTypeToGeo",
        description: "simple .",
        url: "projects/ReTypeToGeo/index.html",
        image: "images/ReTypeToGeo.png",
        github: "https://github.com/beberi1/ReTypeToGeo"
    },
    {
        title: "Georgian Wordlist",
        description: "ქართული სიტყვების ბაზა NLP, უსაფრთხოების ტესტირებისა და სკრიპტებისთვის.",
        url: "projects/georgian_wordlist/index.html",
        image: "images/georgian_wordlist.png",
        github: "https://github.com/beberi1/Georgian_Wordlist"
    },
    {
        title: "Obsidian Local Server",
        description: "Obsidian-ის vault ის ლოკალურ ქსელში გამხსნელი",
        url: "projects/Obsidian_Local_Server/index.html",
        image: "images/Obsidian_Local_Server.png",
        github: "https://github.com/beberi1/Obsidian_Local_Server"
    },
    {
        title: "nouter",
        description: "მარტივი ნოუთების გასაკეთებელი საიტი",
        url: "projects/nouter/index.html",
        image: "images/nouter.png",
        github: "https://github.com/beberi1/nouter"
    },
    {
        title: "Comma Separator",
        description: "მარტივი საიტი რომელიც სიტყვებს მძიმით გამოყოფს",
        url: "projects/comma_separator/index.html",
        image: "images/comma_separator.png",
        github: "https://github.com/beberi1/comma_separator"
    }
];

const grid = document.getElementById('project-grid');
const searchInput = document.getElementById('search-input');
const themeToggle = document.getElementById('theme-toggle');

// Render Projects Function
function renderProjects(filterText = "") {
    grid.innerHTML = ""; // Clear existing projects
    
    const filtered = projects.filter(p => 
        p.title.toLowerCase().includes(filterText.toLowerCase()) || 
        p.description.toLowerCase().includes(filterText.toLowerCase())
    );

    filtered.forEach((project, index) => {
        const card = document.createElement('div');
        card.className = 'project-box';
        card.style.animationDelay = `${index * 0.05}s`; // Faster animation stagger
        
        card.innerHTML = `
            <a href="${project.url}">
                <img src="${project.image}" alt="${project.title}" class="project-image">
            </a>
            <div class="project-text">
                <h3>${project.title}</h3>
                <p>${project.description}</p>
                <div class="card-buttons">
                    <a href="${project.url}" class="btn btn-view">Details</a>
                    <a href="${project.github}" target="_blank" class="btn btn-github">GitHub</a>
                </div>
            </div>
        `;
        grid.appendChild(card);
    });
}

// Search Event Listener
searchInput.addEventListener('input', (e) => {
    renderProjects(e.target.value);
});

// Theme Toggle Logic
themeToggle.addEventListener('click', () => {
    document.body.classList.toggle('light-mode');
    
    if (document.body.classList.contains('light-mode')) {
        themeToggle.textContent = '🌙 Dark Mode';
        localStorage.setItem('theme', 'light');
    } else {
        themeToggle.textContent = '☀️ Light Mode';
        localStorage.setItem('theme', 'dark');
    }
});

// Load saved theme
if (localStorage.getItem('theme') === 'light') {
    document.body.classList.add('light-mode');
    themeToggle.textContent = '🌙 Dark Mode';
}

// Initial render
renderProjects();