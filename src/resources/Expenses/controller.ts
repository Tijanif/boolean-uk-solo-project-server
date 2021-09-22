import { Request, Response } from 'express';
import prisma from '../../utills/database';

// Create An Expense
export const createAnExpense = async (req: Request, res: Response) => {
  const expenseInfo = { ...req.body };

  try {
    const CreatedExpense = await prisma.expenses.create({
      data: expenseInfo,
    });

    res.json(CreatedExpense);
  } catch (error) {
    console.log(error);
    res.json({ Error: 'Fail to create a user' });
  }
};

// Get All Expenses
export const getAlExpenses = async (req: Request, res: Response) => {
  try {
    const allExpense = await prisma.expenses.findMany();
    res.json({ data: allExpense });
  } catch (error) {
    console.log(error);
    res.json({ error: 'The is an issue' });
  }
};

// Get Expense by Id
export const getExpenseById = async (req: Request, res: Response) => {
  const id = parseInt(req.params.id);

  try {
    const expenseById = await prisma.expenses.findUnique({
      where: { id },
    });
    res.json({ date: expenseById });
  } catch (error) {
    console.log(error);

    res.json({ error: `Could not find the expense with ${id}` });
  }
};
