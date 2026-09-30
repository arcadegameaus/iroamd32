import { profileValues } from '@/data/projects';
import Breadcrumb from '@/components/Breadcrumb';
import Parallax from '@/components/Parallax';

interface ProfilePageProps {
  onNavigate: (path: string) => void;
}

const profileParagraphs = [
  "Iroamd3 is a design driven practice that produce elegant and crafted solutions, developing organically from the site, its environment and the client's needs and aspirations. In every project iroamd3 looks for opportunities to build these things into unique outcomes that are functional, refined and inspiring. Our team approach delivers sound solutions that are also comprehensive and holistic. We believe that it is important to work with people who genuinely care. Clients choose iroamd3 because we listen and want to be invested in their dream. Our relentless pursuit of this means that we never settle for \"good enough\" or easy pathways. The aim is always to deliver the best possible results within all the given constraints. Every project is important regardless of size, budget, and location.",
  "Iroamd3 works across a wide array of typologies and scales. We have experience designing homes including multi-unit developments, mixed use retail/apartment buildings, warehouse/office & factories. We have designed within the constraints of heritage, flood & Aboriginal Cultural Sensitivity overlays, accessibility requirements for ageing in place and special needs, bush fire rating (BAL) requirements, non-sewered environments, and off-grid areas. We can work on large and small-scale projects effectively in collaboration with consultants and a range of experts in relevant fields to enrich the projects they work on.",
  "We coordinate effectively with consultants, councils, and builders to ensure efficient progress. Our team approach delivers sound solutions that are also comprehensive and holistic. The aim is always to deliver the best possible results within all the given constraints.",
  "We offer all services from Feasibility, Concept Design, Town Planning, Design Development, Contract Documentation, Contractor Selection, Contract Administration, Project Management, 3D renders, 3D fly throughs, Feasibility Studies & Sustainable Design Assessments (SDA).",
  "From conception through to handover, we can tailor a services package to align with each of our client's needs. We understand each project to be uniquely its own and adapt how we work accordingly so you won't end up paying for services that are not necessary.",
];

export default function ProfilePage({ onNavigate }: ProfilePageProps) {
  return (
    <div className="bg-white min-h-screen">
      <Parallax src="/images/projects/project-4.jpg" alt="Profile" height="h-[40vh] min-h-[300px]">
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 to-black/40" />
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center text-white px-4">
            <h1 className="text-4xl md:text-6xl font-light tracking-tight mb-4">Profile</h1>
          </div>
        </div>
      </Parallax>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8">
        <Breadcrumb items={[{ label: 'Home', path: '/' }, { label: 'Profile' }]} onNavigate={onNavigate} />
      </div>

      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          {profileParagraphs.map((para, i) => (
            <p
              key={i}
              className={`text-stone-600 leading-relaxed mb-6 ${
                i === 0 ? 'text-lg' : 'text-base'
              }`}
            >
              {para}
            </p>
          ))}
        </div>
      </section>

      {/* Values */}
      <section className="py-16 bg-stone-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            {profileValues.map((value, i) => (
              <div
                key={value}
                className="group relative overflow-hidden rounded-sm bg-white/5 p-6 text-center hover:bg-amber-500 transition-all duration-500"
                style={{
                  animation: `fadeInUp 0.5s ease-out ${i * 0.1}s both`,
                }}
              >
                <div className="text-3xl font-light text-amber-500 mb-2 group-hover:text-white transition-colors">
                  0{i + 1}
                </div>
                <h3 className="text-white text-sm font-medium uppercase tracking-wider group-hover:text-white transition-colors">
                  {value}
                </h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      <style>{`
        @keyframes fadeInUp {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
      `}</style>
    </div>
  );
}
