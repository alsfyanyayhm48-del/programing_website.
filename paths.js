/* ===============================================
   Paths Data - كل المسارات والدروس والتحديات
   =============================================== */

const PATHS = {
    frontend: {
        id: 'frontend',
        title: 'مطوّر واجهات أمامية',
        subtitle: 'Frontend Developer',
        icon: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <polyline points="16 18 22 12 16 6"></polyline>
            <polyline points="8 6 2 12 8 18"></polyline>
        </svg>`,
        color: '#f59e0b',
        level: 'مبتدئ',
        duration: '20 ساعة',
        description: 'من الصفر إلى بناء مواقع ويب احترافية تفاعلية. ستتعلم HTML و CSS و JavaScript وأطر العمل الحديثة.',
        steps: [
            {
                id: 0,
                title: 'مقدمة في تطوير الويب',
                level: 'مبتدئ جداً',
                description: 'تعرّف على كيفية عمل الويب، ما هو Frontend، وما هي الأدوات التي ستحتاجها.',
                topics: ['كيف يعمل الويب', 'المتصفح', 'محرر الكود', 'أول ملف HTML'],
                lessons: ['lesson-intro-web'],
                status: 'todo'
            },
            {
                id: 1,
                title: 'أساسيات HTML',
                level: 'مبتدئ',
                description: 'تعلم لغة الترميز الأساسية للويب. العناوين، الفقرات، الروابط، الصور، والقوائم.',
                topics: ['العناوين h1-h6', 'الفقرات', 'الروابط', 'الصور', 'القوائم'],
                lessons: ['lesson-html-basics'],
                status: 'todo'
            },
            {
                id: 2,
                title: 'HTML متقدم',
                level: 'مبتدئ',
                description: 'النماذج، الجداول، والـ Semantic HTML. بناء صفحات ذات معنى ودلالات واضحة.',
                topics: ['النماذج', 'الحقول', 'الجداول', 'Semantic HTML', 'إمكانية الوصول'],
                lessons: ['lesson-html-forms'],
                status: 'todo'
            },
            {
                id: 3,
                title: 'أساسيات CSS',
                level: 'مبتدئ',
                description: 'أسلوب وتنسيق صفحات الويب. الألوان، الخطوط، الخلفيات، والمحددات.',
                topics: ['المحددات', 'الألوان', 'الخطوط', 'النصوص', 'الخلفيات', 'Box Model'],
                lessons: ['lesson-css-basics'],
                status: 'todo'
            },
            {
                id: 4,
                title: 'تخطيط CSS',
                level: 'مبتدئ - متوسط',
                description: 'Flexbox و Grid. التخطيطات الحديثة التي تجعل صفحاتك تبدو احترافية على كل الأجهزة.',
                topics: ['Flexbox', 'CSS Grid', 'Positioning', 'Responsive Design'],
                lessons: ['lesson-css-layout'],
                status: 'todo'
            },
            {
                id: 5,
                title: 'JavaScript الأساسيات',
                level: 'مبتدئ',
                description: 'لغة البرمجة التي تجعل الويب حي. المتغيرات، الشروط، الحلقات، والدوال.',
                topics: ['المتغيرات', 'أنواع البيانات', 'الشروط', 'الحلقات', 'الدوال', 'المصفوفات'],
                lessons: ['lesson-js-basics'],
                status: 'todo'
            },
            {
                id: 6,
                title: 'JavaScript في المتصفح (DOM)',
                level: 'مبتدئ - متوسط',
                description: 'كيف تتفاعل مع صفحات الويب. تعديل العناصر، الاستجابة للأحداث، وإنشاء محتوى ديناميكي.',
                topics: ['DOM', 'العناصر', 'الأحداث', 'التعديل', 'إنشاء عناصر'],
                lessons: ['lesson-js-dom'],
                status: 'todo'
            },
            {
                id: 7,
                title: 'مشروع: صفحة هبوط',
                level: 'متوسط',
                description: 'طبّق كل ما تعلمته. ابنِ صفحة هبوط احترافية لـ startup خيالي.',
                topics: ['مشروع تطبيقي', 'Best Practices', 'نشر الموقع'],
                lessons: ['lesson-project-landing'],
                status: 'todo'
            },
            {
                id: 8,
                title: 'مقدمة في React',
                level: 'متوسط',
                description: 'أشهر مكتبة لبناء واجهات المستخدم. المكونات، الحالة، والـ JSX.',
                topics: ['المكونات', 'JSX', 'Props', 'State', 'Hooks'],
                lessons: ['lesson-react-intro'],
                status: 'todo'
            },
            {
                id: 9,
                title: 'بناء تطبيق React كامل',
                level: 'متوسط',
                description: 'ابنِ تطبيق To-Do كامل بـ React. تطبيق عملي شامل.',
                topics: ['useState', 'useEffect', 'الأحداث', 'التخزين المحلي'],
                lessons: ['lesson-react-todo'],
                status: 'todo'
            },
            {
                id: 10,
                title: 'أدوات المطوّر',
                level: 'متوسط',
                description: 'Git، GitHub، npm، وأدوات لا غنى عنها لأي مطوّر محترف.',
                topics: ['Git', 'GitHub', 'npm', 'VS Code', 'DevTools'],
                lessons: ['lesson-devtools'],
                status: 'todo'
            },
            {
                id: 11,
                title: 'النشر والاستضافة',
                level: 'متوسط',
                description: 'كيف تنشر موقعك على الإنترنت ليراه العالم. Vercel، Netlify، وGitHub Pages.',
                topics: ['Vercel', 'Netlify', 'GitHub Pages', 'النطاق الخاص'],
                lessons: ['lesson-deploy'],
                status: 'todo'
            }
        ]
    },

    python: {
        id: 'python',
        title: 'Python من الصفر',
        subtitle: 'Python Developer',
        icon: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <path d="M12 2L2 7l10 5 10-5-10-5z"></path>
            <path d="M2 17l10 5 10-5"></path>
            <path d="M2 12l10 5 10-5"></path>
        </svg>`,
        color: '#3b82f6',
        level: 'مبتدئ',
        duration: '25 ساعة',
        description: 'لغة Python المثالية للمبتدئين. بسيطة وقوية، تُستخدم في كل شيء من الأتمتة إلى الذكاء الاصطناعي.',
        steps: [
            {
                id: 0,
                title: 'مقدمة عن Python',
                level: 'مبتدئ جداً',
                description: 'ليش Python؟ كيف تثبتها، وأول برنامج "Hello, World!"',
                topics: ['ليش Python', 'التثبيت', 'محرر الكود', 'Hello World'],
                lessons: ['lesson-python-intro'],
                status: 'todo'
            },
            {
                id: 1,
                title: 'المتغيرات وأنواع البيانات',
                level: 'مبتدئ',
                description: 'الأرقام، النصوص، القوائم، والقواميس. اللبنات الأساسية لأي برنامج.',
                topics: ['int', 'float', 'str', 'list', 'dict', 'bool'],
                lessons: ['lesson-python-variables'],
                status: 'todo'
            },
            {
                id: 2,
                title: 'الشروط والحلقات',
                level: 'مبتدئ',
                description: 'اجعل برنامجك يتخذ قرارات ويتكرر. if, elif, else, for, while.',
                topics: ['if/elif/else', 'for loop', 'while loop', 'break/continue'],
                lessons: ['lesson-python-control'],
                status: 'todo'
            },
            {
                id: 3,
                title: 'الدوال',
                level: 'مبتدئ',
                description: 'نظّم كودك في كتل قابلة لإعادة الاستخدام. الدوال، المعاملات، والقيم المُرجعة.',
                topics: ['def', 'المعاملات', 'return', 'Lambda', 'Scope'],
                lessons: ['lesson-python-functions'],
                status: 'todo'
            },
            {
                id: 4,
                title: 'القوائم والقواميس المتقدمة',
                level: 'مبتدئ - متوسط',
                description: 'List Comprehensions، التقطيع، والتعامل مع البيانات بمهارة.',
                topics: ['List Comprehension', 'Slicing', 'Methods', 'Nested'],
                lessons: ['lesson-python-lists'],
                status: 'todo'
            },
            {
                id: 5,
                title: 'الملفات والاستثناءات',
                level: 'متوسط',
                description: 'قراءة وكتابة الملفات. التعامل مع الأخطاء باحتراف.',
                topics: ['open/read/write', 'try/except', 'with statement', 'JSON'],
                lessons: ['lesson-python-files'],
                status: 'todo'
            },
            {
                id: 6,
                title: 'البرمجة الكائنية OOP',
                level: 'متوسط',
                description: 'الفئات والكائنات. مفهوم الـ Classes والـ Objects.',
                topics: ['class', 'object', 'self', 'inheritance', 'methods'],
                lessons: ['lesson-python-oop'],
                status: 'todo'
            },
            {
                id: 7,
                title: 'المكتبات الخارجية',
                level: 'متوسط',
                description: 'pip، المكتبات الشهيرة، وكيفية تثبيت أي مكتبة واستخدامها.',
                topics: ['pip', 'requests', 'numpy', 'pandas', 'venv'],
                lessons: ['lesson-python-libs'],
                status: 'todo'
            },
            {
                id: 8,
                title: 'مشروع: آلة حاسبة',
                level: 'متوسط',
                description: 'ابنِ آلة حاسبة تفاعلية في الـ Terminal. تطبيق عملي شامل.',
                topics: ['مشروع تطبيقي', 'Input/Output', 'معالجة الأخطاء'],
                lessons: ['lesson-python-calculator'],
                status: 'todo'
            },
            {
                id: 9,
                title: 'مشروع: Web Scraper',
                level: 'متوسط',
                description: 'استخرج بيانات من الإنترنت باستخدام requests و BeautifulSoup.',
                topics: ['requests', 'BeautifulSoup', 'CSV', 'مشروع تطبيقي'],
                lessons: ['lesson-python-scraper'],
                status: 'todo'
            },
            {
                id: 10,
                title: 'مقدمة في قواعد البيانات',
                level: 'متوسط',
                description: 'SQLite و SQL الأساسيات. تخزين البيانات بشكل دائم.',
                topics: ['SQLite', 'CRUD', 'SELECT', 'INSERT', 'UPDATE'],
                lessons: ['lesson-python-db'],
                status: 'todo'
            },
            {
                id: 11,
                title: 'Flask: بناء API',
                level: 'متوسط - متقدم',
                description: 'ابنِ API خاص بك باستخدام Flask. مدخل لعالم تطوير Backend.',
                topics: ['Flask', 'Routes', 'JSON API', 'GET/POST'],
                lessons: ['lesson-python-flask'],
                status: 'todo'
            },
            {
                id: 12,
                title: 'مقدمة في تحليل البيانات',
                level: 'متقدم',
                description: 'Pandas و Matplotlib. حلل بيانات حقيقية وارسم مخططات.',
                topics: ['pandas', 'DataFrames', 'matplotlib', 'تحليل'],
                lessons: ['lesson-python-data'],
                status: 'todo'
            },
            {
                id: 13,
                title: 'أين تكمل؟',
                level: 'متقدم',
                description: 'مسارات متقدمة: Django، Machine Learning، Data Science.',
                topics: ['Django', 'ML/AI', 'Data Science', 'Automation'],
                lessons: ['lesson-python-next'],
                status: 'todo'
            }
        ]
    },

    fullstack: {
        id: 'fullstack',
        title: 'مطوّر ويب شامل',
        subtitle: 'Full-Stack Developer',
        icon: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <ellipse cx="12" cy="5" rx="9" ry="3"></ellipse>
            <path d="M21 12c0 1.66-4 3-9 3s-9-1.34-9-3"></path>
            <path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5"></path>
        </svg>`,
        color: '#10b981',
        level: 'متوسط',
        duration: '40 ساعة',
        description: 'Frontend + Backend + قواعد بيانات. ابنِ تطبيق ويب كامل من الصفر إلى النشر.',
        steps: [
            {
                id: 0,
                title: 'مراجعة HTML و CSS',
                level: 'مبتدئ',
                description: 'مراجعة سريعة للأساسيات قبل البدء.',
                topics: ['HTML', 'CSS', 'Responsive'],
                lessons: ['lesson-fs-html-css'],
                status: 'todo'
            },
            {
                id: 1,
                title: 'JavaScript ES6+',
                level: 'متوسط',
                description: 'الأحدث في JavaScript: Arrow functions, Destructuring, Modules.',
                topics: ['ES6+', 'Arrow Functions', 'Destructuring', 'Modules'],
                lessons: ['lesson-fs-js-es6'],
                status: 'todo'
            },
            {
                id: 2,
                title: 'Node.js و npm',
                level: 'متوسط',
                description: 'JavaScript على السيرفر. إعداد بيئة العمل.',
                topics: ['Node.js', 'npm', 'package.json', 'Modules'],
                lessons: ['lesson-fs-node'],
                status: 'todo'
            },
            {
                id: 3,
                title: 'Express.js الأساسيات',
                level: 'متوسط',
                description: 'أشهر إطار عمل لـ Node.js. بناء أول سيرفر.',
                topics: ['Express', 'Routes', 'Middleware', 'Request/Response'],
                lessons: ['lesson-fs-express'],
                status: 'todo'
            },
            {
                id: 4,
                title: 'REST APIs',
                level: 'متوسط',
                description: 'بناء واستهلاك REST APIs. المفاهيم الأساسية.',
                topics: ['REST', 'CRUD', 'HTTP Methods', 'Status Codes'],
                lessons: ['lesson-fs-rest'],
                status: 'todo'
            },
            {
                id: 5,
                title: 'قواعد البيانات SQL',
                level: 'متوسط',
                description: 'PostgreSQL و MySQL. تصميم قواعد البيانات والـ Queries.',
                topics: ['SQL', 'PostgreSQL', 'Schemas', 'Relationships'],
                lessons: ['lesson-fs-sql'],
                status: 'todo'
            },
            {
                id: 6,
                title: 'MongoDB و NoSQL',
                level: 'متوسط',
                description: 'قواعد بيانات NoSQL. متى ولماذا تستخدمها.',
                topics: ['MongoDB', 'Mongoose', 'Documents', 'CRUD'],
                lessons: ['lesson-fs-mongo'],
                status: 'todo'
            },
            {
                id: 7,
                title: 'المصادقة Authentication',
                level: 'متوسط - متقدم',
                description: 'JWT، Sessions، وحماية المسارات.',
                topics: ['JWT', 'Sessions', 'bcrypt', 'OAuth'],
                lessons: ['lesson-fs-auth'],
                status: 'todo'
            },
            {
                id: 8,
                title: 'React المتقدم',
                level: 'متقدم',
                description: 'React Router، Context API، وخطافات متقدمة.',
                topics: ['React Router', 'Context', 'useReducer', 'Custom Hooks'],
                lessons: ['lesson-fs-react-advanced'],
                status: 'todo'
            },
            {
                id: 9,
                title: 'Next.js',
                level: 'متقدم',
                description: 'إطار عمل React الكامل. SSR، SSG، وAPI Routes.',
                topics: ['Next.js', 'SSR', 'SSG', 'API Routes'],
                lessons: ['lesson-fs-next'],
                status: 'todo'
            },
            {
                id: 10,
                title: 'مشروع: متجر إلكتروني',
                level: 'متقدم',
                description: 'ابنِ متجر إلكتروني كامل: Frontend، Backend، قاعدة بيانات، دفع.',
                topics: ['مشروع شامل', 'Stripe', 'Cart', 'Orders'],
                lessons: ['lesson-fs-ecommerce'],
                status: 'todo'
            },
            {
                id: 11,
                title: 'Docker و Deployment',
                level: 'متقدم',
                description: 'تحزيم التطبيقات ونشرها على AWS أو DigitalOcean.',
                topics: ['Docker', 'AWS', 'CI/CD', 'Nginx'],
                lessons: ['lesson-fs-docker'],
                status: 'todo'
            },
            {
                id: 12,
                title: 'الأمان وأفضل الممارسات',
                level: 'متقدم',
                description: 'حماية تطبيقك من الثغرات الشائعة.',
                topics: ['Security', 'XSS', 'CSRF', 'HTTPS', 'Env Variables'],
                lessons: ['lesson-fs-security'],
                status: 'todo'
            }
        ]
    },

    javascript: {
        id: 'javascript',
        title: 'JavaScript متعمّق',
        subtitle: 'JavaScript Deep Dive',
        icon: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"></polygon>
        </svg>`,
        color: '#facc15',
        level: 'مبتدئ - متوسط',
        duration: '30 ساعة',
        description: 'تعمّق في JavaScript. من الأساسيات إلى المفاهيم المتقدمة كـ Async/Await والـ Closures.',
        steps: [
            {
                id: 0,
                title: 'مقدمة ومتغيرات',
                level: 'مبتدئ',
                description: 'ما هي JavaScript، إعداد البيئة، المتغيرات var/let/const.',
                topics: ['JS Intro', 'var/let/const', 'Data Types', 'Type Coercion'],
                lessons: ['lesson-js-intro-vars'],
                status: 'todo'
            },
            {
                id: 1,
                title: 'العوامل والشروط',
                level: 'مبتدئ',
                description: 'العوامل الحسابية والمنطقية، جمل الشرط if/else و switch.',
                topics: ['Operators', 'if/else', 'switch', 'Truthy/Falsy'],
                lessons: ['lesson-js-operators'],
                status: 'todo'
            },
            {
                id: 2,
                title: 'الدوال بعمق',
                level: 'متوسط',
                description: 'Function Declarations, Expressions, Arrow Functions, و IIFE.',
                topics: ['Function Declarations', 'Arrow Functions', 'Callbacks', 'IIFE'],
                lessons: ['lesson-js-functions-deep'],
                status: 'todo'
            },
            {
                id: 3,
                title: 'المصفوفات',
                level: 'مبتدئ - متوسط',
                description: 'التعامل مع المصفوفات: map, filter, reduce, find.',
                topics: ['map', 'filter', 'reduce', 'forEach', 'find/some/every'],
                lessons: ['lesson-js-arrays'],
                status: 'todo'
            },
            {
                id: 4,
                title: 'الكائنات Objects',
                level: 'متوسط',
                description: 'إنشاء والتلاعب بالكائنات، this، destructuring.',
                topics: ['Object Literals', 'this', 'destructuring', 'spread'],
                lessons: ['lesson-js-objects'],
                status: 'todo'
            },
            {
                id: 5,
                title: 'الـ Closures',
                level: 'متوسط - متقدم',
                description: 'فهم الـ Closures والـ Scope. مفهوم قوي يفتح أبواباً جديدة.',
                topics: ['Lexical Scope', 'Closures', 'Higher-Order Functions'],
                lessons: ['lesson-js-closures'],
                status: 'todo'
            },
            {
                id: 6,
                title: 'البرمجة الكائنية في JS',
                level: 'متوسط',
                description: 'Classes, Prototypes, Inheritance.',
                topics: ['Prototypes', 'Classes', 'Inheritance', 'Encapsulation'],
                lessons: ['lesson-js-oop'],
                status: 'todo'
            },
            {
                id: 7,
                title: 'Async JavaScript',
                level: 'متوسط - متقدم',
                description: 'Callbacks, Promises, Async/Await. التعامل مع العمليات غير المتزامنة.',
                topics: ['Callbacks', 'Promises', 'async/await', 'fetch API'],
                lessons: ['lesson-js-async'],
                status: 'todo'
            },
            {
                id: 8,
                title: 'JSON و APIs',
                level: 'متوسط',
                description: 'استهلاك APIs والتعامل مع JSON.',
                topics: ['JSON.parse/stringify', 'fetch', 'REST APIs', 'Error Handling'],
                lessons: ['lesson-js-json'],
                status: 'todo'
            },
            {
                id: 9,
                title: 'LocalStorage و SessionStorage',
                level: 'متوسط',
                description: 'تخزين البيانات في المتصفح.',
                topics: ['localStorage', 'sessionStorage', 'Cookies'],
                lessons: ['lesson-js-storage'],
                status: 'todo'
            },
            {
                id: 10,
                title: 'ES6+ Modules',
                level: 'متوسط',
                description: 'تنظيم الكود في وحدات قابلة للاستيراد.',
                topics: ['import/export', 'Babel', 'Webpack', 'Vite'],
                lessons: ['lesson-js-modules'],
                status: 'todo'
            },
            {
                id: 11,
                title: 'أنماط التصميم',
                level: 'متقدم',
                description: 'Module Pattern, Observer, Singleton.',
                topics: ['Design Patterns', 'Module Pattern', 'Observer', 'Singleton'],
                lessons: ['lesson-js-patterns'],
                status: 'todo'
            },
            {
                id: 12,
                title: 'اختبار الكود',
                level: 'متقدم',
                description: 'Jest و Unit Testing. اكتب كود موثوق.',
                topics: ['Jest', 'Unit Tests', 'TDD', 'Mocking'],
                lessons: ['lesson-js-testing'],
                status: 'todo'
            },
            {
                id: 13,
                title: 'TypeScript',
                level: 'متقدم',
                description: 'الـ Superset الذي يحول JavaScript إلى لغة أكثر أماناً.',
                topics: ['Types', 'Interfaces', 'Generics', 'Type Inference'],
                lessons: ['lesson-js-typescript'],
                status: 'todo'
            },
            {
                id: 14,
                title: 'Node.js للمبتدئين',
                level: 'متقدم',
                description: 'JavaScript على السيرفر. أول API.',
                topics: ['Node.js', 'fs module', 'http', 'npm'],
                lessons: ['lesson-js-node'],
                status: 'todo'
            },
            {
                id: 15,
                title: 'مشروع: تطبيق الطقس',
                level: 'متقدم',
                description: 'ابنِ تطبيق طقس يستخدم API حقيقي.',
                topics: ['مشروع تطبيقي', 'API Integration', 'UI/UX'],
                lessons: ['lesson-js-weather'],
                status: 'todo'
            }
        ]
    }
};

// Helper: get path by id
function getPath(pathId) {
    return PATHS[pathId] || null;
}

// Helper: get step by path and step id
function getStep(pathId, stepId) {
    const path = getPath(pathId);
    if (!path) return null;
    return path.steps.find(s => s.id === stepId) || null;
}

// Helper: get all challenges
const CHALLENGES = [
    {
        id: 'ch-html-headings',
        pathId: 'frontend',
        title: 'أول صفحة HTML',
        difficulty: 'easy',
        time: '5 دقائق',
        description: 'أنشئ صفحة HTML تحتوي على عنوان رئيسي "مرحباً بالعالم" وفقرة ترحيب. تذكر أن كل صفحة HTML تحتاج إلى الهيكل الأساسي.',
        starterCode: '<!-- اكتب HTML هنا -->\n',
        solution: `<!DOCTYPE html>\n<html>\n<head>\n  <title>صفحتي</title>\n</head>\n<body>\n  <h1>مرحباً بالعالم</h1>\n  <p>أهلاً بك في رحلتي لتعلم البرمجة!</p>\n</body>\n</html>`,
        hint: 'تذكر: doctype, html, head, body.'
    },
    {
        id: 'ch-css-button',
        pathId: 'frontend',
        title: 'زر جميل بـ CSS',
        difficulty: 'easy',
        time: '10 دقائق',
        description: 'صمم زر تفاعلي بـ CSS. يجب أن يكون له خلفية ملونة، نص أبيض، زوايا مستديرة، ويتغير لونه عند التمرير عليه.',
        starterCode: `<button class="my-btn">اضغطني</button>\n\n<style>\n  .my-btn {\n    /* أضف التنسيق هنا */\n  }\n  .my-btn:hover {\n    /* أضف تأثير التمرير */\n  }\n</style>`,
        solution: `<button class="my-btn">اضغطني</button>\n\n<style>\n  .my-btn {\n    background: linear-gradient(135deg, #6366f1, #8b5cf6);\n    color: white;\n    padding: 12px 24px;\n    border: none;\n    border-radius: 8px;\n    font-size: 16px;\n    cursor: pointer;\n    transition: transform 0.2s;\n  }\n  .my-btn:hover {\n    transform: translateY(-2px);\n    box-shadow: 0 10px 25px rgba(99,102,241,0.4);\n  }\n</style>`,
        hint: 'استخدم background, color, border-radius, transition.'
    },
    {
        id: 'ch-js-fizzbuzz',
        pathId: 'javascript',
        title: 'لعبة FizzBuzz',
        difficulty: 'easy',
        time: '15 دقيقة',
        description: 'اطبع الأرقام من 1 إلى 100. لكن للأرقام القابلة للقسمة على 3 اطبع "Fizz"، وعلى 5 اطبع "Buzz"، وعلى كليهما اطبع "FizzBuzz".',
        starterCode: '// اكتب الحل هنا\nfor (let i = 1; i <= 100; i++) {\n  // أكمل المنطق\n}',
        solution: `for (let i = 1; i <= 100; i++) {\n  if (i % 15 === 0) {\n    console.log("FizzBuzz");\n  } else if (i % 3 === 0) {\n    console.log("Fizz");\n  } else if (i % 5 === 0) {\n    console.log("Buzz");\n  } else {\n    console.log(i);\n  }\n}`,
        hint: 'استخدم modulo (%). ابدأ بالشرط الأصعب (15) ثم الأسهل.'
    },
    {
        id: 'ch-js-palindrome',
        pathId: 'javascript',
        title: 'كشف الـ Palindrome',
        difficulty: 'medium',
        time: '20 دقيقة',
        description: 'اكتب دالة تتحقق إذا كانت الكلمة palindrome (تقرأ نفسها بالعكس). مثل "level" أو "racecar".',
        starterCode: 'function isPalindrome(str) {\n  // أرجع true أو false\n}\n\nconsole.log(isPalindrome("level"));  // true\nconsole.log(isPalindrome("hello"));  // false',
        solution: `function isPalindrome(str) {\n  const cleaned = str.toLowerCase().replace(/[^a-z0-9]/g, "");\n  return cleaned === cleaned.split("").reverse().join("");\n}\n\nconsole.log(isPalindrome("level"));  // true\nconsole.log(isPalindrome("hello"));  // false`,
        hint: 'استخدم split("").reverse().join("").'
    },
    {
        id: 'ch-py-list-sum',
        pathId: 'python',
        title: 'مجموع القائمة',
        difficulty: 'easy',
        time: '5 دقائق',
        description: 'اكتب دالة تستقبل قائمة من الأرقام وتُرجع مجموعها. لا تستخدم دالة sum() المدمجة.',
        starterCode: 'def my_sum(numbers):\n    # اكتب الحل هنا\n    pass\n\nprint(my_sum([1, 2, 3, 4, 5]))  # 15',
        solution: 'def my_sum(numbers):\n    total = 0\n    for num in numbers:\n        total += num\n    return total\n\nprint(my_sum([1, 2, 3, 4, 5]))  # 15',
        hint: 'استخدم متغير total و حلقة for.'
    },
    {
        id: 'ch-py-fibonacci',
        pathId: 'python',
        title: 'متتالية فيبوناتشي',
        difficulty: 'medium',
        time: '20 دقيقة',
        description: 'اكتب دالة تُرجع الرقم n من متتالية فيبوناتشي. المتتالية: 0, 1, 1, 2, 3, 5, 8, 13...',
        starterCode: 'def fibonacci(n):\n    # اكتب الحل هنا\n    pass\n\nfor i in range(10):\n    print(fibonacci(i))  # 0, 1, 1, 2, 3, 5, 8, 13, 21, 34',
        solution: 'def fibonacci(n):\n    if n <= 1:\n        return n\n    return fibonacci(n - 1) + fibonacci(n - 2)\n\nfor i in range(10):\n    print(fibonacci(i))  # 0, 1, 1, 2, 3, 5, 8, 13, 21, 34',
        hint: 'الحل التكراري (Recursive) أنيق هنا. fib(n) = fib(n-1) + fib(n-2).'
    },
    {
        id: 'ch-js-counter',
        pathId: 'javascript',
        title: 'عداد بـ Closure',
        difficulty: 'medium',
        time: '15 دقيقة',
        description: 'أنشئ دالة makeCounter() تُرجع دالة أخرى. كل مرة تستدعي الدالة المُرجعة، العداد يزيد بـ 1.',
        starterCode: 'function makeCounter() {\n  // اكتب الكود هنا\n}\n\nconst counter = makeCounter();\nconsole.log(counter()); // 1\nconsole.log(counter()); // 2\nconsole.log(counter()); // 3',
        solution: `function makeCounter() {\n  let count = 0;\n  return function() {\n    count++;\n    return count;\n  };\n}\n\nconst counter = makeCounter();\nconsole.log(counter()); // 1\nconsole.log(counter()); // 2\nconsole.log(counter()); // 3`,
        hint: 'استخدم Closure: متغير في الدالة الخارجية، ودالة داخلية تعيده.'
    },
    {
        id: 'ch-py-password',
        pathId: 'python',
        title: 'مولّد كلمات السر',
        difficulty: 'medium',
        time: '20 دقيقة',
        description: 'اكتب دالة تولد كلمة سر عشوائية بطول معين، تحتوي على أحرف كبيرة وصغيرة وأرقام ورموز.',
        starterCode: 'import random\nimport string\n\ndef generate_password(length=12):\n    # اكتب الحل هنا\n    pass\n\nprint(generate_password(16))',
        solution: 'import random\nimport string\n\ndef generate_password(length=12):\n    chars = string.ascii_letters + string.digits + string.punctuation\n    return "".join(random.choice(chars) for _ in range(length))\n\nprint(generate_password(16))',
        hint: 'استخدم random.choice و string.'
    },
    {
        id: 'ch-css-grid',
        pathId: 'frontend',
        title: 'تخطيط Grid',
        difficulty: 'medium',
        time: '20 دقيقة',
        description: 'استخدم CSS Grid لإنشاء تخطيط من 3 أعمدة يستجيب للأجهزة الصغيرة.',
        starterCode: `<div class="grid-container">\n  <div class="item">1</div>\n  <div class="item">2</div>\n  <div class="item">3</div>\n  <div class="item">4</div>\n  <div class="item">5</div>\n  <div class="item">6</div>\n</div>\n\n<style>\n  .grid-container {\n    /* أضف grid هنا */\n  }\n  /* responsive */\n  @media (max-width: 768px) {\n    .grid-container {\n      /* عمود واحد للجوال */\n    }\n  }\n</style>`,
        solution: `<div class="grid-container">\n  <div class="item">1</div>\n  <div class="item">2</div>\n  <div class="item">3</div>\n  <div class="item">4</div>\n  <div class="item">5</div>\n  <div class="item">6</div>\n</div>\n\n<style>\n  .grid-container {\n    display: grid;\n    grid-template-columns: repeat(3, 1fr);\n    gap: 1rem;\n  }\n  .item {\n    background: #6366f1;\n    color: white;\n    padding: 2rem;\n    text-align: center;\n    border-radius: 8px;\n  }\n  @media (max-width: 768px) {\n    .grid-container {\n      grid-template-columns: 1fr;\n    }\n  }\n</style>`,
        hint: 'display: grid; grid-template-columns: repeat(3, 1fr);'
    },
    {
        id: 'ch-js-fetch',
        pathId: 'javascript',
        title: 'استهلاك API',
        difficulty: 'medium',
        time: '25 دقيقة',
        description: 'استخدم fetch() لجلب بيانات من JSONPlaceholder API وعرض عناوين المستخدمين في الـ Console.',
        starterCode: '// اكتب الكود هنا\n// URL: https://jsonplaceholder.typicode.com/users',
        solution: `fetch("https://jsonplaceholder.typicode.com/users")\n  .then(response => response.json())\n  .then(users => {\n    users.forEach(user => {\n      console.log(user.name);\n    });\n  })\n  .catch(error => console.error("خطأ:", error));`,
        hint: 'fetch() يُرجع Promise. استخدم .then() مرتين.'
    },
    {
        id: 'ch-react-state',
        pathId: 'frontend',
        title: 'عداد React',
        difficulty: 'medium',
        time: '20 دقيقة',
        description: 'ابنِ مكون React بسيط: عداد بزر + و - يعرض القيمة الحالية.',
        starterCode: 'import { useState } from "react";\n\nfunction Counter() {\n  // أضف state و handlers\n}\n\nexport default Counter;',
        solution: `import { useState } from "react";\n\nfunction Counter() {\n  const [count, setCount] = useState(0);\n  \n  return (\n    <div>\n      <h1>العداد: {count}</h1>\n      <button onClick={() => setCount(count + 1)}>+</button>\n      <button onClick={() => setCount(count - 1)}>-</button>\n    </div>\n  );\n}\n\nexport default Counter;`,
        hint: 'useState و onClick.'
    },
    {
        id: 'ch-py-dict',
        pathId: 'python',
        title: 'عدّ تكرار الكلمات',
        difficulty: 'easy',
        time: '15 دقيقة',
        description: 'اكتب دالة تستقبل نصاً وتُرجع قاموساً فيه كل كلمة وعدد مرات تكرارها.',
        starterCode: 'def count_words(text):\n    # اكتب الحل هنا\n    pass\n\nprint(count_words("hello world hello"))  # {"hello": 2, "world": 1}',
        solution: 'def count_words(text):\n    words = text.split()\n    counts = {}\n    for word in words:\n        counts[word] = counts.get(word, 0) + 1\n    return counts\n\nprint(count_words("hello world hello"))  # {"hello": 2, "world": 1}',
        hint: 'استخدم split() و .get(key, default).'
    }
];

// Achievements
const ACHIEVEMENTS = [
    { id: 'first-step', title: 'البداية', desc: 'أكملت أول خطوة', icon: '🎯' },
    { id: 'streak-3', title: 'مثابر', desc: 'أكملت 3 خطوات في يوم واحد', icon: '🔥' },
    { id: 'path-25', title: 'ربع الطريق', desc: 'أكملت 25% من مسار', icon: '⭐' },
    { id: 'path-50', title: 'نص الطريق', desc: 'أكملت 50% من مسار', icon: '🌟' },
    { id: 'path-100', title: 'بطل المسار', desc: 'أكملت مسار كاملاً', icon: '🏆' },
    { id: 'first-challenge', title: 'أول تحدّي', desc: 'حللت أول تحدّي', icon: '💪' },
    { id: 'challenges-5', title: 'متمرّس', desc: 'حللت 5 تحديات', icon: '🧠' },
    { id: 'challenges-15', title: 'خبير', desc: 'حللت 15 تحدّي', icon: '👑' },
    { id: 'multi-path', title: 'مستكشف', desc: 'بدأت مسارين مختلفين', icon: '🗺️' },
    { id: 'all-paths', title: 'سفّر برمجي', desc: 'بدأت كل المسارات', icon: '✈️' }
];

function getChallengesByPath(pathId) {
    return CHALLENGES.filter(c => c.pathId === pathId);
}

function getChallengeById(id) {
    return CHALLENGES.find(c => c.id === id);
}

if (typeof module !== 'undefined' && module.exports) {
    module.exports = { PATHS, CHALLENGES, ACHIEVEMENTS, getPath, getStep, getChallengesByPath, getChallengeById };
}
