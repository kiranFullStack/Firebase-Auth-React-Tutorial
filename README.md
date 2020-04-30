# Firebase authentication example for react.

This is some example/boilerplate code for authenticating a user using Firebase + social auth (for example with Google)

To add Firebase to our `create-react-app` project we need `npm install firebase`

## Features/user stories

1. A user can sign in with an account using a popup box 
2. A user can see their `idToken` which can be sent to the backend

## Instructions

1. https://console.firebase.google.com/ Create a project
2. Setup Signup methods (Google for this example) under "Authentication" (make sure to enable)
3. Click on the gear icon and go to "Project settings". Add a web app and copy the `firebaseConfig` to `src/firebase/firebase.js`
4. `npm install; npm start` and check out the links below!

Want to get learn how to verify `idToken`s on the backend? See this repo for Node + Express: https://github.com/taimoorgit/Firebase-Auth-Node-Tutorial

## Related links

Note that for doing Github, Facebook, etc. you need to create a Github and Facebook application, and you can save the credential if you want to access the Github or FB API.

https://firebase.google.com/docs/auth/web/google-signin

https://firebase.google.com/docs/auth/web/github-auth

https://firebase.google.com/docs/auth/web/facebook-login

## Find this useful?

Subscribe: https://www.youtube.com/channel/UC9_2rdTefiAnSpOz9NMe9QA

My programming email list: https://mailchi.mp/2944e4582ac7/taimoorapps

Donate: https://www.buymeacoffee.com/taimoorapps https://www.paypal.me/taimoorapps

Hire me: 33 USD/hr Node, React, Stripe. See my profile.
