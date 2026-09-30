import { Award, Briefcase, Users } from 'lucide-react';
import { aboutBio, aboutExperience, aboutAwards, aboutCollaborations } from '@/data/projects';
import Breadcrumb from '@/components/Breadcrumb';

interface AboutPageProps {
  onNavigate: (path: string) => void;
}

export default function AboutPage({ onNavigate }: AboutPageProps) {
  return (
    <div className="bg-white min-h-screen">
      {/* Hero */}
      <section className="relative h-[50vh] min-h-[400px] overflow-hidden">
        <img
          src="/images/misc/john-laughton.jpg"
          alt="John Laughton"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 to-black/50" />
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center text-white px-4">
            <h1 className="text-4xl md:text-6xl font-light tracking-tight mb-4">About</h1>
          </div>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8">
        <Breadcrumb items={[{ label: 'Home', path: '/' }, { label: 'About' }]} onNavigate={onNavigate} />
      </div>

      {/* Bio Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="order-2 lg:order-1">
              <h2 className="text-3xl md:text-4xl font-light text-stone-800 mb-2">{aboutBio[0]}</h2>
              <p className="text-amber-600 text-lg font-medium mb-6">{aboutBio[1]}</p>
              <p className="text-stone-600 text-lg leading-relaxed mb-8">{aboutBio[2]}</p>

              <div className="bg-stone-50 rounded-sm p-8 border-l-4 border-amber-500">
                <h3 className="text-stone-800 font-semibold mb-4 flex items-center gap-2">
                  <Briefcase size={20} className="text-amber-500" />
                  Experience
                </h3>
                <ul className="space-y-3">
                  {aboutExperience.map((item, i) => (
                    <li key={i} className="flex items-start gap-3 text-stone-600 text-sm leading-relaxed">
                      <span className="text-amber-500 mt-1 shrink-0">▪</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="order-1 lg:order-2">
              <img
                src="/images/misc/john-laughton.jpg"
                alt="John Laughton"
                className="w-full h-[500px] object-cover rounded-sm shadow-xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Awards Section */}
      <section className="py-16 bg-stone-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <Award className="text-amber-500 mx-auto mb-4" size={40} />
            <h2 className="text-3xl md:text-4xl font-light text-stone-800">Awards Received</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <div className="bg-white p-8 rounded-sm shadow-md">
              <h3 className="text-xl font-medium text-stone-800 mb-2">Massey University NZ 1996</h3>
              <ul className="space-y-3 mt-4">
                {aboutAwards.massey.map((award, i) => (
                  <li key={i} className="flex items-start gap-3 text-stone-600 text-sm leading-relaxed">
                    <span className="text-amber-500 mt-1 shrink-0">▪</span>
                    <span>{award}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="bg-white p-8 rounded-sm shadow-md">
              <h3 className="text-xl font-medium text-stone-800 mb-2">NMIT Preston Australia 2002</h3>
              <ul className="space-y-3 mt-4">
                {aboutAwards.nmit.map((award, i) => (
                  <li key={i} className="flex items-start gap-3 text-stone-600 text-sm leading-relaxed">
                    <span className="text-amber-500 mt-1 shrink-0">▪</span>
                    <span>{award}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Collaborations */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <Users className="text-amber-500 mx-auto mb-4" size={40} />
            <h2 className="text-3xl md:text-4xl font-light text-stone-800 mb-4">
              Has Worked in Collaboration With
            </h2>
          </div>
          <div className="flex flex-wrap justify-center gap-4">
            {aboutCollaborations.map((name) => (
              <button
                key={name}
                onClick={() => onNavigate('/our-collaborators')}
                className="px-8 py-4 bg-stone-50 hover:bg-amber-500 hover:text-white text-stone-700 rounded-sm font-medium transition-all duration-300 shadow-sm hover:shadow-md"
              >
                {name}
              </button>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
