"use client";
import {
  FormControlDropDown,
  FormDateFieldController,
  FormDropDownController,
  FormTextFieldController,
} from "@/components/standard/FormControllers";
import TextBody from "@/components/standard/Text";
import {
  Divider,
  FormControlLabel,
  Switch,
  IconButton,
  Button,
} from "@mui/material";
import * as React from "react";
import { useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";

export interface IItemsWizardProps {
  handleWizardChange: (state: boolean) => void;
  handleAddEdit: (data: any) => void;
}

function ItemsWizard({ handleWizardChange, handleAddEdit }: IItemsWizardProps) {
  const [wizardFor, setWizardFor] = useState<"Product" | "Service">("Product");
  const [wizardActiveScreen, setWizardActiveScreen] = useState<
    "Pricing" | "Stock"
  >("Pricing");
  const [isToShowWholeSale, setIsToShowWholesale] = useState(false);
  const [checked, setChecked] = useState(true);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setChecked(event.target.checked);
    setWizardFor(wizardFor === "Product" ? "Service" : "Product");
  };
  const { control, handleSubmit } = useForm({
    mode: "onChange",
    defaultValues: {
      name: "",
      category: "",
      code: "",
      hsn: "",
      purchasePrice: "",
      purchaseTax: "",
      taxRate: "",
      salePrice: "",
      discOnSalePrice: "",
      saleDiscType: "",
      saleTax: "",
      openingQuantity: "",
      atPrice: "",
      asOfDate: "",
      minStock: "",
      location: "",
    },
  });

  /**
   * Handles form submit
   */
  const formSubmit = async () => {
    const onSubmit: SubmitHandler<any> = async (formData: any) => {
      console.log(formData);
      handleAddEdit({ type: wizardFor, ...formData });
      handleWizardChange(false);
    };
    handleSubmit(onSubmit)();
  };

  return (
    <div className="relative w-full h-full flex flex-col bg-white">
      <div className="flex flex-row justify-between items-center p-4">
        <div className="flex flex-row justify-center items-center gap-5">
          <div className="flex flex-row justify-between items-center gap-10">
            <TextBody
              className="w-[10rem] font-bold"
              text={`Add ${wizardFor}`}
            />
            <div className="flex flex-row justify-between items-center gap-2">
              <TextBody
                className="text-sm font-bold"
                color={wizardFor === "Product" ? "Blue" : "Black"}
                text="Product"
              />
              <Switch
                color={"primary"}
                checked={checked}
                onChange={handleChange}
                inputProps={{ "aria-label": "controlled" }}
              />
              <TextBody
                className="text-sm font-bold"
                color={wizardFor === "Service" ? "Blue" : "Black"}
                text="Service"
              />
            </div>
          </div>
        </div>
        <div className="flex flex-row justify-center items-center gap-5">
          <TextBody text="setting" />
          <IconButton
            aria-label=""
            onClick={() => {
              handleWizardChange(false);
              setWizardFor("Product");
            }}
          >
            <TextBody text="close" />
          </IconButton>
        </div>
      </div>
      <Divider />
      <div className="w-full p-4 flex flex-row gap-5">
        <div className="w-[40%] grid grid-cols-2 gap-5">
          <FormTextFieldController
            size="small"
            label={`${wizardFor === "Product" ? "Item" : "Service"} Name`}
            required={true}
            fieldName={"name"}
            type={"text"}
            variant={"outlined"}
            control={control}
          />
          <FormTextFieldController
            size="small"
            label={`${wizardFor === "Product" ? "Item" : "Service"} HSN`}
            fieldName={"hsn"}
            type={"text"}
            variant={"outlined"}
            control={control}
          />
          <FormDropDownController
            size="small"
            label={`${wizardFor === "Product" ? "Item" : "Service"} Category`}
            fieldName={"category"}
            control={control}
            options={[]}
          />
          <FormTextFieldController
            size="small"
            label={`${wizardFor === "Product" ? "Item" : "Service"} Code`}
            fieldName={"code"}
            type={"text"}
            variant={"outlined"}
            control={control}
          />
        </div>
        <div>
          <TextBody
            className=" bg-blue-200 p-2 flex justify-center items-center"
            color="blue"
            text="Select Unit"
          />
          <IconButton aria-label="" onClick={() => {}}>
            <TextBody
              className=" text-sm p-2"
              color="blue"
              text="Add Item Image"
            />
          </IconButton>
        </div>
      </div>
      <div className="w-full p-4 flex flex-col gap-5">
        <div className="min-h-max flex flex-row justify-start items-center gap-2">
          <Button
            className="font-bold"
            variant="text"
            onClick={() => setWizardActiveScreen("Pricing")}
            style={{
              color: wizardActiveScreen === "Pricing" ? "red" : "grey",
              textTransform: "none",
              borderBottom:
                wizardActiveScreen === "Pricing" ? "2px solid red" : "none",
            }}
          >
            Pricing
          </Button>
          {wizardFor === "Product" && (
            <Button
              className="font-bold"
              variant="text"
              onClick={() => setWizardActiveScreen("Stock")}
              style={{
                color: wizardActiveScreen === "Stock" ? "red" : "grey",
                textTransform: "none",
                borderBottom:
                  wizardActiveScreen === "Stock" ? "2px solid red" : "none",
              }}
            >
              Stock
            </Button>
          )}
        </div>
        {wizardActiveScreen === "Pricing" ? (
          <>
            <div
              className="bg-[#e6e6e680] flex flex-col justify-start gap-8 rounded-xl p-4"
              style={{ border: "1px solid #E6E6E6" }}
            >
              <TextBody text="Sale Price" className="font-bold" />
              <div className=" flex flex-row gap-5">
                <div className=" flex flex-row">
                  <FormTextFieldController
                    // startAdornment={"₹"}
                    size="small"
                    label="Sale Price"
                    required={true}
                    fieldName={"salePrice"}
                    type={"text"}
                    variant={"outlined"}
                    control={control}
                    sx={{ background: "white" }}
                  />
                  <FormDropDownController
                    size="small"
                    fieldName={"saleTax"}
                    control={control}
                    options={["Without Tax", "With Tax"]}
                    sx={{ background: "white" }}
                  />
                </div>
                <div className=" flex flex-row">
                  <FormTextFieldController
                    // startAdornment={"%"}
                    size="small"
                    label="Disc.On sale price"
                    required={true}
                    fieldName={"discOnSalePrice"}
                    type={"text"}
                    variant={"outlined"}
                    control={control}
                    sx={{ background: "white" }}
                  />
                  <FormDropDownController
                    size="small"
                    fieldName={"saleDiscType"}
                    control={control}
                    options={["Percentage", "Amount"]}
                    sx={{ background: "white" }}
                  />
                </div>
              </div>
              {wizardFor === "Product" && (
                <div>
                  {isToShowWholeSale ? (
                    <div className="flex flex-col gap-5">
                      <div className="flex flex-row  items-center gap-5">
                        <TextBody
                          text="Wholesale Price"
                          className="font-bold"
                        />
                        <IconButton
                          aria-label=""
                          onClick={() => setIsToShowWholesale(false)}
                        >
                          <TextBody
                            color="grey"
                            text="Remove"
                            className="text-sm font-bold"
                          />
                        </IconButton>
                      </div>
                      <div className=" flex flex-row gap-5">
                        <div className=" flex flex-row">
                          <FormTextFieldController
                            // startAdornment={"₹"}
                            size="small"
                            label="Wholesale Price"
                            required={true}
                            fieldName={"wholeSalePrice"}
                            type={"text"}
                            variant={"outlined"}
                            control={control}
                            sx={{ background: "white" }}
                          />
                          <FormDropDownController
                            size="small"
                            fieldName={"saleTax"}
                            control={control}
                            options={["Without Tax", "With Tax"]}
                            sx={{ background: "white" }}
                          />
                        </div>
                        <div>
                          <FormTextFieldController
                            // startAdornment={"%"}
                            size="small"
                            label="Minimum wholesale Qty"
                            required={true}
                            fieldName={"minWholeSaleQty"}
                            type={"text"}
                            variant={"outlined"}
                            control={control}
                            sx={{ background: "white" }}
                          />
                        </div>
                      </div>
                    </div>
                  ) : (
                    <Button
                      variant="text"
                      color="primary"
                      style={{ textTransform: "none" }}
                      onClick={() => setIsToShowWholesale(true)}
                    >
                      Add Wholesale Price
                    </Button>
                  )}
                </div>
              )}
            </div>
            <div className="w-full flex flex-row gap-5">
              {wizardFor === "Product" && (
                <div
                  className="w-full bg-[#e6e6e680] flex flex-col justify-start gap-8 rounded-xl p-4"
                  style={{ border: "1px solid #E6E6E6" }}
                >
                  <TextBody text="Purchase Price" className="font-bold" />
                  <div className=" flex flex-row gap-5">
                    <div className=" flex flex-row">
                      <FormTextFieldController
                        // startAdornment={"₹"}
                        size="small"
                        label="Purchase Price"
                        required={true}
                        fieldName={"purchasePrice"}
                        type={"text"}
                        variant={"outlined"}
                        control={control}
                        sx={{ background: "white" }}
                      />
                      <FormDropDownController
                        size="small"
                        fieldName={"purchaseTax"}
                        control={control}
                        options={["Without Tax", "With Tax"]}
                        sx={{ background: "white" }}
                      />
                    </div>
                  </div>
                </div>
              )}
              <div
                className="w-full bg-[#e6e6e680] flex flex-col justify-start gap-8 rounded-xl p-4"
                style={{ border: "1px solid #E6E6E6" }}
              >
                <TextBody text="Taxes" className="font-bold" />
                <div className="w-1/2 flex flex-row gap-5">
                  <FormDropDownController
                    size="small"
                    label="Tax Rate"
                    fieldName={"taxRate"}
                    control={control}
                    options={["Without Tax", "With Tax"]}
                    sx={{ background: "white" }}
                  />
                </div>
              </div>
            </div>
          </>
        ) : (
          <div className="w-[60%] grid grid-cols-3 gap-5">
            <FormTextFieldController
              size="small"
              label="Opening Quantity"
              fieldName={"openingQuantity"}
              type={"text"}
              variant={"outlined"}
              control={control}
              sx={{ background: "white" }}
            />
            <FormTextFieldController
              size="small"
              label="At Price"
              fieldName={"atPrice"}
              type={"text"}
              variant={"outlined"}
              control={control}
              sx={{ background: "white" }}
            />
            <FormDateFieldController
              size="small"
              control={control}
              fieldName={"asOfDate"}
              label="As of Date"
            />
            <FormTextFieldController
              size="small"
              label="Min Stock to maintain"
              fieldName={"minStock"}
              type={"text"}
              variant={"outlined"}
              control={control}
              sx={{ background: "white" }}
            />
            <FormTextFieldController
              size="small"
              label="Location"
              fieldName={"location"}
              type={"text"}
              variant={"outlined"}
              control={control}
              sx={{ background: "white" }}
            />
          </div>
        )}
      </div>
      <div className=" absolute bottom-0 right-0">
        <div className="flex flex-row gap-5 justify-center items-center">
          <Button
            variant="outlined"
            color="primary"
            onClick={() => handleWizardChange(false)}
          >
            Cancel
          </Button>
          <Button variant="contained" color="primary" onClick={formSubmit}>
            Save
          </Button>
        </div>
      </div>
    </div>
  );
}
export default ItemsWizard;
