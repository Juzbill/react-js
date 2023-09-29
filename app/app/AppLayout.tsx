"use client";
import AppDrawer from "@/components/standard/AppDrawer";
import MyCompany from "@/components/standard/MYcompany.tsx/Mycompany";
import React, { useState } from "react";

const AppLayout = () => {
  const [isShowMyCompany, setisShowMyCompany] = useState(false);
  return (
    <>
      <AppDrawer
        onCompanyClick={() => {
          setisShowMyCompany(true);
        }}
      />
      {isShowMyCompany && (
        <MyCompany
          onCancel={() => {
            setisShowMyCompany(false);
          }}
          onSubmit={() => {
            setisShowMyCompany(false);
          }}
        />
      )}
    </>
  );
};

export default AppLayout;
