import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

interface Speaker {
  id: number;
  name: string;
  title: string;
  company: string;
  image: string;
}

const speakers: Speaker[] = [
  {
    id: 1,
    name: "Dr. Sarah Chen",
    title: "Chief Digital Officer",
    company: "TechStream Global",
    image: "https://api.dicebear.com/7.x/avataaars/svg?seed=sarah",
  },
  {
    id: 2,
    name: "Michael Rodriguez",
    title: "VP of Content Strategy",
    company: "ContentWave",
    image: "https://api.dicebear.com/7.x/avataaars/svg?seed=michael",
  },
  {
    id: 3,
    name: "Dr. Aisha Johnson",
    title: "Director of AI Integration",
    company: "FutureTech Labs",
    image: "https://api.dicebear.com/7.x/avataaars/svg?seed=aisha",
  },
  {
    id: 4,
    name: "David Park",
    title: "Head of Digital Transformation",
    company: "Innovate Partners",
    image: "https://api.dicebear.com/7.x/avataaars/svg?seed=david",
  },
  {
    id: 5,
    name: "Emma Wilson",
    title: "Content Operations Lead",
    company: "MediaSphere",
    image: "https://api.dicebear.com/7.x/avataaars/svg?seed=emma",
  },
  {
    id: 6,
    name: "James Thompson",
    title: "CTO",
    company: "Digital Frontiers",
    image: "https://api.dicebear.com/7.x/avataaars/svg?seed=james",
  },
  {
    id: 7,
    name: "Sophia Martinez",
    title: "UX Research Director",
    company: "Experience Design Co",
    image: "https://api.dicebear.com/7.x/avataaars/svg?seed=sophia",
  },
  {
    id: 8,
    name: "Robert Kim",
    title: "Enterprise Solutions Architect",
    company: "CloudScale Systems",
    image: "https://api.dicebear.com/7.x/avataaars/svg?seed=robert",
  },
];

function SpeakerCard({ speaker }: { speaker: Speaker }) {
  return (
    <div className="bg-white rounded-lg p-6 shadow-md hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1 flex flex-col items-center text-center">
      <Avatar className="w-32 h-32 mb-4 border-4 border-[#01BAEF]/20">
        <AvatarImage
          src={speaker.image}
          alt={`${speaker.name}, ${speaker.title} at ${speaker.company} - FEOYCS Summit 2025 speaker`}
        />
        <AvatarFallback>{speaker.name.charAt(0)}</AvatarFallback>
      </Avatar>
      <h3 className="text-xl font-bold text-[#0B4F6C] mb-1 font-['Roboto']">
        {speaker.name}
      </h3>
      <p className="text-[#01BAEF] font-medium mb-1 font-['Inter']">
        {speaker.title}
      </p>
      <p className="text-gray-600 text-sm font-['Inter']">{speaker.company}</p>
    </div>
  );
}

export default function Speakers() {
  return (
    <section id="speakers" className="py-20 px-6 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-[#0B4F6C] mb-4 font-['Roboto']">
            Featured Speakers
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto font-['Inter']">
            Learn from industry experts and thought leaders who are shaping the
            future of digital content management
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {speakers.map((speaker) => (
            <SpeakerCard key={speaker.id} speaker={speaker} />
          ))}
        </div>

        <div className="mt-12 text-center">
          <button className="px-8 py-3 bg-[#01BAEF] hover:bg-[#01BAEF]/90 text-white font-medium rounded-md transition-all duration-300 transform hover:scale-105 shadow-md hover:shadow-lg font-['Inter']">
            See All Speakers
          </button>
        </div>
      </div>
    </section>
  );
}
