import { ArrowRight } from 'lucide-react';
import { projects } from '@/data/projects';
import Breadcrumb from '@/components/Breadcrumb';
import Parallax from '@/components/Parallax';

interface ProjectsPageProps {
  onNavigate: (path: string) => void;
}

export default function ProjectsPage({ onNavigate }: ProjectsPageProps) {
  return (
    <div className="bg-white min-h-screen">
      <Parallax src="/images/projects/project-5.jpg" alt="Projects" height="h-[40vh] min-h-[300px]">
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 to-black/40" />
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center text-white px-4">
            <h1 className="text-4xl md:text-6xl font-light tracking-tight mb-4">Our Projects</h1>
          </div>
        </div>
      </Parallax>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8">
        <Breadcrumb items={[{ label: 'Home', path: '/' }, { label: 'Projects' }]} onNavigate={onNavigate} />
      </div>

      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project) => (
              <div
                key={project.id}
                className="group cursor-pointer overflow-hidden rounded-sm bg-white shadow-md hover:shadow-2xl transition-all duration-500"
                onClick={() => onNavigate(`/projects/${project.slug}`)}
              >
                <div className="relative h-72 overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <div className="absolute bottom-4 left-4 right-4 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <span className="inline-flex items-center gap-2 text-sm font-medium">
                      See More <ArrowRight size={16} />
                    </span>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-stone-800 font-medium text-lg mb-1 group-hover:text-amber-600 transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-stone-400 text-sm uppercase tracking-wide">
                    {project.category}
                    {project.year && ` · ${project.year}`}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
