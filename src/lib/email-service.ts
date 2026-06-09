import emailjs from '@emailjs/browser';

const PUBLIC_KEY          = import.meta.env.VITE_EMAILJS_PUBLIC_KEY          || 'i3l8d41Bu8gwcy_IW';
const SERVICE_ID          = import.meta.env.VITE_EMAILJS_SERVICE_ID          || 'service_vgrezd4';
const TEMPLATE_ID         = import.meta.env.VITE_EMAILJS_TEMPLATE_ID         || 'template_955lfs5';
const AUTOREPLY_TEMPLATE  = import.meta.env.VITE_EMAILJS_AUTOREPLY_TEMPLATE  || '';
const TO_EMAIL            = 'Temitayokayode5@gmail.com';

// Initialise once so every send() call is authenticated
emailjs.init({ publicKey: PUBLIC_KEY });

export const sendEmail = async (formData: {
  name: string;
  email: string;
  subject: string;
  message: string;
}) => {
  const templateParams = {
    title:      formData.subject,  // {{title}} → subject line in "Contact Us" template
    name:       formData.name,     // {{name}}  → From Name / body
    email:      formData.email,    // {{email}} → Reply To / auto-reply To
    message:    formData.message,
    // Aliases so body can use any variable name
    subject:    formData.subject,
    from_name:  formData.name,
    from_email: formData.email,
    reply_to:   formData.email,
    to_email:   TO_EMAIL,
  };

  // 1. Notify Temitayo
  const response = await emailjs.send(SERVICE_ID, TEMPLATE_ID, templateParams);
  if (response.status !== 200) {
    throw new Error(`Notification email failed: ${response.status} ${response.text}`);
  }

  // 2. Auto-reply to sender (runs only if the template ID is configured)
  if (AUTOREPLY_TEMPLATE) {
    try {
      await emailjs.send(SERVICE_ID, AUTOREPLY_TEMPLATE, templateParams);
    } catch (err) {
      // Auto-reply failure is non-fatal — the main message was already delivered
      console.warn('[Contact] Auto-reply failed:', err);
    }
  }

  return response;
};
