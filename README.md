# Email.js demo application

## Setup

1. Create an account on [https://www.emailjs.com/](https://www.emailjs.com/).
2. Link up an email service in [https://dashboard.emailjs.com/admin](https://dashboard.emailjs.com/admin).
3. Add an email template in [https://dashboard.emailjs.com/admin/templates](https://dashboard.emailjs.com/admin/templates).

## Running the app

1. Create a `.env.local` file, add your `User ID` from [https://dashboard.emailjs.com/admin/integration](https://dashboard.emailjs.com/admin/integration), `Service ID` from Setup step 2 and the `Template ID` from Setup step 3 as environment variables. e.g.:

   `.env.local`

   ```bash
   NEXT_PUBLIC_EMAILJS_KEY=user_XXXXXXXX
   NEXT_PUBLIC_EMAILJS_SERVICE_ID=demo_service
   NEXT_PUBLIC_EMAILJS_TEMPLATE_ID=demo_template
   ```

   Alternatively, paste these values directly into the relevant places in [/components/emailjs.js](/components/emailjs.js) (remember not to commit these values to Git).

   _Note: if you change these after running the app, you'll need to restart the app for these changes to take effect._

2. Run the development server:

   ```bash
   npm install
   # then
   npm run dev
   ```

3. Open the app at [http://localhost:3000](http://localhost:3000).

4. To add/remove fields, modify [/components/EmailForm.jsx](/components/EmailForm.jsx).
