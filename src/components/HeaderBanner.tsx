import React from 'react';

interface HeaderBannerProps {
  title?: string;
  subtitle?: string;
}

export const HeaderBanner: React.FC<HeaderBannerProps> = ({
  title = "The Core Collection",
  subtitle = "Elevated essentials designed for effortless, everyday refinement. Stripped back to what matters."
}) => {
  return (
    <section className="px-5 md:px-16 pt-10 pb-8 text-center border-b border-[#c4c7c7]/30 bg-[#fdf8f8]">
      <h1 className="font-serif text-2xl md:text-4xl font-normal text-[#1c1b1b] mb-2 tracking-tight">
        {title}
      </h1>
      <p className="font-sans text-sm md:text-base text-[#444748] max-w-md mx-auto leading-relaxed">
        {subtitle}
      </p>
    </section>
  );
};
