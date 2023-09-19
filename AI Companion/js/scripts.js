document.addEventListener("DOMContentLoaded", function () {
    const companionList = document.getElementById("companion-list");

    const companions = [
        {
            name: "Fitness Buddy",
            description: "An AI companion specialized in personal fitness training.",
            price: "$50",
            image: "images/athena.png",
            link: "sites/catalogue/fitness-coach.html"
        },
        {
            name: "Gaming Sidekick",
            description: "An AI to aid and accompany you in gaming adventures.",
            price: "$40",
            image: "../../images/athena.png",
            link: "sites/catalogue/gaming-sidekick.html"
        },
        {
            name: "Study Pal",
            description: "An AI companion to help with studying and learning.",
            price: "$30",
            image: "../images/athena.png",
            link: "sites/catalogue/study-education.html"
        }
    ];
    

    companions.forEach(companion => {
        companionList.innerHTML += `
            <div class="companion">
                <h3>${companion.name}</h3>
                <img src="${companion.image}" alt="${companion.name} Image" style="width:100%; height:auto;">
                <p>${companion.description}</p>
                <p>Price: ${companion.price}</p>
                <a href="${companion.link}">
                    <button>Learn More</button>
                </a>
            </div>
        `;
    });    
    
});
