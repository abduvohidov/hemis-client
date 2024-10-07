import Cookies from "js-cookie";

export function setToken(token: string): void {
  Cookies.set("token", token, { expires: 7 });
}

export function removeToken(token: string): void {
  Cookies.remove(token);
}

export function getToken(): string | null {
    return Cookies.get('token') || null;
  }
