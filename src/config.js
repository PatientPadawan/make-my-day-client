export default {
  API_BASE_URL: process.env.REACT_APP_API_BASE_URL,
  issuer: `https://${process.env.REACT_APP_OKTA_DOMAIN}/oauth2/default`,
  clientId: `${process.env.REACT_APP_OKTA_ID}`,
  redirectUri: 'https://make-my-day-events.now.sh/implicit/callback',
  // redirectUri: `${window.location.origin}/implicit/callback`,
};
