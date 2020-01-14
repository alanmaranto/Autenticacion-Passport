const passport = require("passport");
const axios = require("axios");
const { OAuth2Strategy } = require("passport-oauth");
const boom = require("@hapi/boom");

const { config } = require("../../../config/index");

const GOOGLE_AUTHORIZATION_URL = "https://accounts.google.com/o/oauth2/v2/auth";
const GOOGLE_TOKEN_URL = "https://www.googleapis.com/oauth2/v4/token";
const GOOGLE_USERINFO_URL = "https://www.googleapis.com/oauth2/v3/userinfo"; // Perfil de usuario de google

const oAuth2Strategy = new OAuth2Strategy(
  {
    authorizationURL: GOOGLE_AUTHORIZATION_URL,
    tokenURL: GOOGLE_TOKEN_URL,
    clientID: config.googleClientId,
    clientSecret: config.googleClientSecret,
    callbackURL: "/auth/google-oauth/callback"
  },
  async (accessToken, refreshToken, profile, callback) => {
    const { data, status } = await axios({
      url: `${config.apiUrl}/api/auth/sign-provider`,
      method: "post",
      data: {
        name: profile.name,
        email: profile.email,
        password: profile.id,
        apiKeyToken: config.apiKeyToken
      }
    });

    if (!data || status !== 200) {
      callback(boom.unauthorized(), false);
    }

    return callback(null, data);
  }
);

oAuth2Strategy.userProfile = (accessToken, done) => {
  this._oauth2.get(GOOGLE_USERINFO_URL, accessToken, (error, body) => {
    if (error) {
      return done(error);
    }

    try {
      const { sub, name, email } = JSON.parse(body);

      const profile = {
        id: sub,
        name,
        email
      };

      done(null, profile);
    } catch (parseError) {
      return done(callback);
    }
  });
};

passport.use("google-oauth", oAuth2Strategy);
