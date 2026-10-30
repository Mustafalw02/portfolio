import React, { useState } from 'react';
import { personalInfo, contactConfig } from '../../config/portfolio';
import { SectionHeading } from '../common/SectionHeading';
import { Button } from '../common/Button';
import { useClipboard } from '../../hooks/useClipboard';
import { LinkedinIcon } from '../common/SocialIcons';
import {
  Mail,
  Phone,
  MapPin,
  Copy,
  Check,
  Send,
  ExternalLink,
  AlertCircle,
  CheckCircle2,
} from 'lucide-react';
import './Contact.scss';

interface FormState {
  name: string;
  email: string;
  subject: string;
  message: string;
}

interface FormErrors {
  name?: string;
  email?: string;
  subject?: string;
  message?: string;
}

export const Contact: React.FC = () => {
  const emailClipboard = useClipboard();
  const phoneClipboard = useClipboard();
  const [formData, setFormData] = useState<FormState>({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const [errors, setErrors] = useState<FormErrors>({});
  const [touched, setTouched] = useState<Record<string, boolean>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'fallback' | 'error'>('idle');
  const [statusMessage, setStatusMessage] = useState('');

  const validateField = (name: keyof FormState, value: string): string | undefined => {
    switch (name) {
      case 'name':
        if (!value.trim()) return 'Please enter your name.';
        if (value.trim().length < 2) return 'Name must be at least 2 characters.';
        return undefined;
      case 'email':
        if (!value.trim()) return 'Please enter your email address.';
        if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)) {
          return 'Please enter a valid email address.';
        }
        return undefined;
      case 'subject':
        if (!value.trim()) return 'Please enter a subject.';
        return undefined;
      case 'message':
        if (!value.trim()) return 'Please write a message.';
        if (value.trim().length < 10) return 'Message must be at least 10 characters.';
        return undefined;
      default:
        return undefined;
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));

    if (touched[name]) {
      const error = validateField(name as keyof FormState, value);
      setErrors((prev) => ({ ...prev, [name]: error }));
    }
  };

  const handleBlur = (e: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setTouched((prev) => ({ ...prev, [name]: true }));
    const error = validateField(name as keyof FormState, value);
    setErrors((prev) => ({ ...prev, [name]: error }));
  };

  const validateAll = (): boolean => {
    const newErrors: FormErrors = {};
    (Object.keys(formData) as (keyof FormState)[]).forEach((key) => {
      const error = validateField(key, formData[key]);
      if (error) newErrors[key] = error;
    });

    setErrors(newErrors);
    setTouched({
      name: true,
      email: true,
      subject: true,
      message: true,
    });

    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!validateAll()) {
      setStatusMessage('Please fix the errors in the form before sending.');
      return;
    }

    setIsSubmitting(true);
    setStatusMessage('');

    // If an external submission endpoint is configured:
    if (contactConfig.formEndpoint) {
      try {
        const response = await fetch(contactConfig.formEndpoint, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            Accept: 'application/json',
          },
          body: JSON.stringify(formData),
        });

        if (response.ok) {
          setSubmitStatus('success');
          setStatusMessage('Thank you! Your message has been sent successfully.');
          setFormData({ name: '', email: '', subject: '', message: '' });
          setTouched({});
          setErrors({});
        } else {
          setSubmitStatus('error');
          setStatusMessage('Something went wrong while submitting. Please use direct email instead.');
        }
      } catch (err) {
        console.error('Submission error:', err);
        setSubmitStatus('error');
        setStatusMessage('Network error occurred. Please use direct email fallback below.');
      } finally {
        setIsSubmitting(false);
      }
    } else {
      // When no endpoint is configured: Provide truthful email client fallback
      // Do not fake a successful backend submission.
      setIsSubmitting(false);
      setSubmitStatus('fallback');
      setStatusMessage(
        `No external submission endpoint configured. Opening your mail client with message pre-filled to ${personalInfo.email}.`
      );

      const mailtoUrl = `mailto:${personalInfo.email}?subject=${encodeURIComponent(
        `[Portfolio Contact] ${formData.subject}`
      )}&body=${encodeURIComponent(
        `Hi Mustafa,\n\n${formData.message}\n\nFrom: ${formData.name} (${formData.email})`
      )}`;

      window.location.href = mailtoUrl;
    }
  };

  return (
    <section id="contact" className="section-wrapper contact-section" aria-label="Contact Information">
      <div className="container">
        <SectionHeading
          eyebrow="05 / Let's Connect"
          title="Interested in working together or discussing frontend engineering?"
          description="Whether you have an upcoming senior frontend role, architectural challenge, or design system initiative, feel free to reach out."
        />

        <div className="contact-section__layout">
          {/* Direct Contact Details Card */}
          <div className="contact-section__info">
            <h3 className="contact-section__info-title">Direct Inquiries</h3>
            <p className="contact-section__info-desc">
              I am based in Pune, India and collaborate with teams globally. The fastest way to reach me
              is via email or LinkedIn.
            </p>

            <div className="contact-section__channels">
              {/* Email channel with copy button */}
              <div className="contact-channel">
                <div className="contact-channel__icon">
                  <Mail size={20} aria-hidden="true" />
                </div>
                <div className="contact-channel__content">
                  <span className="contact-channel__label">Email Address</span>
                  <a
                    href={`mailto:${personalInfo.email}`}
                    className="contact-channel__value"
                    aria-label={`Send email to ${personalInfo.email}`}
                  >
                    {personalInfo.email}
                  </a>
                </div>
                <button
                  type="button"
                  className="contact-channel__copy-btn"
                  onClick={() => emailClipboard.copy(personalInfo.email)}
                  aria-label={emailClipboard.hasCopied ? 'Email address copied' : 'Copy email address to clipboard'}
                >
                  {emailClipboard.hasCopied ? (
                    <span className="contact-channel__copied-hint">
                      <Check size={14} aria-hidden="true" />
                      Copied!
                    </span>
                  ) : (
                    <Copy size={16} aria-hidden="true" />
                  )}
                </button>
              </div>

              {/* Phone Channel */}
              {personalInfo.phone && (
                <div className="contact-channel">
                  <div className="contact-channel__icon">
                    <Phone size={20} aria-hidden="true" />
                  </div>
                  <div className="contact-channel__content">
                    <span className="contact-channel__label">Phone / WhatsApp</span>
                    <a
                      href={`tel:${personalInfo.phone.replace(/[^+\d]/g, '')}`}
                      className="contact-channel__value"
                      aria-label={`Call ${personalInfo.phone}`}
                    >
                      {personalInfo.phone}
                    </a>
                  </div>
                  <button
                    type="button"
                    className="contact-channel__copy-btn"
                    onClick={() => phoneClipboard.copy(personalInfo.phone || '')}
                    aria-label={
                      phoneClipboard.hasCopied
                        ? 'Phone number copied'
                        : 'Copy phone number to clipboard'
                    }
                  >
                    {phoneClipboard.hasCopied ? (
                      <span className="contact-channel__copied-hint">
                        <Check size={14} aria-hidden="true" />
                        Copied!
                      </span>
                    ) : (
                      <Copy size={16} aria-hidden="true" />
                    )}
                  </button>
                </div>
              )}

              {/* LinkedIn channel */}
              <div className="contact-channel">
                <div className="contact-channel__icon">
                  <LinkedinIcon size={20} aria-hidden="true" />
                </div>
                <div className="contact-channel__content">
                  <span className="contact-channel__label">LinkedIn Profile</span>
                  <a
                    href={personalInfo.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="contact-channel__value"
                  >
                    linkedin.com/in/mustafa-lightwala
                  </a>
                </div>
                <a
                  href={personalInfo.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="contact-channel__link-btn"
                  aria-label="Open LinkedIn profile in new tab"
                >
                  <ExternalLink size={16} aria-hidden="true" />
                </a>
              </div>

              {/* Location */}
              <div className="contact-channel">
                <div className="contact-channel__icon">
                  <MapPin size={20} aria-hidden="true" />
                </div>
                <div className="contact-channel__content">
                  <span className="contact-channel__label">Location</span>
                  <span className="contact-channel__static-value">{personalInfo.location}</span>
                </div>
              </div>
            </div>

            <div className="contact-section__direct-mailto">
              <a
                href={`mailto:${personalInfo.email}?subject=Hello%20Mustafa`}
                className="contact-section__mailto-btn"
              >
                <Mail size={16} aria-hidden="true" />
                <span>Open in Default Mail Client</span>
              </a>
            </div>
          </div>

          {/* Accessible Contact Form */}
          <div className="contact-section__form-wrapper">
            <h3 className="contact-section__form-title">Send a Message</h3>
            <p className="contact-section__form-subtitle">
              Fill out this form to connect directly. If preferred, use the mailto button on the left.
            </p>

            <form
              className="contact-form"
              onSubmit={handleSubmit}
              noValidate
              aria-label="Contact message form"
            >
              {/* Name Field */}
              <div className="form-group">
                <label htmlFor="contact-name" className="form-label">
                  Your Full Name <span className="form-required" aria-hidden="true">*</span>
                </label>
                <input
                  type="text"
                  id="contact-name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  className={`form-input ${touched.name && errors.name ? 'form-input--invalid' : ''}`}
                  placeholder="e.g. Sarah Jenkins"
                  required
                  aria-required="true"
                  aria-invalid={touched.name && !!errors.name}
                  aria-errormessage={touched.name && errors.name ? 'contact-name-error' : undefined}
                />
                {touched.name && errors.name && (
                  <p id="contact-name-error" className="form-error" role="alert">
                    <AlertCircle size={14} aria-hidden="true" />
                    <span>{errors.name}</span>
                  </p>
                )}
              </div>

              {/* Email Field */}
              <div className="form-group">
                <label htmlFor="contact-email" className="form-label">
                  Email Address <span className="form-required" aria-hidden="true">*</span>
                </label>
                <input
                  type="email"
                  id="contact-email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  className={`form-input ${touched.email && errors.email ? 'form-input--invalid' : ''}`}
                  placeholder="name@company.com"
                  required
                  aria-required="true"
                  aria-invalid={touched.email && !!errors.email}
                  aria-errormessage={touched.email && errors.email ? 'contact-email-error' : undefined}
                />
                {touched.email && errors.email && (
                  <p id="contact-email-error" className="form-error" role="alert">
                    <AlertCircle size={14} aria-hidden="true" />
                    <span>{errors.email}</span>
                  </p>
                )}
              </div>

              {/* Subject Field */}
              <div className="form-group">
                <label htmlFor="contact-subject" className="form-label">
                  Subject <span className="form-required" aria-hidden="true">*</span>
                </label>
                <input
                  type="text"
                  id="contact-subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  className={`form-input ${touched.subject && errors.subject ? 'form-input--invalid' : ''}`}
                  placeholder="Senior Frontend Role / Consultation / Project"
                  required
                  aria-required="true"
                  aria-invalid={touched.subject && !!errors.subject}
                  aria-errormessage={touched.subject && errors.subject ? 'contact-subject-error' : undefined}
                />
                {touched.subject && errors.subject && (
                  <p id="contact-subject-error" className="form-error" role="alert">
                    <AlertCircle size={14} aria-hidden="true" />
                    <span>{errors.subject}</span>
                  </p>
                )}
              </div>

              {/* Message Field */}
              <div className="form-group">
                <label htmlFor="contact-message" className="form-label">
                  Message <span className="form-required" aria-hidden="true">*</span>
                </label>
                <textarea
                  id="contact-message"
                  name="message"
                  rows={4}
                  value={formData.message}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  className={`form-textarea ${touched.message && errors.message ? 'form-input--invalid' : ''}`}
                  placeholder="Briefly describe your team, project, or role scope..."
                  required
                  aria-required="true"
                  aria-invalid={touched.message && !!errors.message}
                  aria-errormessage={touched.message && errors.message ? 'contact-message-error' : undefined}
                />
                {touched.message && errors.message && (
                  <p id="contact-message-error" className="form-error" role="alert">
                    <AlertCircle size={14} aria-hidden="true" />
                    <span>{errors.message}</span>
                  </p>
                )}
              </div>

              {/* Live Status Region */}
              {statusMessage && (
                <div
                  className={`form-status form-status--${submitStatus}`}
                  role="status"
                  aria-live="polite"
                >
                  {submitStatus === 'success' && <CheckCircle2 size={16} aria-hidden="true" />}
                  {submitStatus === 'fallback' && <Mail size={16} aria-hidden="true" />}
                  {submitStatus === 'error' && <AlertCircle size={16} aria-hidden="true" />}
                  <span>{statusMessage}</span>
                </div>
              )}

              {/* Submit Button */}
              <div className="form-actions">
                <Button
                  type="submit"
                  variant="primary"
                  size="md"
                  disabled={isSubmitting}
                  icon={<Send size={16} />}
                >
                  {isSubmitting ? 'Sending...' : 'Send Message'}
                </Button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};
