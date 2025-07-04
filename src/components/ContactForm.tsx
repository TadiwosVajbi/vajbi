'use client';

import { useState } from 'react';

export default function ContactForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    const formData = new FormData(e.currentTarget);
    
    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        body: formData,
      });
      
      if (response.ok) {
        alert('Message sent successfully! We will get back to you soon.');
        (e.target as HTMLFormElement).reset();
      } else {
        throw new Error('Failed to send message');
      }
    } catch (error) {
      console.error('Error submitting form:', error);
      alert('Failed to send message. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <label htmlFor="firstName" className="block text-lg font-medium text-gray-900 mb-2">
            First name
          </label>
          <input
            type="text"
            id="firstName"
            name="firstName"
            className="w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-[#3982a3] focus:border-[#3982a3] text-lg"
            placeholder=""
          />
        </div>
        <div>
          <label htmlFor="lastName" className="block text-lg font-medium text-gray-900 mb-2">
            Last name
          </label>
          <input
            type="text"
            id="lastName"
            name="lastName"
            className="w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-[#3982a3] focus:border-[#3982a3] text-lg"
            placeholder=""
          />
        </div>
      </div>

      <div>
        <label htmlFor="email" className="block text-lg font-medium text-gray-900 mb-2">
          Email *
        </label>
        <input
          type="email"
          id="email"
          name="email"
          required
          className="w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-[#3982a3] focus:border-[#3982a3] text-lg"
          placeholder=""
        />
      </div>

      <div>
        <label htmlFor="message" className="block text-lg font-medium text-gray-900 mb-2">
          How can we help? *
        </label>
        <textarea
          id="message"
          name="message"
          rows={6}
          required
          className="w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-[#3982a3] focus:border-[#3982a3] text-lg resize-none"
          placeholder=""
        ></textarea>
      </div>

      <div className="pt-4">
        <button
          type="submit"
          disabled={isSubmitting}
          className="bg-black text-white px-8 py-4 rounded-full font-medium hover:bg-gray-800 transition-colors text-lg disabled:opacity-50 disabled:cursor-not-allowed"
        >
          {isSubmitting ? 'Sending...' : 'Send message'}
        </button>
      </div>
    </form>
  );
}
