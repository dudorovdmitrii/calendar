// eslint-disable-next-line @typescript-eslint/no-unused-vars
import React from "react"
import styled from "styled-components/macro"
import { OCCASIONS_COL_ROW_EVENT_PROPS } from "./TimetableProps"

export const TIMETABLE = styled.div`
  display: flex;
  flex-direction: row;
  margin: 8px 0;
  box-sizing: border-box;
  max-height: calc(100vh - 244px);
  overflow: auto;
  user-select: none;
  &::-webkit-scrollbar {
    display: none;
  }
`
export const TIME = styled.div`
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  width: 60px;
  gap: 34px;
  align-items: center;
`

export const TIME_ROW = styled.div`
`

export const OCCASIONS = styled.div`
  flex: 1;
  margin-top: 8px;
  display: flex;
  flex-direction: row;
`

export const OCCASIONS_COL = styled.div`
  flex: 1;
  display: grid;
  grid-auto-rows: 50px;
`
export const OCCASIONS_COL_ROW = styled.div`
  border: 1px solid var(--grey-mid);
  box-sizing: border-box;
`

export const OCCASIONS_COL_ROW_EVENT_WRAPPER: React.FC<OCCASIONS_COL_ROW_EVENT_PROPS> = ({ className, children }: OCCASIONS_COL_ROW_EVENT_PROPS): JSX.Element => {
  return <div className={className}>{children}</div>
}

export const OCCASIONS_COL_ROW_EVENT = styled(OCCASIONS_COL_ROW_EVENT_WRAPPER)`
  margin: 1px;
  width: calc(100% - 2px);
  height: calc(100% - 2px);
  box-sizing: border-box;
  background: ${props => props.chosen ? "var(--purple-dark)" : props.filled ? "var(--purple-light)" : "none"};
`