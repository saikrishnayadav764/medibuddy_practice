import React from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { PackageCard } from "@/components/PackageCard";
import {packages} from "@/app/constants/constants"; 

function PackageCarousel() {
  return (
    <div style={{background:"rgb(232, 242, 254)"}} className="p-20">
    <p style={{fontWeight:"600",fontSize:"22px",lineHeight:"28px", marginBottom:"10px"}}>Featured Health Check-up Packages</p>
      <Carousel>
        <CarouselContent className="flex space-x-4">
          {packages.map((pkg) => (
            <CarouselItem
              key={pkg.packageId}
              className="flex-shrink-0 w-full max-w-md"
            >
              <PackageCard
                packageDisplayName={pkg.packageDisplayName}
                reportsTatText={pkg.reportsTatText}
                testCount={pkg.testCount}
                testsSummary={pkg.testsSummary}
                isRadiologyIncluded={pkg.isRadiologyIncluded}
                consultationCount={pkg.consultationCount}
                fastingHoursText={pkg.fastingHoursText}
                priceRange={pkg.priceRange}
                price={pkg.price}
                discount={pkg.discount}
                isAvailable={pkg.isAvailable}
              />
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious className="absolute left-0 top-1/2 -translate-y-1/2 bg-gray-800 text-white p-2 rounded-full shadow-lg">
          &#8592;
        </CarouselPrevious>
        <CarouselNext className="absolute right-0 top-1/2 -translate-y-1/2 bg-gray-800 text-white p-2 rounded-full shadow-lg">
          &#8594;
        </CarouselNext>
      </Carousel>
    </div>
  );
}

export default PackageCarousel;
