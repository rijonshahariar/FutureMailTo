import React from 'react';

const PrivacyPolicy = () => {
  return (
    <div className="min-h-screen bg-gray-900 pt-32">
      <div className="absolute inset-0 bg-grid-pattern opacity-[0.03]"></div>
      
      <div className="relative max-w-4xl mx-auto px-4 py-32">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">
            Privacy Policy
          </h1>
          <p className="text-gray-400 text-xl">
            Your privacy matters to us. Learn how we protect your data.
          </p>
        </div>

        <div className="prose prose-lg max-w-none">
          <div className="bg-gray-800/50 rounded-2xl border border-gray-700/50 p-8 mb-8">
            <h2 className="text-2xl font-bold text-white mb-4">1. Introduction</h2>
            <p className="text-gray-300 leading-relaxed mb-4">
              FutureMailTo ("we," "our," or "us") is committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you use our service that allows you to schedule and send emails to yourself and others in the future.
            </p>
            <p className="text-gray-300 leading-relaxed">
              By using our platform, you consent to the data practices described in this policy.
            </p>
          </div>

          <div className="bg-gray-800/50 rounded-2xl border border-gray-700/50 p-8 mb-8">
            <h2 className="text-2xl font-bold text-white mb-4">2. Information We Collect</h2>
            <p className="text-gray-300 leading-relaxed mb-4">
              <strong>Personal Information:</strong> We collect your email address (which serves as your account identifier and primary recipient), additional recipient addresses, and authentication information through Google sign-in or secure password methods. We never store actual passwords, only securely hashed values.
            </p>
            <p className="text-gray-300 leading-relaxed mb-4">
              <strong>Usage Information:</strong> This includes email content you create, recipient lists, creation and delivery dates, delivery status, system errors, and reflection content you add to delivered messages.
            </p>
            <p className="text-gray-300 leading-relaxed">
              <strong>Local Storage:</strong> Draft emails are temporarily stored in your browser and remain on your device until you choose to save or schedule them.
            </p>
          </div>

          <div className="bg-gray-800/50 rounded-2xl border border-gray-700/50 p-8 mb-8">
            <h2 className="text-2xl font-bold text-white mb-4">3. Legal Basis for Processing</h2>
            <p className="text-gray-300 leading-relaxed mb-4">
              We process your personal data based on contractual necessity to provide our service, your explicit consent for specific purposes, our legitimate interests in improving service security and functionality, and compliance with legal obligations.
            </p>
            <p className="text-gray-300 leading-relaxed">
              You have the right to withdraw consent at any time without affecting the lawfulness of processing based on consent before withdrawal.
            </p>
          </div>

          <div className="bg-gray-800/50 rounded-2xl border border-gray-700/50 p-8 mb-8">
            <h2 className="text-2xl font-bold text-white mb-4">4. How We Use Your Information</h2>
            <p className="text-gray-300 leading-relaxed mb-4">
              We use your information to create and maintain your account, deliver scheduled emails at requested dates, authenticate your identity, troubleshoot delivery issues, improve our service, and communicate about your account.
            </p>
            <p className="text-gray-300 leading-relaxed">
              When delivering to multiple recipients, we identify you as the sender for transparency while keeping other recipients' addresses private.
            </p>
          </div>

          <div className="bg-gray-800/50 rounded-2xl border border-gray-700/50 p-8 mb-8">
            <h2 className="text-2xl font-bold text-white mb-4">5. Data Storage and Security</h2>
            <p className="text-gray-300 leading-relaxed mb-4">
              Your information is stored using Firebase infrastructure with enterprise-grade security measures including HTTPS encryption, database-level access controls, and regular security assessments. Data is processed in secure cloud environments.
            </p>
            <p className="text-gray-300 leading-relaxed">
              For international users, data may be transferred to and processed in regions with appropriate safeguards under standard contractual clauses and approved transfer mechanisms.
            </p>
          </div>

          <div className="bg-gray-800/50 rounded-2xl border border-gray-700/50 p-8 mb-8">
            <h2 className="text-2xl font-bold text-white mb-4">6. Third-Party Services</h2>
            <p className="text-gray-300 leading-relaxed mb-4">
              <strong>Google Authentication:</strong> If you sign in with Google, their privacy policy applies to information provided through their service.
            </p>
            <p className="text-gray-300 leading-relaxed mb-4">
              <strong>Email Delivery:</strong> We use NodeMailer to deliver scheduled emails. Information shared includes your email address, recipient addresses, and message content as necessary for delivery.
            </p>
            <p className="text-gray-300 leading-relaxed">
              <strong>Analytics:</strong> We use Vercel Analytics for privacy-friendly usage metrics that don't track users across websites. All data is anonymized and used solely for service improvement.
            </p>
          </div>

          <div className="bg-gray-800/50 rounded-2xl border border-gray-700/50 p-8 mb-8">
            <h2 className="text-2xl font-bold text-white mb-4">7. Multiple Recipients and Consent</h2>
            <p className="text-gray-300 leading-relaxed mb-4">
              When using multiple recipient features, you are responsible for ensuring you have permission to send scheduled emails to all recipients and that recipients are aware they will receive emails from you.
            </p>
            <p className="text-gray-300 leading-relaxed">
              Recipients will see your email address as the sender for transparency. We are not responsible for disputes between you and recipients regarding scheduled emails.
            </p>
          </div>

          <div className="bg-gray-800/50 rounded-2xl border border-gray-700/50 p-8 mb-8">
            <h2 className="text-2xl font-bold text-white mb-4">8. Data Retention</h2>
            <p className="text-gray-300 leading-relaxed mb-4">
              We retain personal information while your account remains active or as needed to provide services. You can delete scheduled or delivered emails anytime through your dashboard.
            </p>
            <p className="text-gray-300 leading-relaxed">
              When emails are deleted, content is permanently removed while we maintain deletion logs with metadata for administrative and security purposes, excluding actual content.
            </p>
          </div>

          <div className="bg-gray-800/50 rounded-2xl border border-gray-700/50 p-8 mb-8">
            <h2 className="text-2xl font-bold text-white mb-4">9. Your Privacy Rights</h2>
            <p className="text-gray-300 leading-relaxed mb-4">
              You have rights to access, correct, delete, restrict, or object to processing of your personal information. You also have the right to data portability and to withdraw consent where applicable.
            </p>
            <p className="text-gray-300 leading-relaxed">
              <strong>GDPR Rights:</strong> EU/UK users can lodge complaints with supervisory authorities and receive responses to legitimate requests within 30 days. <strong>CCPA Rights:</strong> California residents have rights to know, delete, and non-discrimination.
            </p>
          </div>

          <div className="bg-gray-800/50 rounded-2xl border border-gray-700/50 p-8 mb-8">
            <h2 className="text-2xl font-bold text-white mb-4">10. Data Breach Notification</h2>
            <p className="text-gray-300 leading-relaxed mb-4">
              In the event of a data breach affecting your personal information, we will notify you via email without undue delay and within 72 hours of discovery when possible.
            </p>
            <p className="text-gray-300 leading-relaxed">
              Notifications will include information about the breach nature, affected data, and steps we're taking to address the situation.
            </p>
          </div>

          <div className="bg-gray-800/50 rounded-2xl border border-gray-700/50 p-8 mb-8">
            <h2 className="text-2xl font-bold text-white mb-4">11. Compliance and Children's Privacy</h2>
            <p className="text-gray-300 leading-relaxed mb-4">
              FutureMailTo complies with GDPR, CCPA, and other applicable privacy regulations through privacy-by-design principles, appropriate data processing agreements with service providers, and prompt handling of data subject requests.
            </p>
            <p className="text-gray-300 leading-relaxed">
              Our service is not intended for children under 16. We do not knowingly collect personal information from children under 16.
            </p>
          </div>

          <div className="bg-gray-800/50 rounded-2xl border border-gray-700/50 p-8 mb-8">
            <h2 className="text-2xl font-bold text-white mb-4">12. Cookies and Local Storage</h2>
            <p className="text-gray-300 leading-relaxed mb-4">
              We use essential cookies for authentication and service functionality, and analytics cookies for privacy-friendly usage metrics. You can control cookie preferences through your browser settings.
            </p>
            <p className="text-gray-300 leading-relaxed">
              Local storage saves drafts on your device and is not transmitted to our servers until you choose to save or schedule emails.
            </p>
          </div>

          <div className="bg-gray-800/50 rounded-2xl border border-gray-700/50 p-8 mb-8">
            <h2 className="text-2xl font-bold text-white mb-4">13. Policy Updates and Contact</h2>
            <p className="text-gray-300 leading-relaxed mb-4">
              We may update this Privacy Policy periodically. We will notify you of changes by posting the updated policy and updating the "Last Updated" date. For significant changes, we will notify you directly via email.
            </p>
            <p className="text-gray-300 leading-relaxed">
              For privacy-related inquiries or to exercise your data protection rights, contact us at support@futuremailto.us. This policy is governed by applicable laws while respecting your statutory rights based on your country of residence.
            </p>
          </div>

          <div className="text-center mt-12">
            <p className="text-gray-400">
              Last updated: November 2025 | Questions? Contact us at support@futuremailto.us
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PrivacyPolicy;
