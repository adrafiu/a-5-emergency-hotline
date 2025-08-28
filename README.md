1.What is the difference between getElementById, getElementsByClassName, and querySelector / querySelectorAll?

Ans to The Question no.1:
Difference between getElementById, getElementsByClassName, and querySelector / querySelectorAll:

getElementById():
Returns: Single element (or null if not found)
Performance: Fastest method for ID selection
Usage: document.getElementById('myId')
Best for: Selecting single elements by their unique ID

getElementsByClassName():
Returns: Live HTMLCollection (updates automatically)
Performance: Very fast for class selection
Usage: document.getElementsByClassName('myClass')
Best for: Selecting multiple elements by class name

querySelector() / querySelectorAll():
Returns: querySelector(): First matching element (or null)
Returns: querySelectorAll(): Static NodeList (snapshot, doesn't update)
Performance: Slightly slower but more flexible
Usage: CSS selector syntax
Best for: Complex selections using CSS selectors

2.How do you create and insert a new element into the DOM?
Ans to The Question no.2:

Key Points:
Use createElement() for creating new elements
Prefer append() over appendChild() for modern projects
Use DocumentFragment for multiple insertions to improve performance
Be cautious with innerHTML due to potential XSS vulnerabilities
Choose the right insertion method based on where you want to place the element

Complete Example:

const newListItem = document.createElement('li');
newListItem.textContent = 'New Item';
newListItem.classList.add('highlight');
newListItem.addEventListener('click', () => {
console.log('Item clicked!');
});
const todoList = document.getElementById('todo-list');
todoList.appendChild(newListItem);
const firstItem = todoList.querySelector('li:first-child');
todoList.insertBefore(newListItem, firstItem);

3.What is Event Bubbling and how does it work?
Ans to The Question no.3:

Event Bubbling: Event bubbling is a fundamental concept in the DOM event model where an event starts from the target element that triggered it and then "bubbles up" through all its ancestor elements in the DOM hierarch.

<div id="parent" style="padding:20px; background:lightblue;">
  Parent
  <button id="child">Click Me</button>
</div>

<script>
  document.getElementById("child").addEventListener("click", function() {
    console.log("Child button clicked");
  });

  document.getElementById("parent").addEventListener("click", function() {
    console.log("Parent div clicked");
  });

  document.body.addEventListener("click", function() {
    console.log("Body clicked");
  });
</script>

4.What is Event Delegation in JavaScript? Why is it useful?
Ans to The Question no.4:

Event Delegation in JavaScript : Event delegation is a pattern where you attach a single event listener to a parent element to handle events that occur on its child elements. Instead of adding event listeners to each individual child element, you leverage event bubbling to handle events at a higher level in the DOM tree

Why is Event Delegation Useful:
Efficiency: One event listener instead of many.
Dynamic elements: Works for elements added later (e.g., in a To-Do app).
leaner code: Easier to maintain.

5.What is the difference between preventDefault() and stopPropagation() methods?
Ans to The Question no.5:

preventDefault():
Purpose: Prevents the browser's default behavior associated with an event.
Theoretical Concept: preventDefault() deals with the semantic meaning of an event - it tells the browser "don't do what you would normally do for this event."
When to use: When you want to override or cancel the browser's built-in behavior.

stopPropagation():
Purpose: Stops the event from propagating through the DOM tree.
Theoretical Concept: stopPropagation() deals with the event flow mechanism - it says "this event should not continue its journey through the DOM hierarchy."
When to use: When you want to contain an event within a specific part of the DOM.
