package com.WhatCanIEat.controller;

import com.WhatCanIEat.model.Ingredient;
import com.WhatCanIEat.service.IngredientServiceImpl;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/ingredient")
public class IngredientController {
    @Autowired
    private IngredientServiceImpl ingredientService;

    @PostMapping
    public ResponseEntity<Ingredient> addNewIngredient(@RequestBody Ingredient requestIngredient) {
        System.out.println(requestIngredient);
        Ingredient savedIngredient = ingredientService.addNewIngredient(requestIngredient);
        System.out.println(savedIngredient);
        return ResponseEntity
                .status(HttpStatus.CREATED)
                .body(savedIngredient);
    }

    @GetMapping
    public ResponseEntity<List<Ingredient>> ingredientList() {
        List<Ingredient> ingredientList = ingredientService.getIngredientList();
        return ResponseEntity
                .status(HttpStatus.CREATED)
                .body(ingredientList);
    }

    @DeleteMapping("/{ingredientId}")
    public HttpStatus deleteIngredient(@PathVariable int ingredientId) {
        ingredientService.deleteIngredient(ingredientId);
        return HttpStatus.NO_CONTENT;
    }
}
