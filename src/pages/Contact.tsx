import { useState, useEffect } from 'react';
import emailjs from '@emailjs/browser';
import { GlobalNav, SmoothScrollReveal } from '../components';

export function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  
  const [showContent, setShowContent] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  useEffect(() => {
    // Show content after 3 seconds
    const timer = setTimeout(() => {
      setShowContent(true);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('idle');

    try {
      // EmailJS configuration - Ready for company email setup
      const result = await emailjs.send(
        'service_XXXXXXX', // Replace with EmailJS service ID
        'template_XXXXXXX', // Replace with EmailJS template ID
        {
          from_name: formData.name,
          from_email: formData.email,
          message: formData.message,
          to_email: 'info@agnicio.com',
        },
        'YOUR_PUBLIC_KEY' // Replace with EmailJS public key
      );

      console.log('Email sent successfully:', result.text);
      setSubmitStatus('success');
      setFormData({ name: '', email: '', message: '' }); // Reset form
    } catch (error) {
      console.error('Email send failed:', error);
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-neutral-background">
      <GlobalNav />
      
      {/* Full Screen Video Background Section */}
      <section className="relative min-h-screen overflow-hidden">
        <video
          className="absolute inset-0 w-full h-full object-cover"
          autoPlay
          muted
          loop
        >
          <source src="/src/assets/contact-us/contact-us.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        
        {/* Overlay for better text readability */}
        <div className="absolute inset-0 bg-black/50"></div>
        
        {/* All Content Over Video */}
        <div className="relative z-10 min-h-screen flex flex-col">
          {/* Header - Staged appearance */}
          <div className="text-center py-24 text-white">
            <h1 className={`text-h1 font-heading font-bold mb-6 transition-all duration-1000 delay-1000 text-white ${showContent ? 'opacity-100 transform translate-y-0' : 'opacity-0 transform translate-y-4'}`}>
              Contact Us
            </h1>
            <p className={`text-body-lg font-body max-w-2xl mx-auto px-4 transition-all duration-1000 delay-1500 ${showContent ? 'opacity-100 transform translate-y-0' : 'opacity-0 transform translate-y-4'}`}>
              Have a question? Fill out the contact form. We'd love to hear from you
            </p>
          </div>
          
          {/* Main Content - Appears after delay */}
          <div className={`flex-1 pb-24 transition-all duration-1000 delay-2000 ${showContent ? 'opacity-100 transform translate-y-0' : 'opacity-0 transform translate-y-8'}`}>
            <div className="container mx-auto px-4">
              <div className="max-w-6xl mx-auto">
                
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
              
              {/* Contact Form */}
              <SmoothScrollReveal animation="fade-right">
                <div className="bg-neutral-surface rounded-2xl p-8 shadow-lg border border-neutral-border">
                  <h2 className="text-h3 font-heading font-bold text-neutral-text-primary mb-8">
                    Send us a message
                  </h2>
                  
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div>
                      <label htmlFor="name" className="block text-body font-body font-semibold text-neutral-text-primary mb-2">
                        Name
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="Enter your name"
                        required
                        className="w-full px-4 py-3 bg-neutral-background border border-neutral-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all duration-300"
                      />
                    </div>
                    
                    <div>
                      <label htmlFor="email" className="block text-body font-body font-semibold text-neutral-text-primary mb-2">
                        Email
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="Enter your email"
                        required
                        className="w-full px-4 py-3 bg-neutral-background border border-neutral-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all duration-300"
                      />
                    </div>
                    
                    <div>
                      <label htmlFor="message" className="block text-body font-body font-semibold text-neutral-text-primary mb-2">
                        Message
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        placeholder="Enter your message"
                        required
                        rows={6}
                        className="w-full px-4 py-3 bg-neutral-background border border-neutral-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all duration-300 resize-vertical"
                      />
                    </div>
                    
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className={`w-full px-8 py-4 text-white font-body font-semibold rounded-lg transition-all duration-300 shadow-lg hover:shadow-xl ${
                        isSubmitting 
                          ? 'bg-gray-400 cursor-not-allowed' 
                          : 'bg-primary hover:bg-primary-hover'
                      }`}
                    >
                      {isSubmitting ? 'Sending...' : 'Send Message'}
                    </button>
                    
                    {/* Status Messages */}
                    {submitStatus === 'success' && (
                      <div className="mt-4 p-4 bg-green-100 border border-green-400 text-green-700 rounded-lg">
                        ✅ Message sent successfully! We'll get back to you soon.
                      </div>
                    )}
                    
                    {submitStatus === 'error' && (
                      <div className="mt-4 p-4 bg-red-100 border border-red-400 text-red-700 rounded-lg">
                        ❌ Failed to send message. Please try again or email us directly at info@agnicio.com
                      </div>
                    )}
                  </form>
                </div>
              </SmoothScrollReveal>

              {/* Contact Information */}
              <SmoothScrollReveal animation="fade-left">
                <div className="space-y-8">
                  
                  {/* Find Us */}
                  <div className="bg-neutral-surface rounded-2xl p-8 shadow-lg border border-neutral-border">
                    <h3 className="text-h4 font-heading font-bold text-neutral-text-primary mb-4 flex items-center gap-3">
                      <svg className="w-6 h-6 text-primary" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
                        <path d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                        <path d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                      </svg>
                      FIND US
                    </h3>
                    <p className="text-body font-body text-neutral-text-secondary leading-relaxed">
                      Millennium Tower, Weena, 3012 CN Rotterdam
                    </p>
                  </div>

                  {/* Email Us */}
                  <div className="bg-neutral-surface rounded-2xl p-8 shadow-lg border border-neutral-border">
                    <h3 className="text-h4 font-heading font-bold text-neutral-text-primary mb-4 flex items-center gap-3">
                      <svg className="w-6 h-6 text-primary" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
                        <path d="M3 8l7.89 3.26a2 2 0 001.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                      </svg>
                      Email Us
                    </h3>
                    <a 
                      href="mailto:info@agnicio.com"
                      className="text-body font-body text-primary hover:text-primary-hover transition-colors duration-300 underline"
                    >
                      info@agnicio.com
                    </a>
                  </div>

                  {/* Map */}
                  <div className="bg-neutral-surface rounded-2xl overflow-hidden shadow-lg border border-neutral-border">
                    <iframe
                      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2460.4457765394907!2d4.469163!3d51.9225002!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47c434a69dca8539%3A0xd4725d79fec8314a!2sMillennium%20Tower%2C%20Weena%20686%2C%203012%20CN%20Rotterdam%2C%20Netherlands!5e0!3m2!1sen!2sus!4v1729629047449!5m2!1sen!2sus"
                      width="100%"
                      height="300"
                      style={{ border: 0 }}
                      allowFullScreen={true}
                      loading="lazy"
                      referrerPolicy="no-referrer-when-downgrade"
                      title="Agnicio Office Location"
                    />
                  </div>

                </div>
              </SmoothScrollReveal>

                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}