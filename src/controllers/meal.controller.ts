import { FastifyReply, FastifyRequest } from 'fastify';
import { MealService } from '../services/meal.service';
import { z } from 'zod';

export class MealController {
  static async createMeal(request: FastifyRequest, reply: FastifyReply) {
    const createMealBodySchema = z.object({
      name: z.string(),
      description: z.string(),
      is_on_diet: z.boolean(),
    });

    const { name, description, is_on_diet } = createMealBodySchema.parse(
      request.body
    );

    const user_id = request.session.user?.id;

    if (!user_id) {
      return reply.status(401).send();
    }

    try {
      const meal = await MealService.createMeal({
        name,
        description,
        is_on_diet,
        user_id,
      });

      return reply.status(201).send(meal);
    } catch (error) {
      return reply.status(409).send();
    }
  }

  static async getMeals(request: FastifyRequest, reply: FastifyReply) {
    const user_id = request.session.user?.id;

    if (!user_id) {
      return reply.status(401).send();
    }

    const meals = await MealService.getMeals({ user_id });

    return reply.status(200).send(meals);
  }

  static async getUniqueMeal(request: FastifyRequest, reply: FastifyReply) {
    const getUniqueMealParamsSchema = z.object({
      meal_id: z.string().uuid(),
    });

    const { meal_id } = getUniqueMealParamsSchema.parse(request.params);

    const user_id = request.session.user?.id;

    if (!user_id) {
      return reply.status(401).send();
    }

    const meal = await MealService.getUniqueMeal({ meal_id, user_id });

    if (!meal) {
      return reply.status(404).send();
    }

    return reply.status(200).send(meal);
  }

  static async deleteMeal(request: FastifyRequest, reply: FastifyReply) {
    const deleteMealParamsSchema = z.object({
      meal_id: z.string().uuid(),
    });

    const { meal_id } = deleteMealParamsSchema.parse(request.params);

    const user_id = request.session.user?.id;

    if (!user_id) {
      return reply.status(401).send();
    }

    await MealService.deleteMeal({ meal_id, user_id });

    return reply.status(204).send();
  }

  static async updateMeal(request: FastifyRequest, reply: FastifyReply) {
    const updateMealParamsSchema = z.object({
      meal_id: z.string().uuid(),
    });

    const { meal_id } = updateMealParamsSchema.parse(request.params);

    const updateMealBodySchema = z.object({
      name: z.string().optional(),
      description: z.string().optional(),
      is_on_diet: z.boolean().optional(),
      created_at: z.date().optional(),
    });

    const { name, description, is_on_diet, created_at } =
      updateMealBodySchema.parse(request.body);

    const user_id = request.session.user?.id;

    if (!user_id) {
      return reply.status(401).send();
    }

    const updatedMeal = await MealService.updateMeal({
      meal_id,
      user_id,
      name,
      description,
      is_on_diet,
      created_at,
    });

    return reply.status(200).send(updatedMeal);
  }

  static async getMealsMetrics(request: FastifyRequest, reply: FastifyReply) {
    const user_id = request.session.user?.id;

    if (!user_id) {
      return reply.status(401).send();
    }

    const mealsMetrics = await MealService.calculateMetrics({ user_id });

    return reply.status(200).send(mealsMetrics);
  }
}
