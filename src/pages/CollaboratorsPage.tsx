import { collaborators } from '@/data/projects';
import Breadcrumb from '@/components/Breadcrumb';
import Parallax from '@/components/Parallax';

interface CollaboratorsPageProps {
  onNavigate: (path: string) => void;
}

export default function CollaboratorsPage({ onNavigate }: CollaboratorsPageProps) {
  return (
    <div className="bg-white min-h-screen">
      <Parallax src="/images/projects/project-14.jpg" alt="Our Collaborators" height="h-[40vh] min-h-[300px]">
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 to-black/40" />
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center text-white px-4">
            <h1 className="text-4xl md:text-6xl font-light tracking-tight mb-4">Our Collaborators</h1>
          </div>
        </div>
      </Parallax>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8">
        <Breadcrumb items={[{ label: 'Home', path: '/' }, { label: 'Our Collaborators' }]} onNavigate={onNavigate} />
      </div>

      {collaborators.map((collab, index) => (
        <section
          key={collab.name}
          className={`py-16 ${index % 2 === 0 ? 'bg-white' : 'bg-stone-50'}`}
        >
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-4 gap-12">
              {/* Logo */}
              <div className="lg:col-span-1">
                <div className="bg-white p-8 rounded-sm shadow-md flex items-center justify-center h-48 sticky top-24">
                  <img
                    src={collab.logo}
                    alt={collab.name}
                    className="max-w-full max-h-full object-contain"
                  />
                </div>
              </div>

              {/* Content */}
              <div className="lg:col-span-3">
                <h2 className="text-3xl md:text-4xl font-light text-stone-800 mb-6">
                  {collab.name}
                </h2>
                {collab.description.map((para, i) => (
                  <p key={i} className="text-stone-600 leading-relaxed mb-4">
                    {para}
                  </p>
                ))}

                {collab.sections &&
                  collab.sections.map((section) => (
                    <div key={section.title} className="mt-8">
                      <h3 className="text-xl font-medium text-amber-600 mb-3">
                        {section.title}
                      </h3>
                      <p className="text-stone-600 leading-relaxed">
                        {section.content}
                      </p>
                    </div>
                  ))}
              </div>
            </div>
          </div>
        </section>
      ))}
    </div>
  );
}
