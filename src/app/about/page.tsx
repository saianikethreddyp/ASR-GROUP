"use client";

import { motion } from "framer-motion";
import { CheckCircle2, Target, Lightbulb, Shield } from "lucide-react";
import Image from "next/image";

export default function AboutPage() {
  return (
    <div className="flex flex-col min-h-screen pt-24 pb-12">
      {/* Header */}
      <section className="bg-secondary text-white py-20">
        <div className="container mx-auto px-4 md:px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl"
          >
            <h1 className="text-4xl md:text-6xl font-bold mb-6">About <span className="text-primary">ASR Group</span></h1>
            <p className="text-xl text-gray-300 font-light leading-relaxed">
              Transforming the landscape with innovation, quality, and sustainable growth since our inception.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Message from MD */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex flex-col lg:flex-row gap-16 items-center">
            <motion.div 
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="lg:w-1/2 space-y-6"
            >
              <h2 className="text-3xl md:text-4xl font-bold">Message from the <span className="text-primary">Managing Director</span></h2>
              <div className="space-y-4 text-gray-600 dark:text-gray-400 text-lg">
                <p>
                  The past few years have been a period of both challenge and transformation for ASR Group. During this time, we have strengthened our commitment to innovation, quality, and sustainable growth.
                </p>
                <p>
                  Today, ASR Group has evolved into a comprehensive organization offering integrated solutions across interiors, construction, architectural elevations, and uPVC window systems, establishing itself as a trusted name and a landmark brand in its field.
                </p>
                <p>
                  While we continue to address short-term challenges, our focus remains firmly on our long-term vision of delivering superior and sustainable solutions for the nation.
                </p>
              </div>
              <div className="pt-4 border-t border-gray-200 dark:border-gray-800">
                <p className="font-bold text-xl text-secondary dark:text-white">A. S. Ram Raju</p>
                <p className="text-primary font-medium">Managing Director, ASR Group</p>
              </div>
            </motion.div>
            <motion.div 
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="lg:w-1/2"
            >
              <div className="aspect-square bg-gray-200 rounded-3xl overflow-hidden relative shadow-2xl">
                 <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1497215842964-222b430dc094?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80')] bg-cover bg-center" />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Vision & Mission */}
      <section className="py-20 bg-gray-50 dark:bg-secondary/20">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid md:grid-cols-2 gap-12">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-white dark:bg-accent/30 p-10 rounded-3xl shadow-xl border border-gray-100 dark:border-accent"
            >
              <div className="bg-primary/10 w-16 h-16 flex items-center justify-center rounded-2xl mb-8">
                <Lightbulb size={32} className="text-primary" />
              </div>
              <h3 className="text-3xl font-bold mb-6">Our Vision</h3>
              <p className="text-gray-600 dark:text-gray-400 text-lg leading-relaxed">
                ASR Homes LLP envisions becoming a nationally respected, environmentally responsible leader that champions excellence, innovation, and creative development. Through sustainable practices and thoughtfully crafted spaces, the company seeks to enhance lifestyles and inspire everyone connected with its projects.
              </p>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="bg-white dark:bg-accent/30 p-10 rounded-3xl shadow-xl border border-gray-100 dark:border-accent"
            >
              <div className="bg-primary/10 w-16 h-16 flex items-center justify-center rounded-2xl mb-8">
                <Target size={32} className="text-primary" />
              </div>
              <h3 className="text-3xl font-bold mb-6">Our Mission</h3>
              <p className="text-gray-600 dark:text-gray-400 text-lg leading-relaxed">
                Driven by a culture of entrepreneurship, innovation, and continuous improvement. By embracing advanced technologies and progressive practices, the company strives to exceed customer expectations while strengthening its leadership across every segment of its business.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Pillars */}
      <section className="py-20 bg-secondary text-white">
        <div className="container mx-auto px-4 md:px-6 text-center">
          <h2 className="text-3xl md:text-5xl font-bold mb-16">The Three Pillars of Our <span className="text-primary">Sustainable Growth</span></h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { title: "People", desc: "The strength of ASR Group lies in the diversity, expertise, and commitment of our employees." },
              { title: "Plant", desc: "Committed to environmentally responsible and sustainable practices in all our operations." },
              { title: "Performance", desc: "Continuously exceeding expectations and achieving higher standards of operational excellence." }
            ].map((pillar, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.2 }}
                className="p-8 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm"
              >
                <div className="text-4xl font-bold text-primary/80 mb-4">0{idx + 1}</div>
                <h3 className="text-2xl font-bold mb-4">{pillar.title}</h3>
                <p className="text-gray-300">{pillar.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
