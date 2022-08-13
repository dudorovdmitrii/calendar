// eslint-disable-next-line @typescript-eslint/no-unused-vars
import React from 'react'
import styled from "styled-components/macro"

import { ReactComponent as PlusSVG } from '../static/icons/plus.svg'
import { FOOTER_BUTTON_PROPS } from './AppProps'

const HeaderFooterPaddingHorizontal = 30 + 'px'
const HeaderFooterPaddingVertical = 20 + 'px'

export const LAYOUT = styled.div`
  font-family: var(--font-family);
  max-width: var(--layout-max-width);
  margin: 0 auto;
  height: 100%;
`
LAYOUT.displayName = "Layout"

export const MAIN = styled.main`
`
export const HEADER = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: ${HeaderFooterPaddingVertical} ${HeaderFooterPaddingHorizontal};
  font-weight: 400;
  font-size: var(--large-font);
`
export const PlusIcon = styled(PlusSVG)`
  width: 20px;
  height: 20px;
  fill: var(--red);
  cursor: pointer;
`

export const FOOTER = styled.footer`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  background: var(--grey-light);
  border-top: 1px solid var(--grey-mid);
  padding: ${HeaderFooterPaddingVertical} ${HeaderFooterPaddingHorizontal};
  color: var(--red);
  font-size: var(--large-font);
`

export const FOOTER_BUTTON_WRAPPER: React.FC<FOOTER_BUTTON_PROPS> = ({ className, children, active, ...props }: FOOTER_BUTTON_PROPS): JSX.Element => {
  return <button className={className} {...props}>{children}</button>
}

export const FOOTER_BUTTON = styled(FOOTER_BUTTON_WRAPPER)`
  display: ${props => props.active ? "initial" : "none"};
  border: none;
  color: var(--red);
  font-size: var(--large-font);
  cursor: pointer;
  height: 20px;
`
