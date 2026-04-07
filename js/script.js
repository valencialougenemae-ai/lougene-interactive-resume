$(document).ready(function () {
    console.log("%c🌟 Digital Dream Resume loaded – Lougene Mae B. Valencia ready!", "color:#c77dff; font-size:16px; font-weight:bold");

    $("#dark-toggle").on("click", function () {
        $("body").toggleClass("dark-mode");
        $(this).text($("body").hasClass("dark-mode") ? "☀️ Day Mode" : "🌙 Night Mode");
    });

    renderTimeline();
    renderSkills();
});

function personalizeGreeting() {
    const name = prompt("✨ What should I call you?");
    if (name && name.trim() !== "") {
        document.getElementById("greeting").innerHTML = `Hello, <strong>${name.trim()}</strong>! Welcome to my resume.`;
    }
}

function toggleExtraInfo() {
    const extra = document.getElementById("extra-education");
    const btn = document.getElementById("toggle-btn");
    if (extra.style.display === "none") {
        extra.style.display = "block";
        btn.textContent = "📖 Hide Achievements";
    } else {
        extra.style.display = "none";
        btn.textContent = "📖 Reveal Achievements";
    }
}

const educationData = [
    { year: "2009–2011", level: "Kindergarten", school: "LIVING STREAM" },
    { year: "2011", level: "Elementary Start", school: "WEST CITY CENTRAL SCHOOL" },
    { year: "2011–2017", level: "Elementary", school: "BUGO CENTRAL SCHOOL" },
    { year: "2017", level: "High School Start", school: "BUGO NATIONAL HIGH SCHOOL" },
    { year: "2017–2018", level: "High School", school: "DR. GERARDO SABAL MEMORIAL NATIONAL HIGH SCHOOL" },
    { year: "2018–2021", level: "High School", school: "PILGRIM CHRISTIAN COLLEGE" },
    { year: "2021–2023", level: "Senior High", school: "PHINMA COC" },
    { year: "2023–Present", level: "College (2nd Year IT)", school: "UNIVERSITY OF SCIENCE AND TECHNOLOGY OF SOUTHERN PHILIPPINES" }
];

function renderTimeline() {
    const container = document.getElementById("education-timeline");
    container.innerHTML = "";
    educationData.forEach(item => {
        const div = document.createElement("div");
        div.className = "timeline-item";
        div.innerHTML = `
            <div class="timeline-dot"></div>
            <div class="timeline-content">
                <h4>${item.level} <span style="font-size:0.9rem;opacity:0.7;">${item.year}</span></h4>
                <p>${item.school}</p>
            </div>
        `;
        container.appendChild(div);
    });
}

const skillsData = [
    { name: "HTML5", level: 98 },
    { name: "jQuery", level: 90 },
    { name: "Java", level: 85 },
    { name: "SQL Basics", level: 78 },
    { name: "Figma / UI Design", level: 82 },
];

function renderSkills() {
    const container = document.getElementById("skills-container");
    container.innerHTML = "";
    skillsData.forEach(skill => {
        const barHTML = `
            <div class="skill-bar" onclick="levelUpSkill(this)">
                <label>${skill.name} <span class="percent">0%</span></label>
                <div class="progress-container">
                    <div class="progress-bar" data-target="${skill.level}"></div>
                </div>
            </div>`;
        container.innerHTML += barHTML;
    });
}

function levelUpSkill(element) {
    const progress = $(element).find(".progress-bar");
    const percentText = $(element).find(".percent");
    const target = parseInt(progress.data("target"));
    $(progress).animate({ width: target + "%" }, 1200, "easeOutBounce");
    percentText.text(target + "%");
}

function animateAllSkills() {
    $(".progress-bar").each(function(){
        const target = $(this).data("target");
        $(this).animate({ width: target + "%" }, 1400, "easeOutBounce");
    });
    $(".percent").each(function(i){
        $(this).text(skillsData[i].level + "%");
    });
}

document.getElementById("contact-form").addEventListener("submit", function(e) {
    e.preventDefault();
    const feedback = document.getElementById("form-feedback");
    feedback.innerHTML = "✨ Message sent! Thank you!";
    feedback.style.color = "#c77dff";
    this.reset();
    setTimeout(() => feedback.innerHTML = "", 4000);
});

function downloadResume() {
    alert("📜 Your magical resume PDF is being summoned... (demo version)");
}