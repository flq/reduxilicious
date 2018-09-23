export interface DB {
    users: [{name: string, email: string}]
}

const db : DB = JSON.parse(localStorage.getItem("db") || "{}");

export function getDb() {
    return db;
}

export function delay(ms: number) {
  return new Promise(res => {
    setTimeout(() => res(), ms);
  });
}

export const standardDelay = delay(500);
