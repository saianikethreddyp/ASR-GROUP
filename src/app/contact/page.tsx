"use client";

import { motion } from "framer-motion";
import { Mail, MapPin, Phone, Send } from "lucide-react";

export default function ContactPage() {
  return (
    <div className="flex flex-col min-h-screen pt-24 pb-12 bg-background">
      <div className="container mx-auto px-4 md:px-6">
        
        <div className="text-center max-w-2xl mx-auto mb-16">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Contact <span className="text-primary">Us</span></h1>
            <p className="text-gray-500 text-lg">
              Partner with ASR Group to build innovative solutions that address the challenges of tomorrow. We'd love to hear from you.
            </p>
          </motion.div>
        </div>

        <div className="grid lg:grid-cols-3 gap-12">
          {/* Contact Info */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }} 
            animate={{ opacity: 1, x: 0 }} 
            className="lg:col-span-1 space-y-8"
          >
            <div className="bg-white dark:bg-secondary p-8 rounded-3xl shadow-xl border border-gray-100 dark:border-gray-800">
              <h3 className="text-2xl font-bold mb-6 border-b border-gray-100 dark:border-gray-800 pb-4">Corporate Office</h3>
              
              <ul className="space-y-6">
                <li className="flex items-start gap-4">
                  <div className="bg-primary/10 p-3 rounded-full text-primary shrink-0">
                    <MapPin size={24} />
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1">Address</h4>
                    <p className="text-gray-500 text-sm leading-relaxed">
                      Plot No. 8, 9, Krithika Layout Vasantha Cyber View Apartment, Madhapur, Hyderabad, Telangana 500081, India
                    </p>
                  </div>
                </li>
                
                <li className="flex items-start gap-4">
                  <div className="bg-primary/10 p-3 rounded-full text-primary shrink-0">
                    <Phone size={24} />
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1">Direct Lines</h4>
                    <p className="text-gray-500 text-sm">Vamsi (Hardware & Kitchen):<br/><a href="tel:9908606867" className="text-primary font-medium hover:underline">+91 9908606867</a></p>
                    <p className="text-gray-500 text-sm mt-2">Rama (Turnkey Projects):<br/><a href="tel:8008667766" className="text-primary font-medium hover:underline">+91 8008667766</a></p>
                  </div>
                </li>

                <li className="flex items-start gap-4">
                  <div className="bg-primary/10 p-3 rounded-full text-primary shrink-0">
                    <Mail size={24} />
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1">Email</h4>
                    <p className="text-gray-500 text-sm">
                      <a href="mailto:info@asrgroup.com" className="hover:text-primary transition-colors">info@asrgroup.com</a>
                    </p>
                  </div>
                </li>
              </ul>
            </div>

            <div className="bg-gray-50 dark:bg-accent/20 p-8 rounded-3xl border border-gray-100 dark:border-accent">
              <h3 className="font-bold text-xl mb-4">Branch Offices</h3>
              <ul className="space-y-3 text-sm text-gray-500">
                <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-primary" /> Kalyan Nagar, Bangalore</li>
                <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-primary" /> Bandar Road, Vijayawada</li>
                <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-primary" /> Visakhapatnam</li>
              </ul>
            </div>
          </motion.div>

          {/* Form */}
          <motion.div 
            initial={{ opacity: 0, x: 30 }} 
            animate={{ opacity: 1, x: 0 }} 
            className="lg:col-span-2"
          >
            <form className="bg-white dark:bg-secondary p-8 md:p-12 rounded-3xl shadow-xl border border-gray-100 dark:border-gray-800">
              <h3 className="text-2xl font-bold mb-8">Send us a Message</h3>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">First Name</label>
                  <input type="text" className="w-full px-4 py-3 rounded-xl bg-gray-50 dark:bg-background border border-gray-200 dark:border-gray-700 focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all" placeholder="John" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Last Name</label>
                  <input type="text" className="w-full px-4 py-3 rounded-xl bg-gray-50 dark:bg-background border border-gray-200 dark:border-gray-700 focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all" placeholder="Doe" />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Email Address</label>
                  <input type="email" className="w-full px-4 py-3 rounded-xl bg-gray-50 dark:bg-background border border-gray-200 dark:border-gray-700 focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all" placeholder="john@example.com" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Phone Number</label>
                  <input type="tel" className="w-full px-4 py-3 rounded-xl bg-gray-50 dark:bg-background border border-gray-200 dark:border-gray-700 focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all" placeholder="+91 98765 43210" />
                </div>
              </div>

              <div className="mb-8">
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Message</label>
                <textarea rows={5} className="w-full px-4 py-3 rounded-xl bg-gray-50 dark:bg-background border border-gray-200 dark:border-gray-700 focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all resize-none" placeholder="How can we help you?"></textarea>
              </div>

              <button type="button" className="bg-primary hover:bg-primary/90 text-white font-medium py-4 px-8 rounded-xl w-full sm:w-auto flex items-center justify-center gap-2 transition-all hover:scale-105 shadow-lg shadow-primary/30">
                Send Message <Send size={18} />
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
