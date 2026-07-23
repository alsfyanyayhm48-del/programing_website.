/* ===============================================
   Main - تفاعلات عامة (theme, nav, toast, ...)
   =============================================== */

// ===== Theme Management =====
const ThemeManager = {
    init() {
        const saved = Storage.getTheme();
        this.apply(saved);

        const toggle = document.getElementById('themeToggle');
        if (toggle) {
            toggle.addEventListener('click', () => {
                const current = document.documentElement.getAttribute('data-theme') || 'dark';
                const next = current === 'dark' ? 'light' : 'dark';
                this.apply(next);
                Storage.setTheme(next);
            });
        }
    },

    apply(theme) {
        document.documentElement.setAttribute('data-theme', theme);
        const icon = document.querySelector('.theme-icon');
        if (icon) {
            icon.textContent = theme === 'dark' ? '🌙' : '☀️';
        }
    }
};

// ===== Mobile Menu =====
const MobileMenu = {
    init() {
        const menuBtn = document.getElementById('mobileMenu');
        const navLinks = document.querySelector('.nav-links');

        if (menuBtn && navLinks) {
            menuBtn.addEventListener('click', () => {
                navLinks.classList.toggle('open');
            });

            // Close on link click
            navLinks.querySelectorAll('a').forEach(link => {
                link.addEventListener('click', () => {
                    navLinks.classList.remove('open');
                });
            });
        }
    }
};

// ===== Toast Notifications =====
const Toast = {
    show({ title, message, duration = 3000, type = 'success' }) {
        // Remove any existing toast
        const existing = document.querySelector('.toast');
        if (existing) existing.remove();

        const toast = document.createElement('div');
        toast.className = 'toast';
        const iconMap = { success: '✓', info: 'ℹ', warning: '!', error: '✕' };
        toast.innerHTML = `
            <div class="toast-icon">${iconMap[type] || '✓'}</div>
            <div class="toast-content">
                <div class="toast-title">${title}</div>
                <div class="toast-message">${message}</div>
            </div>
        `;
        document.body.appendChild(toast);

        setTimeout(() => toast.classList.add('show'), 10);
        setTimeout(() => {
            toast.classList.remove('show');
            setTimeout(() => toast.remove(), 400);
        }, duration);
    },

    success(title, message) {
        this.show({ title, message, type: 'success' });
    },

    info(title, message) {
        this.show({ title, message, type: 'info' });
    }
};

// ===== Copy Code =====
function copyCode(button) {
    const codeBlock = button.closest('.code-block');
    const code = codeBlock.querySelector('code').textContent;

    navigator.clipboard.writeText(code).then(() => {
        const originalText = button.textContent;
        button.textContent = '✓ تم النسخ';
        button.classList.add('copied');
        setTimeout(() => {
            button.textContent = originalText;
            button.classList.remove('copied');
        }, 2000);
    });
}

// ===== Smooth Scroll for Anchor Links =====
function initSmoothScroll() {
    document.querySelectorAll('a[href^="#"]').forEach(link => {
        link.addEventListener('click', (e) => {
            const target = document.querySelector(link.getAttribute('href'));
            if (target) {
                e.preventDefault();
                target.scrollIntoView({ behavior: 'smooth', block: 'start' });
            }
        });
    });
}

// ===== Reveal on Scroll =====
function initRevealOnScroll() {
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('reveal-visible');
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.1 });

    document.querySelectorAll('.reveal').forEach(el => observer.observe(el));
}

// ===== Init All =====
document.addEventListener('DOMContentLoaded', () => {
    ThemeManager.init();
    MobileMenu.init();
    initSmoothScroll();
    initRevealOnScroll();
});

 Document.addEventListener('contextmenu', event => event.preventDefault());


document.addEventListener('keydown', event => 
{
    if (event.key === 'F12' || 
        (event.ctrlKey && event.shiftKey && event.key === 'I') || 
        (event.ctrlKey && event.key === 'U') || 
        (event.ctrlKey && event.key === 'c')) 
    {
        event.preventDefault();
        alert('هذه الوظيفة معطلة لحماية محتوى الموقع.');
    }
});




