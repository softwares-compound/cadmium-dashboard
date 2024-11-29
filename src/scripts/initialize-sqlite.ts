import { initializeDB } from "@/config/sqlite";

(async () => {
    try {
        await initializeDB();
        console.log('Database initialized.');
    } catch (error) {
        console.error('Error initializing database:', error);
    }
})();
