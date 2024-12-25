import { Award, GraduationCap, Globe, Book, Stethoscope, Languages } from "lucide-react";

export const Biography = () => {
  const recentAwards = [
    "Physical Therapy Excellence Award by Krishna Institute of Medical Sciences, India (June 2024)",
    "Certificate of Appreciation as Resource Person for Neurological Physical Therapy Workshop, Krishna Institute of Medical Sciences (June 2024)",
    "Certificate of Appreciation as Coordinator of Physical Therapy Program, King Khalid University (June 2024)",
    "Best Community Services Award, College of Applied Medical Sciences, King Khalid University (May 2024)",
    "Certificate of Achievement for Kinesio Taping Therapy Workshop, King Khalid University (April 2024)",
    "Certificate of Achievement for Type 2 Diabetes Workshop, King Khalid University (January 2024)",
    "Global Achievers Award for Outstanding Achievements in Physiotherapy, KTK Foundation (December 2023)",
    "Certificate of Excellence as Best Physiotherapist, KTK Foundation, New Delhi"
  ];

  return (
    <section className="py-20 px-4 bg-white" id="biography">
      <div className="container max-w-6xl mx-auto space-y-12">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-navy mb-6">
            Meet Dr. Jaya Shanker Tedla
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Associate Professor & Program Coordinator at King Khalid University, with over 20 years of experience in physical therapy education and patient care.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          <div className="space-y-8">
            <div className="flex gap-4 items-start">
              <GraduationCap className="w-6 h-6 text-gold flex-shrink-0 mt-1" />
              <div>
                <h3 className="text-xl font-bold mb-2">Education & Expertise</h3>
                <p className="text-gray-600">
                  Holds Bachelor's, Master's, and Ph.D in Physical Therapy from Manipal University, India, with post-doctoral fellowships in non-invasive brain stimulation from Brazil and USA. Certified in neurodevelopmental therapy, proprioceptive neuromuscular facilitation, and sensory integration.
                </p>
              </div>
            </div>

            <div className="flex gap-4 items-start">
              <Book className="w-6 h-6 text-gold flex-shrink-0 mt-1" />
              <div>
                <h3 className="text-xl font-bold mb-2">Research & Publications</h3>
                <p className="text-gray-600">
                  Published over 120 research papers in peer-reviewed international journals, secured multiple research grants, and holds three patents in Physical therapy. Author of 2 textbooks and serves as editor for multiple prestigious journals.
                </p>
              </div>
            </div>

            <div className="flex gap-4 items-start">
              <Stethoscope className="w-6 h-6 text-gold flex-shrink-0 mt-1" />
              <div>
                <h3 className="text-xl font-bold mb-2">Clinical Experience</h3>
                <p className="text-gray-600">
                  Treated over 100,000 patients across India, Iraq, Dubai, USA, Brazil, and Saudi Arabia. Holds additional diplomas in yoga therapy, acupuncture, osteopathy, and manipulation therapy.
                </p>
              </div>
            </div>
          </div>

          <div className="space-y-8">
            <div className="flex gap-4 items-start">
              <Globe className="w-6 h-6 text-gold flex-shrink-0 mt-1" />
              <div>
                <h3 className="text-xl font-bold mb-2">Global Impact</h3>
                <p className="text-gray-600">
                  Worked with Kurdistan Children Foundation for rehabilitation of chemical warfare victims. Conducted over 50 workshops worldwide and participated in more than 300 workshops and 50 conferences globally.
                </p>
              </div>
            </div>

            <div className="flex gap-4 items-start">
              <Languages className="w-6 h-6 text-gold flex-shrink-0 mt-1" />
              <div>
                <h3 className="text-xl font-bold mb-2">Languages & Leadership</h3>
                <p className="text-gray-600">
                  Fluent in eight languages. President of Saudi Arabia Telugu Association South Region and Parent Teachers Association at Lana Advanced International School, demonstrating strong community leadership.
                </p>
              </div>
            </div>

            <div className="flex gap-4 items-start">
              <Award className="w-6 h-6 text-gold flex-shrink-0 mt-1" />
              <div>
                <h3 className="text-xl font-bold mb-2">Recent Awards</h3>
                <ul className="text-gray-600 space-y-2">
                  {recentAwards.slice(0, 4).map((award, index) => (
                    <li key={index} className="text-sm">• {award}</li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};