import SQLiteDatabase, {Database} from 'better-sqlite3';

let database: Database;

const connection = (): Promise<void> => {
    return new Promise((resolve, reject) => {
        try {
            database = SQLiteDatabase('database.db');
            load(database);
            resolve();
        } catch (error) {
            reject(error);
        }
    });
}

const AdSchema = `
    CREATE TABLE IF NOT EXISTS Ad (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        userId INTEGER NOT NULL,
        title TEXT NOT NULL,
        description TEXT NOT NULL,
        price INTEGER NOT NULL
    );
`;

const userSchema = `
    CREATE TABLE IF NOT EXISTS User (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        username TEXT NOT NULL,
        password TEXT NOT NULL
    );
`;

const categorySchema = `
    CREATE TABLE IF NOT EXISTS Category (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        name TEXT NOT NULL
    );
`;

const relationSchema = `
    CREATE TABLE IF NOT EXISTS Relation (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        adId INTEGER NOT NULL,
        categoryId INTEGER NOT NULL
    );
`;

const load = (db: Database): void => {
    db.prepare(userSchema).run();
    db.prepare(AdSchema).run();
    db.prepare(categorySchema).run();
    db.prepare(relationSchema).run();
}

export {connection, database}

