import React from "react";

import { CustomButtonContainer } from "./Custom-Button.Style";

const CustomButton = ({ children, ...props }) => (
  <CustomButtonContainer {...props}>{children}</CustomButtonContainer>
);

export default CustomButton;
