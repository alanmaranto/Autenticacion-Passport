const passport = require("passport");
const axios = require("axios");
const boom = require("@hapi/boom");

const { Strategy: TwitterStrategy } = require("passport-twitter");

const { config } = require("../../../config");

passport.use(
  new TwitterStrategy(
    {
      consumerKey: config.twitterConsumerKey,
      consumerSecret: config.twitterConsumerSecret,
      callbackURL: "/auth/twitter/callback",
      includeEmail: true,
    },
    async (token, tokenSecret, profile, cb) => {
      const { data, status } = await axios({
        url: `${config.apiUrl}/api/auth/sign-provider`,
        method: "POST",
        data: {
          name: profile.displayName,
          email: profile.emails[0].value || `${profile.username}@twitter.com`,
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
