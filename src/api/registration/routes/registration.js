module.exports = {
  routes: [
    {
     method: 'POST',
     path: '/auth/local/registration',
     handler: 'registration.registeration',
     config: {
      middlewares: ['plugin::users-permissions.rateLimit'],
      prefix: '',
      },
    },
  ],
};
