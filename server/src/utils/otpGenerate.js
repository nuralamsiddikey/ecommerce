import otpGenerator from 'otp-generator';

const otpGenerate = () => {
  return otpGenerator.generate(6, {
    upperCaseAlphabets: false,
    specialChars: false,
    lowerCaseAlphabets: false,
    digits: true,
  });
};

export default otpGenerate;
