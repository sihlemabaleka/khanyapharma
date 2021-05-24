import NextAuth from 'next-auth';
import Providers from 'next-auth/providers';

const options = {
  providers: [
    Providers.Email({
      server: {
        host: process.env.process.env.EMAIL_SERVER_PASSWORD,
        port: process.env.EMAIL_SERVER_PORT,
        auth: {
          user: process.env.EMAIL_SERVER_USER,
          password: process.env.EMAIL_SERVER_PASSWORD
        }
      },
      from: process.env.EMAIL_FROM,
    })
  ],
  database: process.env.DATABASE_URI
}

export default (req, res) => NextAuth(req, res, options);