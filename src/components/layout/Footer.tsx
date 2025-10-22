import { motion } from 'framer-motion';
import { Eye, Phone, Mail, MapPin, Instagram } from 'lucide-react';

const Footer = () => {
  const socialLinks = [
    { Icon: Instagram, href: 'https://www.instagram.com/jaineyecarenagpur?igsh=MWJkejM1MWlnOHoyNA==', label: 'Instagram' },
  ];

  return (
    <footer className="bg-card border-t border-border" role="contentinfo">
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Contact Info */}
          <motion.div
            className="space-y-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <div className="flex items-center space-x-3 mb-6">
              <div className="p-2 bg-gradient-medical rounded-lg">
                <Eye className="h-6 w-6 text-white" />
              </div>
              <h3 className="text-xl font-bold text-foreground">Get in touch</h3>
            </div>
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <Phone className="h-5 w-5 text-primary" />
                <a href="tel:+918825830894" className="text-foreground hover:text-primary underline-offset-2 hover:underline" aria-label="Call Jain Eye Care at plus nine one eight eight two five eight three zero eight nine four">+91 88258 30894</a>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="h-5 w-5 text-primary" />
                <a href="mailto:jaineyecare2022@gmail.com" className="text-foreground hover:text-primary underline-offset-2 hover:underline" aria-label="Email Jain Eye Care at jaineyecare2022 at gmail dot com">jaineyecare2022@gmail.com</a>
              </div>
              <div className="flex items-start space-x-3">
                <MapPin className="h-5 w-5 text-primary mt-0.5" />
                <span className="text-foreground">
                  1st floor, above Medplus, Kachure layout, opposite Tanishq showroom, Beltarodi Road, Manish Nagar
                  Nagpur 440015
                </span>
              </div>
            </div>
          </motion.div>

          {/* Social Media */}
          <motion.div
            className="space-y-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <h4 className="text-lg font-semibold text-foreground">Connect with us</h4>
            <div className="flex flex-wrap gap-4" role="navigation" aria-label="Social media">
              {socialLinks.map(({ Icon, href, label }) => (
                <motion.a
                  key={label}
                  href={href}
                  aria-label={label}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 bg-primary-light hover:bg-primary hover:text-white rounded-xl transition-all duration-300"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Icon className="h-5 w-5" />
                </motion.a>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Copyright */}
        <motion.div
          className="mt-8 pt-6 border-t border-border text-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          <p className="text-muted-foreground text-sm">
            © {new Date().getFullYear()} JainEyeCare. All rights reserved.
          </p>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;