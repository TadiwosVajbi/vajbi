'use client';

import { useState, useEffect } from 'react';

interface Dictionary {
  firstName: string;
  lastName: string;
  emailLabel: string;
  howCanWeHelp: string;
  sendMessage: string;
  sending: string;
}

interface ContactFormProps {
  lang: string;
}

export default function ContactForm({ lang }: ContactFormProps) {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [dict, setDict] = useState<Dictionary | null>(null);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    const loadDictionary = async () => {
      const dictModule = await import(`../app/dictionaries/${lang}.json`);
      setDict(dictModule.default);
      setMounted(true);
    };

    loadDictionary();
  }, [lang]);

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

  if (!mounted || !dict) {
    return (
      <div className="space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="animate-pulse">
            <div className="h-4 bg-gray-200 rounded mb-2"></div>
            <div className="h-12 bg-gray-200 rounded"></div>
          </div>
          <div className="animate-pulse">
            <div className="h-4 bg-gray-200 rounded mb-2"></div>
            <div className="h-12 bg-gray-200 rounded"></div>
          </div>
        </div>
        <div className="animate-pulse">
          <div className="h-4 bg-gray-200 rounded mb-2"></div>
          <div className="h-12 bg-gray-200 rounded"></div>
        </div>
        <div className="animate-pulse">
          <div className="h-4 bg-gray-200 rounded mb-2"></div>
          <div className="h-32 bg-gray-200 rounded"></div>
        </div>
        <div className="animate-pulse">
          <div className="h-12 bg-gray-200 rounded w-32"></div>
        </div>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <label htmlFor="firstName" className="block text-lg font-medium text-gray-900 mb-2">
            {dict.firstName}
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
            {dict.lastName}
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
          {dict.emailLabel}
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
          {dict.howCanWeHelp}
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
          {isSubmitting ? dict.sending : dict.sendMessage}
        </button>
      </div>
    </form>
  );
}
