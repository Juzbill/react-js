"use client";
import * as React from "react";
import { Button, IconButton } from "@mui/material";
import SVG from "next/image";
import { BlueButton } from "@/components/standard/buttons";
import TextBody from "@/components/standard/Text";
import SearchComponent from "@/components/standard/Inputs";

interface IProducts {
  handleWizardChange: (state: boolean) => void;
  products: any;
}

export default function Products({ handleWizardChange, products }: IProducts) {
  const [SelectedItemIndex, setSelectedItemIndex] = React.useState(0);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setSelectedItemIndex(newValue);
  };
  return (
    <div
      style={{ width: "100%", height: "100%" }}
      className="w-full h-full flex gap-3 flex-row"
    >
      <ProductMenuList
        itemData={products}
        handleWizardChange={handleWizardChange}
      />
      <div className="bg-white w-full h-full flex flex-col gap-4 p-4">
        {products?.length > 0 && (
          <>
            <ProductInfo productData={products[SelectedItemIndex]} />
            <TransactionsInfo />
          </>
        )}
      </div>
    </div>
  );
}

interface IProductMenuList {
  itemData: Product[];
  handleWizardChange: (state: boolean) => void;
}
const ProductMenuList = ({
  itemData,
  handleWizardChange,
}: IProductMenuList) => {
  return (
    <div className="bg-white 2xl:w-[25%]  xl:w-[40%] p-4">
      <div className=" bg-white w-full flex flex-row justify-between items-center">
        <SearchComponent className="w-full" />
        <BlueButton
          size="small"
          onClick={() => handleWizardChange(true)}
          className="px-4"
          label={"Add Item"}
          startIcon={
            <SVG
              src="/icons/svg/Add.svg"
              width={18}
              height={18}
              alt="add-item"
            />
          }
        />
      </div>
      <div
        className="bg-[#F6F6F6] flex flex-row justify-between items-center px-3 py-2 mt-4"
        style={{ border: "1px solid #E6E6E6" }}
      >
        <div className="flex flex-row justify-center items-center gap-4">
          <TextBody text="Items" />
          <IconButton aria-label="" onClick={() => {}}>
            <SVG
              src="/icons/svg/Filter.svg"
              width={18}
              height={18}
              alt="add-item"
            />
          </IconButton>
        </div>
        <TextBody text="Quantity" className="mr-2" />
      </div>
      <div className="flex flex-col justify-start gap-2 mt-2">
        {itemData?.map((item, index) => (
          <div
            key={`${item.name + index}`}
            className="flex flex-row justify-between px-3 py-2"
            style={{ borderBottom: "1px solid #E6E6E6" }}
          >
            <TextBody text={item.name.toString()} />
            <div className="flex flex-row justify-center items-center gap-6">
              <TextBody text={item.openingQuantity.toString()} color="red" />
              <IconButton aria-label="" onClick={() => {}}>
                <SVG
                  src="/icons/svg/options.svg"
                  width={18}
                  height={18}
                  alt="add-item"
                />
              </IconButton>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

interface IProductData {
  productData: Product;
}
const ProductInfo = ({ productData }: IProductData) => {
  return (
    <div
      className="bg-[#e6e6e680] flex flex-col gap-4 rounded-xl p-4"
      style={{ border: "1px solid #E6E6E6" }}
    >
      <div className=" flex flex-row justify-between">
        <TextBody text={productData.name} className=" font-bold" />
        <TextBody
          text={`Quantity : ${productData.openingQuantity}`}
          className="font-bold"
        />
      </div>
      <div className="flex flex-row justify-between">
        <div className="flex flex-col justify-start gap-2 font-medium">
          <TextBody text={`Sales Price: $ 100`} className="text-xs" />
          <TextBody text={`Purchase Price: $ 80`} className="text-xs" />
          <TextBody text={`Stock Value: $ 100`} className="text-xs" />
        </div>
        <div className=" flex justify-center items-center">
          <BlueButton
            onClick={function (): void {
              throw new Error("Function not implemented.");
            }}
            className="px-4"
            label={"Adjust stock"}
            startIcon={
              <SVG
                src="/icons/svg/Adjust.svg"
                width={18}
                height={18}
                alt="add-item"
              />
            }
          />
        </div>
      </div>
    </div>
  );
};
const TransactionsInfo = () => {
  return (
    <div>
      <div className="flex flex-row justify-between items-center">
        <TextBody
          text="Transactions"
          color="#0066FF"
          className="p-2 px-4 font-bold"
          style={{
            borderBottom: "2px solid #06F",
          }}
        />
        <div className="flex flex-row justify-center items-center gap-4">
          <SearchComponent className="w-full" />
          <BlueButton
            background="#cef4db80"
            color="black"
            sx={{
              boxShadow: "none",
            }}
            onClick={function (): void {
              throw new Error("Function not implemented.");
            }}
            className="px-4"
            label={"Adjust Item"}
            startIcon={
              <SVG
                src="/icons/svg/excel.svg"
                width={18}
                height={18}
                alt="add-item"
              />
            }
          />
        </div>
      </div>
      <div className="mt-4">
        <div className="flex flex-row"></div>
      </div>
    </div>
  );
};
