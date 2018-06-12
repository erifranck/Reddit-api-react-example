import { Button as ButtonComponent } from 'common/components'
import styled from 'styled-components'

export const Button = styled(ButtonComponent)`
  background-color: ${({theme}) => theme.buttons.colors.primary};
  color: ${({theme}) => theme.buttons.fonts.color};
  height: ${({theme}) => theme.buttons.height};
  padding: ${({theme}) => theme.buttons.padding};
  border: none;
  font-size: ${({theme}) => theme.buttons.fonts.size};
  outline: none;
`
