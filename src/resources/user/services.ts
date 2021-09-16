import dbClient from '../../utills/database';
import { User } from '.prisma/client';
import { hash } from 'bcrypt';

const create = async (newUser: User) => {
  // get the plain password
  const userPlainPassword = newUser.password;

  // hash the password with bcrypt
  const hashedPassword = await hash(userPlainPassword, 10);

  // save the newly hashed password
  const savedUser = await dbClient.user.create({
    data: { ...newUser, password: hashedPassword },
  });

  return savedUser;
};

const user = {
  ...dbClient.user,
  create,
};

export default user;
