import Axios from 'axios'

class AuthService {
  encodeQueryString(params) {
      const queryString = new URLSearchParams();
      for (let paramName in params) {
          queryString.append(paramName, params[paramName]);
      }
      return queryString.toString();
  }


  authentication() {
    const CLIENT_ID = "401m5gmmyoy4jme9jo4n7bzz5zzt8t";
    const REDIRECT_URI = "https://chromatest.netlify.app/";
    const SCOPES = [];
    const params = {
        client_id: CLIENT_ID,
        redirect_uri: REDIRECT_URI,
        response_type: "token",
        scope: SCOPES.join(" "),
    };
    console.log(SCOPES.join(" "));
      const queryString = this.encodeQueryString(params);
      const authenticationUrl = `https://id.twitch.tv/oauth2/authorize?${queryString}`;
      window.location.href = authenticationUrl;
  }

  decodeQueryString(string) {
      const params = {};
      const queryString = new URLSearchParams(string);
      for (let [paramName, value] of queryString) {
          params[paramName] = value;
      }
      return params;
  }

  getUrlParams() {
      return this.decodeQueryString(window.location.hash.slice(1));
  }

  isAuthenticated() {
      const params = this.getUrlParams();
      return params["access_token"] !== undefined;
  }
}
export default new AuthService();
