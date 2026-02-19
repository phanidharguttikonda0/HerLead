import { useState } from 'react';
import emailjs from '@emailjs/browser';

interface EmailResponse {
    success: boolean;
    message: string;
}

export const useEmailSender = () => {
    const [loading, setLoading] = useState(false);

    const sendEmail = async (formData: Record<string, unknown>): Promise<EmailResponse> => {
        setLoading(true);

        const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID;
        const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
        const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

        if (!serviceId || !templateId || !publicKey) {
            setLoading(false);
            console.error('EmailJS credentials missing');
            return { success: false, message: 'Configuration error. Please contact support.' };
        }

        try {
            // Map form data to the specific template variables: name, email, message
            // 'name' and 'email' might have different keys in different forms, so we check for common variations.
            const name = formData.name || formData.fullName || 'User';
            const email = formData.email || 'no-reply@example.com';

            // Format the entire form data as a readable string for the 'message' variable
            const message = Object.entries(formData)
                .filter(([key]) => key !== 'name' && key !== 'fullName' && key !== 'email') // Exclude redundant fields if desired, or keep all
                .map(([key, value]) => `${key.charAt(0).toUpperCase() + key.slice(1).replace(/([A-Z])/g, ' $1')}: ${value}`)
                .join('\n');

            const templateParams = {
                name,
                email,
                message,
                // Also passing raw data in case the template uses other variables, but the user emphasized 'message'
                ...formData
            };

            await emailjs.send(serviceId, templateId, templateParams, publicKey);
            setLoading(false);
            return { success: true, message: 'Message sent successfully!' };
        } catch (error) {
            console.error('EmailJS Error:', error);
            setLoading(false);
            return { success: false, message: 'Failed to send message. Please try again.' };
        }
    };

    return { sendEmail, loading };
};
