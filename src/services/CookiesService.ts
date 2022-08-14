import Cookies from 'js-cookie';

export default class CookiesService {
  static getSessionCookie() {
    return Cookies.get('TOKEN') || null;
  }

  static setSessionCookie(token: string, expires: number | Date = 30) {
    Cookies.set('TOKEN', token, { expires });
  }

  static removeSessionCookie() {
    Cookies.remove('TOKEN');
  }
}
