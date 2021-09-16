import prisma from '../../src/utills/database';

import { User } from '.prisma/client';

import { compare } from 'bcrypt';

export const foundUserWithValidation = async (userData: User) => {
  // look for user in db
  const foundUser = await prisma.user.findUnique({
    where: { name: userData.name },
  });

  // Throw error is not found
  if (!foundUser) throw new Error('Username/Password incorrect');

  // Chack and compare password if user found
  const isPasswordValid = await compare(userData.password, foundUser.password);

  // if password not the same throw error
  if (!isPasswordValid) throw new Error('Username/Password incorrect');

  return foundUser;
};
