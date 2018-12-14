import * as React from "react";
import classNames from "classnames";

import styles from "./TextInput.scss";

const cx = classNames.bind(styles);

interface IState {
  focus: boolean;
}
interface IProps {
  type: string;
  name: string;
  value?: string;
  label?: string;
  color?: string;
  placeholder?: string;
  setValue(e: React.ChangeEvent<HTMLInputElement>): void;
}

class TextInput extends React.Component<IProps, IState> {
  inputRef: HTMLInputElement;

  constructor(props: IProps) {
    super(props);
    this.state = {
      focus: false
    };
  }

  labelClick = (): void => {
    const { inputRef } = this;
    const { focus } = this.state;
    if (!focus) inputRef.focus();
  };
  toggleInputFocus = (focusing: boolean) => (): void => {
    this.setState({
      focus: focusing
    });
  };
  labelPosition = (): object => {
    const { inputRef } = this;
    const { focus } = this.state;
    const { placeholder } = this.props;
    let position = {};
    if (focus || placeholder || (inputRef && inputRef.value.length > 0)) {
      position = {
        transform: "translateY(-1.2rem) scale(0.8)",
        fontWeight: "400"
      };
    }
    return position;
  };

  render() {
    const { focus } = this.state;
    const { toggleInputFocus, labelPosition, labelClick } = this;
    const {
      type,
      name,
      label,
      placeholder,
      value,
      color,
      setValue
    } = this.props;
    return (
      <div className={cx("wrapper")}>
        <div
          className={cx("input-slot", { "input-focus": focus })}
          style={{ color }}
        >
          {label && (
            <label
              className={cx("label")}
              aria-hidden="true"
              style={{ ...labelPosition() }}
              onClick={labelClick}
            >
              {label}
            </label>
          )}
          <input
            className={cx("input")}
            type={type}
            name={name}
            value={value}
            placeholder={placeholder}
            onFocus={toggleInputFocus(true)}
            onBlur={toggleInputFocus(false)}
            onChange={setValue}
            ref={(input: HTMLInputElement) => this.inputRef = input}
          />
        </div>
      </div>
    );
  }
}

export default TextInput;
