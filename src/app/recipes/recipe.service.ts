import { EventEmitter, Injectable } from "@angular/core";
import { Ingredient } from "../shared/ingredient.model";
import { ShoppingListService } from "../shopping-list/shopping-list.service";
import { Recipe } from "./recipe.model";

@Injectable()
export class RecipeService {
    recipeSelected = new EventEmitter<Recipe>();

    private recipes: Recipe[] =[
        new Recipe(
          'Tasty Chickn',
          'It sure is tasty',
          'https://upload.wikimedia.org/wikipedia/commons/thumb/6/6d/Good_Food_Display_-_NCI_Visuals_Online.jpg/495px-Good_Food_Display_-_NCI_Visuals_Online.jpg',
          [
            new Ingredient('Chicken', 2),
            new Ingredient('Potato', 8),
          ]),
        new Recipe(
          'Kale',
          'Its jsut kale',
          'https://www.veggycation.com.au/siteassets/veggycationvegetable/kale.jpg',
          [
            new Ingredient('Kale', 8000),
          ])
      ];

      constructor(private slService: ShoppingListService) {}

      getRecipes() {
        return this.recipes.slice();
      }

      addIngredientsToShoppingList(ingredients: Ingredient[]) {
          this.slService.addIngredients(ingredients);
      }
}