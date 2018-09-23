import { getDb, standardDelay } from "./utils";

export async function tryLogin(name: string) {
   const found = getDb().users.find(v => v.name === name);
   await standardDelay;
   return found || null;
}