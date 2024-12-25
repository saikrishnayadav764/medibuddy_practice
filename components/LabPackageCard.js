import React from "react";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

export const LabPackageCard = ({
  packageDisplayName,
  reportsTatText,
  isHomeSampleAvailable,
  isCenterVisitPackage,
  priceRange,
  price,
  discount,
  isAvailable,
}) => {
  return (
    <Card className="border rounded-lg shadow-md">
      <CardHeader >
        <CardTitle className="text-md text-gray-800">
          {packageDisplayName}
        </CardTitle>
      </CardHeader>
      <CardContent>
        <p className="text-sm text-gray-600 flex items-center gap-2">
          <span>🕒</span> {reportsTatText}
        </p>
        <p className="mt-2 text-sm text-gray-800">
          Available at:{" "}
          <span className={isHomeSampleAvailable ? "text-red-600" : ""}>
            {isHomeSampleAvailable && "🏠 Home "}
          </span>
          <span className={isCenterVisitPackage ? "text-blue-600" : ""}>
            {isCenterVisitPackage && "🔵 Center"}
          </span>
        </p>
      </CardContent>
      <CardFooter className="flex justify-between items-center ">
        <div className="flex flex-col">
          <div className="text-sm text-gray-400 line-through">
            ₹ {priceRange}/-
          </div>
          <div className="flex items-center gap-2">
            <div className="text-green-600 text-sm font-semibold">
              {discount}% OFF
            </div>
            <div className="text-lg font-semibold text-gray-900">
              ₹ {price}/-
            </div>
          </div>
        </div>
        <button
          className={`px-4 py-2 text-sm font-medium rounded-md ${
            isAvailable
              ? "bg-blue-600 text-white hover:bg-blue-700"
              : "bg-gray-300 text-gray-600 cursor-not-allowed"
          }`}
          disabled={!isAvailable}
        >
          {isAvailable ? "Add" : "Unavailable"}
        </button>
      </CardFooter>
    </Card>
  );
};
