import { FEATURES } from "@/constants";
import Image from "next/image";
import Container from "../global/container";
import { MagicCard } from "../ui/magic-card";

const Features = () => {
  return (
    <section className="w-full py-20">
      <Container>
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white leading-tight">
            AI-Powered Development <br />
            <span className="italic font-light">made simple</span>
          </h2>
          <p className="mt-4 text-muted-foreground text-base sm:text-lg">
            Empower your engineering workflow with intelligent automation, efficient coding, and streamlined testing.
          </p>
        </div>

        {/* Feature Grid */}
        <div className="mx-auto max-w-7xl grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 px-4">
          {FEATURES.slice(0, 6).map((feature, index) => (
            <MagicCard
              key={feature.title}
              gradientFrom="#38bdf8"
              gradientTo="#3b82f6"
              className="flex flex-col justify-between h-full rounded-2xl p-5 lg:p-6 bg-card border border-border/50 hover:border-border/100 transition-all duration-200"
              gradientColor="rgba(59,130,246,0.1)"
            >
              <div className="flex flex-col gap-3">
                <div className="flex items-center gap-2">
                  <feature.icon className="size-5 text-primary" />
                  <h3 className="text-lg font-semibold text-white">
                    {feature.title}
                  </h3>
                </div>
                <p className="text-sm text-muted-foreground">{feature.description}</p>
              </div>

              {feature.image && (
                <div className="mt-6 w-full overflow-hidden rounded-xl">
                  <Image
                    src={feature.image}
                    alt={feature.title}
                    width={500}
                    height={300}
                    className="w-full h-auto object-cover"
                  />
                </div>
              )}
            </MagicCard>
          ))}
        </div>
      </Container>
    </section>
  );
};

export default Features;
