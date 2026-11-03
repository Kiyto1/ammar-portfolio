export type Lang = "en" | "ar";

type ProjectText = {
  name: string;
  category: string;
  description: string;
  contribution?: string;
  highlights: string[];
  demoNote?: string;
};

const en = {
  name: "Ammar Alsaedi",
  firstName: "Ammar",
  pageTitle: "Ammar Alsaedi | Full-Stack Developer",
  cities: { madinah: "Madinah", jeddah: "Jeddah" },
  nav: {
    home: "Home",
    about: "About",
    projects: "Projects",
    contact: "Contact",
    contactMe: "Contact Me",
    langButton: "عربي",
    langLabel: "Switch to Arabic",
    toLight: "Switch to light mode",
    toDark: "Switch to dark mode",
    openMenu: "Open menu",
    closeMenu: "Close menu",
  },
  hero: {
    available: "Available for opportunities",
    hi: "Hi, I am",
    titles: [
      "Full-Stack Developer",
      "JavaScript & React",
      "Node.js & Python",
      "End-to-End Web Applications",
    ],
    intro:
      "Full-stack developer building complete web applications with JavaScript, from responsive React interfaces to Node.js and Python backends, databases and AI integrations.",
    viewProjects: "View Projects",
    contactMe: "Contact Me",
  },
  about: {
    badge: "About Me",
    heading: "Clean software for real problems.",
    body: "I am a full-stack developer with a Computer Science degree, building complete applications with JavaScript. I work across the stack with React, Node.js, Python and FastAPI, and add AI features where they make the product better.",
    coreStack: "Core stack",
    coreStackSub: "Frontend · Backend",
    groups: {
      frontend: "Frontend",
      backend: "Backend",
    },
  },
  projects: {
    badge: "Projects",
    heading: "Selected work.",
    liveDemo: "Live demo",
    talkAbout: "Let's talk about this project",
    viewSource: "View source on GitHub",
    technologies: "technologies",
    openDemo: "Open live demo",
    crmFooter: "Screenshot of the CRM Assistant.",
    crmAlt: "Screenshot of the CRM Assistant chat interface",
    crmAria: "Open the live CRM Assistant demo",
    nahjFooter: "Recorded demo of the company side of Nahj.",
    nahjAria: "Demo of the company side of the Nahj platform",
    sahihFooter: "Screenshot of the Sahih AI platform.",
    sahihAlt: "Screenshot of the Sahih AI home page",
    videoFallback: "Your browser can't play this video.",
    items: {
      "crm-assistant": {
        name: "AI-Powered CRM Assistant",
        category: "AI agent",
        description:
          "A conversational assistant for managing customers, tasks, and notes. It finds overdue follow-ups, answers questions from stored knowledge with source references, and asks for approval before saving any change.",
        highlights: [
          "Conversational customer search with task and note management",
          "Overdue follow-up detection",
          "Approval before changes are saved, with conversations and pending approvals kept between sessions",
        ],
        demoNote:
          "Hosted on a free server. If the demo has been idle, the first load can take up to a minute.",
      } as ProjectText,
      nahj: {
        name: "Nahj",
        category: "Career platform",
        description:
          "A career matching platform that connects students and companies, with AI-assisted recommendations informed by RIASEC interest assessments.",
        contribution:
          "My contribution: the landing page and the company side of the platform, built full-stack and integrated with the AI and student sides. The demo shows the company side.",
        highlights: [
          "Matches students and companies on one platform",
          "Recommendations informed by RIASEC assessments",
          "Prompt design for consistent AI output",
        ],
      } as ProjectText,
      "sahih-ai": {
        name: "Sahih AI",
        category: "Applied AI · Learning Hackathon",
        description:
          "A tool built during a learning hackathon that helps grade exams by reading handwritten answers, then processing them and saving the results in an organized way.",
        highlights: [
          "Reads handwritten answers with OCR",
          "Backend services that process the answers",
          "Saves the results in an organized form",
        ],
      } as ProjectText,
    },
  },
  contact: {
    badge: "Contact",
    heading: "Let's work together.",
    body: "I'm looking for software developer roles in Jeddah and Madinah. Reach out through any of these.",
    download: "Download CV",
    email: "Email",
    linkedin: "LinkedIn",
    github: "GitHub",
  },
  footer: {
    tagline: "Full-stack developer. Open to roles in Jeddah and Madinah.",
    rights: "Built with React and Tailwind CSS.",
    backToTop: "Back to top",
    navLabel: "Footer",
  },
};

export type Dict = typeof en;

const ar: Dict = {
  name: "عمار الصاعدي",
  firstName: "عمار",
  pageTitle: "عمار الصاعدي | مطوّر تطبيقات ويب متكاملة",
  cities: {
    madinah: "المدينة المنورة",
    jeddah: "جدة",
  },
  nav: {
    home: "الرئيسية",
    about: "نبذة عني",
    projects: "مشاريعي",
    contact: "التواصل",
    contactMe: "تواصل معي",
    langButton: "EN",
    langLabel: "التبديل إلى اللغة الإنجليزية",
    toLight: "تفعيل المظهر الفاتح",
    toDark: "تفعيل المظهر الداكن",
    openMenu: "فتح القائمة",
    closeMenu: "إغلاق القائمة",
  },
  hero: {
    available: "متاح للفرص الوظيفية",
    hi: "مرحبًا، أنا",
    titles: [
      "مطوّر تطبيقات ويب متكاملة",
      "تطوير الواجهات الأمامية والخلفية",
      "قواعد البيانات وتكامل الذكاء الاصطناعي",
      "بناء التطبيقات من الفكرة إلى التنفيذ",
    ],
    intro:
      "أبني تطبيقات ويب متكاملة، من واجهات سهلة وسريعة الاستجابة إلى خدمات خلفية وقواعد بيانات، وأضيف قدرات الذكاء الاصطناعي حيث تخدم المنتج.",
    viewProjects: "استعرض مشاريعي",
    contactMe: "تواصل معي",
  },
  about: {
    badge: "نبذة عني",
    heading: "حلول برمجية لاحتياجات واقعية.",
    body:
      "خريج علوم حاسب ومطوّر تطبيقات ويب متكاملة. تشمل تجربتي تطوير منصات تربط المستخدمين بالخدمات، وبناء أدوات تتيح الوصول إلى البيانات وتنفيذ المهام باللغة الطبيعية. أستمتع بتحويل الأفكار إلى تطبيقات قابلة للاستخدام، والعمل على تفاصيلها من الواجهة إلى منطق النظام.",
    coreStack: "التقنيات التي أستخدمها",
    coreStackSub: "الواجهات الأمامية · الخدمات الخلفية",
    groups: {
      frontend: "الواجهات الأمامية",
      backend: "الخدمات الخلفية",
    },
  },
  projects: {
    badge: "مشاريعي",
    heading: "أعمال مختارة.",
    liveDemo: "جرّب المشروع",
    talkAbout: "لنتحدّث عن هذا المشروع",
    viewSource: "استعرض الكود المصدري",
    technologies: "التقنيات المستخدمة",
    openDemo: "افتح النسخة التجريبية",
    crmFooter: "واجهة مساعد إدارة علاقات العملاء.",
    crmAlt: "لقطة شاشة لواجهة المحادثة في مساعد إدارة علاقات العملاء",
    crmAria: "افتح النسخة التجريبية من مساعد إدارة علاقات العملاء",
    nahjFooter: "عرض توضيحي لواجهة الشركات في منصة نهج.",
    nahjAria: "فيديو يستعرض واجهة الشركات في منصة نهج",
    sahihFooter: "لقطة شاشة من منصة صحح.",
    sahihAlt: "لقطة شاشة للصفحة الرئيسية لمنصة صحح",
    videoFallback: "متصفحك لا يدعم تشغيل هذا الفيديو.",
    items: {
      "crm-assistant": {
        name: "مساعد ذكي لإدارة علاقات العملاء",
        category: "وكيل ذكاء اصطناعي",
        description:
          "مساعد يتيح إدارة بيانات العملاء والمهام والملاحظات من خلال المحادثة. يحدّد المتابعات المتأخرة، ويجيب عن الأسئلة بالاستناد إلى البيانات والملاحظات المحفوظة مع توضيح مصادر الإجابات، ويطلب موافقة المستخدم قبل حفظ التغييرات.",
        highlights: [
          "البحث عن العملاء وإدارة مهامهم وملاحظاتهم عبر المحادثة",
          "تحديد المتابعات المتأخرة لتسهيل متابعتها",
          "مراجعة التغييرات والموافقة عليها قبل حفظها، مع إمكانية استئناف المحادثات وطلبات الموافقة المعلّقة",
        ],
        demoNote:
          "تعمل النسخة التجريبية على استضافة مجانية؛ لذا قد يستغرق تشغيلها نحو دقيقة عند زيارتها بعد فترة من عدم الاستخدام.",
      },
      nahj: {
        name: "نهج",
        category: "منصة للتوافق المهني",
        description:
          "منصة تربط الطلاب بالشركات، وتقدّم توصيات مدعومة بالذكاء الاصطناعي لمواءمة الفرص مع ميول الطلاب المهنية، بالاستناد إلى نتائج مقياس الميول المهنية.",
        contribution:
          "دوري في المشروع: تطوير الصفحة الرئيسية وواجهة الشركات والخدمات الخلفية المرتبطة بها، وربطها بمكوّن الذكاء الاصطناعي وواجهة الطلاب. يستعرض الفيديو تجربة الشركات في المنصة.",
        highlights: [
          "ربط الطلاب بالشركات وتسهيل التوافق بينهم",
          "تقديم توصيات تستند إلى نتائج مقياس الميول المهنية",
          "صياغة تعليمات نماذج الذكاء الاصطناعي لتحسين اتساق المخرجات",
        ],
      },
      "sahih-ai": {
        name: "صحح AI",
        category: "الذكاء الاصطناعي التطبيقي · هاكثون التعلم",
        description:
          "طوّرت «صحح AI» ضمن هاكثون التعلم، وهو أداة تساعد في تصحيح الاختبارات عبر قراءة الإجابات المكتوبة بخط اليد، ثم معالجتها وحفظ نتائجها بصورة منظمة.",
        highlights: [
          "قراءة الإجابات المكتوبة بخط اليد بالتعرف الضوئي على الحروف",
          "خدمات خلفية لمعالجة الإجابات",
          "حفظ النتائج بصورة منظمة",
        ],
      },
    },
  },
  contact: {
    badge: "تواصل معي",
    heading: "لنبنِ شيئًا معًا.",
    body:
      "أبحث عن فرصة في تطوير البرمجيات في جدة أو المدينة المنورة. يسعدني التواصل معك لمناقشة الفرص المتاحة.",
    download: "تحميل السيرة الذاتية",
    email: "البريد الإلكتروني",
    linkedin: "لينكدإن",
    github: "GitHub",
  },
  footer: {
    tagline:
      "مطوّر تطبيقات ويب متكاملة، متاح للفرص الوظيفية في جدة والمدينة المنورة.",
    rights: "صُمّم وطُوّر بواسطة عمار الصاعدي.",
    backToTop: "العودة إلى أعلى الصفحة",
    navLabel: "روابط أسفل الصفحة",
  },
};

export const dictionaries: Record<Lang, Dict> = { en, ar };