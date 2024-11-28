import { prisma } from './database.server';

export async function addExpense(expenseData) {
    try {
        return await prisma.expense.create({
            data: {
                title: expenseData.title,
                amount: +expenseData.amount,
                date: new Date(expenseData.date)
            },
        });
    } catch (error) {
        console.log(error);
        throw error;
    }
}

export async function getExpenses() {
    try {
        const expenses = prisma.expense.findMany({
            orderBy: {date: 'desc'},
        });
        return expenses;
    } catch (error) {
        console.log(error);
        throw error;
    }

}

export async function getExpense(id) {
    try {
        console.log("ID being queries: ", id);
        const expense = await prisma.expense.findFirst({
            where: {
                id: id
            },
        });
        return expense;
    } catch (error) {
        console.log(error);
        throw error;
    }
}

export async function updateExpense(id, expenseData) 
{
    try {
        await prisma.expense.update({
            where: {id},
            data: {
                title: expenseData.title,
                amount: +expenseData.amount,
                date: new Date(expenseData.date),
            },
        }); 
    } catch (error) {
        console.log(error);
        throw error;
    }
    
}