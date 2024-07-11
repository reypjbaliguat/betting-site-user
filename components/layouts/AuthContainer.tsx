import { Card } from "@mui/material";
import React from "react";

function AuthContainer({ children }: { children: React.ReactNode }) {
  return (
    <div className="h-screen w-screen flex justify-center items-center bg-black">
      <Card className="flex z-10 p-10 w-96 justify-center">{children}</Card>
    </div>
  );
}

export default AuthContainer;
