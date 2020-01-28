import config from '../config';

const ContactApiService = {
  async postContactForm(contactInfo, token) {
    const res = await fetch(`${config.API_BASE_URL}/contact`, {
      method: 'POST',
      headers: {
        'content-type': 'application/json',
        authorization: `Bearer ${token}`,
      },
      body: JSON.stringify(contactInfo),
    });
    return (
      (!res.ok) ? res.json().then((e) => Promise.reject(e)) : res.json()
    );
  },
};

export default ContactApiService;
