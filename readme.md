1.What is the difference between getElementById, getElementsByClassName, and querySelector / querySelectorAll?
The methods getElementById, getElementsByClassName, querySelector, and querySelectorAll are all used in JavaScript to select elements from the HTML Document Object Model (DOM), but they differ in their selection criteria, return types, and whether the returned collection is "live" or "static."

2.How do you create and insert a new element into the DOM?
Steps to Create & Insert an Element

Create the element
const newDiv = document.createElement("div");
Add content or attributes
newDiv.textContent = "Hello, I’m a new div!";
newDiv.id = "myDiv";
newDiv.classList.add("box");
Insert it into the DOM
You need to choose where to place it:
Append at the end of a parent:
document.body.appendChild(newDiv);

3. What is Event Bubbling and how does it work?
Event bubbling means that when an event happens on an element, it first runs the handler on that element, and then the event “bubbles up” (propagates) to its parent, then the parent’s parent, and so on, until it reaches the top (document).

4.What is Event Delegation in JavaScript? Why is it useful?
Event Delegation is a technique where instead of attaching an event listener to each individual child element, you attach a single event listener to a parent element and handle events for its children using event bubbling.

5.What is the difference between preventDefault() and stopPropagation() methods?
1. event.preventDefault()
Purpose: Stops the default browser action for that event.
Does NOT stop event bubbling.
Example use cases:
Prevent a link from navigating
Prevent a form from submitting
Prevent right-click menu from opening
2. event.stopPropagation()
Purpose: Stops the event from bubbling up (or trickling down in capture phase).
Does NOT stop default behavior.
Example use case:
Prevent parent elements from also responding to the same event.
