import styled from "@emotion/styled";
import { css } from "@emotion/react";
import colors, { lighten } from "metabase/lib/colors";
import Icon, { IconProps } from "metabase/components/Icon";

interface TreeNodeRootProps {
  isSelected: boolean;
  depth: number;
}

export const TreeNodeRoot = styled.li<TreeNodeRootProps>`
  display: flex;
  align-items: center;
  color: ${props => (props.isSelected ? colors["white"] : colors["brand"])};
  background-color: ${props => (props.isSelected ? colors["brand"] : "unset")};
  padding-left: ${props => props.depth + 0.5}rem;
  padding-right: 0.5rem;
  cursor: pointer;
  font-weight: 700;

  &:hover {
    background-color: ${props =>
      props.isSelected ? colors["brand"] : lighten(colors["brand"], 0.6)};
  }
`;

export const ExpandToggleButton = styled.button`
  display: flex;
  cursor: pointer;
  padding: 0.5rem 0.25rem 0.5rem 0.25rem;
  display: block;
  color: inherit;
  visibility: ${props => (props.hidden ? "hidden" : "visible")};
`;

interface ExpandToggleIconProps {
  isExpanded: boolean;
}

export const ExpandToggleIcon = styled(Icon)<ExpandToggleIconProps & IconProps>`
  transition: transform 200ms;

  ${props =>
    props.isExpanded &&
    css`
      transform: rotate(90deg);
    `}
`;

ExpandToggleIcon.defaultProps = {
  name: "chevronright",
  size: 12,
};

export const NameContainer = styled.div`
  word-break: break-word;
  padding: 0.5rem 0.5rem 0.5rem 0.25rem;
  flex: 1;
`;

export const IconContainer = styled.div`
  display: flex;
  align-items: center;
  padding: 0.25rem;
  opacity: 0.5;
`;
