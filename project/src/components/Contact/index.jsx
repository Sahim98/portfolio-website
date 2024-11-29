import React from 'react';
import { contactInfo } from '../../data/contact';
import ContactItem from './ContactItem';

export default function Contact() {
  return (
    <section id="contact" className="py-20 bg-slate-50">
      <div className="max-w-5xl mx-auto px-4">
        <h2 className="text-3xl font-bold mb-8 text-slate-900">Get in Touch</h2>
        <div className="grid md:grid-cols-2 gap-8">
          <div className="bg-white rounded-lg shadow-lg border border-slate-100 p-6 hover:shadow-xl transition-shadow">
            <div className="space-y-2">
              <ContactItem
                icon="location"
                label="Location"
                value={contactInfo.location}
              />
              <ContactItem
                icon="email"
                label="Email"
                value={contactInfo.email}
                href={`mailto:${contactInfo.email}`}
              />
              <ContactItem
                icon="phone"
                label="Mobile"
                value={contactInfo.mobile}
                href={`tel:${contactInfo.mobile}`}
              />
            </div>
          </div>
          <div className="bg-white rounded-lg shadow-lg border border-slate-100 p-6 hover:shadow-xl transition-shadow">
            <h3 className="text-xl font-semibold mb-4 text-slate-900">Connect with Me</h3>
            <div className="space-y-2">
              <ContactItem
                icon="linkedin"
                label="LinkedIn"
                value="Connect on LinkedIn"
                href={contactInfo.social.linkedin}
              />
              <ContactItem
                icon="github"
                label="GitHub"
                value="View GitHub Profile"
                href={contactInfo.social.github}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}