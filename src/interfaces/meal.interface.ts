export interface createMealUseCaseRequest {
  name: string;
  description: string;
  is_on_diet: true | false;
  user_id: string;
}

export interface getMealsUseCaseRequest {
  user_id: string;
}

export interface getUniqueMealUseCaseRequest {
  meal_id: string;
  user_id: string;
}

export interface deleteMealUseCaseRequest {
  meal_id: string;
  user_id: string;
}

export interface updateMealUseCaseRequest {
  meal_id: string;
  user_id: string;
  name?: string;
  description?: string;
  is_on_diet?: true | false;
  created_at?: Date;
}

export interface calculateMetricsUseCaseRequest {
  user_id: string;
}
