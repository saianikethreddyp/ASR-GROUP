"use client";

import { motion } from "framer-motion";
import { ArrowUpRight, Building, HardHat, Home } from "lucide-react";

const signatureProjects = [
  { name: "Manjeera Majestic", loc: "Hyderabad" },
  { name: "Manjeera Trinity", loc: "Hyderabad" },
  { name: "Indu Fortune Fields", loc: "Hyderabad" },
  { name: "Ramky Towers", loc: "Hyderabad" },
  { name: "My Home Jewel", loc: "Hyderabad" },
  { name: "Meenakshi Towers", loc: "Hyderabad" },
  { name: "Rainbow Vista", loc: "Hyderabad" },
  { name: "Aparna Sarovar", loc: "Hyderabad" },
  { name: "Lanco Hills", loc: "Hyderabad" },
];

export default function ProjectsPage() {
  return (
    <div className="flex flex-col min-h-screen pt-24 pb-12 bg-background">
      {/* Header */}
      <section className="bg-secondary text-white py-20">
        <div className="container mx-auto px-4 md:px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-4xl mx-auto"
          >
            <h1 className="text-4xl md:text-6xl font-bold mb-6">Our <span className="text-primary">Divisions & Projects</span></h1>
            <p className="text-xl text-gray-300 font-light leading-relaxed">
              Delivering exceptional quality across Commercial, Residential, and Contractual segments.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Divisions Split */}
      <section className="py-20">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid lg:grid-cols-2 gap-12">
            
            {/* Interiors */}
            <div className="space-y-8">
              <div className="flex items-center gap-4 border-b-2 border-primary pb-4">
                <div className="bg-primary/10 p-4 rounded-xl text-primary">
                  <Home size={32} />
                </div>
                <div>
                  <h2 className="text-3xl font-bold">ASR Homes PVT LTD</h2>
                  <p className="text-gray-500 text-lg">Interiors & Furnishings</p>
                </div>
              </div>

              <p className="text-gray-600 dark:text-gray-400 text-lg">
                Our interior division handles complete turnkey solutions, focusing on sophisticated corporate interiors, premium residential spaces, and custom architectural elements.
              </p>

              <div className="space-y-4">
                <h3 className="text-xl font-bold">Notable Clients</h3>
                <ul className="grid grid-cols-2 gap-3 text-gray-600 dark:text-gray-400">
                  <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-primary" /> ICRISAT</li>
                  <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-primary" /> Wipro</li>
                  <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-primary" /> Satyam Computers</li>
                  <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-primary" /> United Nations (Proj)</li>
                  <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-primary" /> BMW Showroom</li>
                </ul>
              </div>
            </div>

            {/* Construction (Avani Redirect) */}
            <div className="space-y-8 bg-gray-50 dark:bg-accent/20 p-8 rounded-3xl border border-gray-100 dark:border-accent">
              <div className="flex items-center gap-4 border-b-2 border-gray-300 dark:border-gray-700 pb-4">
                <div className="bg-gray-200 dark:bg-gray-800 p-4 rounded-xl text-gray-700 dark:text-gray-300">
                  <HardHat size={32} />
                </div>
                <div>
                  <h2 className="text-3xl font-bold">ASR Homes PVT LTD</h2>
                  <p className="text-gray-500 text-lg">Construction Division</p>
                </div>
              </div>

              <p className="text-gray-600 dark:text-gray-400 text-lg">
                Our core construction operations, executing major structural builds and civil engineering projects, are managed independently to ensure specialized focus and quality.
              </p>

              <div className="bg-white dark:bg-secondary p-6 rounded-2xl shadow-sm border border-gray-100 dark:border-gray-800 text-center space-y-4">
                <Building size={48} className="mx-auto text-primary opacity-50" />
                <h3 className="text-xl font-bold">Looking for Construction Projects?</h3>
                <p className="text-gray-500 text-sm">Please visit our dedicated construction portal for detailed project information, layouts, and capabilities.</p>
                <a 
                  href="https://avaniprojectsindia.com/" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 bg-primary hover:bg-primary/90 text-white px-8 py-4 rounded-xl font-bold transition-all hover:scale-105"
                >
                  Visit Avani Projects <ArrowUpRight size={20} />
                </a>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Signature Residential Projects Table */}
      <section className="py-20 bg-gray-50 dark:bg-secondary/20">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Prestigious <span className="text-primary">Residential Projects</span></h2>
            <p className="text-gray-500 max-w-2xl mx-auto">
              Successfully contributed to the completion of approximately 4,000 to 5,000 residential flats and villas.
            </p>
          </div>

          <div className="max-w-4xl mx-auto bg-white dark:bg-secondary rounded-2xl shadow-xl overflow-hidden border border-gray-100 dark:border-gray-800">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="bg-primary text-white">
                  <th className="py-4 px-6 font-semibold">S.No</th>
                  <th className="py-4 px-6 font-semibold">Project Name</th>
                  <th className="py-4 px-6 font-semibold">Location</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100 dark:divide-gray-800">
                {signatureProjects.map((proj, idx) => (
                  <tr key={idx} className="hover:bg-gray-50 dark:hover:bg-white/5 transition-colors">
                    <td className="py-4 px-6 text-gray-500 font-medium">{idx + 1}</td>
                    <td className="py-4 px-6 font-medium text-gray-900 dark:text-gray-100">{proj.name}</td>
                    <td className="py-4 px-6 text-gray-500">{proj.loc}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>
    </div>
  );
}
