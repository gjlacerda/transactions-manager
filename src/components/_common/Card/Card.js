import styled from 'styled-components'
import { colorWhite } from 'utils/color'
import { borderRadius } from 'utils/border'
import { boxShadow } from 'utils/shadow'

export default styled.div`
  background-color: ${colorWhite};
  border-radius: ${borderRadius};
  padding: 30px;
  box-shadow: ${boxShadow};
`
