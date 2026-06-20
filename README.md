1. Difference between getElementById, getElementsByClassName, and querySelector/querySelectorAll?
getElementById - Selects one element by ID. Fastest method.
getElementsByClassName - Selects all elements by class name. Returns live collection.
querySelector - Selects first element matching CSS selector. Single element only.
querySelectorAll - Selects all elements matching CSS selector. Returns static collection.

2. How do you create and insert a new element into the DOM?
Create element with createElement(), set content with textContent or innerHTML, then insert using appendChild(), insertBefore(), or prepend().

3. What is Event Bubbling? And how does it work?
Event bubbling is when an event fires on an element, then automatically propagates up through all parent elements. Event travels from child to parent in the DOM tree.

4. What is Event Delegation in JavaScript? Why is it useful?
Event delegation is attaching one listener to a parent element instead of multiple listeners to child elements. It works by using event bubbling. Useful because it saves memory, works for dynamically added elements, and makes code cleaner.

5. What is the difference between preventDefault() and stopPropagation()?
preventDefault() - Stops the browser's default action (like link navigation or form submission).
stopPropagation() - Stops the event from bubbling up to parent elements.
