export default function PrivacyPolicy() {
  return (
    <div className="pt-32 pb-24 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-adobe-text">
      <h1 className="text-4xl font-bold mb-8">Privacy Policy</h1>
      <p className="text-adobe-text-muted mb-8">Last updated: {new Date().toLocaleDateString()}</p>
      
      <div className="space-y-8 text-lg leading-relaxed">
        <section>
          <h2 className="text-2xl font-bold mb-4">1. Introduction</h2>
          <p>
            Welcome to PixelForge. We respect your privacy and are committed to protecting your personal data. 
            This privacy policy will inform you as to how we look after your personal data when you visit our website or use our application.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold mb-4">2. Data We Collect</h2>
          <p>
            PixelForge is designed to be a local-first application. We do not upload your photos, projects, or layers to any cloud servers without your explicit consent. 
            We may collect basic telemetry data (such as app crash logs and feature usage statistics) to help us improve the software, provided you opt-in.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold mb-4">3. How We Use Your Data</h2>
          <p>
            Any data we do collect is strictly used for improving the PixelForge application. We do not sell your personal data to third parties, nor do we use it for targeted advertising.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold mb-4">4. Contact Us</h2>
          <p>
            If you have any questions about this privacy policy or our privacy practices, please contact us at support@pixelforge.com.
          </p>
        </section>
      </div>
    </div>
  );
}
