import sqlite3 from 'sqlite3';
import { open, Database } from 'sqlite';

/**
 * Opens a connection to the SQLite database.
 * @returns A promise that resolves to an open database connection.
 */
export async function openDB(): Promise<Database> {
  return open({
    filename: '../db/cadmium.db',
    driver: sqlite3.Database,
  });
}

/**
 * Initializes the database and ensures the organization_detail table exists.
 * Creates the organization_detail table if it does not already exist.
 * @returns A promise that resolves when the database initialization is complete.
 */
export async function initializeDB(): Promise<void> {
  const db = await openDB();
  await db.exec(`
    CREATE TABLE IF NOT EXISTS organization_detail (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      cd_id TEXT NOT NULL UNIQUE,
      cd_secret TEXT NOT NULL UNIQUE
    )
  `);
}

// Call initializeDB to set up the database when the module is loaded
initializeDB();

