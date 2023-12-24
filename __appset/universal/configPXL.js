const pxScale = 8;

const PXL = (value) => {
  const values = [].concat(value);
  return values
    .map((v) => (typeof v === 'string' ? v : `${v * pxScale}px`))
    .join(' ');
};

export default PXL;
