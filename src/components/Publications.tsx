import { ExternalLink, BookOpen } from "lucide-react";
import { Button } from "@/components/ui/button";

export const Publications = () => {
  const publications = [
    {
      title: "Assessing the quality of life in children with autism spectrum disorder: a cross-sectional study of contributing factors",
      journal: "Frontiers in Psychiatry",
      year: 2024,
      link: "https://scholar.google.com/citations?view_op=view_citation&hl=en&user=vWc27OgAAAAJ&sortby=pubdate&citation_for_view=vWc27OgAAAAJ:LPZeul_q3PIC"
    },
    {
      title: "Studying turn performance, trunk control, and mobility in acute stroke subjects: a cross-sectional study",
      journal: "PeerJ Inc",
      year: 2024,
      link: "https://scholar.google.com/citations?view_op=view_citation&hl=en&user=vWc27OgAAAAJ&sortby=pubdate&citation_for_view=vWc27OgAAAAJ:fQNAKQ3IYiAC"
    },
    {
      title: "Carrying angle among young adults of Saudi Arabia and its correlation with demographic characteristics: A cross sectional study",
      journal: "Folia Morphologica",
      year: 2024,
      link: "https://scholar.google.com/citations?view_op=view_citation&hl=en&user=vWc27OgAAAAJ&sortby=pubdate&citation_for_view=vWc27OgAAAAJ:vRqMK49ujn8C"
    }
  ];

  return (
    <section className="py-20 px-4 bg-gray-50" id="publications">
      <div className="container max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-serif font-bold text-navy mb-12 text-center">
          Recent Publications
        </h2>
        <div className="grid gap-6 mb-12">
          {publications.map((pub, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow hover:shadow-lg transition-shadow">
              <h3 className="font-bold text-lg mb-2">{pub.title}</h3>
              <div className="flex items-center gap-4 text-sm text-gray-600">
                <span>{pub.journal}</span>
                <span>•</span>
                <span>{pub.year}</span>
              </div>
              <Button variant="link" className="mt-4 p-0 h-auto text-accent hover:text-accent/80"disabled={pub.link === "#"}
                  onClick={() => pub.link !== "" && window.open(pub.link, "_blank")}>
                <ExternalLink className="w-4 h-4 mr-2" />
                View Publication
              </Button>
            </div>
          ))}
        </div>
        <div className="text-center">
        <Button
          className="bg-navy hover:bg-navy/90 text-white"
          onClick={() => window.open('https://scholar.google.com/citations?user=vWc27OgAAAAJ&hl=en', '_blank')}
          >
          <BookOpen className="w-4 h-4 mr-2" />
            View All Publications
        </Button>
        </div>
      </div>
    </section>
  );
};