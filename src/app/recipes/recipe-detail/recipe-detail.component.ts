import { Component, OnInit } from '@angular/core';

import { Recipe } from '../recipe.model';
import {RecipeService} from '../recipe.service';
import {ActivatedRoute, Params} from '@angular/router';

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.css']
})
export class RecipeDetailComponent implements OnInit {
  recipe: Recipe;
  id: number;

  constructor(private  recipeService: RecipeService,
              private route: ActivatedRoute ) { }

  ngOnInit() {
    // ne fonctionne que pour l on charge le composant
   // const id = this.route.snapshot.params['id'];
    this.route.params
      .subscribe(
        (params: Params) => {
          // + fait en sorte que ce soit un number et non un string
          this.id = +params['id'];
          this.recipe = this.recipeService.getRecipeById(this.id);
        }
      );

  }

  onAddToShoppingList() {
    this.recipeService.addIngredientsToShoppingList(this.recipe.ingredients);

  }

}
