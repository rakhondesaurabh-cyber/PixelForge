import { motion } from 'framer-motion';
import { Mail, MessageSquare, Send } from 'lucide-react';

export default function Contact() {
  return (
    <section id="contact" className="py-24 bg-gray-50 border-t border-adobe-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-4xl font-bold text-adobe-text mb-6">Get in Touch</h2>
          <p className="text-lg text-adobe-text-muted">
            Have questions about PixelForge or need support? We're here to help you create your next masterpiece.
          </p>
        </div>

        <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Contact Info */}
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="space-y-8"
          >
            <div>
              <h3 className="text-2xl font-bold text-adobe-text mb-6">Contact Information</h3>
              <p className="text-adobe-text-muted mb-8 leading-relaxed">
                Whether you're a professional photographer or just starting out, our support team is available around the clock to assist you.
              </p>
            </div>
            
            <div className="space-y-6">
              <div className="flex items-center gap-4 text-adobe-text">
                <div className="w-12 h-12 bg-white rounded-full shadow-sm border border-adobe-border flex items-center justify-center text-adobe-blue">
                  <Mail size={20} />
                </div>
                <div>
                  <h4 className="font-semibold">Email Us</h4>
                  <a href="mailto:support@pixelforge.com" className="text-adobe-text-muted hover:text-adobe-blue transition-colors">support@pixelforge.com</a>
                </div>
              </div>
              
              <div className="flex items-center gap-4 text-adobe-text">
                <div className="w-12 h-12 bg-white rounded-full shadow-sm border border-adobe-border flex items-center justify-center text-adobe-blue">
                  <MessageSquare size={20} />
                </div>
                <div>
                  <h4 className="font-semibold">Community Support</h4>
                  <a href="#" className="text-adobe-text-muted hover:text-adobe-blue transition-colors">Join our Discord server</a>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="bg-white p-8 rounded-2xl shadow-lg border border-adobe-border"
          >
            <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <label htmlFor="firstName" className="text-sm font-medium text-adobe-text">First Name</label>
                  <input type="text" id="firstName" className="w-full px-4 py-3 rounded-lg border border-adobe-border bg-gray-50 focus:bg-white focus:ring-2 focus:ring-adobe-blue/20 focus:border-adobe-blue transition-all outline-none" placeholder="Jane" />
                </div>
                <div className="space-y-2">
                  <label htmlFor="lastName" className="text-sm font-medium text-adobe-text">Last Name</label>
                  <input type="text" id="lastName" className="w-full px-4 py-3 rounded-lg border border-adobe-border bg-gray-50 focus:bg-white focus:ring-2 focus:ring-adobe-blue/20 focus:border-adobe-blue transition-all outline-none" placeholder="Doe" />
                </div>
              </div>
              
              <div className="space-y-2">
                <label htmlFor="email" className="text-sm font-medium text-adobe-text">Email Address</label>
                <input type="email" id="email" className="w-full px-4 py-3 rounded-lg border border-adobe-border bg-gray-50 focus:bg-white focus:ring-2 focus:ring-adobe-blue/20 focus:border-adobe-blue transition-all outline-none" placeholder="jane@example.com" />
              </div>
              
              <div className="space-y-2">
                <label htmlFor="message" className="text-sm font-medium text-adobe-text">Message</label>
                <textarea id="message" rows={4} className="w-full px-4 py-3 rounded-lg border border-adobe-border bg-gray-50 focus:bg-white focus:ring-2 focus:ring-adobe-blue/20 focus:border-adobe-blue transition-all outline-none resize-none" placeholder="How can we help you?"></textarea>
              </div>

              <button type="submit" className="w-full bg-adobe-blue hover:bg-adobe-blue-hover text-white px-6 py-4 rounded-lg font-medium transition-colors flex items-center justify-center gap-2">
                Send Message <Send size={18} />
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
