import { Mail, Linkedin, BookOpen, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";

export const Contact = () => {
  return (
    <section className="py-20 px-4 bg-navy text-white" id="contact">
      <div className="container max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-serif font-bold mb-12 text-center">
          Get in Touch
        </h2>
        <div className="grid md:grid-cols-2 gap-12">
          <div className="space-y-6">
            <h3 className="text-2xl font-bold mb-6">Contact Information</h3>
            <div className="space-y-4">
              <a href="mailto:contact@example.com" className="flex items-center gap-3 hover:text-gold transition-colors">
                <Mail className="w-5 h-5" />
                <span>cont@example.com</span>
              </a>
              <a href="mailto:contact@example.com" className="flex items-center gap-3 hover:text-gold transition-colors">
                <Mail className="w-5 h-5" />
                <span>cont@example.com</span>
              </a>
              <a href="tel:+1234567890" className="flex items-center gap-3 hover:text-gold transition-colors">
                <Phone className="w-5 h-5" />
                <span>+123 456 7890</span>
              </a>
              <a href="tel:+1234567890" className="flex items-center gap-3 hover:text-gold transition-colors">
                <Phone className="w-5 h-5" />
                <span>+123 456 7890</span>
              </a>
            </div>
           <div className="flex gap-4 pt-6">

           <a href="https://scholar.google.com/citations?user=vWc27OgAAAAJ&hl=en" target="_blank" rel="noopener noreferrer">
  <Button variant="outline" className="border-white hover:bg-white hover:text-navy text-black">
    <BookOpen className="w-4 h-4 mr-2" />
    Google Scholar
  </Button>
</a>
</div>

          </div>
          <div className="bg-white/10 p-6 rounded-lg backdrop-blur-sm">
            <form className="space-y-4">
              <div>
                <label className="block mb-2">Name</label>
                <input
                  type="text"
                  className="w-full p-2 rounded bg-white/20 border border-white/30 focus:outline-none focus:border-gold"
                />
              </div>
              <div>
                <label className="block mb-2">Email</label>
                <input
                  type="email"
                  className="w-full p-2 rounded bg-white/20 border border-white/30 focus:outline-none focus:border-gold"
                />
              </div>
              
              <div>
                <label className="block mb-2">Message</label>
                <textarea
                  rows={4}
                  className="w-full p-2 rounded bg-white/20 border border-white/30 focus:outline-none focus:border-gold"
                ></textarea>
              </div>
              <Button className="w-full bg-gold hover:bg-gold/90 text-navy">
                Send Message
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};