
# NASA Astronomy Picture Of The Day

This is a Single Page Application that fetches data from NASA's Image of the Day API and displays a new image every day. Users can sign up and login to the application to view what today's image is. The application uses MongoDB to persist account credentials and ExpressJS & NodeJS to handle routes/Server communication. Google OAuth has also been added as an option to sign in.

The application has been deployed using Vercel and is accessible at https://nasa-apod-eosin.vercel.app/.
## Installation and Setup

1. Clone the repository using `git clone https://github.com/pankaj1251/NASA-APOD.git`.
2. Navigate to the root directory of the project.
3. Install the necessary dependencies using `npm install`.
4. Create a `.env` file in the root directory and add the Environment Variables.

5. Start the application using `npm run dev`.
6. Open the application in your browser at `http://localhost:3000`.
## Environment Variables

To run this project, you will need to add the following environment variables to your .env file

`PORT`

`MONGO_URI`

`API_KEY`

`GOOGLE_CLIENT_ID`

`GOOGLE_CLIENT_SECRET`

**Note**: To obtain a *GOOGLE_CLIENT_ID* and *GOOGLE_CLIENT_SECRET*, you need to create a new project in the **Google Developers Console**. 

Then, create a new OAuth 2.0 client ID for a web application and set the authorized JavaScript origins to http://localhost:3000 (for local development) and https://nasa-apod-eosin.vercel.app/ (for deployment).

## Deployment

The application has been deployed using Vercel. To deploy the application to Vercel, follow these steps:

1. Create a new account on vercel.com.
2. Install the Vercel CLI by running `npm install -g vercel`.
3. Navigate to the root directory of the project.
4. Run `vercel login` to log in to your Vercel account.
5. Run `vercel` to deploy the application.
6. Follow the prompts to configure the deployment settings.



## Usage

1. Sign up for an account or log in to an existing account.
2. View today's NASA Astronomy Picture Of the Day by clicking on the `View Today's Image` button.
3. Log out of your account by clicking on the `Log Out` button.
## Authors

- [@Pankaj Pandit](https://github.com/pankaj1251)

