import { Leaf, Sun, Zap, Recycle, Heart, TrendingUp } from 'lucide-react';
import Breadcrumb from '@/components/Breadcrumb';
import Parallax from '@/components/Parallax';

interface ESDPageProps {
  onNavigate: (path: string) => void;
}

const strategies = [
  {
    icon: Sun,
    title: "Passive Design Techniques",
    desc: "Strategically orienting buildings to optimize natural light and airflow reduces energy consumption and enhances occupant comfort.",
  },
  {
    icon: Zap,
    title: "Energy-Efficient Technologies",
    desc: "Incorporating energy-saving technologies like LED lighting, intelligent insulation, Solar panels for electricity generation with battery storage and efficient HVAC systems lowers energy usage and operational costs.",
  },
  {
    icon: Recycle,
    title: "Sustainable Material Selection",
    desc: "Prioritizing locally sourced, eco-friendly materials with low embodied energy and high recyclability reduces environmental impact and supports responsible resource management.",
  },
];

const benefits = [
  {
    icon: Heart,
    title: "Enhancing Human Health and Well-being",
    desc: "Healthier and more comfortable living and working environments.",
  },
  {
    icon: TrendingUp,
    title: "Lower Operating Costs",
    desc: "Through energy and resource efficiency.",
  },
  {
    icon: Leaf,
    title: "Increased Property Value",
    desc: "And market competitiveness.",
  },
];

export default function ESDPage({ onNavigate }: ESDPageProps) {
  return (
    <div className="bg-white min-h-screen">
      <Parallax src="/images/projects/project-6.jpg" alt="ESD" height="h-[40vh] min-h-[300px]">
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 to-black/40" />
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center text-white px-4">
            <Leaf className="text-amber-400 mx-auto mb-4" size={40} />
            <h1 className="text-4xl md:text-6xl font-light tracking-tight mb-2">ESD</h1>
            <p className="text-white/70 text-lg">Environmentally Sustainable Design</p>
          </div>
        </div>
      </Parallax>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8">
        <Breadcrumb items={[{ label: 'Home', path: '/' }, { label: 'ESD' }]} onNavigate={onNavigate} />
      </div>

      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-stone-600 text-lg leading-relaxed mb-6">
            From a young age, growing up in New Zealand, I developed an enthusiasm for sustainable living. I believe that our built environment should provide all that we need to live without extensive connection to external infrastructure & with good management of natural resources.
          </p>
          <p className="text-stone-600 leading-relaxed mb-6">
            I am passionately committed to environmentally sustainable design aiming to reduce the harmful effects of the construction processes on our natural environment and to improve the function of our buildings.
          </p>
          <div className="bg-amber-50 border-l-4 border-amber-500 p-6 rounded-r-sm my-8">
            <p className="text-stone-700 leading-relaxed">
              A Sustainable Design Assessment (SDA) is a straightforward evaluation that assesses the sustainability aspects of proposed designs for new developments or renovations. The purpose of an SDA is to ensure that the design aligns with sustainable principles and meets the council's requirements. It's a crucial step in the planning process to ensure environmentally sustainable and sensitive development.
            </p>
          </div>
        </div>
      </section>

      {/* Strategies */}
      <section className="py-16 bg-stone-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-light text-stone-800">
              Sustainable Design Strategies
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {strategies.map((s) => {
              const Icon = s.icon;
              return (
                <div
                  key={s.title}
                  className="bg-white p-8 rounded-sm shadow-md hover:shadow-xl transition-shadow duration-300"
                >
                  <div className="w-14 h-14 bg-amber-50 rounded-full flex items-center justify-center mb-6">
                    <Icon className="text-amber-500" size={26} />
                  </div>
                  <h3 className="text-xl font-medium text-stone-800 mb-3">{s.title}</h3>
                  <p className="text-stone-500 leading-relaxed text-sm">{s.desc}</p>
                </div>
              );
            })}
          </div>
          <p className="text-center text-stone-500 max-w-3xl mx-auto mt-8 leading-relaxed">
            By adopting sustainable design practices, we can create a more harmonious and resilient world, aligning with the principles of ecological sustainability and improving the health and comfort of building occupants.
          </p>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-light text-stone-800">Benefits</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {benefits.map((b) => {
              const Icon = b.icon;
              return (
                <div key={b.title} className="text-center">
                  <div className="w-16 h-16 bg-stone-900 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Icon className="text-amber-400" size={28} />
                  </div>
                  <h3 className="text-lg font-medium text-stone-800 mb-2">{b.title}</h3>
                  <p className="text-stone-500 text-sm">{b.desc}</p>
                </div>
              );
            })}
          </div>
          <p className="text-center text-stone-500 max-w-3xl mx-auto mt-12 leading-relaxed">
            By adhering to these principles, designers can create environmentally sustainable designs that optimize resource efficiency, reduce environmental impact, and enhance occupant well-being. ESD prioritizes the well-being of both occupants and the surrounding community. By considering factors such as indoor air quality, natural lighting, and access to green spaces, sustainable design can create healthier and more comfortable environments for people.
          </p>
        </div>
      </section>
    </div>
  );
}
