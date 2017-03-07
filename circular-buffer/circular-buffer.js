export const bufferEmptyException = () => new Error('Buffer is empty!');
export const bufferFullException = () => new Error('Buffer is full!');


export default size => {
  let buf;
  let indexWrite;
  let indexRead;

  const increaseIndex = i => (i + 1) % size;

  const clear = () => {
    buf = new Array(size);
    indexWrite = 0;
    indexRead = 0;
  };

  const forceWrite = (value) => {
    if (value === undefined || value === null) {
      return;
    }
    const oldValue = buf[indexWrite];
    buf[indexWrite] = value;
    indexWrite = increaseIndex(indexWrite);
    if (oldValue !== undefined) {
      indexRead = increaseIndex(indexRead);
    }
  };

  clear();

  return {
    write: (value) => {
      if (buf[indexWrite] !== undefined) {
        throw bufferFullException();
      }
      forceWrite(value);
    },

    read: () => {
      const value = buf[indexRead];
      if (value === undefined) {
        throw bufferEmptyException();
      }
      buf[indexRead] = undefined;
      indexRead = increaseIndex(indexRead);
      return value;
    },

    forceWrite,
    clear
  };
}