/* ===============================================
   Lessons Content - المحتوى العربي للدروس
   =============================================== */

const LESSONS = {
    // ===== FRONTEND =====
    'frontend-0': {
        fileName: 'intro.html',
        starterCode: '<!-- أهلاً بك في أول درس! -->\n<!-- اكتب أول صفحة HTML لك -->\n<h1>مرحباً!</h1>\n<p>أنا أتعلم البرمجة 🎉</p>',
        body: `
            <h2>أهلاً بك في عالم البرمجة! 👋</h2>
            <p>مبروك على اتخاذك أول خطوة في رحلتك لتعلم البرمجة. هذا الدرس سيكون نقطة البداية، وهنا راح نفهم الصورة الكبيرة قبل ما ندخل في التفاصيل.</p>

            <h3>كيف يعمل الويب؟</h3>
            <p>تخيّل إنك في مطعم:</p>
            <ul>
                <li><strong>أنت (المستخدم)</strong> = الزبون</li>
                <li><strong>المتصفح (Chrome, Firefox)</strong> = النادل</li>
                <li><strong>السيرفر</strong> = المطبخ</li>
                <li><strong>الإنترنت</strong> = الطريق بينهم</li>
            </ul>
            <p>لما تكتب <code>google.com</code> في المتصفح، يصير التالي:</p>
            <ol>
                <li>المتصفح يروح للسيرفر ويقول: "أعطني صفحة Google"</li>
                <li>السيرفر يرجع ملف HTML</li>
                <li>المتصفح يقرأ الملف ويرسم الصفحة</li>
            </ol>

            <h3>Frontend vs Backend</h3>
            <p>كل موقع فيه <strong>جزءان</strong> رئيسيان:</p>
            <ul>
                <li><strong>Frontend (الواجهة الأمامية)</strong>: كل اللي تشوفه بعينك - الألوان، الأزرار، النصوص. هذي مساراتنا في هذا القسم.</li>
                <li><strong>Backend (الواجهة الخلفية)</strong>: السيرفر وقواعد البيانات - اللي يشتغل "خلف الكواليس".</li>
            </ul>

            <h3>الأدوات اللي راح تحتاجها</h3>
            <p>ما تحتاج تشتري شي! كل الأدوات مجانية:</p>
            <ul>
                <li><strong>متصفح</strong>: Chrome أو Firefox</li>
                <li><strong>محرر كود</strong>: VS Code (الأفضل للمبتدئين)</li>
                <li><strong>حماسك!</strong> 🔥</li>
            </ul>

            <div class="code-block">
                <div class="code-block-header">
                    <span class="code-block-lang">📄 صفحتك الأولى</span>
                    <button class="copy-btn" onclick="copyCode(this)">نسخ</button>
                </div>
                <pre><code>&lt;!DOCTYPE html&gt;
&lt;html&gt;
&lt;head&gt;
  &lt;title&gt;صفحتي الأولى&lt;/title&gt;
&lt;/head&gt;
&lt;body&gt;
  &lt;h1&gt;مرحباً بالعالم!&lt;/h1&gt;
  &lt;p&gt;أنا الآن أتعلم البرمجة 🎉&lt;/p&gt;
&lt;/body&gt;
&lt;/html&gt;</code></pre>
            </div>

            <p><strong>جرّب الحين!</strong> في المحرر تحت، عدّل النص وشوف النتيجة.</p>
        `
    },

    'frontend-1': {
        fileName: 'basics.html',
        starterCode: '<h1>عنوان رئيسي</h1>\n<h2>عنوان فرعي</h2>\n\n<p>هذه فقرة نصية.</p>\n\n<a href="https://academy.ar">رابط</a>\n\n<ul>\n  <li>عنصر قائمة 1</li>\n  <li>عنصر قائمة 2</li>\n</ul>\n\n<img src="https://via.placeholder.com/300x200" alt="صورة تجريبية">',
        body: `
            <h2>أساسيات HTML</h2>
            <p>HTML هي لغة الترميز الأساسية لأي صفحة ويب. فكّر فيها كهيكل عظمي للصفحة - تحدد وين العنوان، وين الفقرة، وين الصورة.</p>

            <h3>العناوين (Headings)</h3>
            <p>في 6 مستويات من العناوين:</p>
            <div class="code-block">
                <div class="code-block-header"><span class="code-block-lang">HTML</span><button class="copy-btn" onclick="copyCode(this)">نسخ</button></div>
                <pre><code>&lt;h1&gt;أهم عنوان (h1)&lt;/h1&gt;
&lt;h2&gt;عنوان ثانوي (h2)&lt;/h2&gt;
&lt;h3&gt;عنوان أصغر (h3)&lt;/h3&gt;
&lt;!-- إلى h6 --&gt;</code></pre>
            </div>
            <p><strong>القاعدة:</strong> استخدم h1 مرة واحدة فقط (العنوان الرئيسي للصفحة)، واستخدم h2-h6 للعناوين الفرعية.</p>

            <h3>الفقرات (Paragraphs)</h3>
            <div class="code-block">
                <div class="code-block-header"><span class="code-block-lang">HTML</span><button class="copy-btn" onclick="copyCode(this)">نسخ</button></div>
                <pre><code>&lt;p&gt;هذه فقرة نصية عادية.&lt;/p&gt;
&lt;p&gt;وفقرة ثانية.&lt;/p&gt;</code></pre>
            </div>

            <h3>الروابط (Links)</h3>
            <p>الروابط هي <code>&lt;a&gt;</code> (اختصار anchor). الخاصية <code>href</code> تحدد الوجهة:</p>
            <div class="code-block">
                <div class="code-block-header"><span class="code-block-lang">HTML</span><button class="copy-btn" onclick="copyCode(this)">نسخ</button></div>
                <pre><code>&lt;!-- رابط خارجي --&gt;
&lt;a href="https://google.com"&gt;اذهب لجوجل&lt;/a&gt;

&lt;!-- رابط داخلي --&gt;
&lt;a href="about.html"&gt;من نحن&lt;/a&gt;

&lt;!-- فتح في نافذة جديدة --&gt;
&lt;a href="https://google.com" target="_blank"&gt;جوجل&lt;/a&gt;</code></pre>
            </div>

            <h3>الصور (Images)</h3>
            <div class="code-block">
                <div class="code-block-header"><span class="code-block-lang">HTML</span><button class="copy-btn" onclick="copyCode(this)">نسخ</button></div>
                <pre><code>&lt;img src="image.jpg" alt="وصف الصورة"&gt;</code></pre>
            </div>
            <p><strong>مهم:</strong> خاصية <code>alt</code> ضرورية لإمكانية الوصول - تساعد قارئات الشاشة والمكفوفين.</p>

            <h3>القوائم (Lists)</h3>
            <div class="code-block">
                <div class="code-block-header"><span class="code-block-lang">HTML</span><button class="copy-btn" onclick="copyCode(this)">نسخ</button></div>
                <pre><code>&lt;!-- قائمة غير مرتبة (نقاط) --&gt;
&lt;ul&gt;
  &lt;li&gt;عنصر 1&lt;/li&gt;
  &lt;li&gt;عنصر 2&lt;/li&gt;
&lt;/ul&gt;

&lt;!-- قائمة مرتبة (أرقام) --&gt;
&lt;ol&gt;
  &lt;li&gt;الخطوة 1&lt;/li&gt;
  &lt;li&gt;الخطوة 2&lt;/li&gt;
&lt;/ol&gt;</code></pre>
            </div>
        `
    },

    'frontend-3': {
        fileName: 'styles.css',
        starterCode: '/* CSS هنا - صمم الزر تحت! */\n.my-btn {\n  background: #6366f1;\n  color: white;\n  /* أضف خصائص أكثر */\n}',
        body: `
            <h2>أساسيات CSS</h2>
            <p>CSS (Cascading Style Sheets) هي اللغة اللي تخلي صفحات HTML تبدو جميلة. تتحكم بالألوان، الخطوط، المسافات، والتخطيط.</p>

            <h3>كيف تضيف CSS؟</h3>
            <p>ثلاث طرق:</p>
            <div class="code-block">
                <div class="code-block-header"><span class="code-block-lang">HTML</span><button class="copy-btn" onclick="copyCode(this)">نسخ</button></div>
                <pre><code>&lt;!-- 1. Inline (داخل العنصر) - تجنّبها --&gt;
&lt;h1 style="color: red;"&gt;عنوان&lt;/h1&gt;

&lt;!-- 2. Internal (في الـ head) --&gt;
&lt;head&gt;
  &lt;style&gt;
    h1 { color: red; }
  &lt;/style&gt;
&lt;/head&gt;

&lt;!-- 3. External (ملف منفصل) - الأفضل --&gt;
&lt;link rel="stylesheet" href="styles.css"&gt;</code></pre>
            </div>

            <h3>المحددات (Selectors)</h3>
            <div class="code-block">
                <div class="code-block-header"><span class="code-block-lang">CSS</span><button class="copy-btn" onclick="copyCode(this)">نسخ</button></div>
                <pre><code>/* محدد العنصر (Tag) */
h1 { color: blue; }

/* محدد الـ Class */
.title { color: red; }
&lt;h1 class="title"&gt;...&lt;/h1&gt;

/* محدد الـ ID */
#header { background: black; }
&lt;div id="header"&gt;...&lt;/div&gt;</code></pre>
            </div>

            <h3>الألوان</h3>
            <p>تقدر تحدد الألوان بـ:</p>
            <ul>
                <li><strong>الاسم</strong>: <code>red</code>, <code>blue</code>, <code>tomato</code></li>
                <li><strong>HEX</strong>: <code>#ff0000</code></li>
                <li><strong>RGB</strong>: <code>rgb(255, 0, 0)</code></li>
                <li><strong>HSL</strong>: <code>hsl(0, 100%, 50%)</code></li>
            </ul>

            <h3>الـ Box Model</h3>
            <p>كل عنصر في CSS عبارة عن مربع (box) له 4 طبقات:</p>
            <div class="code-block">
                <div class="code-block-header"><span class="code-block-lang">CSS</span><button class="copy-btn" onclick="copyCode(this)">نسخ</button></div>
                <pre><code>.box {
  /* المحتوى نفسه */
  width: 200px;
  height: 100px;

  /* Padding - المسافة بين المحتوى والحدود */
  padding: 20px;

  /* Border - الحدود */
  border: 2px solid black;

  /* Margin - المسافة بين العنصر والعناصر الأخرى */
  margin: 10px;
}</code></pre>
            </div>
        `
    },

    'frontend-5': {
        fileName: 'script.js',
        starterCode: '// أول برنامج JavaScript\nlet name = "العالم";\nconsole.log("مرحباً، " + name + "!");',
        body: `
            <h2>أساسيات JavaScript</h2>
            <p>JavaScript هي لغة البرمجة اللي تخلي صفحات الويب حيّة وتتفاعل. هي المسؤولة عن أي شي يتحرك أو يتغير في الصفحة.</p>

            <h3>المتغيرات (Variables)</h3>
            <p>ثلاث طرق لتعريف المتغيرات:</p>
            <div class="code-block">
                <div class="code-block-header"><span class="code-block-lang">JavaScript</span><button class="copy-btn" onclick="copyCode(this)">نسخ</button></div>
                <pre><code>// 1. let - قابل للتغيير (الأكثر استخداماً)
let age = 25;
age = 26; // ✓ مسموح

// 2. const - ثابت (لا يتغير)
const name = "أحمد";
// name = "محمد"; // ✕ خطأ

// 3. var - قديم، تجنّبه
var old = "لا تستخدمه";</code></pre>
            </div>

            <h3>أنواع البيانات</h3>
            <div class="code-block">
                <div class="code-block-header"><span class="code-block-lang">JavaScript</span><button class="copy-btn" onclick="copyCode(this)">نسخ</button></div>
                <pre><code>// String (نص)
let name = "أحمد";

// Number (رقم)
let age = 25;
let price = 19.99;

// Boolean (صح أو خطأ)
let isStudent = true;

// Array (مصفوفة)
let fruits = ["تفاح", "برتقال", "موز"];

// Object (كائن)
let person = {
  name: "أحمد",
  age: 25,
  city: "الرياض"
};</code></pre>
            </div>

            <h3>الشروط (Conditions)</h3>
            <div class="code-block">
                <div class="code-block-header"><span class="code-block-lang">JavaScript</span><button class="copy-btn" onclick="copyCode(this)">نسخ</button></div>
                <pre><code>let age = 18;

if (age >= 18) {
  console.log("أنت بالغ");
} else if (age >= 13) {
  console.log("أنت مراهق");
} else {
  console.log("أنت طفل");
}</code></pre>
            </div>

            <h3>الحلقات (Loops)</h3>
            <div class="code-block">
                <div class="code-block-header"><span class="code-block-lang">JavaScript</span><button class="copy-btn" onclick="copyCode(this)">نسخ</button></div>
                <pre><code>// for loop
for (let i = 1; i <= 5; i++) {
  console.log("العدد: " + i);
}

// while loop
let i = 1;
while (i <= 5) {
  console.log(i);
  i++;
}

// for...of مع المصفوفات
let fruits = ["تفاح", "برتقال", "موز"];
for (let fruit of fruits) {
  console.log(fruit);
}</code></pre>
            </div>

            <h3>الدوال (Functions)</h3>
            <div class="code-block">
                <div class="code-block-header"><span class="code-block-lang">JavaScript</span><button class="copy-btn" onclick="copyCode(this)">نسخ</button></div>
                <pre><code>// تعريف الدالة
function greet(name) {
  return "مرحباً، " + name + "!";
}

// استدعاء الدالة
console.log(greet("أحمد"));  // "مرحباً، أحمد!"

// Arrow function (الأحدث)
const greet = (name) => {
  return "مرحباً، " + name + "!";
};</code></pre>
            </div>
        `
    },

    // ===== PYTHON =====
    'python-0': {
        fileName: 'hello.py',
        starterCode: '# أول برنامج Python لك\nprint("مرحباً بالعالم!")\n\n# جرّب تعديل النص فوق وشوف وش يصير',
        body: `
            <h2>أهلاً بك في Python 🐍</h2>
            <p>Python من أسهل لغات البرمجة وأكثرها متعة. تُستخدم في كل مكان: تطوير الويب، تحليل البيانات، الذكاء الاصطناعي، الأتمتة، وأكثر بكثير.</p>

            <h3>ليش Python تحديداً؟</h3>
            <ul>
                <li><strong>سهلة التعلم</strong>: كأنك تكتب بالإنجليزي</li>
                <li><strong>قوية</strong>: نفس اللغة اللي يستخدمها Google و Netflix و NASA</li>
                <li><strong>مطلوبة في السوق</strong>: من أعلى اللغات أجراً</li>
                <li><strong>مجتمع كبير</strong>: أي مشكلة تواجهك، أحد جابها قبلك</li>
            </ul>

            <h3>تثبيت Python</h3>
            <p>تقدر تثبتها من <a href="https://python.org" target="_blank">python.org</a>. اختر النسخة الأخيرة (3.x).</p>

            <h3>أول برنامج</h3>
            <p>كل مبرمج يبدأ ببرنامج "Hello World":</p>
            <div class="code-block">
                <div class="code-block-header"><span class="code-block-lang">Python</span><button class="copy-btn" onclick="copyCode(this)">نسخ</button></div>
                <pre><code>print("مرحباً بالعالم!")</code></pre>
            </div>
            <p><code>print()</code> هي دالة Python اللي تطبع النص على الشاشة. بسيطة، صح؟</p>

            <h3>كيف تشغّل الكود؟</h3>
            <ol>
                <li>افتح محرر النصوص المفضل (VS Code مثلاً)</li>
                <li>اكتب الكود أعلاه</li>
                <li>احفظه باسم <code>hello.py</code></li>
                <li>شغّله من الـ Terminal: <code>python hello.py</code></li>
            </ol>

            <p><strong>الحين دورك!</strong> في المحرر تحت، جرّب تطبع اسمك.</p>
        `
    },

    'python-1': {
        fileName: 'variables.py',
        starterCode: '# المتغيرات في Python\nname = "أحمد"\nage = 25\nheight = 1.75\nis_student = True\n\nprint(f"الاسم: {name}")\nprint(f"العمر: {age}")\nprint(f"الطول: {height}")\nprint(f"طالب؟ {is_student}")',
        body: `
            <h2>المتغيرات وأنواع البيانات</h2>
            <p>المتغير هو "صندوق" تحط فيه قيمة. في Python، ما تحتاج تحدد نوع المتغير - اللغة تعرف تلقائياً.</p>

            <h3>تعريف المتغيرات</h3>
            <div class="code-block">
                <div class="code-block-header"><span class="code-block-lang">Python</span><button class="copy-btn" onclick="copyCode(this)">نسخ</button></div>
                <pre><code># سلسلة نصية (String)
name = "أحمد"

# عدد صحيح (Integer)
age = 25

# عدد عشري (Float)
height = 1.75

# قيمة منطقية (Boolean)
is_student = True

# طباعة المتغيرات
print(name)   # أحمد
print(age)    # 25</code></pre>
            </div>

            <h3>أنواع البيانات الأساسية</h3>
            <div class="code-block">
                <div class="code-block-header"><span class="code-block-lang">Python</span><button class="copy-btn" onclick="copyCode(this)">نسخ</button></div>
                <pre><code># int - أعداد صحيحة
count = 42

# float - أعداد عشرية
price = 19.99

# str - نصوص
greeting = "السلام عليكم"

# bool - صح أو خطأ
is_active = True
is_deleted = False

# list - قوائم
fruits = ["تفاح", "موز", "برتقال"]

# dict - قواميس
person = {
    "name": "سارة",
    "age": 30,
    "city": "دبي"
}</code></pre>
            </div>

            <h3>التحقق من النوع</h3>
            <p>تستخدم <code>type()</code> لمعرفة نوع المتغير:</p>
            <div class="code-block">
                <div class="code-block-header"><span class="code-block-lang">Python</span><button class="copy-btn" onclick="copyCode(this)">نسخ</button></div>
                <pre><code>x = 42
print(type(x))  # &lt;class 'int'&gt;

name = "علي"
print(type(name))  # &lt;class 'str'&gt;</code></pre>
            </div>

            <h3>الإدخال من المستخدم</h3>
            <div class="code-block">
                <div class="code-block-header"><span class="code-block-lang">Python</span><button class="copy-btn" onclick="copyCode(this)">نسخ</button></div>
                <pre><code>name = input("ما اسمك؟ ")
print("أهلاً، " + name + "!")</code></pre>
            </div>

            <h3>f-strings (تنسيق النصوص)</h3>
            <p>أسهل طريقة لدمج المتغيرات في النصوص:</p>
            <div class="code-block">
                <div class="code-block-header"><span class="code-block-lang">Python</span><button class="copy-btn" onclick="copyCode(this)">نسخ</button></div>
                <pre><code>name = "فاطمة"
age = 28

# f-string
print(f"اسمي {name} وعمري {age} سنة")
# الناتج: اسمي فاطمة وعمري 28 سنة</code></pre>
            </div>
        `
    },

    'python-2': {
        fileName: 'control.py',
        starterCode: '# الشروط والحلقات\nage = 18\n\nif age >= 18:\n    print("أنت بالغ")\nelse:\n    print("أنت قاصر")\n\n# جرب تغيّر القيمة فوق',
        body: `
            <h2>الشروط والحلقات</h2>
            <p>البرنامج بدون شروط وحلقات = مجرد قائمة أوامر. هذي الأدوات تخليه يتخذ قرارات ويتكرر.</p>

            <h3>جملة if</h3>
            <div class="code-block">
                <div class="code-block-header"><span class="code-block-lang">Python</span><button class="copy-btn" onclick="copyCode(this)">نسخ</button></div>
                <pre><code>age = 18

if age >= 18:
    print("أنت بالغ")
else:
    print("أنت قاصر")</code></pre>
            </div>
            <p><strong>انتبه للمسافات!</strong> Python يستخدم المسافة البادئة (indentation) بدل الأقواس. هذا إجباري.</p>

            <h3>if/elif/else</h3>
            <div class="code-block">
                <div class="code-block-header"><span class="code-block-lang">Python</span><button class="copy-btn" onclick="copyCode(this)">نسخ</button></div>
                <pre><code>score = 85

if score >= 90:
    grade = "ممتاز"
elif score >= 80:
    grade = "جيد جداً"
elif score >= 70:
    grade = "جيد"
else:
    grade = "يحتاج تحسين"

print(f"درجتك: {grade}")</code></pre>
            </div>

            <h3>حلقة for</h3>
            <p>تستخدم للتكرار على عناصر مجموعة:</p>
            <div class="code-block">
                <div class="code-block-header"><span class="code-block-lang">Python</span><button class="copy-btn" onclick="copyCode(this)">نسخ</button></div>
                <pre><code># تكرار على قائمة
fruits = ["تفاح", "موز", "برتقال"]
for fruit in fruits:
    print(fruit)

# تكرار على نطاق أرقام
for i in range(5):
    print(i)  # 0, 1, 2, 3, 4

# range(start, end, step)
for i in range(0, 10, 2):
    print(i)  # 0, 2, 4, 6, 8</code></pre>
            </div>

            <h3>حلقة while</h3>
            <p>تستمر في التكرار طالما الشرط صحيح:</p>
            <div class="code-block">
                <div class="code-block-header"><span class="code-block-lang">Python</span><button class="copy-btn" onclick="copyCode(this)">نسخ</button></div>
                <pre><code>count = 1

while count <= 5:
    print(f"العدد: {count}")
    count += 1  # مهم جداً، وإلا الحلقة لن تتوقف!</code></pre>
            </div>

            <h3>break و continue</h3>
            <div class="code-block">
                <div class="code-block-header"><span class="code-block-lang">Python</span><button class="copy-btn" onclick="copyCode(this)">نسخ</button></div>
                <pre><code># break - يوقف الحلقة تماماً
for i in range(10):
    if i == 5:
        break
    print(i)  # 0, 1, 2, 3, 4

# continue - يتخطى الدورة الحالية
for i in range(5):
    if i == 2:
        continue
    print(i)  # 0, 1, 3, 4</code></pre>
            </div>
        `
    },

    // ===== JAVASCRIPT =====
    'javascript-3': {
        fileName: 'arrays.js',
        starterCode: '// المصفوفات في JavaScript\nconst fruits = ["تفاح", "موز", "برتقال"];\n\n// map - تحويل كل عنصر\nconst upperFruits = fruits.map(f => f.toUpperCase());\nconsole.log(upperFruits);',
        body: `
            <h2>المصفوفات في JavaScript</h2>
            <p>المصفوفات من أهم بنى البيانات. JavaScript فيها دوال قوية جداً للتعامل مع المصفوفات.</p>

            <h3>إنشاء مصفوفة</h3>
            <div class="code-block">
                <div class="code-block-header"><span class="code-block-lang">JavaScript</span><button class="copy-btn" onclick="copyCode(this)">نسخ</button></div>
                <pre><code>const fruits = ["تفاح", "موز", "برتقال"];
const numbers = [1, 2, 3, 4, 5];
const mixed = ["نص", 42, true, null];</code></pre>
            </div>

            <h3>الوصول للعناصر</h3>
            <div class="code-block">
                <div class="code-block-header"><span class="code-block-lang">JavaScript</span><button class="copy-btn" onclick="copyCode(this)">نسخ</button></div>
                <pre><code>const fruits = ["تفاح", "موز", "برتقال"];

console.log(fruits[0]);    // "تفاح"
console.log(fruits[2]);    // "برتقال"
console.log(fruits.length); // 3</code></pre>
            </div>

            <h3>map - تحويل العناصر</h3>
            <div class="code-block">
                <div class="code-block-header"><span class="code-block-lang">JavaScript</span><button class="copy-btn" onclick="copyCode(this)">نسخ</button></div>
                <pre><code>const numbers = [1, 2, 3, 4, 5];
const doubled = numbers.map(n => n * 2);

console.log(doubled); // [2, 4, 6, 8, 10]</code></pre>
            </div>

            <h3>filter - تصفية العناصر</h3>
            <div class="code-block">
                <div class="code-block-header"><span class="code-block-lang">JavaScript</span><button class="copy-btn" onclick="copyCode(this)">نسخ</button></div>
                <pre><code>const numbers = [1, 2, 3, 4, 5, 6];
const even = numbers.filter(n => n % 2 === 0);

console.log(even); // [2, 4, 6]</code></pre>
            </div>

            <h3>reduce - تجميع العناصر</h3>
            <div class="code-block">
                <div class="code-block-header"><span class="code-block-lang">JavaScript</span><button class="copy-btn" onclick="copyCode(this)">نسخ</button></div>
                <pre><code>const numbers = [1, 2, 3, 4, 5];
const sum = numbers.reduce((total, n) => total + n, 0);

console.log(sum); // 15</code></pre>
            </div>

            <h3>find و some و every</h3>
            <div class="code-block">
                <div class="code-block-header"><span class="code-block-lang">JavaScript</span><button class="copy-btn" onclick="copyCode(this)">نسخ</button></div>
                <pre><code>const users = [
  { name: "أحمد", age: 25 },
  { name: "سارة", age: 30 }
];

// find - أول عنصر يطابق
const user = users.find(u => u.age > 28);
console.log(user); // { name: "سارة", age: 30 }

// some - هل يوجد عنصر واحد على الأقل؟
const hasAdult = users.some(u => u.age >= 18);  // true

// every - هل كل العناصر تطابق؟
const allAdults = users.every(u => u.age >= 18); // true</code></pre>
            </div>
        `
    },

    // ===== DEFAULT =====
    'default': {
        fileName: 'main.js',
        starterCode: '// مرحباً بك!\nconsole.log("جاهز للتعلم 🚀");',
        body: `
            <h2>أهلاً بك في الدرس</h2>
            <p>هذا درس تجريبي. راح نضيف محتوى تفصيلي لكل درس قريباً!</p>
            <p>الحين، جرّب تعدّل الكود في المحرر تحت وشوف النتيجة.</p>
        `
    }
};

// Fill in default lesson for any missing step
['frontend', 'python', 'javascript', 'fullstack'].forEach(pathId => {
    const path = getPath(pathId);
    if (path) {
        path.steps.forEach((step, idx) => {
            const key = `${pathId}-${idx}`;
            if (!LESSONS[key]) {
                LESSONS[key] = {
                    fileName: pathId === 'python' ? 'script.py' : 'script.js',
                    starterCode: `// درس: ${step.title}\n// راح نضيف المحتوى الكامل قريباً!\n\nconsole.log("${step.title} - تحت التطوير");\n`,
                    body: `
                        <h2>${step.title}</h2>
                        <p>${step.description}</p>
                        <h3>المواضيع:</h3>
                        <ul>
                            ${step.topics.map(t => `<li>${t}</li>`).join('')}
                        </ul>
                        <p><strong>قريباً:</strong> راح نضيف شرح تفصيلي وأمثلة عملية لهذا الدرس.</p>
                    `
                };
            }
        });
    }
});
