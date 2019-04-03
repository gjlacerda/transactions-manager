import React, { Component } from 'react'
import styled from 'styled-components'
import { colorApp, colorBlack } from 'utils/color'
import { fontSize, fontWeight } from 'utils/font'
import { opacityLight } from 'utils/opacity'
import { transitionInput } from 'utils/transition'

const Container = styled.div`
  display: flex;
  align-items: flex-end;
  position: relative;
  height: 48px;
  opacity: ${opacityLight};
  transition: ${transitionInput('opacity')};

  &:hover {
    opacity: 1;
  }

  &.selected {
    opacity: 1;

    label {
      transform: translate(0, -25px) scale(0.8);
      color: ${colorApp};
    }
  }
`

const Label = styled.label`
  position: absolute;
  top: 24px;
  left: 0;
  color: ${colorBlack};
  pointer-events: none;
  font-size: ${fontSize.medium};
  font-weight: ${fontWeight.thin};
  transition: transform 0.1s cubic-bezier(0, 0, 0.2, 1);
  transform-origin: left center;
`

const InputText = styled.input`
  background: none;
  border: none;
  border-radius: 0;
  border-bottom: 1px solid ${colorBlack};
  outline: none;
  padding: 0 0 6px 0;
  width: ${props => props.fullWidth ? '100%' : (props.width || 'auto')};
`

class TextField extends Component {
  state = {}

  componentDidMount() {
    const { focus } = this.props
    if (focus) {
      this.input.focus()
    }
  }

  handleFocus = focus => () => {
    this.setState({
      className: 'selected',
    })
    if (focus) {
      focus()
    }
  }

  handleBlur = (event) => {
    if (event.target.value) {
      return
    }
    this.setState({
      className: '',
    })
  }

  render() {
    const {
      label,
      fullWidth,
      width,
      type,
      pattern,
      maxLength,
      id,
      inputmode,
      onChange,
      onFocus,
    } = this.props
    const { className } = this.state

    return (
      <Container className={className}>
        <InputText
          type={type || 'text'}
          step="0.01"
          onFocus={this.handleFocus(onFocus)}
          onBlur={this.handleBlur}
          fullWidth={fullWidth}
          width={width}
          pattern={pattern}
          maxLength={maxLength}
          id={id}
          inputmode={inputmode || 'none'}
          ref={input => this.input = input}
          onChange={onChange}
        />
        <Label>
          {label}
        </Label>
      </Container>
    )
  }
}

export default TextField
