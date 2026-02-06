import { Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';

const PrivacyPolicy = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-black">
      <div className="max-w-4xl mx-auto px-6 py-16">
        <Link to="/" className="inline-flex items-center text-bv-cta hover:text-pink-400 transition-colors mb-8 group">
          <ArrowLeft className="w-5 h-5 mr-2 group-hover:-translate-x-1 transition-transform" />
          Back to Home
        </Link>

        <h1 className="font-display text-5xl md:text-6xl font-bold mb-4 text-white">
          Privacy Policy
        </h1>
        <p className="text-gray-400 mb-12">Last Updated: February 6, 2026</p>

        <div className="space-y-8 text-gray-300">
          <section>
            <h2 className="font-display text-2xl font-bold mb-4 text-white">Introduction</h2>
            <p className="leading-relaxed text-gray-300">
              Block Valley (LABS) ("we," "our," or "us") is committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website or use our services.
            </p>
          </section>

          <section>
            <h2 className="font-display text-2xl font-bold mb-4 text-white">Information We Collect</h2>
            <div className="space-y-4">
              <div>
                <h3 className="text-xl font-semibold mb-2 text-white">Personal Information</h3>
                <p className="leading-relaxed text-gray-300">
                  We may collect personal information that you voluntarily provide to us when you:
                </p>
                <ul className="list-disc list-inside ml-4 mt-2 space-y-1 text-gray-300">
                  <li>Contact us via email or contact forms</li>
                  <li>Subscribe to our newsletter or ValleyCast</li>
                  <li>Participate in our community events</li>
                  <li>Apply for collaboration or partnership opportunities</li>
                </ul>
              </div>

              <div>
                <h3 className="text-xl font-semibold mb-2 text-white">Automatically Collected Information</h3>
                <p className="leading-relaxed text-gray-300">
                  When you visit our website, we may automatically collect certain information about your device, including:
                </p>
                <ul className="list-disc list-inside ml-4 mt-2 space-y-1 text-gray-300">
                  <li>Browser type and version</li>
                  <li>Operating system</li>
                  <li>IP address</li>
                  <li>Pages visited and time spent on pages</li>
                  <li>Referring website</li>
                </ul>
              </div>
            </div>
          </section>

          <section>
            <h2 className="font-display text-2xl font-bold mb-4 text-white">How We Use Your Information</h2>
            <p className="leading-relaxed mb-2 text-gray-300">We use the information we collect to:</p>
            <ul className="list-disc list-inside ml-4 space-y-1 text-gray-300">
              <li>Respond to your inquiries and provide customer support</li>
              <li>Send you newsletters, updates, and promotional materials (with your consent)</li>
              <li>Improve our website and services</li>
              <li>Analyze website usage and trends</li>
              <li>Protect against fraudulent or illegal activity</li>
              <li>Comply with legal obligations</li>
            </ul>
          </section>

          <section>
            <h2 className="font-display text-2xl font-bold mb-4 text-white">Sharing Your Information</h2>
            <p className="leading-relaxed text-gray-300">
              We do not sell, trade, or rent your personal information to third parties. We may share your information with:
            </p>
            <ul className="list-disc list-inside ml-4 mt-2 space-y-1 text-gray-300">
              <li><strong className="text-white">Service Providers:</strong> Third-party vendors who perform services on our behalf (e.g., email service providers, analytics providers)</li>
              <li><strong className="text-white">Business Transfers:</strong> In connection with any merger, sale of company assets, financing, or acquisition of all or a portion of our business</li>
              <li><strong className="text-white">Legal Requirements:</strong> When required by law or to protect our rights, property, or safety</li>
            </ul>
          </section>

          <section>
            <h2 className="font-display text-2xl font-bold mb-4 text-white">Cookies and Tracking Technologies</h2>
            <p className="leading-relaxed text-gray-300">
              We may use cookies and similar tracking technologies to track activity on our website and hold certain information. You can instruct your browser to refuse all cookies or to indicate when a cookie is being sent. However, if you do not accept cookies, you may not be able to use some portions of our website.
            </p>
          </section>

          <section>
            <h2 className="font-display text-2xl font-bold mb-4 text-white">Third-Party Links</h2>
            <p className="leading-relaxed text-gray-300">
              Our website may contain links to third-party websites and services. We are not responsible for the privacy practices or content of these third-party sites. We encourage you to read the privacy policies of any third-party sites you visit.
            </p>
          </section>

          <section>
            <h2 className="font-display text-2xl font-bold mb-4 text-white">Data Security</h2>
            <p className="leading-relaxed text-gray-300">
              We implement appropriate technical and organizational security measures to protect your personal information. However, no method of transmission over the Internet or electronic storage is 100% secure, and we cannot guarantee absolute security.
            </p>
          </section>

          <section>
            <h2 className="font-display text-2xl font-bold mb-4 text-white">Your Rights</h2>
            <p className="leading-relaxed mb-2 text-gray-300">Depending on your location, you may have certain rights regarding your personal information, including:</p>
            <ul className="list-disc list-inside ml-4 space-y-1 text-gray-300">
              <li>The right to access and receive a copy of your personal information</li>
              <li>The right to correct inaccurate or incomplete information</li>
              <li>The right to delete your personal information</li>
              <li>The right to restrict or object to our processing of your information</li>
              <li>The right to data portability</li>
              <li>The right to withdraw consent at any time</li>
            </ul>
          </section>

          <section>
            <h2 className="font-display text-2xl font-bold mb-4 text-white">Children's Privacy</h2>
            <p className="leading-relaxed text-gray-300">
              Our services are not directed to individuals under the age of 18. We do not knowingly collect personal information from children. If you are a parent or guardian and believe your child has provided us with personal information, please contact us.
            </p>
          </section>

          <section>
            <h2 className="font-display text-2xl font-bold mb-4 text-white">International Data Transfers</h2>
            <p className="leading-relaxed text-gray-300">
              Your information may be transferred to and processed in countries other than your country of residence. These countries may have different data protection laws. By using our services, you consent to the transfer of your information to these countries.
            </p>
          </section>

          <section>
            <h2 className="font-display text-2xl font-bold mb-4 text-white">Changes to This Privacy Policy</h2>
            <p className="leading-relaxed text-gray-300">
              We may update this Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page and updating the "Last Updated" date. You are advised to review this Privacy Policy periodically for any changes.
            </p>
          </section>

          <section>
            <h2 className="font-display text-2xl font-bold mb-4 text-white">Contact Us</h2>
            <p className="leading-relaxed text-gray-300">
              If you have any questions about this Privacy Policy or our privacy practices, please contact us at:
            </p>
            <div className="mt-4 p-6 bg-gray-800/50 rounded-lg border border-gray-700">
              <p className="font-semibold text-white">Block Valley (LABS)</p>
              <p className="mt-2 text-gray-300">Email: <a href="mailto:admin@blockvalley.io" className="text-bv-cta hover:text-pink-400 transition-colors">admin@blockvalley.io</a></p>
              <p className="mt-1 text-gray-300">Twitter/X: <a href="https://x.com/blockvalleylabs" target="_blank" rel="noopener noreferrer" className="text-bv-cta hover:text-pink-400 transition-colors">@blockvalleylabs</a></p>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};

export default PrivacyPolicy;
