import myModule from './myModule.js';

app.use(express.static('public', {
    setHeaders: (res, path) => {
      if (path.endsWith('.js')) {
        res.setHeader('Content-Type', 'text/javascript');
      }
    }
  }));
  

document.addEventListener("DOMContentLoaded", function () {
    const companionList = document.getElementById("companion-list");

    const companions = [
        {
            name: "Athena",
            description: "An AI companion specialized in personal fitness training.",
            price: "$50",
            image: "images/athena.png",
            link: "sites/catalogue/personal-assistant.html"
        },
        {
            name: "Jeeves",
            description: "An AI companion specialized in personal fitness training.",
            price: "$50",
            image: "images/jeeves.png",
            link: "sites/catalogue/personal-assistant.html"
        },
        {
            name: "Luna",
            description: "An AI companion specialized in personal fitness training.",
            price: "$50",
            image: "images/luna.png",
            link: "sites/catalogue/personal-assistant.html"
        },
        {
            name: "Max",
            description: "An AI companion specialized in personal fitness training.",
            price: "$50",
            image: "images/max.png",
            link: "sites/catalogue/fitness-coach.html"
        },
        {
            name: "Bella",
            description: "An AI companion specialized in personal fitness training.",
            price: "$50",
            image: "images/bella.png",
            link: "sites/catalogue/fitness-coach.html"
        },
        {
            name: "Rocky",
            description: "An AI companion specialized in personal fitness training.",
            price: "$50",
            image: "images/rocky.png",
            link: "sites/catalogue/fitness-coach.html"
        },
        {
            name: "Thales",
            description: "An AI companion specialized in personal fitness training.",
            price: "$50",
            image: "images/thales.png",
            link: "sites/catalogue/study-education.html"
        },
        {
            name: "Sagacia",
            description: "An AI companion specialized in personal fitness training.",
            price: "$50",
            image: "images/sagacia.png",
            link: "sites/catalogue/study-education.html"
        },
        {
            name: "Eduardus",
            description: "An AI companion specialized in personal fitness training.",
            price: "$50",
            image: "images/eduardus.png",
            link: "sites/catalogue/study-education.html"
        },
        {
            name: "Zara, The Strategist",
            description: "An AI companion specialized in personal fitness training.",
            price: "$50",
            image: "images/zara-2.png",
            link: "sites/catalogue/gaming-sidekick.html"
        },
        {
            name: "Rocco, The Adventure Guild",
            description: "An AI companion specialized in personal fitness training.",
            price: "$50",
            image: "images/rocco.png",
            link: "sites/catalogue/gaming-sidekick.html"
        },
        {
            name: "Blitz, The FPS (First-Person Shooter) Ally",
            description: "An AI companion specialized in personal fitness training.",
            price: "$50",
            image: "images/blitz.png",
            link: "sites/catalogue/gaming-sidekick.html"
        },
        {
            name: "Orion",
            description: "An AI companion specialized in personal fitness training.",
            price: "$50",
            image: "images/orion.png",
            link: "sites/catalogue/space-travel-companion.html"
        },
        {
            name: "Nova",
            description: "An AI companion specialized in personal fitness training.",
            price: "$50",
            image: "images/nova.png",
            link: "sites/catalogue/space-travel-companion.html"
        },
        {
            name: "Stellar",
            description: "An AI companion specialized in personal fitness training.",
            price: "$50",
            image: "images/stellar.png",
            link: "sites/catalogue/space-travel-companion.html"
        },
        {
            name: "Apollo",
            description: "An AI companion specialized in personal fitness training.",
            price: "$50",
            image: "images/apollo.png",
            link: "sites/catalogue/home-automation.html"
        },
        {
            name: "Elsa",
            description: "An AI companion specialized in personal fitness training.",
            price: "$50",
            image: "images/Elsa.png",
            link: "sites/catalogue/home-automation.html"
        },
        {
            name: "Zenith",
            description: "An AI companion specialized in personal fitness training.",
            price: "$50",
            image: "images/zenith.png",
            link: "sites/catalogue/home-automation.html"
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
