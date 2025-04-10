import { images } from "@/constants";
import { Button } from "../button";
import SectionSubtitle from "../section-subtitle";
import SectionTitle from "../sections-title";

export function Compliance() {
  return (
    <section className="py-8 flex flex-col gap-8 items-center">
      <div className="flex flex-col gap-8 items-center">
        <SectionTitle
          title="Compliance Certifications/ Standards We Specialize In"
          clx="w-[90%] sm:w-[60%] text-center"
        />
        <SectionSubtitle
          text=" Elevate Your Organization's Security Posture with Our Compliance/Standards Consulting Services"
          clx="w-[90%] sm:w-[60%] text-center"
          color="text-white"
        />
        <Button size="small">Contact us</Button>
      </div>
      <img
        src={images.complianceBanner}
        alt="Compliance Banner"
        className="w-[80%] lg:w-auto "
        // className="w-full h-auto lg:h-[500px] object-cover"
      />
    </section>
  );
}
