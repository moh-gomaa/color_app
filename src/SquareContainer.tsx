type SquareContainerProps = {
  colorValue: string;
  hexaValue: string;
  isDarkColor: boolean;
};

const SquareContainer = ({
  colorValue,
  hexaValue,
  isDarkColor,
}: SquareContainerProps) => {
  return (
    <section
      className='square'
      style={{
        backgroundColor: colorValue,
        color: isDarkColor ? '#000' : '#fff',
      }}
    >
      <p>{colorValue ? colorValue : 'Empty Color'}</p>
      <p>{hexaValue ? hexaValue : null}</p>
    </section>
  );
};

export default SquareContainer;
