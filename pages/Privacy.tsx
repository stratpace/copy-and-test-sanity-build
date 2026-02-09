import React from 'react';
import ScrollReveal from '../components/ScrollReveal';

const Privacy: React.FC = () => {
  return (
    <div className="w-full max-w-[800px] mx-auto px-6 py-24">
      <ScrollReveal>
        <h1 className="text-4xl font-black text-navy-900 mb-8">Privacy Policy</h1>
        <div className="prose prose-sm md:prose-base max-w-none text-muted-text">
          <p className="mb-4">Last Updated: October 24, 2024</p>
          <p className="mb-6">
            Stratpace Advisory ("we", "our", or "us") is committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website.
          </p>
          
          <h2 className="text-xl font-bold text-navy-900 mt-8 mb-4">1. Information We Collect</h2>
          <p className="mb-4">
            We collect information that identifies, relates to, describes, references, is capable of being associated with, or could reasonably be linked, directly or indirectly, with a particular consumer or device.
          </p>
          <ul className="list-disc pl-6 mb-4 space-y-2">
            <li><strong>Identifiers:</strong> Real name, email address, IP address.</li>
            <li><strong>Professional Data:</strong> Company name, job title, industry sector.</li>
            <li><strong>Usage Data:</strong> Information on how you interact with our reports and advisory portal.</li>
          </ul>

          <h2 className="text-xl font-bold text-navy-900 mt-8 mb-4">2. How We Use Your Information</h2>
          <p className="mb-4">
            We use the collected information for various purposes:
          </p>
          <ul className="list-disc pl-6 mb-4 space-y-2">
            <li>To provide and maintain our Service.</li>
            <li>To notify you about changes to our Service.</li>
            <li>To provide customer support.</li>
            <li>To gather analysis or valuable information so that we can improve our Service.</li>
          </ul>

          <h2 className="text-xl font-bold text-navy-900 mt-8 mb-4">3. Data Security</h2>
          <p className="mb-4">
            The security of your data is important to us, but remember that no method of transmission over the Internet, or method of electronic storage is 100% secure. While we strive to use commercially acceptable means to protect your Personal Data, we cannot guarantee its absolute security.
          </p>
          
          <h2 className="text-xl font-bold text-navy-900 mt-8 mb-4">4. Contact Us</h2>
          <p>
            If you have any questions about this Privacy Policy, please contact us at <a href="mailto:legal@stratpace.com" className="text-gold-600 underline">legal@stratpace.com</a>.
          </p>
        </div>
      </ScrollReveal>
    </div>
  );
};

export default Privacy;