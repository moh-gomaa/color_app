import { useState } from 'react';
import SquareContainer from './SquareContainer';
import Input from './Input';

function App() {
  const [colorValue, setColorValue] = useState<string>('');
  const [hexaValue, setHexaValue] = useState<string>('');
  const [isDarkColor, setIsDarkColor] = useState<boolean>(true);

  return (
    <div className='App'>
      <SquareContainer
        colorValue={colorValue}
        hexaValue={hexaValue}
        isDarkColor={isDarkColor}
      />

      <Input
        colorValue={colorValue}
        setColorValue={setColorValue}
        setHexaValue={setHexaValue}
        isDarkColor={isDarkColor}
        setIsDarkColor={setIsDarkColor}
      />
    </div>
  );
}

export default App;
