import emailjs from '@emailjs/browser';

const PUBLIC_KEY   = import.meta.env.VITE_EMAILJS_PUBLIC_KEY   || 'i3l8d41Bu8gwcy_IW';
const SERVICE_ID   = import.meta.env.VITE_EMAILJS_SERVICE_ID   || 'service_xm8i7ec';
const TEMPLATE_ID  = import.meta.env.VITE_EMAILJS_TEMPLATE_ID  || 'template_955lfs5';
const TO_EMAIL     = 'Temitayokayode5@gmail.com';

// Initialise once so every send() call is authenticated
emailjs.init({ publicKey: PUBLIC_KEY });

export const sendEmail = async (formData: {
  name: string;
  email: string;
  subject: string;
  message: string;
}) => {
  // Send every likely variable name so the template works regardless
  // of how {{variables}} are named in the EmailJS dashboard
  const templateParams = {
    // Standard EmailJS names
    from_name:  formData.name,
    from_email: formData.email,
    reply_to:   formData.email,
    to_email:   TO_EMAIL,
    to_name:    'Temitayo',
    subject:    formData.subject,
    message:    formData.message,
    // Original field names (fallback if template uses these)
    name:       formData.name,
    email:      formData.email,
  };

  const response = await emailjs.send(SERVICE_ID, TEMPLATE_ID, templateParams);
  if (response.status !== 200) {
    throw new Error(`EmailJS responded with status ${response.status}: ${response.text}`);
  }
  return response;
};
