import { forwardRef, HTMLAttributes } from 'react'
import styled from 'styled-components'
import * as tokens from './Divider.tokens'

const { divider, baseDivider } = tokens

type StyleProps = {
  backgroundColor: string
  marginTop: string
  marginBottom: string
  dividerHeight: string
}

const StyledDivider = styled.hr<StyleProps>`
  border: none;
  background-color: ${(props) => props.backgroundColor};
  margin-top: ${(props) => props.marginTop};
  margin-bottom: ${(props) => props.marginBottom};
  height: ${(props) => props.dividerHeight};
`

export type DividerProps = {
  /** Color variants */
  color?: 'lighter' | 'light' | 'medium'
  /** Vertical spacings */
  variant?: 'small' | 'medium'
  /** @ignore */
  className?: string
} & HTMLAttributes<HTMLHRElement>

export const Divider = forwardRef<HTMLHRElement, DividerProps>(function Divider(
  { color = 'medium', variant = 'medium', ...rest },
  ref,
) {
  const colorValue = color === 'medium' ? 'mediumColor' : color

  const props: StyleProps = {
    backgroundColor: divider[colorValue].background,
    marginTop: tokens[variant].spacings.top,
    marginBottom: tokens[variant].spacings.bottom,
    dividerHeight: baseDivider.height,
    ...rest,
  }
  return <StyledDivider {...props} ref={ref} />
})
