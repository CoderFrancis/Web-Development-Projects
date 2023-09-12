document.addEventListener("DOMContentLoaded", function () {
    const companionList = document.getElementById("companion-list");

    const companions = [
        {
            name: "Fitness Buddy",
            description: "An AI companion specialized in personal fitness training.",
            price: "$50"
        },
        {
            name: "Gaming Sidekick",
            description: "An AI to aid and accompany you in gaming adventures.",
            price: "$40"
        },
        {
            name: "Study Pal",
            description: "An AI companion to help with studying and learning.",
            price: "$30"
        }
    ];

    companions.forEach(companion => {
        companionList.innerHTML += `
            <div class="companion">
                <h3>${companion.name}</h3>
                <p>${companion.description}</p>
                <p>Price: ${companion.price}</p>
                <button>Buy Now</button>
            </div>
        `;
    });
});
