import React from "react";
import AddPropertyForm from "./_components/AddPropertyForm";
import prisma from "@/lib/prisma";

const AddPropertyPage = async () => {
  try {
    const [propertyTypes, propertyStatuses] = await Promise.all([
      prisma.propertyType.findMany(),
      prisma.propertyStatus.findMany(),
    ]);

    return (
      <div className="max-w-5xl mx-auto p-4">
        <h1 className="text-2xl font-bold mb-6">Add New Property</h1>
        <AddPropertyForm 
          types={propertyTypes} 
          statuses={propertyStatuses} 
        />
      </div>
    );
    
  } catch (error) {
    console.error("Error loading property data:", error);
    return (
      <div className="text-red-500 p-4">
        Error loading required data. Please try again later.
      </div>
    );
  }
};

export default AddPropertyPage;