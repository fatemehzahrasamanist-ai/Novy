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


// ==================== Set Theme ====================

function setTheme(themeName) {

    const theme = themes[themeName];

    if (!theme) return;

    Object.entries(theme).forEach(function ([variable, value]) {

        document.documentElement.style.setProperty(
            variable,
            value
        );

    });

    localStorage.setItem(
        "novy-theme",
        themeName
    );

}


// ==================== Load Saved Theme ====================

const savedTheme =
    localStorage.getItem("novy-theme");

if (
    savedTheme &&
    themes[savedTheme]
) {

    setTheme(savedTheme);

} else {

    setTheme("navy");

}


// ==================== Theme Elements ====================

const themeButton =
    document.getElementById("themeButton");

const themePanel =
    document.getElementById("themePanel");

const closeThemePanel =
    document.getElementById("closeThemePanel");

const themeOptions =
    document.querySelectorAll(".theme-option");


// ==================== Open / Close Theme Panel ====================

if (themeButton && themePanel) {

    themeButton.addEventListener(
        "click",
        function (event) {

            event.stopPropagation();

            if (
                themePanel.style.display === "block"
            ) {

                themePanel.style.display = "none";

            } else {

                themePanel.style.display = "block";

            }

        }
    );

}


if (closeThemePanel && themePanel) {

    closeThemePanel.addEventListener(
        "click",
        function () {

            themePanel.style.display = "none";

        }
    );

}


// ==================== Select Theme ====================

themeOptions.forEach(function (button) {

    button.addEventListener(
        "click",
        function () {

            const selectedTheme =
                button.getAttribute("data-theme");

            if (!selectedTheme) return;

            setTheme(selectedTheme);

            if (themePanel) {

                themePanel.style.display = "none";

            }

        }
    );

});


// ==================== Close Theme Panel Outside ====================

document.addEventListener(
    "click",
    function (event) {

        if (!themePanel || !themeButton) {
            return;
        }

        const clickedPanel =
            themePanel.contains(event.target);

        const clickedButton =
            themeButton.contains(event.target);

        if (
            !clickedPanel &&
            !clickedButton
        ) {

            themePanel.style.display = "none";

        }

    }
);


// ==================== Language System ====================

const translations = {

    fa: {

        pageTitle: "نووی | همراه دانش‌آموزان",

        home: "خانه",
        learning: "یادگیری",
        planning: "برنامه‌ریزی",
        calm: "آرامش",
        login: "ورود",

        themeSettings: "تنظیمات تم",
        close: "بستن",

        novyAppearance: "ظاهر نووی",
        chooseTheme: "تم مورد علاقه‌ات رو انتخاب کن.",

        language: "زبان",

        black: "مشکی",
        navy: "سرمه‌ای",
        ice: "یخی",

        eyebrow: "✦ همراه دانش‌آموزان",

        heroTitle:
            "یادگیری، <span>با نووی</span> ساده‌تر میشه.",

        heroDescription:
            "نووی یک همراه هوشمنده برای درس خواندن، برنامه‌ریزی، تمرکز و روزهایی که فقط یک همراه خوب لازم داری.",

        start: "🚀 شروع کنیم",
        aboutNovy: "بیشتر درباره نووی",

        novy: "نووی",
        studentCompanion: "همراه دانش‌آموزان",

        chatHello: "سلام! 👋",
        chatQuestion: "امروز دوست داری روی چی کار کنیم؟",
        chatUser: "می‌خوام برای امتحان علوم آماده بشم.",
        chatGreat: "عالیه! 🧠",
        chatPlan:
            "اول ببینیم چقدر وقت داریم و بعد یه برنامه‌ی جمع‌وجور می‌چینیم.",

        fakeInput: "پیامت رو بنویس...",

        whatNovyDoes: "نووی چه کارهایی بلده؟",

        threeWays:
            "سه راه برای اینکه <span>بهتر پیش بری.</span>",

        learningTitle: "درس و یادگیری",

        learningDescription:
            "توضیح ساده‌ی درس‌ها، حل مسئله، ساخت تست، مرور و پیدا کردن نقاط ضعف.",

        learningButton: "شروع یادگیری ←",

        planningTitle: "برنامه‌ریزی",

        planningDescription:
            "برنامه‌ای واقعی و منعطف بر اساس زمان، درس‌ها، امتحان‌ها و انرژی تو.",

        planningButton: "برنامه‌ریزی کنیم ←",

        calmTitle: "آرامش و انگیزه",

        calmDescription:
            "وقتی خسته‌ای، استرس داری یا شروع کردن سخته، نووی کنارت می‌مونه.",

        calmButton: "با نووی حرف بزن ←",

        finalDescription:
            "لازم نیست همه‌چیز رو یک‌دفعه انجام بدی.",

        finalTitle:
            "فقط یک قدم. <span>همین الان.</span>",

        talkToNovy: "صحبت با نووی ✦",

        footerCompanion:
            "همراه دانش‌آموزان 🌱"

    },


    en: {

        pageTitle: "Novy | Your Student Companion",

        home: "Home",
        learning: "Learning",
        planning: "Planning",
        calm: "Calm",
        login: "Log in",

        themeSettings: "Theme settings",
        close: "Close",

        novyAppearance: "Novy Appearance",
        chooseTheme: "Choose your favorite theme.",

        language: "Language",

        black: "Black",
        navy: "Navy",
        ice: "Ice",

        eyebrow: "✦ Your Student Companion",

        heroTitle:
            "Learning is <span>easier with Novy.</span>",

        heroDescription:
            "Novy is a smart companion for studying, planning, staying focused, and those days when you just need someone by your side.",

        start: "🚀 Get Started",
        aboutNovy: "Learn More About Novy",

        novy: "Novy",
        studentCompanion: "Your Student Companion",

        chatHello: "Hi! 👋",
        chatQuestion: "What would you like to work on today?",
        chatUser: "I want to prepare for my science exam.",
        chatGreat: "Great! 🧠",
        chatPlan:
            "Let's see how much time we have, then we'll make a simple plan.",

        fakeInput: "Write your message...",

        whatNovyDoes: "What can Novy do?",

        threeWays:
            "Three ways to <span>move forward better.</span>",

        learningTitle: "Study & Learning",

        learningDescription:
            "Simple explanations, problem solving, practice tests, review, and finding your weak points.",

        learningButton: "Start Learning →",

        planningTitle: "Planning",

        planningDescription:
            "A realistic and flexible plan based on your time, subjects, exams, and energy.",

        planningButton: "Let's Plan →",

        calmTitle: "Calm & Motivation",

        calmDescription:
            "When you're tired, stressed, or having trouble starting, Novy stays by your side.",

        calmButton: "Talk to Novy →",

        finalDescription:
            "You don't have to do everything at once.",

        finalTitle:
            "Just one step. <span>Right now.</span>",

        talkToNovy: "Talk to Novy ✦",

        footerCompanion:
            "Your Student Companion 🌱"

    },


    ar: {

        pageTitle: "نووي | رفيق الطلاب",

        home: "الرئيسية",
        learning: "التعلم",
        planning: "التخطيط",
        calm: "الهدوء",
        login: "تسجيل الدخول",

        themeSettings: "إعدادات المظهر",
        close: "إغلاق",

        novyAppearance: "مظهر نووي",
        chooseTheme: "اختر المظهر المفضل لديك.",

        language: "اللغة",

        black: "أسود",
        navy: "كحلي",
        ice: "ثلجي",

        eyebrow: "✦ رفيق الطلاب",

        heroTitle:
            "التعلم أصبح <span>أسهل مع نووي.</span>",

        heroDescription:
            "نووي هو رفيق ذكي للدراسة والتخطيط والتركيز، وللأيام التي تحتاج فيها فقط إلى رفيق جيد.",

        start: "🚀 لنبدأ",
        aboutNovy: "المزيد عن نووي",

        novy: "نووي",
        studentCompanion: "رفيق الطلاب",

        chatHello: "مرحباً! 👋",
        chatQuestion: "ماذا تريد أن نعمل عليه اليوم؟",
        chatUser: "أريد الاستعداد لامتحان العلوم.",
        chatGreat: "رائع! 🧠",
        chatPlan:
            "لنرَ كم من الوقت لدينا، ثم نضع خطة بسيطة.",

        fakeInput: "اكتب رسالتك...",

        whatNovyDoes: "ماذا يستطيع نووي أن يفعل؟",

        threeWays:
            "ثلاث طرق لتتقدم <span>بشكل أفضل.</span>",

        learningTitle: "الدراسة والتعلم",

        learningDescription:
            "شرح مبسط للدروس، حل المسائل، إنشاء اختبارات، المراجعة واكتشاف نقاط الضعف.",

        learningButton: "ابدأ التعلم ←",

        planningTitle: "التخطيط",

        planningDescription:
            "خطة واقعية ومرنة بناءً على وقتك ودروسك وامتحاناتك وطاقتك.",

        planningButton: "لنخطط معاً ←",

        calmTitle: "الهدوء والتحفيز",

        calmDescription:
            "عندما تكون متعباً أو متوتراً أو تجد صعوبة في البدء، يبقى نووي بجانبك.",

        calmButton: "تحدث مع نووي ←",

        finalDescription:
            "ليس عليك أن تفعل كل شيء دفعة واحدة.",

        finalTitle:
            "خطوة واحدة فقط. <span>الآن.</span>",

        talkToNovy: "تحدث مع نووي ✦",

        footerCompanion:
            "رفيق الطلاب 🌱"

    }

};


// ==================== Apply Language ====================

function applyLanguage(language) {

    if (!translations[language]) {
        language = "fa";
    }

    const currentTranslations =
        translations[language];


    // ---------- Normal Text ----------

    const elements =
        document.querySelectorAll("[data-i18n]");

    elements.forEach(function (element) {

        const key =
            element.getAttribute("data-i18n");

        if (
            currentTranslations[key] !== undefined
        ) {

            element.innerHTML =
                currentTranslations[key];

        }

    });


    // ---------- ARIA Labels ----------

    const ariaElements =
        document.querySelectorAll(
            "[data-i18n-aria]"
        );

    ariaElements.forEach(function (element) {

        const key =
            element.getAttribute(
                "data-i18n-aria"
            );

        if (
            currentTranslations[key] !== undefined
        ) {

            element.setAttribute(
                "aria-label",
                currentTranslations[key]
            );

        }

    });


    // ---------- HTML Language ----------

    document.documentElement.lang =
        language;


    // ---------- Text Direction ----------

    document.documentElement.dir =
        language === "en"
            ? "ltr"
            : "rtl";


    // ---------- Page Title ----------

    document.title =
        currentTranslations.pageTitle;


    // ---------- Save Language ----------

    localStorage.setItem(
        "novy-language",
        language
    );

}


// ==================== Language Buttons ====================

const languageOptions =
    document.querySelectorAll(
        ".language-option"
    );


languageOptions.forEach(function (button) {

    button.addEventListener(
        "click",
        function () {

            const selectedLanguage =
                button.getAttribute("data-lang");

            if (!selectedLanguage) {
                return;
            }

            applyLanguage(
                selectedLanguage
            );

            if (themePanel) {

                themePanel.style.display =
                    "none";

            }

        }
    );

});


// ==================== Load Saved Language ====================

const savedLanguage =
    localStorage.getItem("novy-language");

if (
    savedLanguage &&
    translations[savedLanguage]
) {

    applyLanguage(savedLanguage);

} else {

    applyLanguage("fa");

}
