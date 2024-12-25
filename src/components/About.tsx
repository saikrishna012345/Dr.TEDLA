import { Book, Users, Heart } from "lucide-react";

export const About = () => {
  return (
    <section className="py-20 px-4 bg-white" id="about">
      <div className="container max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-serif font-bold text-navy mb-12 text-center">
          About Me
        </h2>
        <div className="grid md:grid-cols-3 gap-8">
          <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow">
            <Book className="w-12 h-12 text-gold mb-4" />
            <h3 className="text-xl font-bold mb-3">Academic Excellence</h3>
            <p className="text-gray-600">
              Leading research in physical therapy with over 120 published papers and multiple patents.
            </p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow">
            <Users className="w-12 h-12 text-gold mb-4" />
            <h3 className="text-xl font-bold mb-3">Leadership</h3>
            <p className="text-gray-600">
              Program Coordinator at King Khalid University, shaping the future of physical therapy education.
            </p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow">
            <Heart className="w-12 h-12 text-gold mb-4" />
            <h3 className="text-xl font-bold mb-3">Community Impact</h3>
            <p className="text-gray-600">
              Active leader in the Saudi Arabia Telugu Association and humanitarian efforts worldwide.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};