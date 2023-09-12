document.addEventListener("DOMContentLoaded", function() {
    const spaceships = [
        { name: "Galactic Cruiser", image: "images/cruiser.jpg", description: "Behold the Galactic Cruiser, a symbol of interstellar supremacy and technological prowess. With its expansive hull adorned with intricate patterns, and striking wings that extend like the blades of a celestial guardian, the Galactic Cruiser stands as a testament to engineering ingenuity. The radiant glow of its thrusters, akin to stars in the night sky, promises unmatched speed and maneuverability. The spacious interior is a marvel, featuring luxurious accommodations and state-of-the-art command centers. Its domed cockpit provides a 360-degree view of the cosmos, ensuring that pilots and passengers alike can immerse themselves in the splendor of the galaxy. Whether embarking on a diplomatic mission, leading a fleet into battle, or simply traversing the stars in style, the Galactic Cruiser is the ultimate choice for those who accept no compromises in their spacefaring adventures." },
        { name: "Star Explorer", image: "images/explorer.jpg", description: "Embark on an odyssey among the stars with the Star Explorer, a spaceship crafted for the fearless and the curious. With its aerodynamic design, the Star Explorer cuts through the cosmos with grace and precision. Its golden hull, reminiscent of ancient celestial wonders, reflects the light of distant suns and stars. The spacecraft’s wings are fitted with solar sails, harnessing the very energy of the stars it explores. The crowning glory of the Star Explorer is its observatory dome, equipped with an advanced telescope that peers into the depths of the universe. This vessel is not merely a mode of transport; it’s an instrument of discovery. With ample space for both crew and cargo, it's ideal for both scientific missions and treasure-seeking adventures. The Star Explorer invites you to unravel the mysteries of the cosmos, one star at a time." },
        { name: "Space Yacht", image: "images/yacht.jpg", description: "Step aboard the Space Yacht, where luxury meets the final frontier. This opulent spacecraft is the epitome of cosmic indulgence, designed for those who seek the thrill of space exploration without sacrificing comfort. Its circular, modular design sets it apart, as the harmonious interlocking sections create a sense of unity and balance. The central dome, illuminated with a calming, ethereal glow, serves as a panoramic lounge, offering breathtaking views of nearby planets and star systems. With state-of-the-art anti-gravity chambers, a zero-gravity pool, and gourmet galactic cuisine, the Space Yacht turns the void of space into a sanctuary of relaxation and leisure. The elegant interior boasts bespoke accommodations and entertainment options that cater to every whim. Whether hosting a cosmic gala or embarking on a personal interstellar retreat, the Space Yacht promises an unparalleled journey through the stars." },
        { name: "Compact Explorer", image: "images/compact_explorer.jpg", description: "The Compact Explorer, with its sleek design and cutting-edge technology, is the epitome of efficiency and agility in space travel. As the smallest spacecraft in the fleet, it is perfectly suited for solo adventurers or small groups. With a reflective metallic hull that seamlessly blends into the cosmic landscape and dynamic thrusters that light up the darkest reaches of space, this nimble spaceship is built for deep-space exploration and reconnaissance missions. The cockpit’s panoramic view offers an unrivaled spacefaring experience. Whether you are navigating through asteroid fields or taking in the breathtaking sights of distant galaxies, the Compact Explorer ensures a journey that is as smooth as it is exhilarating." }
    ];

    const spaceshipContainer = document.getElementById('spaceships');

    spaceships.forEach(spaceship => {
        const spaceshipDiv = document.createElement('div');
        spaceshipDiv.classList.add('spaceship');

        const spaceshipName = document.createElement('h2');
        spaceshipName.textContent = spaceship.name;
        spaceshipName.classList.add('spaceship-name');

        const imageContainer = document.createElement('div');
        imageContainer.classList.add('image-container');

        const spaceshipImage = document.createElement('img');
        spaceshipImage.src = spaceship.image;
        spaceshipImage.classList.add('spaceship-image');

        const imageDescription = document.createElement('div');
        imageDescription.classList.add('image-description');

        const descriptionText = document.createElement('p');
        descriptionText.textContent = spaceship.description;
        descriptionText.classList.add('description-text');

        imageDescription.appendChild(descriptionText);
        imageContainer.appendChild(spaceshipImage);
        imageContainer.appendChild(imageDescription);
        spaceshipDiv.appendChild(spaceshipName);
        spaceshipDiv.appendChild(imageContainer);
        spaceshipContainer.appendChild(spaceshipDiv);
    });
});