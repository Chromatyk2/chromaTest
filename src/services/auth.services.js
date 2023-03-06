import React,{useState, useEffect} from 'react';
import { useCookies } from 'react-cookie';
import Axios from 'axios'

function AuthService() {
  const [cookies, setCookie, removeCookie] = useCookies(['oauth']);
  const CLIENT_ID = "401m5gmmyoy4jme9jo4n7bzz5zzt8t";
  const REDIRECT_URI = "https://chromatest.netlify.app/";
  const SCOPES = ['openid'];
  const encodeQueryString = (params) => {
      const queryString = new URLSearchParams();
      for (let paramName in params) {
          queryString.append(paramName, params[paramName]);
      }
      return queryString.toString();
  };
  const authentication = () => {
    const params = {
        client_id: CLIENT_ID,
        redirect_uri: REDIRECT_URI,
        response_type: "id_token",
        scope: SCOPES,
    };
      const queryString = encodeQueryString(params);
      const authenticationUrl = `https://id.twitch.tv/oauth2/authorize?${queryString}`;
      window.location.href = authenticationUrl;
  };
  const decodeQueryString = (string) => {
      const params = {};
      const queryString = new URLSearchParams(string);
      for (let [paramName, value] of queryString) {
          params[paramName] = value;
      }
      return params;
  };
  const getUrlParams = () => {
      return decodeQueryString(window.location.hash.slice(1));
  };

  const isAuthenticated = () => {
      const params = getUrlParams();
      console.log(Object.keys(params).length);
      if(Object.keys(params).length > 0){
        setCookie('oauth', { params });
      }
      return params["access_token"] !== undefined;
  }
  useEffect(() => {
    isAuthenticated();
  }, []);
  return(
    <button onClick={authentication}>connexion</button>
  )
}
export default AuthService;
