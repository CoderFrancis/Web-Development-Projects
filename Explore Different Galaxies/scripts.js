function showGalaxyInfo() {
    const galaxyInfo = {
        "milky-way": {
            "description": "The Milky Way, our home galaxy. Travel Time: 0 years.",
            "image": "images/milky_way_1.jpg"
        },
        "andromeda": {
            "description": "Andromeda, the nearest spiral galaxy. Travel Time: 2.537 million years.",
            "image": "images/Andromeda_1.jpg"
        },
        "triangulum": {
            "description": "Triangulum, the third largest galaxy in the Local Group. Travel Time: 3 million years.",
            "image": "images/Triangulum_1.jpg"
        }
    };

    const galaxyDropdown = document.getElementById("galaxy-dropdown");
    const selectedGalaxy = galaxyDropdown.options[galaxyDropdown.selectedIndex].value;
    const descriptionDiv = document.getElementById("galaxy-description");
    const galaxyImage = document.getElementById("galaxy-image");
    
    if (galaxyInfo[selectedGalaxy]) {
        descriptionDiv.innerHTML = galaxyInfo[selectedGalaxy].description;
        galaxyImage.src = galaxyInfo[selectedGalaxy].image;
        galaxyImage.style.display = "block";
    } else {
        descriptionDiv.innerHTML = "Please select a galaxy.";
        galaxyImage.style.display = "none";
    }
}
