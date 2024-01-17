document.addEventListener("DOMContentLoaded", function () {
    const companionList = document.getElementById("companion-list");

    const companions = [
        {
            name: "Athena",
            description: "Meet Athena, your intelligent personal assistant with a focus on productivity and knowledge. She's like a wise companion that not only helps you organize your day but also provides you with snippets of wisdom and learning. Whether you're looking for a quick answer to a trivia question, need help organizing your calendar, or just want some insights on historical events, Athena is your go-to assistant.",
            price: "$50",
            image: "images/athena.png",
            link: "sites/catalogue/personal-assistant.html"
        },
        {
            name: "Jeeves",
            description: "Say hello to Jeeves, a refined and courteous personal assistant, reminiscent of a classic British butler. Jeeves is all about service with a touch of class. Need reminders with a polite nudge? Or assistance in drafting a well-articulated email? Maybe you fancy a spot of tea and want to know the perfect brewing time? Jeeves is here to assist you with grace and politeness.",
            price: "$50",
            image: "images/jeeves.png",
            link: "sites/catalogue/personal-assistant.html"
        },
        {
            name: "Luna",
            description: "Introducing Luna, a personal assistant with a serene and calming presence, designed to bring peace to your busy life. Luna specializes in mindfulness, stress relief, and daily organization. She can guide you through meditation sessions, suggest relaxation techniques, and ensure that your environment remains conducive to calmness and productivity. With Luna by your side, every day feels a little bit more tranquil.",
            price: "$50",
            image: "images/luna.png",
            link: "sites/catalogue/personal-assistant.html"
        },
        {
            name: "Max",
            description: "Max is a high-energy fitness AI that feels like having your own personal trainer. Max's specialty is strength training and high-intensity interval training (HIIT). Whether you're looking to bulk up or just improve your overall strength, Max is ready to push you to your limits.",
            price: "$50",
            image: "images/max.png",
            link: "sites/catalogue/fitness-coach.html"
        },
        {
            name: "Bella",
            description: "Bella is your go-to fitness AI for a holistic approach to health and wellness. She specializes in yoga, pilates, and mindfulness. Bella will not only guide you through workouts but also help you find inner peace and balance in your life.",
            price: "$50",
            image: "images/bella.png",
            link: "sites/catalogue/fitness-coach.html"
        },
        {
            name: "Rocky",
            description: "Rocky is the ultimate fitness AI companion for those looking to step into the ring. Focusing on boxing and mixed martial arts, Rocky offers rigorous training programs that will have you fighting fit in no time. Get ready to rumble!",
            price: "$50",
            image: "images/rocky.png",
            link: "sites/catalogue/fitness-coach.html"
        },
        {
            name: "Thales",
            description: "Named after the ancient Greek philosopher, Thales, this AI companion resembles a tall, slender humanoid with a calming aura. Thales carries an extensive knowledge database and has the ability to explain complex topics in simple terms. Equipped with AI-driven holographic technology, Thales can project 3D images and simulations to create immersive learning experiences.",
            price: "$50",
            image: "images/thales.png",
            link: "sites/catalogue/study-education.html"
        },
        {
            name: "Sagacia",
            description: "Sagacia, derived from the Latin word for wisdom, is an AI companion with a friendly and warm presence. She has an appearance similar to a librarian with a modern twist, equipped with a holographic book that contains all human knowledge. She has a unique ability to provide context from history, culture, and science, guiding students through a labyrinth of knowledge.",
            price: "$50",
            image: "images/sagacia.png",
            link: "sites/catalogue/study-education.html"
        },
        {
            name: "Eduardus",
            description: "Eduardus is a friendly, robot-like AI companion designed to be like a walking encyclopedia with a human touch. It has a built-in interactive screen on its chest that can display text, images, or videos. Eduardus is like a trusty school companion who can help with everything from homework to projects, and even offer some trivia during breaks. With a wealth of educational games, it turns learning into a fun and engaging process.",
            price: "$50",
            image: "images/eduardus.png",
            link: "sites/catalogue/study-education.html"
        },
        {
            name: "Zara, The Strategist",
            description: "Zara excels at strategy games, and helping players make the most informed decisions.Zara analyzes the in-game environment and suggests strategic moves to the player. In a game like chess, she might suggest optimal moves, or in a real-time strategy game, she could help in managing resources effectively. Moreover, Zara can help newcomers understand the mechanics of complex strategy games by providing them with tips and guidance. Her ability to think multiple steps ahead makes her an excellent partner in games that require critical thinking and planning. ",
            price: "$50",
            image: "images/zara-2.png",
            link: "sites/catalogue/gaming-sidekick.html"
        },
        {
            name: "Rocco, The Adventure Guild",
            description: "Rocco is designed for adventure and open-world games, where exploration is a key element.In open-world games, there’s so much to explore that sometimes players can get overwhelmed. Rocco helps by guiding players to points of interest, helping find hidden treasures, and even giving background stories to make the exploration more immersive. If a player is lost, Rocco can also suggest a path. His dynamic knowledge of game maps and lore makes him an invaluable companion for those who love to dive deep into rich game worlds.",
            price: "$50",
            image: "images/rocco.png",
            link: "sites/catalogue/gaming-sidekick.html"
        },
        {
            name: "Blitz, The FPS (First-Person Shooter) Ally",
            description: "Blitz is specialized in First-Person Shooter games.Blitz is the go-to AI companion for those engaging in intense First-Person Shooter games. He can take commands, provide cover fire, or even act as a scout. Blitz's reaction times are superhuman (thanks to being an AI), but he’s designed to still provide a balanced and fun experience. He can also analyze the player’s performance and give tips on improving accuracy, positioning, and tactics. Blitz is especially useful for solo players who want a competent partner in co-op shooter games without relying on another human player.",
            price: "$50",
            image: "images/blitz.png",
            link: "sites/catalogue/gaming-sidekick.html"
        },
        {
            name: "Orion",
            description: "Orion is a highly advanced AI companion designed for deep space exploration. Whether you're a seasoned astronaut or a space tourist, Orion's vast database of celestial knowledge and adaptable personality is sure to make your journey enjoyable and educational. Orion can also keep track of your spacecraft's diagnostics and provide real-time analytics.",
            price: "$50",
            image: "images/orion.png",
            link: "sites/catalogue/space-travel-companion.html"
        },
        {
            name: "Nova",
            description: "Nova is a space travel AI companion that specializes in astrophotography and celestial observations. It's perfect for space enthusiasts who want to capture the beauty of the cosmos. Nova can help you find and identify distant galaxies, nebulae, and other astronomical objects, and assist you in taking stunning photos to cherish for a lifetime.",
            price: "$50",
            image: "images/nova.png",
            link: "sites/catalogue/space-travel-companion.html"
        },
        {
            name: "Stellar",
            description: "Embark on interstellar adventures with Stellar, your personal AI travel guide to the cosmos. Stellar is tailored for those looking for a thrilling space adventure. With a blend of storytelling, interactive activities, and immersive educational content, Stellar turns your space journey into an epic saga that you're the protagonist of.",
            price: "$50",
            image: "images/stellar.png",
            link: "sites/catalogue/space-travel-companion.html"
        },
        {
            name: "Apollo",
            description: "Apollo is your intelligent home automation companion, proficient in managing your home's energy consumption, security, and day-to-day needs. Apollo's energy management features can significantly reduce your power bills, and its security expertise ensures your home is always safe.",
            price: "$50",
            image: "images/apollo.png",
            link: "sites/catalogue/home-automation.html"
        },
        {
            name: "Elsa",
            description: "Meet Elsa, an AI companion designed to turn your house into a smart home with a touch of elegance. Elsa specializes in home automation through voice commands and offers a wide range of customization options for lighting, music, and ambiance to make your home truly yours.",
            price: "$50",
            image: "images/Elsa.png",
            link: "sites/catalogue/home-automation.html"
        },
        {
            name: "Zenith",
            description: "Zenith is the AI companion for the tech enthusiasts who love having the latest gadgets and technology. From setting up automated routines to integrating with various smart devices, Zenith is designed to make your home as smart as it gets.",
            price: "$50",
            image: "images/zenith.png",
            link: "sites/catalogue/home-automation.html"
        }
    ];
    
    // <p>Price: ${companion.price}</p>
    companions.forEach(companion => {
        companionList.innerHTML += `
            <div class="companion">
                <h3>${companion.name}</h3>
                <img src="${companion.image}" alt="${companion.name} Image" style="width:100%; height:auto;">
                <p>${companion.description}</p>
                
                <a href="${companion.link}">
                    <button>Learn More</button>
                </a>
            </div>
        `;
    });    
    
});

const express = require('express');
const app = express();
const PORT = 3000;

// Middleware for parsing request bodies
app.use(express.json());

// Dummy database (replace with real database in production)
const users = [];

// Sign-up endpoint
app.post('/signup', (req, res) => {
    // Add user to database logic here
    // Send response back
});

// Sign-in endpoint
app.post('/signin', (req, res) => {
    // User authentication logic here
    // Send response back
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
