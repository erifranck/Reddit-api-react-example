import {Box as BoxComponent} from 'categories/components/Box'
import styled from 'styled-components'

export const Box = styled(BoxComponent)`
  display: flex;
  justify-content: flex-start;
  height: 100px;
  padding: 20px;
  box-sizing: border-box;
  border-left: 2px solid ${({theme}) => theme.palette.green};
  border-bottom: 1px solid ${({theme}) => theme.palette.grey};
  background-color: ${({theme}) => theme.palette.white};
  .image-container {
    margin: 0px 10px;
    width: 65px;
    overflow: hidden;
    img {
      max-height: 65px;
      height: auto;
      width: auto;
    }
    .bg-render {
      display: block;
      height: 65px;
      width: 65px;
      border: 1px solid ${({theme}) => theme.palette.grey};
      background-position: -256px -68px;
      background-image: url(${({image}) => image});
    }
  }
  .votes-container {
    width: 40px;
    text-align: center;
    p {
      text-align: center;
    }
    .arrow-up {
      display: block;
      margin-bottom: 10px;
      :before {
        content: "";
        width: 0;
        height: 0;
        border-left: 5px solid transparent;
        border-right: 5px solid transparent;
        border-bottom: 5px solid black;
      }
    }

    .arrow-down {
      display: block;
      margin-top: 10px;
      &:before {
        content: "";
        width: 0;
        height: 0;
        border-left: 5px solid transparent;
        border-right: 5px solid transparent;
        border-top: 5px solid #f00;
      }
    }
  }
  .content {
    padding: 0px 10px;
    span {
      font-size: 14px;
    }
  }
`
