import Navbar from '@/components/ui/Navbar';
import SectionHeading from '@/components/ui/SectionHeading';
import { ArrowRight, BarChart3, Shield, Zap, Star } from 'lucide-react';

export default function HomePage() {
  return (
    <main className="relative overflow-x-hidden">
      <div className="floating-blur w-96 h-96 bg-purple -top-20 -left-20" />
      <div className="floating-blur w-96 h-96 bg-green bottom-0 right-0" />
      
      <Navbar />
      
      <section className="min-h-screen flex items-center justify-center px-6 pt-20 relative">
        <div className="text-center max-w-4xl">
          <div className="inline-flex items-center gap-2 px-4 py-2 glass-effect rounded-full text-sm text-gray-300 mb-8">
            <Star className="w-4 h-4 text-green" /> Introducing Nexus Platform
          </div>
          <h1 className="text-5xl md:text-7xl font-bold leading-tight mb-6">
            Build the future, <br />
            <span className="gradient-text">one block at a time.</span>
          </h1>
          <p className="text-xl text-gray-400 mb-10 max-w-2xl mx-auto">
            Nexus combines powerful infrastructure, beautiful design, and AI-driven insights to accelerate your next big idea.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="px-8 py-4 bg-gradient-to-r from-purple to-green rounded-full font-semibold text-lg hover:purple-glow transition-all flex items-center justify-center gap-2">
              Start free trial <ArrowRight className="w-5 h-5" />
            </button>
            <button className="px-8 py-4 glass-effect rounded-full font-semibold text-lg hover:bg-white/10 transition-all">
              View documentation
            </button>
          </div>
        </div>
      </section>

      <section className="py-16 border-t border-b border-white/5">
        <div className="max-w-7xl mx-auto px-6">
          <p className="text-center text-gray-500 text-sm uppercase tracking-widest mb-8">Trusted by innovative teams</p>
          <div className="flex flex-wrap justify-center gap-12 opacity-50 grayscale">
            {['Stripe', 'Vercel', 'Linear', 'Notion', 'Framer'].map((logo) => (
              <div key={logo} className="text-2xl font-bold text-white/50">{logo}</div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 px-6 max-w-7xl mx-auto">
        <SectionHeading title="Everything you need to scale" subtitle="Our platform provides the tools that modern teams require." />
        <div className="grid md:grid-cols-3 gap-8">
          {[
            { icon: Zap, title: 'Lightning Fast', desc: 'Edge computing that delivers content in milliseconds worldwide.' },
            { icon: Shield, title: 'Enterprise Security', desc: 'SOC 2 compliant with end-to-end encryption for your data.' },
            { icon: BarChart3, title: 'Deep Analytics', desc: 'Real-time insights into your performance and user behavior.' },
          ].map((feature) => (
            <div key={feature.title} className="glass-card p-8 group cursor-pointer">
              <feature.icon className="w-10 h-10 text-purple mb-4 group-hover:text-green transition-colors" />
              <h3 className="text-xl font-semibold mb-3">{feature.title}</h3>
              <p className="text-gray-400">{feature.desc}</p>
            </div>
          ))}
        </div>
      </section>

      <footer className="border-t border-white/5 py-12 px-6 text-center text-gray-500">
        <p>© 2026 Nexus Inc. Designed with precision.</p>
      </footer>
    </main>
  );
}
