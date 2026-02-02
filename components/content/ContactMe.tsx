'use client';

import { useState, FormEvent, ChangeEvent } from 'react';
import AnimationContainer from '../utils/AnimationContainer';

interface FormData {
  name: string;
  email: string;
  phone: string;
  message: string;
  honeypot: string; // Hidden field to catch bots
}

interface FormStatus {
  type: 'idle' | 'success' | 'error';
  message: string;
}

const ContactMe = () => {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    phone: '',
    message: '',
    honeypot: '', // Honeypot field - should remain empty
  });

  const [status, setStatus] = useState<FormStatus>({
    type: 'idle',
    message: '',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  // Handle input changes
  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
    // Clear status message when user starts typing
    if (status.type !== 'idle') {
      setStatus({ type: 'idle', message: '' });
    }
  };

  // Handle form submission
  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    setStatus({ type: 'idle', message: '' });

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (response.ok && data.success) {
        // Success - reset form and show success message
        setFormData({
          name: '',
          email: '',
          phone: '',
          message: '',
          honeypot: '',
        });
        setStatus({
          type: 'success',
          message: 'Thank you! Your message has been sent successfully.',
        });
      } else {
        // Error - show error message
        setStatus({
          type: 'error',
          message: data.error || 'Failed to send message. Please try again.',
        });
      }
    } catch (error) {
      // Network or other error
      setStatus({
        type: 'error',
        message: 'Network error. Please check your connection and try again.',
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <AnimationContainer customClassName="w-full">
      <h2
        className="font-bold text-2xl md:text-2xl tracking-tight mb-8 text-white text-center lg:text-start"
        id="contact"
      >
        Contact me
      </h2>

      <div className="w-full flex justify-between items-center flex-col mx-auto max-w-screen-xl">
        <div className="w-full flex justify-between items-center flex-col lg:flex-row gap-6 mb-10">
          <a
            href="mailto:hi@rrg.com.np"
            target="_blank"
            rel="noreferrer"
            className="w-full"
          >
            <div className="rounded border border-gray-800 hover:border-gray-900 bg-[#080809] p-4 shadow-sm hover:shadow-[0_8px_30px_rgb(0,0,0,0.12)] sm:p-6 transition ease">
              <p className="font-bold text-1xl tracking-tight text-white text-start">
                Email
              </p>
              <p className="text-base mt-2 text-gray-400">
                hi@rrg.com.np
              </p>
            </div>
          </a>

          {/* <a
            href="https://walink.co/2369d5"
            target="_blank"
            rel="noreferrer"
            className="w-full"
          >
            <div className="rounded border border-gray-800 hover:border-gray-900 bg-[#080809] p-4 shadow-sm hover:shadow-[0_8px_30px_rgb(0,0,0,0.12)] sm:p-6 transition ease">
              <p className="font-bold text-1xl tracking-tight text-white text-start">
                Phone
              </p>
              <p className="text-base mt-2 text-gray-400">+977 986 182 86 33</p>
            </div>
          </a> */}
        </div>

        <div className="w-full flex justify-center items-center flex-col overflow-hidden">
          <form
            onSubmit={handleSubmit}
            className="w-full space-y-4"
            noValidate
          >
            {/* Honeypot field - hidden from users but visible to bots */}
            <div style={{ position: 'absolute', left: '-9999px' }}>
              <label htmlFor="honeypot">Leave this field empty</label>
              <input
                type="text"
                id="honeypot"
                name="honeypot"
                value={formData.honeypot}
                onChange={handleChange}
                tabIndex={-1}
                autoComplete="off"
                aria-hidden="true"
              />
            </div>

            <div>
              <label className="sr-only" htmlFor="name">
                Name
              </label>
              <input
                className="w-full rounded p-3 text-base outline-none border text-white bg-black border-gray-900 focus:border-gray-800 transition ease"
                placeholder="Name"
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                disabled={isSubmitting}
              />
            </div>

            <div className="grid grid-cols-1 gap-4 lg:gap-8 sm:grid-cols-2">
              <div>
                <label className="sr-only" htmlFor="email">
                  Email
                </label>
                <input
                  className="w-full rounded p-3 text-base outline-none border text-white bg-black border-gray-900 focus:border-gray-800 transition ease"
                  placeholder="Email"
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  disabled={isSubmitting}
                />
              </div>

              <div>
                <label className="sr-only" htmlFor="phone">
                  Phone
                </label>
                <input
                  className="w-full rounded p-3 text-base outline-none border text-white bg-black border-gray-900 focus:border-gray-800 transition ease"
                  placeholder="Phone"
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  disabled={isSubmitting}
                />
              </div>
            </div>

            <div>
              <label className="sr-only" htmlFor="message">
                Message
              </label>
              <textarea
                className="w-full h-32 rounded p-3 text-base outline-none border text-white bg-black border-gray-900 focus:border-gray-800 transition ease"
                placeholder="Message"
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                disabled={isSubmitting}
              ></textarea>
            </div>

            {/* Status message */}
            {status.type !== 'idle' && (
              <div
                className={`rounded p-4 text-sm ${
                  status.type === 'success'
                    ? 'bg-green-900/20 border border-green-800 text-green-300'
                    : 'bg-red-900/20 border border-red-800 text-red-300'
                }`}
                role="alert"
              >
                {status.message}
              </div>
            )}

            <button
              type="submit"
              disabled={isSubmitting}
              className={`flex items-center justify-center rounded px-5 py-3 text-white bg-black hover:bg-gray-900 shadow-sm transition ease mx-auto ${
                isSubmitting
                  ? 'opacity-50 cursor-not-allowed'
                  : 'hover:shadow-lg'
              }`}
            >
              <span className="font-medium text-base">
                {isSubmitting ? 'Sending...' : 'Send'}
              </span>

              {!isSubmitting && (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="ml-3 h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M14 5l7 7m0 0l-7 7m7-7H3"
                  />
                </svg>
              )}

              {isSubmitting && (
                <svg
                  className="animate-spin ml-3 h-5 w-5"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                >
                  <circle
                    className="opacity-25"
                    cx="12"
                    cy="12"
                    r="10"
                    stroke="currentColor"
                    strokeWidth="4"
                  ></circle>
                  <path
                    className="opacity-75"
                    fill="currentColor"
                    d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                  ></path>
                </svg>
              )}
            </button>
          </form>
        </div>
      </div>
    </AnimationContainer>
  );
};

export default ContactMe;
