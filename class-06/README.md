# Class 6: The DOM, Domain Modeling, and Introduction to Objects

## Lecture 6

## Learning Objectives

As a result of completing Lecture 6 of Code 201, students will:
- Be able to translate a real-world problem domain into a code model by using provided user stories and technical requirements, as measured by successful completion of the daily code assignment
- Demonstrate an understanding of how the browser represents an HTML document as an object that can be manipulated with JavaScript, as measured by successful completion of the daily code assignment and a quiz administered in Canvas.
- Use JavaScript to dynamically render array data as an unordered list in the DOM, as measured by successful completion of the daily code assignment
- Demonstrate an understanding of how object literals are structured in JavaScript, as well as how to access and reassign values/functionality to their properties and methods, as measured by successful completion of the daily code assignment and a quiz administered in Canvas.
- Demonstrate an understanding of how dot notation and bracket notation are used to access/reassign properties and methods in JavaScript objects, as measured by successful completion of the daily code assignment and a quiz administered in Canvas.


### Notes on the assigned readings

**Article on Domain Modeling (Sobol)**

- Domain modeling is the process of creating a conceptual model for a specific problem. And a domain model that's articulated well can verify and validate your understanding of that problem.
- Here's some tips to follow when building your own domain models:
  - When modeling a single entity that'll have many instances, build self-contained objects with the same attributes and behaviors.
  - Model its attributes with a constructor function that defines and initializes properties.
  - Model its behaviors with small methods that focus on doing one job well.
  - Create instances using the new keyword followed by a call to a constructor function.
  - Store the newly created object in a variable so you can access its properties and methods from outside.
  - Use the this variable within methods so you can access the object's properties and methods from inside.

**"Understanding The Problem Domain Is The Hardest Part Of Programming" (Sonmez)**

- Why problem domains are hard
- Programming is easy if you understand the problem domain