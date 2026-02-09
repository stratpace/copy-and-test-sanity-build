import React from 'react';
import ScrollReveal from '../components/ScrollReveal';

const Terms: React.FC = () => {
  return (
    <div className="w-full max-w-[800px] mx-auto px-6 py-24">
      <ScrollReveal>
        <h1 className="text-4xl font-black text-navy-900 mb-8">Terms of Service</h1>
        <div className="prose prose-sm md:prose-base max-w-none text-muted-text">
          <p className="mb-4">Last Updated: October 24, 2024</p>
          <p className="mb-6">
            Please read these Terms of Service ("Terms", "Terms of Service") carefully before using the Stratpace Advisory website operated by Stratpace Advisory Ltd.
          </p>
          
          <h2 className="text-xl font-bold text-navy-900 mt-8 mb-4">1. Acceptance of Terms</h2>
          <p className="mb-4">
            By accessing or using the Service you agree to be bound by these Terms. If you disagree with any part of the terms then you may not access the Service.
          </p>

          <h2 className="text-xl font-bold text-navy-900 mt-8 mb-4">2. Intellectual Property</h2>
          <p className="mb-4">
            The Service and its original content (excluding Content provided by users), features and functionality are and will remain the exclusive property of Stratpace Advisory and its licensors. The Service is protected by copyright, trademark, and other laws of both the United Kingdom and foreign countries.
          </p>

          <h2 className="text-xl font-bold text-navy-900 mt-8 mb-4">3. Links To Other Web Sites</h2>
          <p className="mb-4">
            Our Service may contain links to third-party web sites or services that are not owned or controlled by Stratpace Advisory. We have no control over, and assume no responsibility for, the content, privacy policies, or practices of any third party web sites or services.
          </p>

          <h2 className="text-xl font-bold text-navy-900 mt-8 mb-4">4. Limitation of Liability</h2>
          <p className="mb-4">
            In no event shall Stratpace Advisory, nor its directors, employees, partners, agents, suppliers, or affiliates, be liable for any indirect, incidental, special, consequential or punitive damages, including without limitation, loss of profits, data, use, goodwill, or other intangible losses, resulting from your access to or use of or inability to access or use the Service.
          </p>
          
          <h2 className="text-xl font-bold text-navy-900 mt-8 mb-4">5. Governing Law</h2>
          <p>
             These Terms shall be governed and construed in accordance with the laws of the United Kingdom, without regard to its conflict of law provisions.
          </p>
        </div>
      </ScrollReveal>
    </div>
  );
};

export default Terms;