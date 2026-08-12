let refresh = document.querySelector(".refreshBtn");
const refreshIcon = document.getElementById("refreshIcon");

function getUser() {
    refreshIcon.classList.add("animate-spin");
    fetch("https://randomuser.me/api/?results=3")
        .then((rawdata) => {
            return rawdata.json()
        })
        .then((data) => {
            document.querySelector(".users").innerHTML = ''
            data.results.forEach(function (user) {
                console.log(data.results)
                const card = document.createElement("div");

                card.className =
                    "w-full max-w-md bg-[#0b0b0b] border border-[#202020] rounded-3xl p-8 shadow-[0_25px_80px_rgba(0,0,0,0.7)] hover:border-[#333] transition duration-300";


                const imageContainer = document.createElement("div");
                imageContainer.className = "flex justify-center";

                const imageWrapper = document.createElement("div");
                imageWrapper.className = "relative";

                const imageGlow = document.createElement("div");
                imageGlow.className =
                    "absolute -inset-1 rounded-full bg-gradient-to-r from-gray-700 via-gray-400 to-gray-700 opacity-30 blur-sm";

                const image = document.createElement("img");

                image.src = user.picture.large;
                image.alt = `${user.name.first} ${user.name.last}`;

                image.className =
                    "relative w-32 h-32 rounded-full object-cover border-4 border-[#181818]";

                imageWrapper.appendChild(imageGlow);
                imageWrapper.appendChild(image);

                imageContainer.appendChild(imageWrapper);

                card.appendChild(imageContainer);


                // =========================
                // Name
                // =========================

                const name = document.createElement("h1");

                name.className =
                    "text-3xl font-bold text-white text-center mt-6";

                name.textContent =
                    `${user.name.title} ${user.name.first} ${user.name.last}`;

                card.appendChild(name);


                // =========================
                // Username
                // =========================

                const username = document.createElement("p");

                username.className =
                    "text-center text-gray-500 text-sm mt-1";

                username.textContent =
                    `@${user.login.username}`;

                card.appendChild(username);


                // =========================
                // Location
                // =========================

                const location = document.createElement("p");

                location.className =
                    "text-center text-gray-400 text-sm mt-4";

                location.textContent =
                    `📍 ${user.location.city}, ${user.location.state}`;

                card.appendChild(location);


                // =========================
                // User Information
                // =========================

                const infoContainer = document.createElement("div");

                infoContainer.className =
                    "grid grid-cols-2 gap-3 mt-6";


                // Email
                const emailBox = document.createElement("div");

                emailBox.className =
                    "bg-[#151515] border border-[#252525] rounded-xl p-4";

                const emailLabel = document.createElement("p");

                emailLabel.className =
                    "text-xs text-gray-600";

                emailLabel.textContent = "Email";

                const email = document.createElement("p");

                email.className =
                    "text-sm text-gray-300 mt-1 break-all";

                email.textContent = user.email;

                emailBox.appendChild(emailLabel);
                emailBox.appendChild(email);


                // Phone
                const phoneBox = document.createElement("div");

                phoneBox.className =
                    "bg-[#151515] border border-[#252525] rounded-xl p-4";

                const phoneLabel = document.createElement("p");

                phoneLabel.className =
                    "text-xs text-gray-600";

                phoneLabel.textContent = "Phone";

                const phone = document.createElement("p");

                phone.className =
                    "text-sm text-gray-300 mt-1";

                phone.textContent = user.phone;

                phoneBox.appendChild(phoneLabel);
                phoneBox.appendChild(phone);


                infoContainer.appendChild(emailBox);
                infoContainer.appendChild(phoneBox);

                card.appendChild(infoContainer);


                // =========================
                // Details
                // =========================

                const details = document.createElement("div");

                details.className =
                    "border-t border-[#202020] mt-6 pt-6 space-y-4";


                // Age
                const ageRow = document.createElement("div");

                ageRow.className =
                    "flex justify-between";

                const ageLabel = document.createElement("span");

                ageLabel.className =
                    "text-gray-600 text-sm";

                ageLabel.textContent = "Age";

                const ageValue = document.createElement("span");

                ageValue.className =
                    "text-gray-300 text-sm";

                ageValue.textContent =
                    `${user.dob.age} years`;

                ageRow.appendChild(ageLabel);
                ageRow.appendChild(ageValue);


                // Gender
                const genderRow = document.createElement("div");

                genderRow.className =
                    "flex justify-between";

                const genderLabel = document.createElement("span");

                genderLabel.className =
                    "text-gray-600 text-sm";

                genderLabel.textContent = "Gender";

                const genderValue = document.createElement("span");

                genderValue.className =
                    "text-gray-300 text-sm capitalize";

                genderValue.textContent = user.gender;

                genderRow.appendChild(genderLabel);
                genderRow.appendChild(genderValue);


                // Country
                const countryRow = document.createElement("div");

                countryRow.className =
                    "flex justify-between";

                const countryLabel = document.createElement("span");

                countryLabel.className =
                    "text-gray-600 text-sm";

                countryLabel.textContent = "Country";

                const countryValue = document.createElement("span");

                countryValue.className =
                    "text-gray-300 text-sm";

                countryValue.textContent = user.location.country;

                countryRow.appendChild(countryLabel);
                countryRow.appendChild(countryValue);


                details.appendChild(ageRow);
                details.appendChild(genderRow);
                details.appendChild(countryRow);

                card.appendChild(details);


                // =========================
                // Buttons
                // =========================

                const buttons = document.createElement("div");

                buttons.className =
                    "grid grid-cols-2 gap-3 mt-7";


                const emailButton = document.createElement("button");

                emailButton.className =
                    "py-3 rounded-xl bg-white text-black font-semibold text-sm hover:bg-gray-200 transition";

                emailButton.textContent = "Email";


                const profileButton = document.createElement("button");

                profileButton.className =
                    "py-3 rounded-xl bg-[#151515] border border-[#292929] text-white font-semibold text-sm hover:bg-[#1d1d1d] transition";

                profileButton.textContent = "View Profile";


                buttons.appendChild(emailButton);
                buttons.appendChild(profileButton);

                card.appendChild(buttons);


                // =========================
                // Add Card to DOM
                // =========================

                document.body.appendChild(card);


            })
        })
        .catch((err) => {
            console.log(err);

        })
}
getUser()

refresh.addEventListener("click", function () {
    getUser()
})
