import React from 'react';
import colorNames from 'colornames';

type InputProps = {
  colorValue: string;
  setColorValue: React.Dispatch<React.SetStateAction<string>>;
  setHexaValue: React.Dispatch<React.SetStateAction<string>>;
  isDarkColor: boolean;
  setIsDarkColor: React.Dispatch<React.SetStateAction<boolean>>;
};

const Input = ({
  colorValue,
  setColorValue,
  setHexaValue,
  isDarkColor,
  setIsDarkColor,
}: InputProps) => {
  return (
    <form onSubmit={(e) => e.preventDefault()}>
      <label>Enter color name</label>
      <input
        type='text'
        autoFocus
        required
        placeholder='Enter color name'
        value={colorValue}
        onChange={(e) => {
          setColorValue(e.target.value);
          setHexaValue(colorNames(e.target.value) ?? '');
        }}
      />

      <button onClick={() => setIsDarkColor(!isDarkColor)}>
        Toggle text color
      </button>
    </form>
  );
};

export default Input;
