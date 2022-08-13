import React, { DetailedHTMLProps, HTMLAttributes } from "react"
import styled from "styled-components/macro"

import { ReactComponent as ArrowSVG } from '../../static/icons/arrow.svg'
import { WEEKDAY_NUMBER_PROPS } from "./ActionsProps"

export const ACTIONS = styled.section`
  background: var(--grey-light);
  padding-left: 60px;
  display: flex;
  flex-direction: column;
  font-weight: 500;
  border-bottom: 1px solid var(--grey-mid);
  border-top: 1px solid var(--grey-mid);
  user-select: none;
`

export const WEEK_LIST = styled.ul`
  display: flex;
  flex-direction: row;
  padding: 10px 0 5px 0;
  width: 100%;
`

export const WEEK_DAY = styled.li`
  flex: 1;
  display: flex;
  gap: 8px;
  flex-direction: column;
  align-items: center;
`

export const WEEKDAY_LETTER = styled.div`
  font-size: var(--small-font);
  cursor: pointer;
  user-select: none;
  pointer-events: none;
`

export const WEEKDAY_NUMBER_WRAPPER: React.FC<WEEKDAY_NUMBER_PROPS> = ({ className, children }: WEEKDAY_NUMBER_PROPS): JSX.Element => {
  return <div className={className}>{children}</div>
}

export const WEEKDAY_NUMBER = styled(WEEKDAY_NUMBER_WRAPPER)`
  font-size: var(--large-font);
  border-radius: 50%;
  min-width: 20px;
  text-align: center;
  padding: 4px;
  cursor: pointer;
  color: ${props => props.chosen ? 'var(--white)' : 'var(--black)'};
  background: ${props => props.chosen ? 'var(--red)' : 'none'};
  user-select: none;
  pointer-events: none;
`

export const MONTH = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 10px calc(100%/14 - 8px) 10px calc(100%/14 - 8px);
  font-size: var(--regular-font);
  display: flex;
`

const ArrowIcon = styled(ArrowSVG)`
  fill: var(--red);
  width: 20px;
  height: 20px;
  cursor: pointer;
  pointer-events: none;
`

export const ArrowIconLeft = styled(ArrowIcon)`
  transform: rotate(180deg);
`

export const ArrowIconRight = styled(ArrowIcon)`
`