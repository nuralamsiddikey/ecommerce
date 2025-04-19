import bcrypt from 'bcrypt';

export const generateHashedPass = async(plainPass)=>{
  let saltRound = 10;
  const hashedPassword = await bcrypt.hash(plainPass, saltRound)
  return hashedPassword
}
export const comparePass = (plainPass,hashedPass)=>{}