import { FastifyInstance } from 'fastify';
import { MealController } from '../controllers/meal.controller';

export async function mealRoutes(app: FastifyInstance) {
  // POST /meals
  app.post('/', MealController.createMeal);

  // GET /meals
  app.get('/', MealController.getMeals);

  // GET /meals/:meal_id
  app.get('/:meal_id', MealController.getUniqueMeal);

  // DELETE /meals/:meal_id
  app.delete('/:meal_id', MealController.deleteMeal);

  // PATCH /meals/:meal_id
  app.patch('/:meal_id', MealController.updateMeal);

  // GET /meals/metrics
  app.get('/metrics', MealController.getMealsMetrics);
}
