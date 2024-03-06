import { PrismaClient } from "@prisma/client";
import { IGenericErrorResponse } from "../app/interfaces/common";

const handleValidationError = (error: any): IGenericErrorResponse => {
  const errors = [
    {
      path: "",
      message: error.message,
    },
  ];
  const statusCode = 400;
  return {
    statusCode,
    message: "Validation Error",
    errorMessages: errors,
  };
};

export default handleValidationError;
