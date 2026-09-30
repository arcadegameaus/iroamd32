import { useState } from 'react';
import { Phone, Mail, MapPin, Send } from 'lucide-react';
import { contactInfo } from '@/data/projects';
import Breadcrumb from '@/components/Breadcrumb';

interface ContactPageProps {
  onNavigate: (path: string) => void;
}

export default function ContactPage({ onNavigate }: ContactPageProps) {
  const [form, setForm] = useState({ name: '', phone: '', email: '', message: '' });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setForm({ name: '', phone: '', email: '', message: '' });
    }, 4000);
  };

  return (
    <div className="bg-white min-h-screen">
      <section className="relative h-[40vh] min-h-[300px] overflow-hidden">
        <img
          src="/images/projects/project-9.jpg"
          alt="Contact"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 to-black/40" />
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center text-white px-4">
            <h1 className="text-4xl md:text-6xl font-light tracking-tight mb-4">Contact</h1>
          </div>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8">
        <Breadcrumb items={[{ label: 'Home', path: '/' }, { label: 'Contact' }]} onNavigate={onNavigate} />
      </div>

      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Info */}
            <div>
              <h2 className="text-3xl font-light text-stone-800 mb-8">Get in Touch</h2>

              <div className="space-y-6">
                <a
                  href={`tel:${contactInfo.phone}`}
                  className="flex items-center gap-4 p-6 bg-stone-50 rounded-sm hover:bg-amber-50 transition-colors duration-300 group"
                >
                  <div className="w-12 h-12 bg-amber-500 rounded-full flex items-center justify-center shrink-0">
                    <Phone className="text-white" size={20} />
                  </div>
                  <div>
                    <p className="text-stone-400 text-xs uppercase tracking-wider mb-1">Call Us</p>
                    <p className="text-stone-800 font-medium group-hover:text-amber-600 transition-colors">
                      {contactInfo.phone}
                    </p>
                  </div>
                </a>

                <a
                  href={`mailto:${contactInfo.email}`}
                  className="flex items-center gap-4 p-6 bg-stone-50 rounded-sm hover:bg-amber-50 transition-colors duration-300 group"
                >
                  <div className="w-12 h-12 bg-amber-500 rounded-full flex items-center justify-center shrink-0">
                    <Mail className="text-white" size={20} />
                  </div>
                  <div>
                    <p className="text-stone-400 text-xs uppercase tracking-wider mb-1">Email Us</p>
                    <p className="text-stone-800 font-medium group-hover:text-amber-600 transition-colors break-all">
                      {contactInfo.email}
                    </p>
                  </div>
                </a>

                <div className="flex items-center gap-4 p-6 bg-stone-50 rounded-sm">
                  <div className="w-12 h-12 bg-amber-500 rounded-full flex items-center justify-center shrink-0">
                    <MapPin className="text-white" size={20} />
                  </div>
                  <div>
                    <p className="text-stone-400 text-xs uppercase tracking-wider mb-1">Address</p>
                    <p className="text-stone-800 font-medium">
                      {contactInfo.address}
                    </p>
                  </div>
                </div>
              </div>

              {/* Map embed */}
              <div className="mt-8 rounded-sm overflow-hidden shadow-md">
                <iframe
                  title="Location Map"
                  src="https://www.google.com/maps?q=238+Darebin+Drive+Lalor+VIC+3075+Australia&output=embed"
                  width="100%"
                  height="300"
                  style={{ border: 0 }}
                  loading="lazy"
                />
              </div>
            </div>

            {/* Contact Form */}
            <div>
              <div className="bg-stone-50 p-8 rounded-sm shadow-md">
                <h2 className="text-2xl font-light text-stone-800 mb-6">Send Us a Message</h2>

                {submitted && (
                  <div className="mb-6 p-4 bg-green-50 border-l-4 border-green-500 rounded-sm">
                    <p className="text-green-700 text-sm">
                      Thank you for your message. We'll get back to you shortly.
                    </p>
                  </div>
                )}

                <form onSubmit={handleSubmit} className="space-y-5">
                  <div>
                    <label className="block text-stone-600 text-sm mb-2">Name</label>
                    <input
                      type="text"
                      required
                      value={form.name}
                      onChange={(e) => setForm({ ...form, name: e.target.value })}
                      className="w-full px-4 py-3 bg-white border border-stone-200 rounded-sm focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-transparent transition-all"
                      placeholder="Your name"
                    />
                  </div>
                  <div>
                    <label className="block text-stone-600 text-sm mb-2">Phone</label>
                    <input
                      type="tel"
                      value={form.phone}
                      onChange={(e) => setForm({ ...form, phone: e.target.value })}
                      className="w-full px-4 py-3 bg-white border border-stone-200 rounded-sm focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-transparent transition-all"
                      placeholder="Your phone number"
                    />
                  </div>
                  <div>
                    <label className="block text-stone-600 text-sm mb-2">Email</label>
                    <input
                      type="email"
                      required
                      value={form.email}
                      onChange={(e) => setForm({ ...form, email: e.target.value })}
                      className="w-full px-4 py-3 bg-white border border-stone-200 rounded-sm focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-transparent transition-all"
                      placeholder="Your email address"
                    />
                  </div>
                  <div>
                    <label className="block text-stone-600 text-sm mb-2">Message</label>
                    <textarea
                      required
                      rows={5}
                      value={form.message}
                      onChange={(e) => setForm({ ...form, message: e.target.value })}
                      className="w-full px-4 py-3 bg-white border border-stone-200 rounded-sm focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-transparent transition-all resize-none"
                      placeholder="Tell us about your project..."
                    />
                  </div>
                  <button
                    type="submit"
                    className="w-full inline-flex items-center justify-center gap-2 bg-amber-500 hover:bg-amber-600 text-white px-6 py-4 rounded-sm font-medium transition-all duration-300 group"
                  >
                    Send
                    <Send size={18} className="group-hover:translate-x-1 transition-transform" />
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
