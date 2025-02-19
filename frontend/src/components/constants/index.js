export const API_BASE_URL = "http://localhost:8080"/*'https://www.targetangle-rockband.ru'*/;
export const ACCESS_TOKEN = 'accessToken';

export const OAUTH2_REDIRECT_URI = "http://localhost:3000/registration/oauth2/redirect"/*'https://www.targetangle.ru/registration/oauth2/redirect'*/;

export const GOOGLE_AUTH_URL = API_BASE_URL + '/oauth2/authorize/google?redirect_uri=' + OAUTH2_REDIRECT_URI;
export const FACEBOOK_AUTH_URL = API_BASE_URL + '/oauth2/authorize/facebook?redirect_uri=' + OAUTH2_REDIRECT_URI;
export const GITHUB_AUTH_URL = API_BASE_URL + '/oauth2/authorize/github?redirect_uri=' + OAUTH2_REDIRECT_URI;
