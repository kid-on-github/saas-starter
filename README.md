# Auth Starter

This is a React (TS) project starter with authentication built in.

## Authentication

Authentication is handled with Firebase. Currently the only way to sign in is with Google's social sign in. If you need to make an authenticated request to the backend, you can pass the token to the backend and it'll be verified by the Cloudflare backend.

## Getting Started

### Set up Firebase

1. Create a new Firebase project.
2. Make sure to enable the Google sign-in method in the Firebase console.

### Run the project locally

1. Install dependencies with `npm install`.
2. Copy the `firebase/config.example.ts` file to `firebase/config.ts` and fill out the required fields (these fields come from your Firebase project).
3. Run the project with ``.

### Deploy the project (Cloudflare Pages)

1.
