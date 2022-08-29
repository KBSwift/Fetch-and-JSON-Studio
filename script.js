// TODO: add code here

window.onload = function (event) {
    const container = document.getElementById("container");

    fetch("https://handlers.education.launchcode.org/static/astronauts.json").then(function (response) {
        response.json().then(function (astronauts) {
            for (const astronaut of astronauts.sort((a, b) => b.hoursInSpace - a.hoursInSpace)) {
                container.innerHTML = `${container.innerHTML}
                <div class="astronaut">
                    <div class="bio">
                        <h3>${astronaut.firstName} ${astronaut.lastName}</h3>
                        <ul>
                            <li>Hours in space: ${astronaut.hoursInSpace}</li>
                            <li>Active: <span class = "${astronaut.active ? "active" : "inactive"}"> ${astronaut.active}</span> </li>
                            <li>Skills: ${astronaut.skills.join(", ")}</li>
                        </ul>
                    </div>
                <img class="avatar" src="${astronaut.picture}">
                </div>
                `;
            }

            const numberOfAstronauts = document.getElementById("numberOfAstronauts");
            numberOfAstronauts.innerText = `Number of astronauts: ${astronauts.length}`;
        });
    });
};