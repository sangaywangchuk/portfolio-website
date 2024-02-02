'use client';
import { useState } from 'react';

const ServiceCard = ({ service }: any) => {
  const [isHover, setIsHover] = useState<boolean>();

  const onMouseEnter = () => {
    setIsHover(true);
  };

  const onMouseLeave = () => {
    setIsHover(false);
  };
  return (
    <div
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
      onTouchStart={onMouseEnter}
      onTouchEnd={onMouseLeave}
      className={`service-card ${isHover ? `bg-primary-500` : ``} px-[${
        isHover ? 24 : 48
      }px]`}
    >
      {isHover ? (
        <div className="select-none space-y-[16px] text-center">
          <p className="font-poppins_medium text-[16px] text-white md:text-[18px]">
            {service.name}
          </p>
          <p className="font-poppins_thin text-[14px] text-white md:text-[16px]">
            {service.description}
          </p>
        </div>
      ) : (
        <div className="flex select-none flex-col items-center justify-center space-y-[24px] md:space-y-[40px]">
          <div className="flex h-[80px] w-[80px] justify-center">
            {service.icon}
          </div>
          <p className="text-textSecondary font-poppins text-center text-[16px] font-[500] md:text-[18px]">
            {service.name}
          </p>
        </div>
      )}
    </div>
  );
};
export default ServiceCard;
