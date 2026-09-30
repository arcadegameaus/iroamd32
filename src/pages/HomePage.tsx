import { useState, useEffect } from 'react';
import { ArrowRight, ChevronRight } from 'lucide-react';
import { projects, homeHeroSlides, industryAssociations, contactInfo } from '@/data/projects';

interface HomePageProps {
  onNavigate: (path: string) => void;
}

export default function HomePage({ onNavigate }: HomePageProps) {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % homeHeroSlides.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const featuredProjects = projects.slice(0, 6);

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="relative h-screen min-h-[600px] overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="/images/misc/pic7.jpeg"
            alt="Architectural design"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/40 to-black/70" />
        </div>

        <div className="relative h-full flex items-center justify-center">
          <div className="text-center px-4 max-w-4xl mx-auto">
            <div className="overflow-hidden">
              {homeHeroSlides.map((slide, index) => (
                <div
                  key={index}
                  className={`transition-all duration-700 ${
                    index === currentSlide
                      ? 'opacity-100 translate-y-0'
                      : 'opacity-0 translate-y-8 absolute inset-0 flex items-center justify-center'
                  }`}
                >
                  <div className="text-center px-4 max-w-4xl">
                    <h1 className="text-4xl md:text-6xl lg:text-7xl font-light text-white tracking-tight mb-6">
                      {slide.title}
                    </h1>
                    <p className="text-lg md:text-xl text-white/80 max-w-2xl mx-auto leading-relaxed font-light">
                      {slide.text}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            <div className="flex gap-2 justify-center mt-12">
              {homeHeroSlides.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentSlide(index)}
                  className={`h-2 rounded-full transition-all duration-300 ${
                    index === currentSlide
                      ? 'w-10 bg-amber-400'
                      : 'w-2 bg-white/40 hover:bg-white/60'
                  }`}
                  aria-label={`Slide ${index + 1}`}
                />
              ))}
            </div>
          </div>
        </div>

        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
          <ChevronRight className="text-white/50 rotate-90" size={28} />
        </div>
      </section>

      {/* About Company Section */}
      <section className="py-24 bg-stone-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <p className="text-amber-600 text-sm font-semibold uppercase tracking-widest mb-4">
                About Us
              </p>
              <h2 className="text-3xl md:text-5xl font-light text-stone-800 mb-6 leading-tight">
                Our Company
              </h2>
              <p className="text-stone-600 text-lg leading-relaxed mb-6">
                25 years of Experience
              </p>
              <p className="text-stone-500 leading-relaxed mb-8">
                With a quarter-century of accumulated expertise and insights, we bring a wealth of experience to every project, ensuring unparalleled excellence in design and execution across diverse built environments.
              </p>
              <button
                onClick={() => onNavigate('/about')}
                className="inline-flex items-center gap-2 text-amber-600 hover:text-amber-700 font-medium transition-colors group"
              >
                Learn More
                <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
            <div className="relative">
              <img
                src="/images/misc/S7-2-1.jpg"
                alt="Iroamd3 architectural work"
                className="w-full h-[450px] object-cover rounded-sm shadow-xl"
              />
              <div className="absolute -bottom-6 -left-6 bg-amber-500 text-white px-8 py-4 rounded-sm shadow-lg hidden md:block">
                <p className="text-3xl font-light">25</p>
                <p className="text-sm uppercase tracking-wider">Years Experience</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Process */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <p className="text-amber-600 text-sm font-semibold uppercase tracking-widest mb-4">
              Our Work
            </p>
            <h2 className="text-3xl md:text-5xl font-light text-stone-800">
              Our Process
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { num: "01", title: "Consultation", desc: "We begin with understanding your vision, needs, and aspirations through detailed consultation." },
              { num: "02", title: "Design", desc: "Our design-driven approach creates elegant and crafted solutions that develop organically from the site." },
              { num: "03", title: "Documentation", desc: "Comprehensive documentation ensures every detail is captured for flawless execution." },
            ].map((step) => (
              <div
                key={step.num}
                className="group relative bg-stone-50 p-8 rounded-sm hover:bg-stone-900 transition-all duration-500 cursor-pointer"
                onClick={() => onNavigate('/process')}
              >
                <div className="text-5xl font-light text-amber-500 mb-4 group-hover:text-amber-400 transition-colors">
                  {step.num}
                </div>
                <h3 className="text-xl font-medium text-stone-800 mb-3 group-hover:text-white transition-colors">
                  {step.title}
                </h3>
                <p className="text-stone-500 leading-relaxed group-hover:text-white/70 transition-colors">
                  {step.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Projects */}
      <section className="py-24 bg-stone-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-start md:items-end justify-between mb-12">
            <div>
              <p className="text-amber-600 text-sm font-semibold uppercase tracking-widest mb-4">
                Our Works
              </p>
              <h2 className="text-3xl md:text-5xl font-light text-stone-800">
                Featured Projects
              </h2>
            </div>
            <button
              onClick={() => onNavigate('/projects')}
              className="inline-flex items-center gap-2 text-amber-600 hover:text-amber-700 font-medium transition-colors group mt-4 md:mt-0"
            >
              View All Projects
              <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {featuredProjects.map((project) => (
              <div
                key={project.id}
                className="group cursor-pointer overflow-hidden rounded-sm bg-white shadow-md hover:shadow-2xl transition-all duration-500"
                onClick={() => onNavigate(`/projects/${project.slug}`)}
              >
                <div className="relative h-64 overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-colors duration-300" />
                </div>
                <div className="p-6">
                  <h3 className="text-stone-800 font-medium text-lg mb-1 group-hover:text-amber-600 transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-stone-400 text-sm uppercase tracking-wide">
                    {project.category} {project.year && `· ${project.year}`}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Industry Associations */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <p className="text-amber-600 text-sm font-semibold uppercase tracking-widest mb-3">
              Industry Associations
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 items-center justify-items-center">
            {industryAssociations.map((assoc) => (
              <div
                key={assoc.name}
                className="flex items-center justify-center h-24 w-full max-w-[200px] grayscale opacity-60 hover:grayscale-0 hover:opacity-100 transition-all duration-300"
              >
                <img
                  src={assoc.logo}
                  alt={assoc.name}
                  className="max-h-full max-w-full object-contain"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-stone-900 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <img
            src="/images/projects/project-5.jpg"
            alt=""
            className="w-full h-full object-cover"
          />
        </div>
        <div className="relative max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-5xl font-light text-white mb-6">
            Ready to Start Your Project?
          </h2>
          <p className="text-white/60 text-lg mb-8 max-w-2xl mx-auto">
            From conception through to handover, we tailor a services package to align with your needs.
          </p>
          <button
            onClick={() => onNavigate('/contact')}
            className="inline-flex items-center gap-2 bg-amber-500 hover:bg-amber-600 text-white px-8 py-4 rounded-sm font-medium transition-all duration-300 group"
          >
            Get in Touch
            <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
          </button>
          <p className="text-white/40 mt-6 text-sm">
            {contactInfo.phone} · {contactInfo.email}
          </p>
        </div>
      </section>
    </div>
  );
}
