# Okta Application Project
Created using Node Express

## Getting Started
You will need to set up some environment variables before the app will run properly.
To integrate Okta's Identity Platform for user authentication, you'll first need to:
* [Sign up for a free Okta Developer account](https://www.okta.com/developer/signup/)
* You will get a URL similar to `https://dev-861173.oktapreview.com`.
  * Save this URL for later
  * You will also use this URL to login to your Okta account

You will need to create an application in Okta:

* Log in to your Okta account, then navigate to **Applications** and click the **Add Application** button
* Select **Web** and click **Next**
* Give your application a name (e.g. "Simple Node Authentication")
* Change the **Base URI** to `http://localhost:3000` and the **Login redirect URI** to `http://localhost:3000/authorization-code/callback`, then click **Done**
* Save your **client ID** and **client secret** for later

You will also need two API tokens:

* Log in to your Okta account, then navigate to **API > Tokens** and click the **Create Token** button
  * The first one will be for registering users, so name it "Registration Token" 
  * The second token will be for fetching and editing user profiles, so name it "User Profile"
* Save the provided **token value** for later
  * This will only be displayed once. If you lose it, you will need to create another API token
* Repeat this process for the next token

Now create a file called `.env` in the project root and add the following variables, replacing the values with your own from the previous steps.

```bash
ORG_URL=https://dev-861173.okta.com
HOST_URL=http://localhost:3000
APP_SECRET={Anything you want}
CLIENT_ID=0oardp12uybr0rgQg356
CLIENT_SECRET={Paste your secrete code here}
REGISTRATION_TOKEN={Paste your registration token here}
USER_PROFILE_TOKEN={Paste your user profile token here}
```

Run the application:

```bash
npm install
source .env
npm start
```
