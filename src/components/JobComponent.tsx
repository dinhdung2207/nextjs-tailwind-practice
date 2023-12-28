import * as React from "react";

export interface IJobComponentProps {
  icon: React.ReactNode;
  bgClass: string;
  jobTitle: string;
}

export default function JobComponent({
  icon,
  bgClass,
  jobTitle,
}: IJobComponentProps) {
  return (
    <div
      className={`rounded-lg p-6 h-[108px] w-[112px] ${bgClass} flex items-center cursor-pointer`}
    >
      <p className="flex flex-col items-center w-[64px]">
        {icon}
        {jobTitle}
      </p>
    </div>
  );
}
