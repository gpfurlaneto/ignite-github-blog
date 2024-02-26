import React from "react";
import { LinkComponent } from "./styles";
import { IconDefinition } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { LinkProps } from "react-router-dom";

interface AnchorProps extends LinkProps {
  prefixIcon?: IconDefinition
  sufixIcon?: IconDefinition
}

export const Link = React.forwardRef<HTMLAnchorElement, AnchorProps>(({ prefixIcon, sufixIcon, children, ...props }, ref) => (
  <LinkComponent ref={ref} {...props}>
    {prefixIcon && <FontAwesomeIcon width={12} height={12} icon={prefixIcon} />}
    {children}
    {sufixIcon && <FontAwesomeIcon width={12} height={12} icon={sufixIcon} />}
  </LinkComponent>
));