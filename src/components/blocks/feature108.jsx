import { Tabs, TabsContent, TabsList, TabsTrigger } from "@radix-ui/react-tabs";
import { Layout, Pointer, Zap, ArrowRight, Check } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { AnimatedLinkButton } from "@/components/ui/animated-link-button";

const Feature108 = ({
  badge = "Performance",
  heading = "Growth Analytics & Tracking",
  description = "A real-time performance dashboard that connects your ad spend directly to booked procedures. No more guessing what is working.",
  tabs = [
    {
      value: "tab-1",
      icon: <Zap className="h-auto w-4 shrink-0" />,
      label: "Growth Analytics",
      content: {
        badge: "04 \u2197",
        title: "Growth Analytics",
        subtitle: "Know your exact cost-per-patient, every day",
        description:
          "A real-time dashboard connecting ad spend to booked procedures. Track CPL, ROAS, and revenue.",
        features: [
          "Real-time revenue attribution dashboard",
          "Procedure-level CPL & ROAS tracking",
          "Weekly growth reports & strategy calls",
          "Competitor benchmark analysis"
        ],
        buttonText: "Learn More",
        metricValue: "$3.80",
        metricLabel: "Avg. CPL",
        imageSrc:
          "https://i.pinimg.com/1200x/75/1e/f4/751ef4fcb0604fb69214e69f30125e59.jpg",
        imageAlt: "Growth analytics dashboard",
      },
    },
    {
      value: "tab-2",
      icon: <Pointer className="h-auto w-4 shrink-0" />,
      label: "Patient Acquisition",
      content: {
        badge: "05 \u2197",
        title: "Acquisition Funnels",
        subtitle: "Convert clicks into consultations automatically",
        description:
          "Stop losing leads to clunky landing pages. Custom-built funnels designed to maximize booking rates.",
        features: [
          "High-converting landing page designs",
          "Automated lead nurturing sequences",
          "Frictionless booking integration",
          "A/B testing for continuous optimization"
        ],
        buttonText: "Learn More",
        metricValue: "42%",
        metricLabel: "Conversion Rate",
        imageSrc:
          "/image copy 2.png",
        imageAlt: "Patient acquisition funnels",
      },
    },
    {
      value: "tab-3",
      icon: <Layout className="h-auto w-4 shrink-0" />,
      label: "Brand Authority",
      content: {
        badge: "06 \u2197",
        title: "Brand Authority",
        subtitle: "Position your clinic as the premium choice",
        description:
          "Build undeniable trust before the patient arrives. Showcase your expertise to command premium pricing.",
        features: [
          "Premium content strategy & production",
          "Social proof amplification",
          "Authority-building PR placements",
          "Reputation management systems"
        ],
        buttonText: "Learn More",
        metricValue: "4.9/5",
        metricLabel: "Patient Satisfaction",
        imageSrc:
          "https://images.unsplash.com/photo-1629909613654-28e377c37b09?q=80&w=2068&auto=format&fit=crop",
        imageAlt: "Brand authority and trust",
      },
    },
  ],
}) => {
  const item1 = tabs[0]?.content;
  const item2 = tabs[1]?.content;
  const item3 = tabs[2]?.content;

  const renderContent = (content) => (
    <div className="flex flex-col gap-3 h-full">
      <Badge variant="outline" className="w-fit bg-stone-50 text-[#127369] border-[#127369]/20 font-playfair text-base px-2.5 py-0.5">
        {content.badge}
      </Badge>
      <div>
        <h3 className="font-playfair text-xl md:text-2xl font-bold text-stone-900 mb-1">
          {content.title}
        </h3>
        <p className="text-[#127369] font-medium text-xs mb-2">
          {content.subtitle}
        </p>
        <p className="text-stone-500 text-xs leading-relaxed mb-3">
          {content.description}
        </p>
        <ul className="space-y-1.5 mb-3">
          {content.features.slice(0, 2).map((feature, idx) => (
            <li key={idx} className="flex items-start gap-2 text-stone-600 text-[11px]">
              <Check className="w-3 h-3 text-[#127369] shrink-0 mt-0.5" />
              <span>{feature}</span>
            </li>
          ))}
        </ul>
      </div>
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 mt-auto pt-3 border-t border-stone-100">
        <div>
          <p className="font-playfair text-xl font-bold text-[#127369]">{content.metricValue}</p>
          <p className="text-[9px] text-stone-400 uppercase tracking-wider">{content.metricLabel}</p>
        </div>
        <AnimatedLinkButton>
          {content.buttonText}
        </AnimatedLinkButton>
      </div>
    </div>
  );

  return (
    <section className="py-12 lg:py-16 bg-stone-50">
      <div className="max-w-[1440px] mx-auto px-6">
        <div className="flex flex-col items-center gap-2 text-center mb-8">
          <span className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-[#127369]">
            <span className="inline-block w-1.5 h-1.5 rounded-full bg-[#127369]" />
            {badge}
          </span>
          <h2 className="font-playfair text-3xl md:text-4xl font-bold text-stone-900 leading-tight">
            {heading}
          </h2>
          <p className="text-stone-500 text-base max-w-2xl">{description}</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 mt-6">
          {/* Top Featured Item - Full Width */}
          {item1 && (
            <div className="lg:col-span-2 rounded-2xl bg-white border border-stone-100 shadow-sm p-5 md:p-6 flex flex-col lg:flex-row gap-6 items-stretch">
              <div className="flex-1">
                {renderContent(item1)}
              </div>
              <div className="flex-1 w-full relative min-h-[160px] lg:min-h-[220px] rounded-xl overflow-hidden shadow-sm border border-stone-100/50">
                <img
                  src={item1.imageSrc}
                  alt={item1.imageAlt}
                  className="absolute inset-0 w-full h-full object-cover object-left"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-white/10 to-transparent pointer-events-none" />
              </div>
            </div>
          )}

          {/* Bottom Left Item */}
          {item2 && (
            <div className="rounded-2xl bg-white border border-stone-100 shadow-sm p-5 md:p-6 flex flex-col xl:flex-row gap-5 items-stretch">
              <div className="flex-1">
                {renderContent(item2)}
              </div>
              <div className="xl:w-2/5 relative aspect-video xl:aspect-auto w-full rounded-xl overflow-hidden shadow-sm border border-stone-100/50">
                <img
                  src={item2.imageSrc}
                  alt={item2.imageAlt}
                  className="absolute inset-0 w-full h-full object-cover object-center"
                />
                <div className="absolute inset-0 bg-gradient-to-t xl:bg-gradient-to-l from-black/5 to-transparent pointer-events-none" />
              </div>
            </div>
          )}

          {/* Bottom Right Item */}
          {item3 && (
            <div className="rounded-2xl bg-white border border-stone-100 shadow-sm p-5 md:p-6 flex flex-col xl:flex-row gap-5 items-stretch">
              <div className="flex-1">
                {renderContent(item3)}
              </div>
              <div className="xl:w-2/5 relative aspect-video xl:aspect-auto w-full rounded-xl overflow-hidden shadow-sm border border-stone-100/50">
                <img
                  src={item3.imageSrc}
                  alt={item3.imageAlt}
                  className="absolute inset-0 w-full h-full object-cover object-center"
                />
                <div className="absolute inset-0 bg-gradient-to-t xl:bg-gradient-to-l from-black/5 to-transparent pointer-events-none" />
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export { Feature108 };
