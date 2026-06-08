// Add all your projects to this list
const projects = [
    {
        title: "Finance Planner",
        description: "Web-based financial budgeting application.",
        url: "projects/finance_planner/index.html",
        image: "images/finance_planner.png" // Add this line
    },
    {
        title: "Jruanteli Clicker",
        description: "My clicker game project.",
        url: "projects/jruanteli_clicker/index.html",
        image: "images/jruanteli_clicker.png" // Add this line
    },
    {
        title: "zkumshva",
        description: "Compressing program which integrates with windows.",
        url: "projects/zkumshva/index.html",
        image: "images/zkumshva.jpg" // Add this line
    },
    {
        title: "YouTube Video Downloader",
        description: "A Python script to easily download YouTube videos for offline viewing.",
        url: "projects/youtube_video_downloader/index.html",
        image: "images/youtube_video_downloader.png"
    },
    {
        title: "RetypeToGeo",
        description: "simple .",
        url: "projects/RetypeToGeo/index.html",
        image: "images/RetypeToGeo.png"
    },
    {
        title: "Georgian Wordlist",
        description: "ქართული სიტყვების ბაზა NLP, უსაფრთხოების ტესტირებისა და სკრიპტებისთვის.",
        url: "projects/georgian_wordlist/index.html",
        image: "images/georgian_wordlist.png"
    },
    {
        title: "Obsidian_Local_Server",
        description: "Obsidian-ის vault ის ლოკალურ ქსელში გამხსნელი",
        url: "projects/Obsidian_Local_Server/index.html",
        image: "images/Obsidian_Local_Server.png"
    },
];

const grid = document.getElementById('project-grid');

projects.forEach(project => {
    const card = document.createElement('a');
    card.href = project.url;
    card.className = 'project-box';
    
    // Updated HTML structure for the card
    card.innerHTML = `
        <img src="${project.image}" alt="${project.title}" class="project-image">
        <div class="project-text">
            <h3>${project.title}</h3>
            <p>${project.description}</p>
        </div>
    `;
    
    grid.appendChild(card);
});