const allLang = ["en", "ru", "cz", "ua"];
let langItems = document.getElementsByClassName("language-item");
let btnImg = document.getElementById("btn-img");
let btnTitle = document.getElementById("btn-title");

const LocationIndex = window.location.href.split("#")[1];
let languageIndex;

if (LocationIndex) {
    languageIndex = LocationIndex.toUpperCase();
}

if (languageIndex) {
    btnImg.src = `assets/icons/language/${languageIndex}.png`;
    btnTitle.innerHTML = languageIndex;
} else btnImg.src = `assets/icons/language/EN.png`;

for (let i = 0; i < langItems.length; i++) {
    let langItem = langItems[i];
    langItem.onclick = changeLanguage;
}

function changeLanguage(e) {
    btnImg.src = "assets/icons/language/" + this.dataset.lang + ".png";
    btnTitle.innerText = this.dataset.lang;
    location.href = window.location.pathname + "#" + this.dataset.lang;
    location.reload();
}

function changeLanguageHash() {
    let hash = window.location.hash;
    hash = hash.substring(1);
    if (!allLang.includes(hash)) {
        location.href = window.location.pathname + "#en";
        location.reload();
    }
    document.querySelector("title").innerHTML = Title["title"][hash];
    for (let key in langArr) {
        document.querySelector(`.${key}`).innerHTML = langArr[key][hash];
    }
}
document.addEventListener("DOMContentLoaded", changeLanguageHash());
