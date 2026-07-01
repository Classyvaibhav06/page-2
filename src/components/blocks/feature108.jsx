import { Tabs, TabsContent, TabsList, TabsTrigger } from "@radix-ui/react-tabs";
import { Layout, Pointer, Zap, ArrowRight, Check } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

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
          "A real-time performance dashboard that connects your ad spend directly to booked procedures. Track CPL, ROAS, consultation-to-patient conversion rate, and revenue \u2014 all in one place. No more guessing what is working.",
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
          "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2070&auto=format&fit=crop",
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
          "Stop losing leads to clunky landing pages. Our custom-built acquisition funnels are designed specifically for aesthetic clinics to maximize booking rates and minimize drop-off.",
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
          "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?q=80&w=2053&auto=format&fit=crop",
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
          "Build undeniable trust before the patient ever walks through your doors. We help you showcase your expertise, before-and-afters, and patient testimonials in a way that commands premium pricing.",
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
  return (
    <section className="py-24 bg-stone-50">
      <div className="max-w-[1440px] mx-auto px-6">
        <div className="flex flex-col items-center gap-4 text-center mb-16">
          <span className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-[#8b3a3a]">
            <span className="inline-block w-1.5 h-1.5 rounded-full bg-[#8b3a3a]" />
            {badge}
          </span>
          <h2 className="font-playfair text-4xl md:text-5xl font-bold text-stone-900 leading-tight">
            {heading}
          </h2>
          <p className="text-stone-500 text-lg max-w-2xl">{description}</p>
        </div>
        <Tabs defaultValue={tabs[0].value} className="mt-8">
          <TabsList className="container flex flex-col items-center justify-center gap-4 sm:flex-row md:gap-10">
            {tabs.map((tab) => (
              <TabsTrigger
                key={tab.value}
                value={tab.value}
                className="flex items-center gap-2 rounded-xl px-5 py-3 text-sm font-semibold text-stone-500 data-[state=active]:bg-white data-[state=active]:text-[#8b3a3a] data-[state=active]:shadow-sm transition-all"
              >
                {tab.icon} {tab.label}
              </TabsTrigger>
            ))}
          </TabsList>
          <div className="mx-auto mt-12 rounded-3xl bg-white border border-stone-100 shadow-sm p-8 lg:p-16">
            {tabs.map((tab) => (
              <TabsContent
                key={tab.value}
                value={tab.value}
                className="grid gap-16 lg:grid-cols-2 items-center outline-none focus-visible:ring-0"
              >
                <div className="flex flex-col gap-6">
                  <Badge variant="outline" className="w-fit bg-stone-50 text-[#8b3a3a] border-[#8b3a3a]/20 font-playfair text-xl px-4 py-1">
                    {tab.content.badge}
                  </Badge>
                  <div>
                    <h3 className="font-playfair text-4xl font-bold text-stone-900 mb-2">
                      {tab.content.title}
                    </h3>
                    <p className="text-[#8b3a3a] font-medium text-sm mb-6">
                      {tab.content.subtitle}
                    </p>
                    <p className="text-stone-500 text-base leading-relaxed mb-8">
                      {tab.content.description}
                    </p>
                    <ul className="space-y-3 mb-10">
                      {tab.content.features.map((feature, idx) => (
                        <li key={idx} className="flex items-start gap-3 text-stone-600 text-sm">
                          <Check className="w-4 h-4 text-[#8b3a3a] shrink-0 mt-0.5" />
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="flex items-center justify-between mt-auto pt-6 border-t border-stone-100">
                    <div>
                      <p className="font-playfair text-3xl font-bold text-[#8b3a3a]">{tab.content.metricValue}</p>
                      <p className="text-xs text-stone-400 uppercase tracking-wider mt-1">{tab.content.metricLabel}</p>
                    </div>
                    <Button className="rounded-full bg-[#8b3a3a] hover:bg-[#7a3131] text-white px-6 py-5 flex items-center gap-2">
                      {tab.content.buttonText} <ArrowRight className="w-4 h-4" />
                    </Button>
                  </div>
                </div>
                <div className="relative h-[500px] w-full rounded-2xl overflow-hidden shadow-xl border border-stone-100/50">
                  <img
                    src={tab.content.imageSrc}
                    alt={tab.content.imageAlt}
                    className="absolute inset-0 w-full h-full object-cover object-left"
                  />
                  <div className="absolute inset-0 bg-gradient-to-r from-white/10 to-transparent pointer-events-none" />
                </div>
              </TabsContent>
            ))}
          </div>
        </Tabs>
      </div>
    </section>
  );
};

export { Feature108 };
