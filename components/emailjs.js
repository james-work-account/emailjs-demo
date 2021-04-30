import { init, sendForm } from "emailjs-com";

// replace below key with User ID from https://dashboard.emailjs.com/admin/integration
// or create a `.env.local` file and add a line like `NEXT_PUBLIC_EMAILJS_KEY=YOUR_KEY_HERE`
init(process.env.NEXT_PUBLIC_EMAILJS_KEY);

export async function sendEmail(e) {
  e.preventDefault();
  try {
    const res = await sendForm(
      process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID,
      process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID,
      e.currentTarget
    );
    return res.text;
  } catch (error) {
    throw error;
  }
}
