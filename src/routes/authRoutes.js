const express = require('express');
const router = express.Router();

const passport = require('passport')

router.get('/google',
    passport.authenticate('google', {
            scope:
                ['email', 'profile'],
        }
));

router.get('/google/callback',
    passport.authenticate('google', {
        failureRedirect: '/failed',
    }),
    function (req, res, next) {
        if (req.user) {
            res.redirect('/auth/google/success');
        } else {
            console.log('Authentication failed');
            res.redirect('/auth/google/failed');
        }
    }
);

router.get("/google/failed", (req, res) => {
    console.log('User is not authenticated');
    res.send("Failed")
})

router.get("/google/success",isLoggedIn, (req, res) => {
    console.log('You are logged in');
    res.redirect('/');
})

router.get("/google/logout", (req, res) => {
    req.session.destroy((err) => {
        if (err) {
            console.log('Error while destroying session:', err);
        } else {
            req.logout(() => {
                console.log('You are logged out');
                res.redirect('/home');
            });
        }
    });
});

function isLoggedIn(req, res, next) {
  if (req.isAuthenticated()) {
    return next();
  }
  res.redirect('/auth/google/failed'); // Redirect to a failure page if not authenticated
}

module.exports = router;
