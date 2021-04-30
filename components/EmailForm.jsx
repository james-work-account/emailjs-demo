import React, { useState } from "react";
import { sendEmail } from "./emailjs";

const Label = ({ selector, text, required }) => (
  <label htmlFor={selector}>
    {text}
    {required && <span className='required'>*</span>}
  </label>
);

const TextArea = ({ selector, text, required }) => (
  <>
    <Label selector={selector} text={text} required={required} />
    <textarea id={selector} name={selector} cols={50} rows={5} required={required} />
  </>
);

const Input = ({ selector, text, required }) => (
  <>
    <Label selector={selector} text={text} required={required} />
    <input type='text' id={selector} name={selector} required={required} />
  </>
);

export const EmailForm = () => {
  const [showSuccessMessage, setShowSuccessMessage] = useState(false);
  const [errorMessage, setErrorMessage] = useState(null);
  const [loading, setLoading] = useState(false);

  return (
    <form
      onSubmit={async (e) => {
        setLoading(true);
        try {
          await sendEmail(e);
          setLoading(false);
          setShowSuccessMessage(true);
          setTimeout(() => setShowSuccessMessage(false), 3000);
        } catch (e) {
          setLoading(false);
          setErrorMessage(e.text);
          setTimeout(() => setErrorMessage(null), 3000);
        }
      }}
    >
      {loading && <div>Submitting form...</div>}
      {showSuccessMessage && <div>Submit successful</div>}
      {errorMessage && <div className='error'>{errorMessage}</div>}

      <Input selector='from_name' text='From' />
      <TextArea selector='message' text='Message' required />
      <Input selector='to_name' text='To' required />
      <input type='submit' value='Submit' />
    </form>
  );
};
