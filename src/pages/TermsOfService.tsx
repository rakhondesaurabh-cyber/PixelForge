export default function TermsOfService() {
  return (
    <div className="pt-32 pb-24 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-adobe-text">
      <h1 className="text-4xl font-bold mb-8">Terms of Service</h1>
      <p className="text-adobe-text-muted mb-8">Last updated: {new Date().toLocaleDateString()}</p>
      
      <div className="space-y-8 text-lg leading-relaxed">
        <section>
          <h2 className="text-2xl font-bold mb-4">1. Acceptance of Terms</h2>
          <p>
            By downloading, installing, or using the PixelForge application or website, you agree to be bound by these Terms of Service. If you do not agree to these terms, do not use the software.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold mb-4">2. License to Use</h2>
          <p>
            PixelForge grants you a personal, non-exclusive, non-transferable, revocable license to use the software for personal or commercial photo editing purposes. You may not reverse engineer, decompile, or redistribute the software without our explicit written permission.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold mb-4">3. User Content</h2>
          <p>
            You retain all ownership rights to the images, graphics, and projects you create using PixelForge. We claim no ownership over your creations. You are solely responsible for ensuring you have the legal right to use and edit any source materials.
          </p>
        </section>
        
        <section>
          <h2 className="text-2xl font-bold mb-4">4. Disclaimer of Warranty</h2>
          <p>
            The software is provided "AS IS", without warranty of any kind, express or implied. We do not warrant that the software will be error-free or that it will meet your specific requirements.
          </p>
        </section>
      </div>
    </div>
  );
}
