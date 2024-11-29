// This script is used to initialize the database when the application is first
// run. It creates the necessary tables in the database if they do not already
// exist.
import { initializeDB } from "@/config/sqlite";

(async () => {
    try {
        await initializeDB();
        console.log('Database initialized.');
    } catch (error) {
        console.error('Error initializing database:', error);
    }
})();

