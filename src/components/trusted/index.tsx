import { images } from "@/constants";
import SectionSubtitle from "../section-subtitle";
import SectionTitle from "../sections-title";

export function Trusted() {
  return (
    <section
      style={{ background: `url(${images.line})` }}
      className="py-10 px-4 md:px-8 flex flex-col gap-10 bg-no-repeat bg-cover"
    >
      <div className="flex flex-col w-full max-w-[1200px] mx-auto gap-6 text-center">
        <SectionTitle title="Why we are your Trusted Consultant" />
        <SectionSubtitle text="Empowering Businesses with Cutting-edge Technology" />
        <p className="text-[#D2D2D2] text-xl sm:text-2xl md:text-[32px] font-light leading-snug">
          Excellence isn’t a goal, it’s our DNA; our relentless pursuit of
          excellence is the driving force behind our success. Excellence is our
          legacy, and we are proud to carry it forward.
        </p>
      </div>

      <div
        style={{ background: `url(${images.middleGradient})` }}
        className="flex flex-col justify-center items-center py-8 gap-6 bg-cover bg-center"
      >
        <SectionSubtitle
          text={`Watch the video to see how we are innovating to keep businesses on top\nof their games.`}
          color="text-[#D2D2D2]"
          clx="max-w-[900px] mx-auto"
        />

        <img
          src={images.smilingPeople}
          alt="Smiling business people"
          className="w-full max-w-[1000px] h-auto rounded-xl object-cover"
        />
      </div>
    </section>
  );
}
