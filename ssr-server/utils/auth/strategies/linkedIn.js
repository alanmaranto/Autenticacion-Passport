const passport = require("passport");
const LinkedInStrategy = require("passport-linkedin-oauth2");
const axios = require("axios");
const boom = require("@hapi/boom");
const { config } = require("../../../config");

passport.use(
  new LinkedInStrategy(
    {
      clientID: config.linkedinKey,
      clientSecret: config.linkedinSecret,
      callbackURL: "/auth/linkedin/callback",
      scope: ["r_emailaddress", "r_liteprofile"],
    },
    async (accessToken, refreshToken, profile, cb) => {
      const { data, status } = await axios({
        url: `${config.apiUrl}/api/auth/sign-provider`,
        method: "POST",
        data: {
          name: profile.displayName,
          email: profile.emails[0].value || `${profile.username}@linkedin.com`,
          password: profile.id,
          apiKeyToken: config.apiKeyToken,
        },
      });

      if (!data || status !== 200) {
        return cb(boom.unauthorized(), false);
      }

      return cb(null, data);
    }
  )
);
