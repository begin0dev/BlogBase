import React, { Component } from 'react';
import classNames from 'classnames/bind';
import styles from './TextInput.scss';

const cx = classNames.bind(styles);

class TextInput extends Component {
  constructor(props) {
    super(props);
    this.state = {
      focus: false,
    };
  }

  labelClick = () => {
    const { inputRef } = this;
    const { focus } = this.state;
    if (!focus) inputRef.focus();
  }
  toggleInputFocus = boolean => () => {
    this.setState({
      focus: boolean,
    });
  }
  labelPosition = () => {
    const { inputRef } = this;
    const { focus } = this.state;
    const { placeholder } = this.props;
    let position = {};
    if (focus || placeholder || (inputRef && inputRef.value.length > 0)) {
      position = {
        transform: 'translateY(-18px) scale(0.8)',
        fontWeight: '400',
      };
    }
    return position;
  }

  render() {
    const { focus } = this.state;
    const { toggleInputFocus, labelPosition, labelClick } = this;
    const { type, label, placeholder, value, color, setValue, fontSize } = this.props;
    return (
      <div className={cx('wrapper')}>
        <div className={cx('input-slot', { 'input-focus': focus })} style={{ color }}>
          {label && (
            <label
              className={cx('label')}
              aria-hidden="true"
              style={{ fontSize, ...labelPosition() }}
              onClick={labelClick}
            >
              {label}
            </label>)
          }
          <input
            className={cx('input')}
            type={type}
            value={value}
            placeholder={placeholder}
            onFocus={toggleInputFocus(true)}
            onBlur={toggleInputFocus(false)}
            onChange={setValue}
            style={{ fontSize }}
            ref={(input) => { this.inputRef = input; }}
          />
        </div>
      </div>
    );
  }
}

export default TextInput;
