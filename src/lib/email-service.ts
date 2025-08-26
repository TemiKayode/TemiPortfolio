import emailjs from 'emailjs-com';

const SERVICE_ID = 'service_xm8i7ec';
const TEMPLATE_ID = 'template_955lfs5';
const USER_ID = 'i3l8d41Bu8gwcy_IW';

export const sendEmail = async (formData: {
  name: string;
  email: string;
  subject: string;
  message: string;
}) => {
  try {
    const response = await emailjs.send(SERVICE_ID, TEMPLATE_ID, formData, USER_ID);
    console.log('Email sent successfully:', response);
    return response;
  } catch (error) {
    console.error('Error sending email:', error);
    throw error;
  }
};
