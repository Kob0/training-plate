// this is own realisation of string method 'substr'. just for practice.


const substr = (str, index = 0, substrLength = str.length) => {
  if (index >= str.length) {
    console.log('empty string');
    return '';
  }

  const currentIndex = index < 0 ? 0 : index;
  let lastIndex = currentIndex + (substrLength - 1);

  if (substrLength < 0) {
    lastIndex = currentIndex;
  } else if (lastIndex > str.length - 1) {
    lastIndex = str.length - 1;
  }

  let result = '';

  for (let i = currentIndex; i <= lastIndex; i += 1) {
    result = `${result}${str[i]}`;
  }

  return result;
};


console.log(substr('abba', -12, 3));


