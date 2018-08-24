import {Header as HeaderComponent} from 'common/components'
import styled from 'styled-components'

export const Header = styled(HeaderComponent)`
  height: 230px;
  position: relative;
  box-sizing: border-box;
  padding: 10px;
  background: ${({theme}) => theme.palette.charcoal};
  & .title {
    color: ${({theme}) => theme.fonts.color};
    padding-left: 20px;
  }
  & .nav-bar {
    position: absolute;
    width: 100%;
    left: 0px;
    bottom: 0px;
  }
`
