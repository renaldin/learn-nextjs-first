module.exports = {
  env: {
    appName: 'Learn Next Js'
  },

  async rewrites() {
    return [
      {
        source: '/login',
        destination: '/auth/login',
      },
      {
        source: '/register',
        destination: '/auth/register',
      }
    ]
  }
}