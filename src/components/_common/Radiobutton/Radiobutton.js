import React from 'react'
import styled from 'styled-components'
import { colorBlack, colorCredit, colorDebit } from 'utils/color'
import { opacityLight } from 'utils/opacity'
import { transitionInput } from 'utils/transition'
import { fontSize } from 'utils/font'

export const getColor = (props) => {
  if (props.credit) {
    return colorCredit
  }
  if (props.debit) {
    return colorDebit
  }
  return colorBlack
}

const radioWidth = '20px'

const Container = styled.div`
  display: flex;
  align-items: center;
  cursor: pointer;

  &:hover label {
    opacity: 1;
  }

  &.active {
    .fakeinput {
      border-color: ${props => getColor(props)};
    }

    .dot {
      background-color: ${props => getColor(props)};
    }
  }
`

const Fakeinput = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: ${radioWidth};
  height: ${radioWidth};
  border: 2px solid ${colorBlack};
  border-radius: 50%;
`

const Label = styled.label`
  font-size: ${fontSize.small};
  margin-left: 8px;
  opacity: ${opacityLight};
  cursor: pointer;
  transition ${transitionInput('opacity')};
`

const dotWidth = '10px'

const Dot = styled.div`
  width: ${dotWidth};
  height: ${dotWidth};
  border-radius: 50%;
`

export default ({
  label,
  credit,
  debit,
  active,
  onClick,
}) => (
  <Container
    className={active ? 'active' : ''}
    credit={credit}
    debit={debit}
    onClick={onClick}
  >
    <Fakeinput className="fakeinput">
      <Dot className="dot" />
    </Fakeinput>
    <Label>{label}</Label>
  </Container>
)
