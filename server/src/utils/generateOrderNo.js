import crypto from 'crypto';

export function generateOrderNo() {
  const { month, year, day } = getTimeInfo();
  const id = generateRandomId(4);
  return `BB${day}${month}${year}${id}`;
}

export function generateRandomId(digitCount = 4) {
  const digits = '0123456789';
  let number = '';

  const array = new Uint32Array(1);

  while (number.length < digitCount) {
    crypto.getRandomValues(array);
    const charIndex = array[0] % digits.length;
    if (number.length === 0 && digits[charIndex] === '0') {
      continue;
    }
    number += digits[charIndex];
  }

  return number;
}

export function getTimeInfo() {
  const now = new Date();

  const timeZone = 'Asia/Dhaka';

  const options = {
    timeZone: timeZone,
    day: '2-digit',
    month: '2-digit',
    year: '2-digit',
    hour: '2-digit',
    minute: '2-digit',
    hour12: false,
  };

  const formattedDate = now.toLocaleString('en-US', options);
  const [month, day, year, hour, minute] = formattedDate.match(/\d+/g);

  return { timeZone, month, day, year, hour, minute };
}