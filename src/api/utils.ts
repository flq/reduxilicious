export interface DB {
  users: [{ login: string; name: string; email: string }];
  products: [{ id: number; name: string; image: string; description: string }]
}

let db: DB | null = null;

try {
  db = JSON.parse(localStorage.getItem("db") || "{}");
} catch (e) {
  // tslint:disable-next-line:no-console
  // console.error("Issue with loading the DB", e);
}

export function getDb() : DB {
  if (!db) throw new Error("The DB is unavailable, check the log");
  return db;
}

export function delay(ms: number) {
  return new Promise(res => {
    setTimeout(() => res(), ms);
  });
}

export const standardDelay = () => delay(1000);
