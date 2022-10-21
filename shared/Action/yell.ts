export default (...args: string[]) => {
  const text = args.join(' ').toUpperCase() + '!!!';

  console.log(text);
};
