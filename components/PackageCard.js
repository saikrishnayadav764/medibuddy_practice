import React from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

export function PackageCard({
  packageDisplayName,
  reportsTatText,
  testCount,
  testsSummary,
  isRadiologyIncluded,
  consultationCount,
  fastingHoursText,
  priceRange,
  price,
  discount,
  isAvailable,
}) {
  return (
    <Card className="max-w-md border rounded-lg shadow-sm p-4">
      <CardHeader className="pb-2">
        <CardTitle className="text-lg font-semibold text-gray-800">
          {packageDisplayName}
        </CardTitle>
        <CardDescription className="text-sm text-gray-500">
          {reportsTatText}
        </CardDescription>
      </CardHeader>

      <CardContent className="text-sm text-gray-700">
        <div className="mb-2">
          <span className="font-medium">{testCount} Tests</span>
          <ul className="list-disc pl-5 text-gray-600">
            {testsSummary.map((test, index) => (
              <li key={index}>{test}</li>
            ))}
          </ul>
        </div>
        <div className="mb-2">
          <span className="font-medium">Includes</span>
          <ul className="list-none pl-0 text-gray-600">
            {isRadiologyIncluded && (
              <li className="flex items-center">
                <span className="mr-2">🩻</span> Radiology
              </li>
            )}
            {consultationCount > 0 && (
              <li className="flex items-center">
                <span className="mr-2">👨‍⚕️</span> {consultationCount}{" "}
                Consultation(s)
              </li>
            )}
          </ul>
        </div>
        <div className="mb-2 flex justify-between text-gray-600">
          <span>Available at:</span>
          <span className="font-medium">🏥 Center</span>
        </div>
        <div className="mb-2 flex justify-between text-gray-600">
          <span>Fasting:</span>
          <span className="font-medium">{fastingHoursText}</span>
        </div>
      </CardContent>

      <CardFooter className="pt-2 flex flex-col gap-2">
        <div className="flex items-center justify-between">
          <div className="text-sm">
            <span className="line-through text-gray-500">₹{priceRange}</span>
            <span className="ml-2 text-green-600 font-medium">{discount}% OFF</span>
          </div>
          <div className="text-lg font-bold text-blue-800">₹{price}/-</div>
        </div>
        <button
          className={`w-full py-2 text-white font-medium rounded ${
            isAvailable ? "bg-blue-600 hover:bg-blue-700" : "bg-gray-400"
          }`}
          disabled={!isAvailable}
        >
          {isAvailable ? "Add" : "Unavailable"}
        </button>
      </CardFooter>
    </Card>
  );
}
