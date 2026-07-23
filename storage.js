/* ===============================================
   Storage - إدارة حفظ التقدم بـ localStorage
   =============================================== */

const Storage = {
    PREFIX: 'codeacademy_',

    get(key, fallback = null) {
        try {
            const value = localStorage.getItem(this.PREFIX + key);
            return value === null ? fallback : JSON.parse(value);
        } catch (e) {
            console.warn('Storage read error:', e);
            return fallback;
        }
    },

    set(key, value) {
        try {
            localStorage.setItem(this.PREFIX + key, JSON.stringify(value));
            return true;
        } catch (e) {
            console.warn('Storage write error:', e);
            return false;
        }
    },

    remove(key) {
        localStorage.removeItem(this.PREFIX + key);
    },

    // Progress tracking
    getProgress(pathId) {
        return this.get(`progress_${pathId}`, {
            completedSteps: [],
            currentStep: 0,
            startedAt: null,
            completedAt: null
        });
    },

    saveProgress(pathId, data) {
        const current = this.getProgress(pathId);
        const merged = { ...current, ...data };
        if (!merged.startedAt) merged.startedAt = Date.now();
        this.set(`progress_${pathId}`, merged);
        return merged;
    },

    completeStep(pathId, stepId) {
        const progress = this.getProgress(pathId);
        if (!progress.completedSteps.includes(stepId)) {
            progress.completedSteps.push(stepId);
            progress.currentStep = Math.max(progress.currentStep, stepId + 1);
            this.set(`progress_${pathId}`, progress);
        }
        return progress;
    },

    uncompleteStep(pathId, stepId) {
        const progress = this.getProgress(pathId);
        progress.completedSteps = progress.completedSteps.filter(id => id !== stepId);
        this.set(`progress_${pathId}`, progress);
        return progress;
    },

    isStepCompleted(pathId, stepId) {
        const progress = this.getProgress(pathId);
        return progress.completedSteps.includes(stepId);
    },

    getPathProgress(pathId, totalSteps) {
        const progress = this.getProgress(pathId);
        return {
            completed: progress.completedSteps.length,
            total: totalSteps,
            percent: totalSteps === 0 ? 0 : Math.round((progress.completedSteps.length / totalSteps) * 100)
        };
    },

    // Lessons visited
    markLessonVisited(lessonId) {
        const visited = this.get('lessons_visited', []);
        if (!visited.includes(lessonId)) {
            visited.push(lessonId);
            this.set('lessons_visited', visited);
        }
    },

    getVisitedLessons() {
        return this.get('lessons_visited', []);
    },

    // Challenges solved
    markChallengeSolved(challengeId) {
        const solved = this.get('challenges_solved', []);
        if (!solved.includes(challengeId)) {
            solved.push(challengeId);
            this.set('challenges_solved', solved);
            return true; // newly solved
        }
        return false; // already solved
    },

    getSolvedChallenges() {
        return this.get('challenges_solved', []);
    },

    // Theme
    getTheme() {
        return this.get('theme', 'dark');
    },

    setTheme(theme) {
        this.set('theme', theme);
    },

    // Code snippets saved by user
    saveCode(lessonId, code) {
        const codes = this.get('saved_codes', {});
        codes[lessonId] = code;
        this.set('saved_codes', codes);
    },

    getCode(lessonId) {
        const codes = this.get('saved_codes', {});
        return codes[lessonId] || null;
    },

    // Achievements
    unlockAchievement(id) {
        const achievements = this.get('achievements', []);
        if (!achievements.includes(id)) {
            achievements.push(id);
            this.set('achievements', achievements);
            return true;
        }
        return false;
    },

    getAchievements() {
        return this.get('achievements', []);
    },

    // Stats overview
    getStats() {
        const visitedLessons = this.getVisitedLessons();
        const solvedChallenges = this.getSolvedChallenges();
        const achievements = this.getAchievements();

        // Calculate total completed steps across paths
        let totalCompleted = 0;
        ['frontend', 'python', 'fullstack', 'javascript'].forEach(pathId => {
            const progress = this.getProgress(pathId);
            totalCompleted += progress.completedSteps.length;
        });

        // Days streak (simplified)
        const firstVisit = this.get('first_visit', Date.now());
        const daysSinceStart = Math.floor((Date.now() - firstVisit) / (1000 * 60 * 60 * 24)) + 1;

        return {
            lessonsVisited: visitedLessons.length,
            challengesSolved: solvedChallenges.length,
            achievements: achievements.length,
            stepsCompleted: totalCompleted,
            daysActive: daysSinceStart
        };
    },

    initFirstVisit() {
        if (!this.get('first_visit')) {
            this.set('first_visit', Date.now());
        }
    },

    resetAll() {
        Object.keys(localStorage).forEach(key => {
            if (key.startsWith(this.PREFIX)) {
                localStorage.removeItem(key);
            }
        });
        this.initFirstVisit();
    }
};

Storage.initFirstVisit();
