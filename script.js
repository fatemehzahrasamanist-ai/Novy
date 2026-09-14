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

const languageOptions =
    document.querySelectorAll(".language-option");

languageOptions.forEach(function (button) {

    button.addEventListener("click", function () {

        const selectedLanguage =
            button.getAttribute("data-lang");

        if (!selectedLanguage) {
            return;
        }

        localStorage.setItem(
            "novy-language",
            selectedLanguage
        );

        document.documentElement.lang =
            selectedLanguage;

        if (selectedLanguage === "en") {

            document.documentElement.dir = "ltr";

        } else {

            document.documentElement.dir = "rtl";

        }

        if (themePanel) {
            themePanel.style.display = "none";
        }

    });

});
const translations = {
    fa: {
        language: "زبان"
    },

    en: {
        language: "Language"
    },

    ar: {
        language: "اللغة"
    }
};
