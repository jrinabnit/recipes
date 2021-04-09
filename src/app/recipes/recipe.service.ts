import { Injectable } from '@angular/core';
import { Ingredient } from '../shared/ingredient.model';
import { ShoppingListService } from '../shopping-list/shopping-list.service';
import { Recipe } from './recipe.model';

@Injectable()
export class RecipeService {
	private recipes: Recipe[] = [
		new Recipe(
			'Tempe Squash Curry',
			'A savory mix of vegetables and spices served best with brown rice',
			'https://i2.wp.com/www.downshiftology.com/wp-content/uploads/2018/12/Shakshuka-19.jpg',
			[ new Ingredient('Tempe', 1), new Ingredient('Cauliflower', 3) ]
		),
		new Recipe(
			'Garlic & Pepper Pasta',
			'A vegetarian pasta made with garlic, olive oil, and your choice of vegetables',
			'https://images.unsplash.com/photo-1553621043-f607bfbf6640?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MzJ8fHBhc3RhfGVufDB8fDB8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
			[ new Ingredient('Pasta noodles', 1), new Ingredient('Garlic cloves', 4) ]
		),
	];

	constructor(private slService: ShoppingListService) {}

	getRecipes() {
		return this.recipes.slice();
	}

	getRecipe(index: number) {
		return this.recipes[index];
	}

	addIngredientsToShoppingList(ingredients: Ingredient[]) {
		this.slService.addIngredients(ingredients);
	}
}
