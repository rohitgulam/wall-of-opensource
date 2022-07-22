const profile = {
  name: "Hossam Tuwano",
  about:
    "I am an open-minded web developer who's ready for new challenges. I speak JavaScript",
};
const profileName = document.querySelector("#my-name");
const aboutMe = document.querySelector("#about-me");

profileName.textContent = profile.name;
aboutMe.textContent = profile.about;
