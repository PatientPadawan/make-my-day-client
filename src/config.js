export default {
  API_BASE_URL: process.env.REACT_APP_API_BASE_URL,
  TINY_API_KEY: process.env.REACT_APP_TINY_API_KEY,
  issuer: `https://${process.env.REACT_APP_OKTA_DOMAIN}/oauth2/default`,
  clientId: `${process.env.REACT_APP_OKTA_ID}`,
  redirectUri: `${process.env.REACT_APP_CLIENT_BASE_URL}/implicit/callback`, 
};
