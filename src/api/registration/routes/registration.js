module.exports = {
  routes: [
    {
     method: 'GET',
     path: '/auth/local/registration',
     handler: 'registration.registeration',
     config: {
      middlewares: ['plugin::users-permissions.rateLimit'],
      prefix: '',
      },
    },
  ],
};
