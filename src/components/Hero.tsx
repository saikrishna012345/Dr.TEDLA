import { GraduationCap, Award, Globe } from "lucide-react";

import dpImage from '../components/images/dp.png';
export const Hero = () => {
  return (
    <section className="min-h-screen flex items-center justify-center bg-navy text-white py-20 px-4">
      <div className="container max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
        <div className="space-y-6 animate-fade-up">
          <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
            Dr. Jaya Shanker Tedla
          </h1>
          <h2 className="text-gold text-xl md:text-2xl font-medium">
            A Luminary in Physical Therapy and Community Service
          </h2>
          <p className="text-lg opacity-90">
            Associate Professor & Program Coordinator
            <br />
            Physical Therapy Program, King Khalid University
          </p>
          <div className="flex flex-wrap gap-4 pt-4">
            <div className="flex items-center gap-2">
              <GraduationCap className="text-gold" />
              <span>120+ Publications</span>
            </div>
            <div className="flex items-center gap-2">
              <Award className="text-gold" />
              <span>Multiple Patents</span>
            </div>
            <div className="flex items-center gap-2">
              <Globe className="text-gold" />
              <span>Global Impact</span>
            </div>
          </div>
        </div>
        <div className="relative animate-fade-up">
          <div className="aspect-square rounded-full overflow-hidden border-4 border-gold max-w-md mx-auto">
            <img
              src={dpImage}
              alt="Dr. Jaya Shanker Tedla"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
};