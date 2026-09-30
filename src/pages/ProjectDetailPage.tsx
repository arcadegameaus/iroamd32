import { useState } from 'react';
import { ArrowLeft, ArrowRight, Building2, DollarSign } from 'lucide-react';
import { projects } from '@/data/projects';
import Breadcrumb from '@/components/Breadcrumb';
import Parallax from '@/components/Parallax';

interface ProjectDetailPageProps {
  slug: string;
  onNavigate: (path: string) => void;
}

export default function ProjectDetailPage({ slug, onNavigate }: ProjectDetailPageProps) {
  const [activeImage, setActiveImage] = useState(0);

  const project = projects.find((p) => p.slug === slug);

  if (!project) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-white">
        <div className="text-center">
          <h1 className="text-3xl text-stone-800 mb-4">Project Not Found</h1>
          <button
            onClick={() => onNavigate('/projects')}
            className="text-amber-600 hover:text-amber-700 font-medium"
          >
            Back to Projects
          </button>
        </div>
      </div>
    );
  }

  const gallery = project.gallery || [project.image];
  const currentIndex = projects.findIndex((p) => p.id === project.id);
  const prevProject = projects[(currentIndex - 1 + projects.length) % projects.length];
  const nextProject = projects[(currentIndex + 1) % projects.length];

  return (
    <div className="bg-white min-h-screen">
      <Parallax src={project.image} alt={project.title} height="h-[60vh] min-h-[400px]">
        <div className="absolute inset-0 bg-gradient-to-b from-black/50 to-black/60" />
        <div className="absolute inset-0 flex items-end justify-start">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full pb-12">
            <p className="text-amber-400 text-sm uppercase tracking-widest mb-3">
              {project.category} {project.year && `· ${project.year}`}
            </p>
            <h1 className="text-3xl md:text-5xl font-light text-white tracking-tight">
              {project.title}
            </h1>
          </div>
        </div>
      </Parallax>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8">
        <Breadcrumb
          items={[
            { label: 'Home', path: '/' },
            { label: 'Projects', path: '/projects' },
            { label: project.title },
          ]}
          onNavigate={onNavigate}
        />
      </div>

      <section className="py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Main image / Gallery */}
            <div className="lg:col-span-2">
              <div className="relative overflow-hidden rounded-sm mb-4">
                <img
                  src={gallery[activeImage]}
                  alt={`${project.title} - Image ${activeImage + 1}`}
                  className="w-full h-[500px] object-cover"
                />
              </div>
              {gallery.length > 1 && (
                <div className="grid grid-cols-5 gap-3">
                  {gallery.map((img, i) => (
                    <button
                      key={i}
                      onClick={() => setActiveImage(i)}
                      className={`overflow-hidden rounded-sm transition-all duration-300 ${
                        i === activeImage
                          ? 'ring-2 ring-amber-500'
                          : 'opacity-60 hover:opacity-100'
                      }`}
                    >
                      <img
                        src={img}
                        alt={`Thumbnail ${i + 1}`}
                        className="w-full h-20 object-cover"
                      />
                    </button>
                  ))}
                </div>
              )}
            </div>

            {/* Sidebar info */}
            <div className="space-y-6">
              <div className="bg-stone-50 p-6 rounded-sm">
                <h2 className="text-stone-800 text-xl font-medium mb-4">Project Details</h2>
                <div className="space-y-4">
                  <div>
                    <p className="text-stone-400 text-xs uppercase tracking-wider mb-1">Category</p>
                    <p className="text-stone-700">{project.category}</p>
                  </div>
                  {project.year && (
                    <div>
                      <p className="text-stone-400 text-xs uppercase tracking-wider mb-1">Year</p>
                      <p className="text-stone-700">{project.year}</p>
                    </div>
                  )}
                  {project.builder && (
                    <div>
                      <p className="text-stone-400 text-xs uppercase tracking-wider mb-1">Builder</p>
                      <p className="text-stone-700 flex items-center gap-2">
                        <Building2 size={16} className="text-amber-500" />
                        {project.builder}
                      </p>
                    </div>
                  )}
                </div>
              </div>

              {project.salesInfo && project.salesInfo.length > 0 && (
                <div className="bg-amber-50 p-6 rounded-sm border-l-4 border-amber-500">
                  <h3 className="text-stone-800 font-medium mb-4 flex items-center gap-2">
                    <DollarSign size={18} className="text-amber-500" />
                    Sales Information
                  </h3>
                  <ul className="space-y-2">
                    {project.salesInfo.map((info, i) => (
                      <li key={i} className="text-stone-600 text-sm leading-relaxed">
                        {info}
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Project navigation */}
      <section className="py-12 border-t border-stone-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row justify-between gap-4">
            <button
              onClick={() => onNavigate(`/projects/${prevProject.slug}`)}
              className="group flex items-center gap-4 p-4 rounded-sm hover:bg-stone-50 transition-colors text-left"
            >
              <ArrowLeft size={24} className="text-stone-400 group-hover:text-amber-500 transition-colors shrink-0" />
              <div>
                <p className="text-stone-400 text-xs uppercase tracking-wider">Previous</p>
                <p className="text-stone-700 group-hover:text-amber-600 transition-colors text-sm font-medium">
                  {prevProject.title}
                </p>
              </div>
            </button>
            <button
              onClick={() => onNavigate(`/projects/${nextProject.slug}`)}
              className="group flex items-center gap-4 p-4 rounded-sm hover:bg-stone-50 transition-colors text-right sm:text-right"
            >
              <div>
                <p className="text-stone-400 text-xs uppercase tracking-wider">Next</p>
                <p className="text-stone-700 group-hover:text-amber-600 transition-colors text-sm font-medium">
                  {nextProject.title}
                </p>
              </div>
              <ArrowRight size={24} className="text-stone-400 group-hover:text-amber-500 transition-colors shrink-0" />
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
