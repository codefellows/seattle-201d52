# Class 3: HTML Lists, Control Flow with JS, and the CSS Box Model

<a id="top"></a>
## Lecture 3

**Learning Objectives**

As a result of completing Lecture 3 of Code 201, students will:

- Demonstrate understanding of and classify assorted control flow techniques in JavaScript including ‘for’ loops, ‘if’ and if/else’, as well as  ‘while’ and ‘do/while’ structures, as measured by successful completion of the daily code assignment and a quiz administered in Canvas
- Demonstrate understanding of and explain what HTML element attributes are and how to use them, as measured by successful completion of the daily code assignment and a quiz administered in Canvas
- Demonstrate understanding of and illustrate the CSS box model, as measured by successful completion of the daily code assignment and a quiz administered in Canvas



## Code Review

Let's take about 30 minutes to do our code review session. We're going to look at someone's code, have students read through it and explain it, take questions, and so on. Code review is an important part of professional development processes and also a key part of our learning environment in this course.


### Loops

1. for Loops
```javascript
  for(starting val; condition; increment) {
    do something for a finite number of times
  }
```

2. while loops
```javascript
  while(condition) {
    do something until the condition is false
  }
```

3. do...while loops
```javascript
  do {
    do this at least once and until the condition is false
  } while (condition)
```


### Comparison Operators

| Operator | Name | Evaluates |
| -------- | ---- | --------- |
| a == b | loose equal to | equality of **values** a & b |
| a === b | strict equal to | equality of **values and types** a & b |
| a != b | not equal to | inequality of **values** a & b |
| a !== b | strict not equal to | inequality of **values and types** a & b |
| a > b | greater than | is value a greater than value b |
| a < b | less than | is value a less than value b |
| a >= b | greater than or equal to | is value a greater than OR equal to value b |
| a <= b | less than or equal to | is value a less than OR equal to value b |


| Operator | Name | Evaluates |
| -------- | ---- | --------- |
| a && b   | and  | are a and b *both* true |
| a &#124;&#124; b   | or   | is a *or* b true |
| !a       | not  | inverts the boolean value of a |


### If Conditionals

```javascript
if (condition === true) {
  //do this stuff
} else if (condition2 === true) {
  //do this other stuff
} else {
  //do this last stuff
}
```

### Switch Statements

```javascript
switch (faveColor) {

  case 'red':
    console.log('The user\'s favorite color is red');
    break;

  case 'green':
    console.log('The user\'s favorite color is green');
    break;

  default:
    console.log('The user has poor taste.');
    break;
}
```

### Truthy/Falsy

| Truthy  | Falsy   |
| ------- | ------- |
| true    | false   |
| 1       | 0       |
| 'mom'   | ''      |
|         | var a;  |
| 'true'  |         |
| 'false' |         |
| '0'     |         |