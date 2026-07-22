"use client";

import { motion } from "framer-motion";
import { ArrowRight, Building2, HardHat, Home, Briefcase, Ruler, Factory } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

export default function HomePage() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden bg-secondary">
        {/* We would use the generated image here once we have the path, for now using a placeholder div */}
        <div className="absolute inset-0 z-0 opacity-40">
           <div className="w-full h-full bg-[url('https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?ixlib=rb-4.0.3&auto=format&fit=crop&w=2075&q=80')] bg-cover bg-center" />
           <div className="absolute inset-0 bg-gradient-to-r from-secondary via-secondary/80 to-transparent" />
        </div>
        
        <div className="container relative z-10 px-4 md:px-6 mt-16">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="max-w-3xl space-y-6"
          >
            <div className="inline-flex items-center rounded-full border border-primary/30 bg-primary/10 px-3 py-1 text-sm font-medium text-primary backdrop-blur-sm">
              <span className="flex h-2 w-2 rounded-full bg-primary mr-2"></span>
              Inspiring the Future
            </div>
            
            <h1 className="text-5xl md:text-7xl font-bold tracking-tight text-white">
              Where Style <br />
              <span className="text-primary">Meets Comfort</span>
            </h1>
            
            <p className="text-xl md:text-2xl text-gray-300 max-w-2xl font-light">
              EVERY ROOM TELLS A STORY.
            </p>
            
            <p className="text-gray-400 max-w-xl text-lg pt-4 leading-relaxed">
              ASR Group is a nationally respected leader championing excellence, innovation, and creative development through sustainable practices and thoughtfully crafted spaces.
            </p>

            <div className="flex flex-wrap gap-4 pt-8">
              <Link 
                href="/projects"
                className="bg-primary hover:bg-primary/90 text-white px-8 py-4 rounded-md font-medium transition-colors flex items-center gap-2 group"
              >
                Explore Projects
                <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link 
                href="/about"
                className="bg-white/10 hover:bg-white/20 text-white backdrop-blur-md border border-white/20 px-8 py-4 rounded-md font-medium transition-colors"
              >
                Learn More
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Divisions Section */}
      <section className="py-24 bg-background relative z-20 -mt-10 rounded-t-[40px] shadow-2xl">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold mb-4">Our <span className="text-primary">Divisions</span></h2>
            <p className="text-gray-500 max-w-2xl mx-auto">
              Delivering comprehensive turnkey solutions across interiors, construction, and real estate.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Interiors */}
            <motion.div 
              whileHover={{ y: -10 }}
              className="group rounded-2xl bg-white dark:bg-accent/30 border border-gray-100 dark:border-accent shadow-lg overflow-hidden flex flex-col"
            >
              <div className="h-48 bg-gray-200 relative overflow-hidden">
                <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80')] bg-cover bg-center transition-transform duration-700 group-hover:scale-110" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                <div className="absolute bottom-4 left-4 flex items-center gap-2 text-white">
                  <Home size={24} className="text-primary" />
                  <span className="font-semibold text-lg">ASR Homes PVT LTD</span>
                </div>
              </div>
              <div className="p-6 flex-1 flex flex-col">
                <h3 className="text-2xl font-bold mb-2">Interiors</h3>
                <p className="text-gray-500 dark:text-gray-400 mb-6 flex-1">
                  Premium interior solutions, structural glazing, and high-quality metal works with strict quality control.
                </p>
                <Link href="/projects" className="text-primary font-medium flex items-center gap-1 group-hover:gap-2 transition-all">
                  View Interior Projects <ArrowRight size={16} />
                </Link>
              </div>
            </motion.div>

            {/* Construction (External Redirect) */}
            <motion.div 
              whileHover={{ y: -10 }}
              className="group rounded-2xl bg-white dark:bg-accent/30 border border-gray-100 dark:border-accent shadow-lg overflow-hidden flex flex-col"
            >
              <div className="h-48 bg-gray-200 relative overflow-hidden">
                <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1541888086425-d81bb19240f5?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80')] bg-cover bg-center transition-transform duration-700 group-hover:scale-110" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                <div className="absolute bottom-4 left-4 flex items-center gap-2 text-white">
                  <HardHat size={24} className="text-primary" />
                  <span className="font-semibold text-lg">ASR Homes PVT LTD</span>
                </div>
              </div>
              <div className="p-6 flex-1 flex flex-col">
                <h3 className="text-2xl font-bold mb-2">Construction</h3>
                <p className="text-gray-500 dark:text-gray-400 mb-6 flex-1">
                  Precision engineering, architectural planning, and turnkey construction solutions.
                </p>
                <a 
                  href="https://avaniprojectsindia.com/" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-secondary text-white px-4 py-2 rounded text-center hover:bg-secondary/90 transition-colors font-medium mt-auto"
                >
                  Visit Avani Projects
                </a>
              </div>
            </motion.div>

            {/* Real Estate */}
            <motion.div 
              whileHover={{ y: -10 }}
              className="group rounded-2xl bg-white dark:bg-accent/30 border border-gray-100 dark:border-accent shadow-lg overflow-hidden flex flex-col"
            >
              <div className="h-48 bg-gray-200 relative overflow-hidden">
                <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1512917774080-9991f1c4c750?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80')] bg-cover bg-center transition-transform duration-700 group-hover:scale-110" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                <div className="absolute bottom-4 left-4 flex items-center gap-2 text-white">
                  <Building2 size={24} className="text-primary" />
                  <span className="font-semibold text-lg">Avani Realestate</span>
                </div>
              </div>
              <div className="p-6 flex-1 flex flex-col">
                <h3 className="text-2xl font-bold mb-2">Real Estate</h3>
                <p className="text-gray-500 dark:text-gray-400 mb-6 flex-1">
                  Discover premium properties and thoughtful layouts designed for modern living and commercial success.
                </p>
                <Link href="/contact" className="text-primary font-medium flex items-center gap-1 group-hover:gap-2 transition-all">
                  Enquire Now <ArrowRight size={16} />
                </Link>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-24 bg-gray-50 dark:bg-secondary/20">
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex flex-col lg:flex-row gap-16 items-center">
            <div className="lg:w-1/2 space-y-8">
              <div>
                <h2 className="text-3xl md:text-5xl font-bold mb-4">Integrated <span className="text-primary">Turnkey Solutions</span></h2>
                <p className="text-gray-600 dark:text-gray-400 text-lg leading-relaxed">
                  A key strength of ASR Group lies in its backward integration capabilities, which form the backbone of our turnkey project execution. Our diverse divisions collaborate seamlessly to deliver every aspect of a project under one unified system.
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {[
                  { icon: Ruler, title: "Architectural Expertise" },
                  { icon: Factory, title: "Block Making Factory" },
                  { icon: Home, title: "Interior Design Studio" },
                  { icon: Briefcase, title: "Project Management" },
                ].map((item, index) => (
                  <div key={index} className="flex items-start gap-4">
                    <div className="bg-primary/10 p-3 rounded-lg text-primary">
                      <item.icon size={24} />
                    </div>
                    <div>
                      <h4 className="font-semibold text-lg">{item.title}</h4>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="lg:w-1/2">
              <div className="relative rounded-2xl overflow-hidden shadow-2xl h-[500px] w-full">
                <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1497366216548-37526070297c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80')] bg-cover bg-center" />
                <div className="absolute inset-0 bg-secondary/20 mix-blend-multiply" />
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-8">
                  <p className="text-white text-xl font-medium border-l-4 border-primary pl-4">
                    "Through strong leadership and a culture of accountability, we deliver projects that reflect the highest standards of quality."
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
