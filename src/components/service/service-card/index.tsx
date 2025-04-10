import React from "react";

interface ServiceCardProps {
  title: string;
  description: string;
  image: string;
}

const ServiceCard: React.FC<ServiceCardProps> = ({
  title,
  description,
  image,
}) => {
  return (
    <div
      style={{ background: "linear-gradient(to right, #04040A, #13163C)" }}
      className="p-6 rounded-xl text-white flex flex-col sm:flex-row gap-4 justify-between items-center shadow-md hover:shadow-lg transition-all"
    >
      <div className="flex-1">
        <h3 className="font-bold text-[24px] sm:text-[28px] md:text-[32px] leading-tight mb-2">
          {title}
        </h3>
        <p className="text-base sm:text-lg md:text-xl text-[#BBBBBB]">
          {description}
        </p>
      </div>
      <div className="flex-shrink-0">
        <img
          src={image}
          alt={title}
          className="w-[120px] sm:w-[150px] md:w-[180px] object-contain"
        />
      </div>
    </div>
  );
};

export default ServiceCard;
