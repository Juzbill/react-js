"use client";
import Products from "./componants/Products";
import Services from "./componants/Services";
import Button from "@mui/material/Button";
import Units from "./componants/Units";
import React, { useState } from "react";
import { Category } from "@mui/icons-material";
import ItemsWizard from "./ItemWizard.tsx/ItemWizard";

export interface IItemsProps {}

const screens = ["Products", "Services", "Category", "Units"];
export function ItemsHome(props: IItemsProps) {
  const [iisWizardOn, setIsWizardOn] = React.useState(false);
  const [selectedScreen, setSelectedScreen] = React.useState("Products");
  const [products, setProducts] = useState<any>([]);
  const [services, setServices] = useState<any>([]);

  const handleAddEdit = (data: any) => {
    if (data.type === "Product") {
      setProducts((prev: any) => [...prev, data]);
    } else if (data.type === "Service") {
      setServices((prev: any) => [...prev, data]);
    }
  };
  const handleWizardChange = (state: boolean) => {
    setIsWizardOn(state);
  };

  const renderScreen = () => {
    switch (selectedScreen) {
      case "Products":
        return (
          <Products
            handleWizardChange={handleWizardChange}
            products={products}
          />
        );
      case "Services":
        return <Services />;
      case "Category":
        return <Category />;
      case "Units":
        return <Units />;
    }
  };
  return (
    <div className="w-full h-full flex flex-col gap-5">
      {iisWizardOn ? (
        <ItemsWizard
          handleWizardChange={handleWizardChange}
          handleAddEdit={handleAddEdit}
        />
      ) : (
        <>
          <div className={`bg-white px-5 transition-all duration-300`}>
            {screens.map((screen) => (
              <Button
                key={screen}
                variant="text"
                color="primary"
                onClick={() => setSelectedScreen(screen)}
                className="px-5"
                style={{
                  textTransform: "none",
                  borderBottom:
                    screen === selectedScreen ? "1px solid blue" : "",
                }}
              >
                {screen}
              </Button>
            ))}
          </div>
          <div className="w-full h-full">{renderScreen()}</div>
        </>
      )}
    </div>
  );
}
