import { getDb, standardDelay } from "./utils";

export async function tryLogin(login: string) {
   const found = getDb().users.find(v => v.login === login);
   await standardDelay();
   return found || null;
}