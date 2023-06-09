import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MAT_FORM_FIELD_DEFAULT_OPTIONS, MatFormFieldModule } from '@angular/material/form-field';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { RecipesHistoryComponent } from './pages/home-page/recipes-history/recipes-history.component';
import { RecipeCreatorComponent } from './objects/recipe/recipe-creator/recipe-creator.component';
import { MatStepperModule } from '@angular/material/stepper';
import { NavBarComponent } from './common/nav-bar/nav-bar.component';
import { MatDialogModule } from '@angular/material/dialog';
import { DialogConfirmationComponent } from './common/dialog/dialog-confirmation/dialog-confirmation.component';
import { IngredientCreatorComponent } from './objects/ingredient/ingredient-creator/ingredient-creator.component';
import { RecipesViewFullComponent } from './pages/recipes-view-full/recipes-view-full.component';
import { RecipeItemCardComponent } from './pages/recipes-view-full/recipe-item-card/recipe-item-card.component';
import { RecipeItemOnClickComponent } from './pages/recipes-view-full/recipe-item-on-click/recipe-item-on-click.component';
import { MatSelectModule } from '@angular/material/select';
import { IngredientItemComponent } from './objects/ingredient/ingredient-item/ingredient-item.component';
import { RecipeItemComponent } from './objects/recipe/recipe-item/recipe-item.component';
import { IngredientListViewComponent } from './pages/home-page/ingredient-list-view/ingredient-list-view.component';



@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    IngredientListViewComponent,
    IngredientItemComponent,
    RecipesHistoryComponent,
    RecipeItemComponent,
    RecipeCreatorComponent,
    NavBarComponent,
    DialogConfirmationComponent,
    IngredientCreatorComponent,
    RecipesViewFullComponent,
    RecipeItemCardComponent,
    RecipeItemOnClickComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatIconModule,
    FormsModule,
    ReactiveFormsModule,
    MatStepperModule,
    MatDialogModule,
    MatInputModule,
    MatFormFieldModule,
    MatSelectModule
  ],
  providers: [{provide: MAT_FORM_FIELD_DEFAULT_OPTIONS, useValue: {appearance: 'outline'}}],
  bootstrap: [AppComponent]
})
export class AppModule { }
