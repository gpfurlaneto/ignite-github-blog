import React, { ReactNode } from "react";
import { LinkComponent } from "./styles";
import { IconDefinition } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

type IInputProps = {
  href: string
  children: ReactNode;
  prefixIcon?: IconDefinition
  sufixIcon?: IconDefinition
};

export const Link = React.forwardRef<HTMLAnchorElement, IInputProps>(({ prefixIcon, sufixIcon, children, ...props }, ref) => (
  <LinkComponent ref={ref} {...props}>
    {prefixIcon && <FontAwesomeIcon width={12} height={12} icon={prefixIcon} />}
    {children}
    {sufixIcon && <FontAwesomeIcon width={12} height={12} icon={sufixIcon} />}
  </LinkComponent>
));