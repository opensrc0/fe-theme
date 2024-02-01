import React from "react"
import PropTypes from "prop-types"
import styled from "styled-components"
import cx from "classnames"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

const StyledButton = styled(
  ({
    disabled,
    variant,
    size,
    fluid,
    cssProps,
    ...props
  }) => <button {...props} />
)`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  text-transform: uppercase;
  border-width: 100px;
  border-style: solid;

  width: ${(props) => props.fluid ? "100%" : ""};
  font-size: ${(props) => props.theme.Universal.FontSize[props.theme.Button.size[props.size].fontSize]};
  padding: ${(props) => props.theme.Universal.PXL(props.theme.Button.size[props.size].padding)};
  ${(props) => ({ ...props.theme.Button[props.variant], ...props.theme.Button.extraProps, ...props.cssProps })}
  pointer-events: ${(props) => props.disabled ? "none" : ""};
  opacity: ${(props) => props.disabled ? "0.5" : ""};
`

function Button({ label = "Button", spin = false, className = "", ...props }) {
  return (
    <StyledButton
      {...props}
      className={cx(className)}
    >
      {
        spin ? (
          <React.Fragment>
            <FontAwesomeIcon
              icon="fa-solid fa-spinner"
              spin
              className="disabled-spiner"
            />
            &nbsp;&nbsp;
          </React.Fragment>
        ) : null
      }
      {label}
    </StyledButton>
  )
}

Button.propTypes = {
  "label": PropTypes.string,
  "spin": PropTypes.bool,
  "className": PropTypes.string,
  "type": PropTypes.oneOf(["submit", "button"]),
  "onClick": PropTypes.func,
  "disabled": PropTypes.bool,
  "size": PropTypes.string,
  "fluid": PropTypes.bool,
  "variant": PropTypes.string,
  "cssProps": PropTypes.object
}

Button.defaultProps = {
// Props used in html elements
  "type": "submit",
  "onClick": () => {},

  // Props used in css property
  "fluid": false,
  "disabled": true,
  "size": "m",
  "variant": "secondary",
  "cssProps": {}
}

export default Button
