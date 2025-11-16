import dynamic from 'next/dynamic';
import Navbar from './components/Navbar';
import Hero from './components/Hero';

// Lazy load components for better performance
const Services = dynamic(() => import('./components/Services'), {
  loading: () => <div className="h-96 bg-slate-50 animate-pulse" />
});

const Office = dynamic(() => import('./components/Office'), {
  loading: () => <div className="h-96 bg-white animate-pulse" />
});

const About = dynamic(() => import('./components/About'), {
  loading: () => <div className="h-96 bg-slate-50 animate-pulse" />
});

const Contact = dynamic(() => import('./components/Contact'), {
  loading: () => <div className="h-96 bg-white animate-pulse" />
});

const Footer = dynamic(() => import('./components/Footer'), {
  loading: () => <div className="h-32 bg-slate-900 animate-pulse" />
});

export default function Home() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <Hero />
      <Services />
      <Office />
      <About />
      <Contact />
      <Footer />
    </div>
  );
}
