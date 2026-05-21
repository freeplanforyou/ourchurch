import Navbar from '@/components/ui/Navbar';
import SectionHeading from '@/components/ui/SectionHeading';
import { Cloud, Code, Palette, ArrowRight } from 'lucide-react';
import Link from 'next/link';

const services = [
  { icon: Cloud, title: 'Cloud Infrastructure', desc: 'Serverless edge computing with auto-scaling capabilities.' },
  { icon: Code, title: 'API Development', desc: 'Design and deploy RESTful and GraphQL APIs in minutes.' },
  { icon: Palette, title: 'UI/UX Design', desc: 'Create stunning interfaces with our component library.' },
];

const process = ['Discovery', 'Architecture', 'Development', 'Launch'];

export default function ServicesPage() {
  return (
    <main className="relative overflow-x-hidden">
      <div className="floating-blur w-96 h-96 bg-green -top-20 left-1/2" />
      <Navbar />
      
      <section className="pt-32 pb-20 px-6 max-w-7xl mx-auto">
        <SectionHeading title="Services tailored for innovation" subtitle="From concept to deployment, we cover the entire lifecycle." />
        
        <div className="grid md:grid-cols-3 gap-8 mb-24">
          {services.map((service) => (
            <div key={service.title} className="gradient-border group cursor-pointer">
              <div className="glass-card p-8 h-full">
                <service.icon className="w-12 h-12 text-purple mb-6 group-hover:scale-110 transition-transform" />
                <h3 className="text-2xl font-semibold mb-3">{service.title}</h3>
                <p className="text-gray-400 mb-6">{service.desc}</p>
                <Link href="/contact" className="flex items-center gap-2 text-sm font-medium text-purple group-hover:text-green transition-colors">
                  Learn more <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
          ))}
        </div>

        <div className="border-t border-white/5 pt-16">
          <h3 className="text-2xl font-semibold mb-12 text-center">How we work</h3>
          <div className="grid grid-cols-4 gap-4">
            {process.map((step, index) => (
              <div key={step} className="text-center relative">
                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-purple to-green flex items-center justify-center mx-auto mb-3 font-bold">{index + 1}</div>
                <div className="text-sm font-medium">{step}</div>
                {index < process.length - 1 && (
                  <div className="hidden md:block absolute top-5 left-[60%] w-full h-0.5 bg-gradient-to-r from-purple to-transparent" />
                )}
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
