import {Box as BoxComponent} from 'categories/components/Box'
import styled from 'styled-components'

export const Box = styled(BoxComponent)`
  display: flex;
  justify-content: flex-start;
  height: 100px;
  padding: 20px;
  box-sizing: border-box;
  border-left: 2px solid ${({theme}) => theme.palette.green};
  background-color: ${({theme}) => theme.palette.white };
  .image-container {
    margin: 0px 10px;
    img {
      height: 65px;
      width: 65px;
    }
  }
  .votes-container {
    width: 40px;
    p {
      text-align: center;
    }
  }
  .content {
    padding: 0px 10px;
    span {
      font-size: 14px;
    }
  }
`
