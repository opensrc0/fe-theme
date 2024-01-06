/* eslint-disable */
const PXL = {
  "pxScale": 8,
  "PXL": (value) => {
    const values = [].concat(value);
    return values
      .map((v) => (typeof v === 'string' ? v : `${v * 8}px`))
      .join(' ');
  }
}

export default PXL;
