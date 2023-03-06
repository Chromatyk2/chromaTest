import Axios from 'axios'

class AuthService {
  encodeQueryString(params) {
      const queryString = new URLSearchParams();
      for (let paramName in params) {
          queryString.append(paramName, params[paramName]);
      }
      return queryString.toString();
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
      return decodeQueryString(window.location.hash.slice(1));
  }

  isAuthenticated() {
      const params = getUrlParams();
      return params["access_token"] !== undefined;
  }

  authentication() {
      const params = {
          client_id: "401m5gmmyoy4jme9jo4n7bzz5zzt8t",
          redirect_uri: "https://chromatest.netlify.app/",
          response_type: "token",
          scope: SCOPES.join(" "),
      };
      const queryString = encodeQueryString(params);
      const authenticationUrl = `https://id.twitch.tv/oauth2/authorize?${queryString}`;
      window.location.href = authenticationUrl;
  }
}
export default new AuthService();
