import React from "react";
import { LabPackageCard } from "@/components/LabPackageCard";
import { labPackages } from "@/app/constants/constants";

const LabPackageList = () => {
  return (
    <div className="space-y-4 p-20">
    <p style={{fontWeight:"600",fontSize:"22px",lineHeight:"28px", marginBottom:"10px"}}>Book Lab Tests</p>
      {labPackages.map((pkg) => (
        <LabPackageCard
          key={pkg.packageId}
          packageDisplayName={pkg.packageDisplayName}
          reportsTatText={pkg.reportsTatText}
          isHomeSampleAvailable={pkg.isHomeSampleAvailable}
          isCenterVisitPackage={pkg.isCenterVisitPackage}
          priceRange={pkg.priceRange}
          price={pkg.price}
          discount={pkg.discount}
          isAvailable={pkg.isAvailable}
        />
      ))}
    </div>
  );
};

export default LabPackageList;
