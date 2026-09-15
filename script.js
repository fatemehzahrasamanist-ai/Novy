// ==================== Novy Theme System ====================

const themes = {
    navy: {
        "--bg-main": "#061426",
        "--bg-section": "#081b30",
        "--bg-card": "#0b233d",
        "--bg-chat": "#0a2038",
        "--bg-message": "#102e4a",
        "--text-main": "#f4fbff",
        "--text-soft": "#a8c7d9",
        "--text-muted": "#91b0c2",
        "--accent": "#8ee7ff",
        "--accent-dark": "#061426",
        "--border": "#1d405d",
        "--border-soft": "#163452"
    },

    black: {
        "--bg-main": "#050505",
        "--bg-section": "#0a0a0a",
        "--bg-card": "#111111",
        "--bg-chat": "#151515",
        "--bg-message": "#1d1d1d",
        "--text-main": "#ffffff",
        "--text-soft": "#c7c7c7",
        "--text-muted": "#999999",
        "--accent": "#ffffff",
        "--accent-dark": "#050505",
        "--border": "#292929",
        "--border-soft": "#202020"
    },

    ice: {
        "--bg-main": "#eaf9ff",
        "--bg-section": "#dff5fc",
        "--bg-card": "#ffffff",
        "--bg-chat": "#f7fdff",
        "--bg-message": "#dff5fc",
        "--text-main": "#09283a",
        "--text-soft": "#416779",
        "--text-muted": "#648594",
        "--accent": "#42bde8",
        "--accent-dark": "#ffffff",
        "--border": "#b9e4f2",
        "--border-soft": "#c9eaf4"
    }
};

function setTheme(themeName) {
    const theme = themes[themeName];

    if (!theme) return;

    Object.entries(theme).forEach(function ([variable, value]) {
        document.documentElement.style.setProperty(variable, value);
    });

    localStorage.setItem("novy-theme", themeName);
}

const savedTheme = localStorage.getItem("novy-theme");

if (savedTheme && themes[savedTheme]) {
    setTheme(savedTheme);
} else {
    setTheme("navy");
}

const themeButton = document.getElementById("themeButton");
const themePanel = document.getElementById("themePanel");
const closeThemePanel = document.getElementById("closeThemePanel");
const themeOptions = document.querySelectorAll(".theme-option");

if (themeButton && themePanel) {
    themeButton.addEventListener("click", function (event) {
        event.stopPropagation();

        if (themePanel.style.display === "block") {
            themePanel.style.display = "none";
        } else {
            themePanel.style.display = "block";
        }
    });
}

if (closeThemePanel && themePanel) {
    closeThemePanel.addEventListener("click", function () {
        themePanel.style.display = "none";
    });
}

themeOptions.forEach(function (button) {
    button.addEventListener("click", function () {
        const selectedTheme = button.getAttribute("data-theme");

        if (!selectedTheme) return;

        setTheme(selectedTheme);

        if (themePanel) {
            themePanel.style.display = "none";
        }
    });
});

document.addEventListener("click", function (event) {
    if (!themePanel || !themeButton) return;

    const clickedPanel = themePanel.contains(event.target);
    const clickedButton = themeButton.contains(event.target);

    if (!clickedPanel && !clickedButton) {
        themePanel.style.display = "none";
    }
});
// ==================== Language System ====================

const translations = {
 
    fa: {
    language: "زبان",
    novyAppearance: "ظاهر نووی",
    chooseTheme: "تم مورد علاقه‌ات رو انتخاب کن.",
    black: "مشکی",
    navy: "سرمه‌ای",
    ice: "یخی"
    close: "بستن"
},

    en: {
    language: "Language",
    novyAppearance: "Novy Appearance",
    chooseTheme: "Choose your favorite theme.",
    black: "Black",
    navy: "Navy",
    ice: "Ice"
    close: "Close"
},

   ar: {
    language: "اللغة",
    novyAppearance: "مظهر نووي",
    chooseTheme: "اختر المظهر المفضل لديك.",
    black: "أسود",
    navy: "كحلي",
    ice: "ثلجي"
    close: "إغلاق"
}

function applyLanguage(language) {

    const ariaElements =
        document.querySelectorAll("[data-i18n-aria]");

    ariaElements.forEach(function (element) {

        const key =
            element.getAttribute("data-i18n-aria");

        if (
            translations[language] &&
            translations[language][key]
        ) {

            element.setAttribute(
                "aria-label",
                translations[language][key]
            );

        }

    });


    const elements =
        document.querySelectorAll("[data-i18n]");

    elements.forEach(function (element) {

        const key =
            element.getAttribute("data-i18n");

        if (
            translations[language] &&
            translations[language][key]
        ) {

            element.textContent =
                translations[language][key];

        }

    });


    document.documentElement.lang =
        language;

    if (language === "en") {

        document.documentElement.dir = "ltr";

    } else {

        document.documentElement.dir = "rtl";

    }

    localStorage.setItem(
        "novy-language",
        language
    );
}
    });

    document.documentElement.lang =
        language;

    if (language === "en") {

        document.documentElement.dir = "ltr";

    } else {

        document.documentElement.dir = "rtl";

    }

    localStorage.setItem(
        "novy-language",
        language
    );
}


const languageOptions =
    document.querySelectorAll(".language-option");


languageOptions.forEach(function (button) {

    button.addEventListener("click", function () {

        const selectedLanguage =
            button.getAttribute("data-lang");

        if (!selectedLanguage) {
            return;
        }

        applyLanguage(selectedLanguage);

        if (themePanel) {
            themePanel.style.display = "none";
        }

    });

});
