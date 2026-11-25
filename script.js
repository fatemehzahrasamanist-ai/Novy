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

function applyCustomSavedTheme() {
    const bg = localStorage.getItem("novy-custom-bg") || "#0b1020";
    const accent = localStorage.getItem("novy-custom-accent") || "#8ee7ff";

    const customValues = {
        "--bg-main": bg,
        "--bg-section": bg,
        "--bg-card": bg,
        "--bg-chat": bg,
        "--bg-message": accent + "20",
        "--text-main": "#f4f7ff",
        "--text-soft": "#a8c7d9",
        "--text-muted": "#91b0c2",
        "--accent": accent,
        "--accent-dark": bg,
        "--border": accent + "55",
        "--border-soft": accent + "33"
    };

    Object.entries(customValues).forEach(function ([variable, value]) {
        document.documentElement.style.setProperty(variable, value);
    });
}

const savedTheme = localStorage.getItem("novy-theme");

if (savedTheme === "custom") {
    applyCustomSavedTheme();
} else if (savedTheme && themes[savedTheme]) {
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
            "همراه دانش‌آموزان 🌱",

        termsLink: "قوانین و مقررات",
        termsPageTitle: "قوانین و مقررات | نووی",
        termsHeading: "قوانین و مقررات استفاده از نووی",
        termsIntro: "با استفاده از نووی، این شرایط را می‌پذیرید. لطفاً پیش از استفاده، آن‌ها را مطالعه کنید.",
        termsUpdated: "آخرین به‌روزرسانی: نوامبر ۲۰۲۶",
        termsS1Title: "۱. هدف نووی",
        termsS1Text: "نووی با هدف پشتیبانی آموزشی، کمک به برنامه‌ریزی و تقویت مهارت یادگیری طراحی شده است. محتوای آن جایگزین معلم، مشاور، پزشک یا خدمات تخصصی نیست.",
        termsS2Title: "۲. حساب کاربری",
        termsS2Text: "برای استفاده از امکانات حساب، اطلاعات درست و به‌روز ارائه کنید و از حساب خود مراقبت کنید. مسئولیت فعالیت‌هایی که از طریق حساب شما انجام می‌شود بر عهده دارنده حساب است. در صورت مشاهده استفاده غیرمجاز، موضوع را به پشتیبانی اطلاع دهید.",
        termsS3Title: "۳. استفاده ایمن و مجاز",
        termsS3Text: "از نووی برای فعالیت غیرقانونی، آزار دیگران، انتشار اطلاعات خصوصی دیگران، فریب، تقلب یا آسیب‌رساندن استفاده نکنید. محتوای نامناسب یا مشکل‌دار را گزارش کنید.",
        termsS4Title: "۴. پاسخ‌های هوشمند و محدودیت‌ها",
        termsS4Text: "در صورت فعال‌شدن قابلیت هوش مصنوعی، پاسخ‌ها ممکن است ناقص یا نادرست باشند. پاسخ‌ها را بررسی کنید و برای تصمیم‌های مهم، از منابع معتبر و افراد متخصص کمک بگیرید. نووی نباید به‌عنوان مرجع قطعی پزشکی، حقوقی یا ایمنی استفاده شود.",
        termsS5Title: "۵. مالکیت محتوا و خدمات",
        termsS5Text: "نام، طراحی و اجزای اختصاصی نووی متعلق به صاحبان پروژه یا دارندگان مجوز آن‌هاست. بدون اجازه، آن‌ها را کپی یا به‌عنوان اثر خود معرفی نکنید. امکانات سایت ممکن است در طول زمان تغییر کنند.",
        termsS6Title: "۶. حریم خصوصی و امنیت",
        termsS6Text: "اطلاعات حساب و داده‌های شما مطابق سیاست حریم خصوصی نووی مدیریت می‌شوند. اطلاعات ورود خود را با دیگران به اشتراک نگذارید. قوانین و تنظیمات حریم خصوصی باید پیش از انتشار عمومی محصول نهایی تکمیل و در دسترس قرار گیرند.",
        termsS7Title: "۷. کاربران کم‌سن",
        termsS7Text: "نووی برای همراهی دانش‌آموزان طراحی شده است. کاربران کم‌سن باید با آگاهی و راهنمایی والدین یا سرپرست خود از خدمات استفاده کنند. والدین یا سرپرستان می‌توانند درباره استفاده فرزندشان تصمیم‌گیری و نظارت کنند.",
        termsS8Title: "۸. تغییرات و دسترس‌پذیری",
        termsS8Text: "ممکن است برای بهبود، نگهداری یا دلایل امنیتی، بخشی از خدمات موقتاً تغییر کند یا در دسترس نباشد. نسخه به‌روز این شرایط از همین صفحه قابل مطالعه خواهد بود.",
        termsS9Title: "۹. تماس و گزارش مشکل",
        termsS9Text: "اگر درباره این شرایط یا عملکرد نووی پرسشی دارید یا با مشکلی روبه‌رو شده‌اید، از مسیر پشتیبانی رسمی پروژه که پس از راه‌اندازی اعلام می‌شود استفاده کنید.",
        termsBack: "بازگشت به صفحه اصلی"

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
            "Your Student Companion 🌱",

        termsLink: "Terms & Conditions",
        termsPageTitle: "Terms & Conditions | Novy",
        termsHeading: "Novy Terms & Conditions",
        termsIntro: "By using Novy, you agree to these terms. Please read them before using the service.",
        termsUpdated: "Last updated: November 2026",
        termsS1Title: "1. Purpose of Novy",
        termsS1Text: "Novy is designed to support learning, study planning, and the development of learning skills. It does not replace a teacher, counsellor, doctor, or other professional service.",
        termsS2Title: "2. User accounts",
        termsS2Text: "Provide accurate and up-to-date information when creating an account and keep your account secure. You are responsible for activity carried out through your account. Report suspected unauthorized use through the project's support channel.",
        termsS3Title: "3. Safe and permitted use",
        termsS3Text: "Do not use Novy for unlawful activity, harassment, sharing other people's private information, deception, cheating, or causing harm. Report content that appears unsafe or inappropriate.",
        termsS4Title: "4. AI responses and limitations",
        termsS4Text: "If AI features are enabled, their responses may be incomplete or incorrect. Check important information and consult reliable sources or qualified people for important decisions. Novy is not an authoritative medical, legal, or safety resource.",
        termsS5Title: "5. Content and service ownership",
        termsS5Text: "Novy's name, design, and original components belong to the project owners or their respective licensors. Do not copy or claim them as your own without permission. Website features may change over time.",
        termsS6Title: "6. Privacy and security",
        termsS6Text: "Account information and user data are handled under Novy's privacy policy. Do not share your sign-in details. The privacy policy and related settings must be completed and made available before the final public launch.",
        termsS7Title: "7. Younger users",
        termsS7Text: "Novy is designed for students. Younger users should use the service with the awareness and guidance of a parent or guardian. Parents and guardians may decide whether and how their child uses the service.",
        termsS8Title: "8. Changes and availability",
        termsS8Text: "For improvements, maintenance, or security reasons, parts of the service may change or become temporarily unavailable. The latest version of these terms will be available on this page.",
        termsS9Title: "9. Contact and reporting issues",
        termsS9Text: "For questions about these terms or problems with Novy, use the project's official support channel once it has been announced.",
        termsBack: "Back to Home"

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
            "رفيق الطلاب 🌱",

        termsLink: "الشروط والأحكام",
        termsPageTitle: "الشروط والأحكام | نووي",
        termsHeading: "شروط وأحكام استخدام نووي",
        termsIntro: "باستخدام نووي، فإنك توافق على هذه الشروط. يرجى قراءتها قبل استخدام الخدمة.",
        termsUpdated: "آخر تحديث: نوفمبر ٢٠٢٦",
        termsS1Title: "١. هدف نووي",
        termsS1Text: "صُمم نووي لدعم التعلم والمساعدة في التخطيط الدراسي وتنمية مهارات التعلم. ولا يحل محل المعلم أو المرشد أو الطبيب أو أي خدمة متخصصة أخرى.",
        termsS2Title: "٢. حساب المستخدم",
        termsS2Text: "قدّم معلومات صحيحة ومحدثة عند إنشاء الحساب وحافظ على أمانه. أنت مسؤول عن الأنشطة التي تتم من خلال حسابك. أبلغ قناة الدعم الخاصة بالمشروع عن أي استخدام غير مصرح به.",
        termsS3Title: "٣. الاستخدام الآمن والمسموح",
        termsS3Text: "لا تستخدم نووي في أنشطة غير قانونية أو مضايقة الآخرين أو نشر معلوماتهم الخاصة أو الخداع أو الغش أو إلحاق الضرر. أبلغ عن المحتوى غير الآمن أو غير المناسب.",
        termsS4Title: "٤. إجابات الذكاء الاصطناعي وحدودها",
        termsS4Text: "إذا تم تفعيل ميزات الذكاء الاصطناعي، فقد تكون الإجابات ناقصة أو غير دقيقة. تحقق من المعلومات المهمة واستعن بمصادر موثوقة أو مختصين عند اتخاذ القرارات المهمة. نووي ليس مرجعاً طبياً أو قانونياً أو متعلقاً بالسلامة.",
        termsS5Title: "٥. ملكية المحتوى والخدمة",
        termsS5Text: "اسم نووي وتصميمه ومكوناته الأصلية ملك لأصحاب المشروع أو للجهات المرخصة لها. لا تنسخها أو تنسبها إلى نفسك دون إذن. قد تتغير ميزات الموقع بمرور الوقت.",
        termsS6Title: "٦. الخصوصية والأمان",
        termsS6Text: "تتم إدارة معلومات الحساب وبيانات المستخدم وفق سياسة الخصوصية الخاصة بنووي. لا تشارك بيانات تسجيل الدخول. يجب استكمال سياسة الخصوصية والإعدادات ذات الصلة وإتاحتها قبل الإطلاق العام النهائي.",
        termsS7Title: "٧. المستخدمون الأصغر سناً",
        termsS7Text: "صُمم نووي لمرافقة الطلاب. ينبغي للمستخدمين الأصغر سناً استخدام الخدمة بعلم وتوجيه أحد الوالدين أو الوصي. ويمكن للوالدين أو الأوصياء تحديد ما إذا كان الطفل سيستخدم الخدمة وكيفية ذلك.",
        termsS8Title: "٨. التغييرات والتوافر",
        termsS8Text: "قد تتغير أجزاء من الخدمة أو تصبح غير متاحة مؤقتاً لأغراض التحسين أو الصيانة أو الأمان. ستكون أحدث نسخة من هذه الشروط متاحة في هذه الصفحة.",
        termsS9Title: "٩. التواصل والإبلاغ عن المشكلات",
        termsS9Text: "للاستفسارات حول هذه الشروط أو مشكلات نووي، استخدم قناة الدعم الرسمية للمشروع عند الإعلان عنها.",
        termsBack: "العودة إلى الصفحة الرئيسية"

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
        document.body && document.body.dataset.page === "terms"
            ? currentTranslations.termsPageTitle
            : currentTranslations.pageTitle;


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


/* ==================== Cross-page preference synchronization ==================== */
window.addEventListener("storage", function (event) {
    if (event.key === "novy-language" && event.newValue) {
        applyLanguage(event.newValue);
    }

    if (event.key === "novy-theme" && event.newValue) {
        if (event.newValue === "custom") {
            applyCustomSavedTheme();
        } else if (themes[event.newValue]) {
            setTheme(event.newValue);
        }
    }

    if (event.key === "novy-custom-bg" || event.key === "novy-custom-accent") {
        if (localStorage.getItem("novy-theme") === "custom") {
            applyCustomSavedTheme();
        }
    }
});
