import { Button } from "@/components/ui/button";
import { FileDown } from "lucide-react";
import { toast } from "sonner";

export const Resume = () => {
  const handleDownload = () => {
    try {
      const link = document.createElement('a');
      link.href = '/resume.pdf';
      link.download = 'Dr-Tedla-Resume.pdf';
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
      
      toast.success("Resume download started");
    } catch (error) {
      toast.error("Failed to download resume");
    }
  };

  return (
    <section id="resume" className="py-20 bg-white">
      <div className="container max-w-4xl mx-auto px-4">
        <h2 className="text-3xl font-serif font-bold text-navy mb-8 text-center">
          Professional Resume
        </h2>
        
        <div className="space-y-8 mb-8">
          <div>
            <h3 className="text-xl font-serif font-bold text-navy mb-4 border-b border-gray-200 pb-2">
              Education
            </h3>
            <div className="space-y-3">
              <div>
                <h4 className="font-semibold">Ph.D. in Physical Therapy</h4>
                <p className="text-gray-600">Manipal University, India (2010 - 2014)</p>
              </div>
              <div>
                <h4 className="font-semibold">Master of Physical Therapy</h4>
                <p className="text-gray-600">Manipal University, India (2006 - 2008)</p>
              </div>
            </div>
          </div>
          
          <div>
            <h3 className="text-xl font-serif font-bold text-navy mb-4 border-b border-gray-200 pb-2">
              Experience
            </h3>
            <div className="space-y-3">
              <div>
                <h4 className="font-semibold">Associate Professor & Program Coordinator</h4>
                <p className="text-gray-600">King Khalid University, Saudi Arabia (2015 - Present)</p>
                <ul className="list-disc list-inside text-sm text-gray-600 mt-1">
                  <li>Leading research initiatives in physical therapy</li>
                  <li>Coordinating academic programs and curriculum development</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-xl font-serif font-bold text-navy mb-4 border-b border-gray-200 pb-2">
                Key Skills
              </h3>
              <ul className="list-disc list-inside text-gray-600 space-y-1">
                <li>Clinical Research</li>
                <li>Academic Leadership</li>
                <li>Program Development</li>
                <li>Student Mentorship</li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-xl font-serif font-bold text-navy mb-4 border-b border-gray-200 pb-2">
                Certifications
              </h3>
              <ul className="list-disc list-inside text-gray-600 space-y-1">
                <li>Neurodevelopmental Therapy</li>
                <li>Proprioceptive Neuromuscular Facilitation</li>
                <li>Sensory Integration</li>
                <li>Advanced Physical Therapy Practice</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="text-center">
          <Button 
            className="bg-navy hover:bg-navy/90 text-white"
            onClick={handleDownload}
          >
            <FileDown className="mr-2 h-4 w-4" />
            Download Full Resume
          </Button>
        </div>
      </div>
    </section>
  );
};