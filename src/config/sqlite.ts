import sqlite3 from 'sqlite3';
import { open } from 'sqlite';

export async function openDB() {
  return open({
    filename: '../db/cadmium.db',
    driver: sqlite3.Database,
  });
}

// Ensure the database and table exist
export async function initializeDB() {
  const db = await openDB();
  await db.exec(`
    CREATE TABLE IF NOT EXISTS organization_detail (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      cd_id TEXT NOT NULL UNIQUE,
      cd_secret TEXT NOT NULL UNIQUE
    )
  `);
}
initializeDB();

