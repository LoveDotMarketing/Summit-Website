import { useState } from "react";
import { cn } from "@/lib/utils";
import Header from "./landing/Header";
import Footer from "./landing/Footer";

interface Session {
  id: number;
  time: string;
  title: string;
  speaker: string;
  description: string;
}

interface Day {
  date: string;
  sessions: Session[];
}

const agenda: Day[] = [
  {
    date: "September 3rd, 2025",
    sessions: [
      {
        id: 1,
        time: "9:00 AM",
        title: "Opening Keynote: The Future of Digital Content",
        speaker: "Dr. Sarah Chen",
        description:
          "An exploration of emerging trends and technologies that will shape the future of content management and digital strategy.",
      },
      {
        id: 2,
        time: "11:00 AM",
        title: "Panel: Enterprise Content Strategy",
        speaker: "Michael Rodriguez, Emma Wilson, James Thompson",
        description:
          "Industry leaders discuss approaches to content strategy at scale for enterprise organizations.",
      },
      {
        id: 3,
        time: "2:00 PM",
        title: "Workshop: AI-Powered Content Operations",
        speaker: "Dr. Aisha Johnson",
        description:
          "Hands-on session exploring practical applications of AI in content workflows and operations.",
      },
      {
        id: 4,
        time: "4:30 PM",
        title: "Networking Reception",
        speaker: "",
        description: "Connect with speakers and attendees over refreshments.",
      },
    ],
  },
  {
    date: "September 4th, 2025",
    sessions: [
      {
        id: 5,
        time: "9:30 AM",
        title: "Keynote: Digital Transformation Journey",
        speaker: "David Park",
        description:
          "Case study of a successful enterprise-wide digital transformation initiative.",
      },
      {
        id: 6,
        time: "11:30 AM",
        title: "Technical Deep Dive: Next-Gen CMS Architecture",
        speaker: "Robert Kim",
        description:
          "Technical session on modern content management system architectures and implementation strategies.",
      },
      {
        id: 7,
        time: "2:30 PM",
        title: "Workshop: User-Centered Content Design",
        speaker: "Sophia Martinez",
        description:
          "Interactive workshop on creating content experiences that prioritize user needs and behaviors.",
      },
      {
        id: 8,
        time: "5:00 PM",
        title: "Gala Dinner",
        speaker: "",
        description:
          "Formal dinner with special guest speaker (to be announced).",
      },
    ],
  },
  {
    date: "September 5th, 2025",
    sessions: [
      {
        id: 9,
        time: "9:00 AM",
        title: "Roundtable Discussions",
        speaker: "Various Speakers",
        description:
          "Small group discussions on specialized topics in content management and strategy.",
      },
      {
        id: 10,
        time: "11:00 AM",
        title: "The Future of Content: Emerging Technologies",
        speaker: "Panel of Industry Experts",
        description:
          "Discussion on how AR, VR, and other emerging technologies will impact content creation and consumption.",
      },
      {
        id: 11,
        time: "2:00 PM",
        title: "Closing Keynote: Preparing for the Next Decade",
        speaker: "Industry Thought Leader",
        description:
          "Vision for the future of digital content management and strategy over the next decade.",
      },
      {
        id: 12,
        time: "3:30 PM",
        title: "Closing Remarks & Farewell",
        speaker: "Conference Organizers",
        description:
          "Summary of key takeaways and preview of next year's summit.",
      },
    ],
  },
];

export default function AgendaPage() {
  const [activeDay, setActiveDay] = useState(0);
  const [expandedSession, setExpandedSession] = useState<number | null>(null);

  const toggleSession = (sessionId: number) => {
    if (expandedSession === sessionId) {
      setExpandedSession(null);
    } else {
      setExpandedSession(sessionId);
    }
  };

  return (
    <div className="bg-nebula min-h-screen">
      <Header />
      <div className="pt-24">
        <section className="py-20 px-6 bg-nebula">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gold-dust mb-4">
                CONFERENCE AGENDA
              </h2>
              <p className="text-lg text-starlight max-w-3xl mx-auto">
                Three days of inspiring talks, workshops, and networking
                opportunities
              </p>
            </div>

            <div className="flex justify-center mb-12 border-b border-cosmic-blue">
              {agenda.map((day, index) => (
                <button
                  key={index}
                  onClick={() => setActiveDay(index)}
                  className={cn(
                    "px-6 py-3 font-medium text-lg transition-colors relative",
                    activeDay === index
                      ? "text-gold-dust border-b-2 border-gold-dust"
                      : "text-lunar hover:text-gold-dust",
                  )}
                >
                  {day.date}
                </button>
              ))}
            </div>

            <div className="relative">
              {/* Timeline line */}
              <div className="absolute left-0 md:left-1/4 top-0 bottom-0 w-px bg-cosmic-blue ml-6 md:ml-0"></div>

              <div className="space-y-8">
                {agenda[activeDay].sessions.map((session) => (
                  <div key={session.id} className="relative">
                    <div className="flex flex-col md:flex-row">
                      {/* Time and circle */}
                      <div className="md:w-1/4 mb-4 md:mb-0 flex">
                        <div className="relative z-10 w-12 h-12 rounded-full bg-cosmic-blue flex items-center justify-center text-starlight font-bold ml-0 md:-ml-6">
                          {session.id}
                        </div>
                        <div className="ml-4 md:ml-6">
                          <p className="font-bold text-gold-dust">
                            {session.time}
                          </p>
                        </div>
                      </div>

                      {/* Session content */}
                      <div className="md:w-3/4 pl-12 md:pl-0">
                        <div
                          className={cn(
                            "bg-cosmic-blue border border-lunar/30 rounded-lg p-6 shadow-sm hover:shadow-md transition-all cursor-pointer",
                            expandedSession === session.id ? "shadow-md" : "",
                          )}
                          onClick={() => toggleSession(session.id)}
                        >
                          <h3 className="text-xl font-bold text-gold-dust mb-2">
                            {session.title}
                          </h3>
                          {session.speaker && (
                            <p className="text-starlight font-medium mb-2">
                              {session.speaker}
                            </p>
                          )}

                          {expandedSession === session.id && (
                            <div className="mt-4 text-lunar">
                              <p>{session.description}</p>
                            </div>
                          )}

                          <div className="mt-2 text-sm text-rocket-red font-medium">
                            {expandedSession === session.id
                              ? "Click to collapse"
                              : "Click for details"}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
      </div>
      <Footer />
    </div>
  );
}
