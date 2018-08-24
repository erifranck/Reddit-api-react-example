import {NavBar as NavBarComponent} from 'common/components'
import styled from 'styled-components'

export const NavBar = styled(NavBarComponent)`
  border-bottom: 3px solid ${({theme}) => theme.palette.yellow};
  width: 100%;
  nav {
    padding: 0px 20px;
    display: flex;
    justify-content: flex-start;
    img {
      padding-top: 10px;
      width: 40px;
      height: 40px;
    }
    ul {
      padding: 10px 10px 0px 10px;
      li {
        display: inline-block;
        margin-left: 10px;
        &.active {
          position: relative;
          text-align: center;
          &::after {
            content: '';
            width: 0;
            height: 0;
            bottom: 0px;
            left: calc(50% - 5px);
            position: absolute;
            border-left: 7px solid transparent;
            border-right: 7px solid transparent;
            border-bottom: 10px solid ${({theme}) => theme.palette.yellow};
          }
        }
      }
    }
  }
`
