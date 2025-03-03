import {
  calculateMetricsUseCaseRequest,
  createMealUseCaseRequest,
  deleteMealUseCaseRequest,
  getMealsUseCaseRequest,
  getUniqueMealUseCaseRequest,
  updateMealUseCaseRequest,
} from '../interfaces/meal.interface';
import { prisma } from '../lib/prisma';

export class MealService {
  static async createMeal({
    name,
    description,
    is_on_diet,
    user_id,
  }: createMealUseCaseRequest) {
    const meal = await prisma.meal.create({
      data: {
        name,
        description,
        is_on_diet,
        user_id,
      },
    });

    return meal;
  }

  static async getMeals({ user_id }: getMealsUseCaseRequest) {
    const meals = await prisma.meal.findMany({
      where: {
        user_id,
      },
    });

    return meals;
  }

  static async getUniqueMeal({
    meal_id,
    user_id,
  }: getUniqueMealUseCaseRequest) {
    const meal = await prisma.meal.findUnique({
      where: {
        id: meal_id,
        user_id,
      },
    });

    return meal;
  }

  static async deleteMeal({ meal_id, user_id }: deleteMealUseCaseRequest) {
    await prisma.meal.delete({
      where: {
        id: meal_id,
        user_id,
      },
    });
  }

  static async updateMeal({
    meal_id,
    user_id,
    name,
    description,
    is_on_diet,
    created_at,
  }: updateMealUseCaseRequest) {
    const updatedMeal = await prisma.meal.update({
      where: {
        id: meal_id,
        user_id,
      },
      data: {
        name,
        description,
        is_on_diet,
        created_at,
        updated_at: new Date(),
      },
    });

    return updatedMeal;
  }

  static async calculateMetrics({ user_id }: calculateMetricsUseCaseRequest) {
    const totalMeals = await prisma.meal.count({
      where: {
        user_id,
      },
    });

    const totalMealsOnDiet = await prisma.meal.count({
      where: {
        user_id,
        is_on_diet: true,
      },
    });

    const totalMealsNotOnDiet = totalMeals - totalMealsOnDiet;

    const percentageMealsOnDiet = (
      (totalMealsOnDiet / totalMeals) *
      100
    ).toFixed(2);

    let currentStreak = 0;
    let bestStreak = 0;

    const meals = await prisma.meal.findMany({
      where: {
        user_id,
      },
      orderBy: {
        created_at: 'asc',
      },
    });

    for (const meal of meals) {
      if (meal.is_on_diet) {
        currentStreak++;
        bestStreak = Math.max(currentStreak, bestStreak);
      } else {
        currentStreak = 0;
      }
    }

    return {
      totalMeals,
      totalMealsOnDiet,
      totalMealsNotOnDiet,
      percentageMealsOnDiet,
      bestStreak,
    };
  }
}
