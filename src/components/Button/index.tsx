/* eslint-disable no-undef */
import { forwardRef, ButtonHTMLAttributes } from 'react'
import { WrapperButton, WrapperProps } from './styles'
type ButtonTypes = ButtonHTMLAttributes<HTMLButtonElement>

export type ButtonProps = {
  size?: 'small' | 'medium' | 'large'
  icon?: boolean
  fullWidth?: boolean
} & ButtonTypes

const Button: React.ForwardRefRenderFunction<WrapperProps, ButtonProps> = (
  { children, size = 'medium', fullWidth = false, icon, ...props },
  ref,
) => (
  <WrapperButton {...props} size={size} fullWidth={fullWidth} hasIcon={!!icon}>
    {icon}
    {!!children && <span>{children}</span>}
  </WrapperButton>
)
export default forwardRef(Button)
