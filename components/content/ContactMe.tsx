'use client';

import { useState, FormEvent, ChangeEvent, FocusEvent } from 'react';
import AnimationContainer from '../utils/AnimationContainer';
import SectionHeading from '../utils/SectionHeading';

interface FormData {
  name: string;
  email: string;
  phone: string;
  message: string;
  honeypot: string; // hidden field to catch bots
}

type FieldErrors = Partial<Record<'name' | 'email' | 'message', string>>;

interface FormStatus {
  type: 'idle' | 'success' | 'error';
  message: string;
}

const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

const validateField = (name: string, value: string): string | undefined => {
  if (name === 'name' && !value.trim()) return 'Please enter your name.';
  if (name === 'email') {
    if (!value.trim()) return 'Please enter your email.';
    if (!EMAIL_PATTERN.test(value)) return 'Please enter a valid email.';
  }
  if (name === 'message' && !value.trim()) return 'Please add a short message.';
  return undefined;
};

const inputStyle =
  'w-full rounded-sm border border-border bg-surface p-3 text-base text-text placeholder:text-muted/70 transition-colors duration-fast focus:border-muted disabled:opacity-50';

const ContactMe = () => {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    phone: '',
    message: '',
    honeypot: ''
  });

  const [errors, setErrors] = useState<FieldErrors>({});
  const [status, setStatus] = useState<FormStatus>({
    type: 'idle',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));

    if (errors[name as keyof FieldErrors]) {
      setErrors((prev) => ({ ...prev, [name]: validateField(name, value) }));
    }
    if (status.type !== 'idle') setStatus({ type: 'idle', message: '' });
  };

  const handleBlur = (
    e: FocusEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setErrors((prev) => ({ ...prev, [name]: validateField(name, value) }));
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const nextErrors: FieldErrors = {
      name: validateField('name', formData.name),
      email: validateField('email', formData.email),
      message: validateField('message', formData.message)
    };
    setErrors(nextErrors);
    if (Object.values(nextErrors).some(Boolean)) return;

    setIsSubmitting(true);
    setStatus({ type: 'idle', message: '' });

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData)
      });

      const data = await response.json();

      if (response.ok && data.success) {
        setFormData({
          name: '',
          email: '',
          phone: '',
          message: '',
          honeypot: ''
        });
        setStatus({
          type: 'success',
          message: 'Thanks - your message is on its way.'
        });
      } else {
        setStatus({
          type: 'error',
          message: data.error || 'Failed to send. Please try again.'
        });
      }
    } catch {
      setStatus({
        type: 'error',
        message: 'Network error. Check your connection and try again.'
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const errorText = (field: keyof FieldErrors) =>
    errors[field] ? (
      <p
        id={`${field}-error`}
        className="mt-1.5 text-sm text-accent"
        role="alert"
      >
        {errors[field]}
      </p>
    ) : null;

  return (
    <AnimationContainer customClassName="w-full">
      <SectionHeading label="contact" title="Get in touch" id="contact" />

      <p className="mt-6 text-base text-muted">
        Building something in fintech, proptech, or mobile? Email{' '}
        <a
          href="mailto:hi@rrg.com.np"
          className="font-mono text-sm text-text underline decoration-border underline-offset-4 transition-colors duration-fast hover:decoration-accent"
        >
          hi@rrg.com.np
        </a>{' '}
        or use the form.
      </p>

      <form
        onSubmit={handleSubmit}
        className="mt-8 flex flex-col gap-5"
        noValidate
      >
        {/* Honeypot - hidden from people, visible to bots */}
        <div className="absolute -left-[9999px]" aria-hidden="true">
          <label htmlFor="honeypot">Leave this field empty</label>
          <input
            type="text"
            id="honeypot"
            name="honeypot"
            value={formData.honeypot}
            onChange={handleChange}
            tabIndex={-1}
            autoComplete="off"
          />
        </div>

        <div>
          <label htmlFor="name" className="mb-1.5 block text-sm text-muted">
            Name
          </label>
          <input
            className={inputStyle}
            type="text"
            id="name"
            name="name"
            autoComplete="name"
            value={formData.name}
            onChange={handleChange}
            onBlur={handleBlur}
            required
            aria-invalid={Boolean(errors.name)}
            aria-describedby={errors.name ? 'name-error' : undefined}
            disabled={isSubmitting}
          />
          {errorText('name')}
        </div>

        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
          <div>
            <label htmlFor="email" className="mb-1.5 block text-sm text-muted">
              Email
            </label>
            <input
              className={inputStyle}
              type="email"
              id="email"
              name="email"
              autoComplete="email"
              value={formData.email}
              onChange={handleChange}
              onBlur={handleBlur}
              required
              aria-invalid={Boolean(errors.email)}
              aria-describedby={errors.email ? 'email-error' : undefined}
              disabled={isSubmitting}
            />
            {errorText('email')}
          </div>

          <div>
            <label htmlFor="phone" className="mb-1.5 block text-sm text-muted">
              Phone <span className="text-muted/70">(optional)</span>
            </label>
            <input
              className={inputStyle}
              type="tel"
              id="phone"
              name="phone"
              autoComplete="tel"
              value={formData.phone}
              onChange={handleChange}
              disabled={isSubmitting}
            />
          </div>
        </div>

        <div>
          <label htmlFor="message" className="mb-1.5 block text-sm text-muted">
            Message
          </label>
          <textarea
            className={`${inputStyle} h-32 resize-y`}
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            onBlur={handleBlur}
            required
            aria-invalid={Boolean(errors.message)}
            aria-describedby={errors.message ? 'message-error' : undefined}
            disabled={isSubmitting}
          />
          {errorText('message')}
        </div>

        {status.type !== 'idle' && (
          <p
            className={`rounded-sm border p-4 text-sm ${
              status.type === 'success'
                ? 'border-border bg-surface text-text'
                : 'border-accent/40 bg-surface text-text'
            }`}
            role="status"
          >
            {status.message}
          </p>
        )}

        <button
          type="submit"
          disabled={isSubmitting}
          className="inline-flex h-11 items-center justify-center self-start rounded-sm bg-text px-6 text-base font-semibold text-bg transition-opacity duration-fast hover:opacity-85 disabled:cursor-not-allowed disabled:opacity-50"
        >
          {isSubmitting ? 'Sending…' : 'Send message'}
        </button>
      </form>
    </AnimationContainer>
  );
};

export default ContactMe;
