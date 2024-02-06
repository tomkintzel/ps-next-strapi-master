module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', '9e59fedea59bea8bff167d1aceeef1ab'),
  },
  apiToken: {
    salt: env('API_TOKEN_SALT', 'wcx9EIVnUduieX1pFrsfMg=='),
  },
  'random-sort': {
    enabled: true,
  },
});
