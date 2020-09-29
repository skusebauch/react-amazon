firebase emulators:start -spin up express server

<!-- deploy backend -->

firebase deploy --only functions

<!-- deploy Frontend -->

firebase deploy --only hosting

<!-- Stripe mock credit card -->

stripe use 4242424242424242... credit card number

<!-- URL -->

Project Console: https://console.firebase.google.com/project/react-5453f/overview
Hosting URL: https://react-5453f.web.app
