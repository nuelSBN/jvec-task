import { images } from "@/constants";

export const VisionMissionCard = ({
  title,
  image,
  description,
}: {
  title: string;
  image: string;
  description: string;
}) => {
  return (
    <div className="bg-gradient-to-r from-[#01B4DE] via-transparent to-[#01B4DE] p-[1px] rounded-[10px] w-full sm:w-[600px] h-fit mb-8">
      <div className="w-full h-full p-8 rounded-[10px] relative bg-[#030517] text-white overflow-hidden">
        <img
          src={images.topGradient}
          alt="Gradient background"
          className="absolute top-0 right-0 z-0 w-full"
        />
        <div className="relative z-10 flex flex-col gap-4">
          <div className="flex justify-center items-center">
            <img
              src={image}
              alt={`${title} Image`}
              className="w-full sm:w-[150px] h-auto"
            />
          </div>
          <h1 className="text-[28px] sm:text-[48px] font-bold text-center">
            {title}
          </h1>
          <p className="text-[16px] sm:text-[20px] font-normal leading-relaxed text-center">
            {description}
          </p>
        </div>
      </div>
    </div>
  );
};
