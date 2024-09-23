import bcrypt from 'bcrypt';

export const hashPassword = async(password) => {
    try{

        const saltRounds = 10;
        const hashedPassword = await bcrypt.hash(password,saltRounds)
        return hashPassword;
    }
    catch(error){
        console.log("Hashing error is "+error)
    }
};

export const comparePassword = async(password) => {
    return bcrypt.compare(password,hashPassword);
}