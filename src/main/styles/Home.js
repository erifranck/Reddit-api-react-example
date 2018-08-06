import {Home as HomeComponent} from 'main/containers/Home'
import styled from 'styled-components'

export const Home = styled(HomeComponent)`
  display: flex;
  justify-content: center;
  align-items: center;
  .wrapper {
    height: 400px;
  }
  & img {
    max-height: 800px;
    max-width: 100%;
  }
`
