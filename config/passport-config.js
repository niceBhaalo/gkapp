// require('dotenv').config()
const passport = require("passport")
const GoogleStrategy = require('passport-google-oauth20').Strategy;

console.log("Control Passes Over?");

const { checkUserExists, populateUser } = require('../src/db/queries.js');

passport.use(new GoogleStrategy({
	clientID: process.env.GOOGLE_CLIENT_ID,
	clientSecret: process.env.GOOGLE_CLIENT_SECRET,
	callbackURL: "https://fazeelptapp.com:443/auth/google/callback", // Include the callback route
	passReqToCallback: true
    },
	async function(request, accessToken, refreshToken, profile, done) {
        console.log("Google OAuth Callback Successful");
        const userExists = await checkUserExists(profile.id); // Use `await` here, not `await queries.checkUserExists`

        if (userExists) {
            // User already exists in the database
            console.log('User already in the database');
            request.session.user = {
                id: profile.id,
                displayName: profile.displayName
            };
        }
        const newUser = {
            user_id: profile.id, // Use a unique identifier from Google
            display_name: profile.displayName,
            email: profile.emails[0].value,// You can add other user data here based on the 'profile' object
        };
        try {
            // Assuming you have a function in queries.js to insert a new user
            const insertedUser = await populateUser(newUser); // Use `await` here, not `await queries.insertUser`
            console.log('New user created or updated:', newUser.display_name);
            // Log in the new user
        } catch (error) {
            console.error('Error creating user:', error);
        }
        return done(null, profile);
    }
));

passport.serializeUser(function(user, done) {
	done(null, user);
});

passport.deserializeUser(function(user, done) {
	done(null, user);
});
