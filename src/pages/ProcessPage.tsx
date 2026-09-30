import { processSteps } from '@/data/projects';
import { Box, Layers, FileText, Building2, Sofa, ClipboardList, Gavel, HardHat, CheckCircle } from 'lucide-react';
import Breadcrumb from '@/components/Breadcrumb';
import Parallax from '@/components/Parallax';

interface ProcessPageProps {
  onNavigate: (path: string) => void;
}

const stepIcons = [Box, Layers, FileText, Building2, Sofa, ClipboardList, Gavel, HardHat, CheckCircle];

export default function ProcessPage({ onNavigate }: ProcessPageProps) {
  return (
    <div className="bg-white min-h-screen">
      <Parallax src="/images/projects/project-12.jpg" alt="Process" height="h-[40vh] min-h-[300px]">
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 to-black/40" />
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center text-white px-4">
            <h1 className="text-4xl md:text-6xl font-light tracking-tight mb-4">Process</h1>
          </div>
        </div>
      </Parallax>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8">
        <Breadcrumb items={[{ label: 'Home', path: '/' }, { label: 'Process' }]} onNavigate={onNavigate} />
      </div>

      {/* Process Steps Timeline */}
      <section className="py-16">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="relative">
            {/* Vertical line */}
            <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-px bg-stone-200 md:-translate-x-px" />

            {processSteps.map((step, index) => {
              const Icon = stepIcons[index] || Box;
              const isLeft = index % 2 === 0;
              return (
                <div
                  key={index}
                  className={`relative flex items-center mb-12 ${
                    isLeft ? 'md:flex-row' : 'md:flex-row-reverse'
                  }`}
                >
                  {/* Node */}
                  <div className="absolute left-8 md:left-1/2 -translate-x-1/2 z-10">
                    <div className="w-12 h-12 bg-amber-500 rounded-full flex items-center justify-center shadow-lg ring-4 ring-white">
                      <Icon className="text-white" size={20} />
                    </div>
                  </div>

                  {/* Content */}
                  <div className={`w-full md:w-1/2 pl-20 md:pl-0 ${isLeft ? 'md:pr-16 md:text-right' : 'md:pl-16'}`}>
                    <div className="bg-stone-50 p-6 rounded-sm hover:shadow-lg transition-shadow duration-300">
                      <div className={`text-amber-500 text-sm font-semibold mb-2 ${isLeft ? 'md:text-right' : ''}`}>
                        Step {String(index + 1).padStart(2, '0')}
                      </div>
                      <h3 className="text-xl font-medium text-stone-800 mb-2">{step.title}</h3>
                      {step.subtitle && (
                        <p className="text-amber-600 text-sm font-medium mb-3">{step.subtitle}</p>
                      )}
                      {step.description && (
                        <p className="text-stone-500 text-sm leading-relaxed">{step.description}</p>
                      )}
                    </div>
                  </div>

                  {/* Spacer for the other side */}
                  <div className="hidden md:block w-1/2" />
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Software Section */}
      <section className="py-16 bg-stone-900">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-light text-white mb-4">The Software</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white/5 p-8 rounded-sm hover:bg-white/10 transition-colors duration-300">
              <h3 className="text-2xl font-light text-amber-400 mb-4">Autodesk&reg; Revit&reg;</h3>
              <p className="text-white/70 leading-relaxed mb-4 text-sm">
                Revit allows architects, engineers, and construction professionals to:
              </p>
              <ul className="space-y-3">
                {[
                  "Model shapes, structures, and systems in 3D with parametric accuracy, precision, and ease.",
                  "Streamline project management with instant revisions to plans, elevations, schedules, sections, and sheets.",
                  "Unite multidisciplinary project teams for higher efficiency, collaboration, and impact in the office or on the construction site.",
                  "Provide clients with a concept 3d view of their project thus informing them on design decision early in the process.",
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3 text-white/60 text-sm leading-relaxed">
                    <span className="text-amber-500 mt-1 shrink-0">▪</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="bg-white/5 p-8 rounded-sm hover:bg-white/10 transition-colors duration-300">
              <h3 className="text-2xl font-light text-amber-400 mb-4">Twinmotion</h3>
              <p className="text-white/70 leading-relaxed mb-4 text-sm">
                Go from CAD or BIM to photoreal renderings. With Twinmotion, you can clearly communicate your ideas, respond to feedback on the fly, and enable every stakeholder to experience your design's full potential before a single brick is laid.
              </p>
              <p className="text-white/70 leading-relaxed mb-4 text-sm">
                A 3D flythrough is a technique employed in design presentations that offers a virtual journey through space from a fixed perspective. It involves a seamless animation that takes viewers on a guided tour, showcasing the design's different areas and key features. The camera smoothly navigates through the environment, providing a dynamic and visually engaging experience.
              </p>
              <p className="text-white/70 leading-relaxed text-sm">
                These animations transform technical details (such as material resilience and light reflection) into experiential narratives. Instead of drowning in architectural jargon, clients can see and feel how sunlight might play on a building's surface. This technique provides a clear and comprehensive glimpse of how the completed project will look.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
