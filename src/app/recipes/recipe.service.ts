import { EventEmitter } from "@angular/core";
import { Recipe } from "./recipe.model";

export class RecipeService {
    recipeSelected = new EventEmitter<Recipe>();

    private recipes: Recipe[] =[
        new Recipe('A test recipe', 'this is only a test', 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/6d/Good_Food_Display_-_NCI_Visuals_Online.jpg/495px-Good_Food_Display_-_NCI_Visuals_Online.jpg'),
        new Recipe('Another test recipe', 'this is only a test', 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/6d/Good_Food_Display_-_NCI_Visuals_Online.jpg/495px-Good_Food_Display_-_NCI_Visuals_Online.jpg')
      ];

      getRecipes() {
        return this.recipes.slice();
      }
}