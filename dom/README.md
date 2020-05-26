Go to the the following MDN document and read about DOM manipulation:
https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Client-side_web_APIs/Manipulating_documents

<h4>Exercise 1:</h4>
**Follow the below steps to complete this exercise:**

1. move the css from outside the shopping-list.html file into a separate css stylesheet called : shopping-list.css
2. Create three variables that hold references to the following elements &lt;ul&gt; &lt;input&gt; &lt;button&gt; elements.
3. Create a function that will run in response to the button being clicked.
4. Inside the function body, start off by storing the current value of the input element in a variable.
5. Next, empty the input element by setting its value to an empty string — ''.
6. Create three new elements — a list item (&lt;li&gt;), &lt;span&gt;, and &lt;button&gt;, and store them in variables.
7. Append the span and the button as children of the list item.
8. Set the text content of the span to the input element value you saved earlier, and the text content of the button to 'Delete'.
9. Append the list item as a child of the list.
10. Attach an event handler to the delete button, so that when clicked it will delete the entire list item it is inside.
11. Finally, use the focus() method to focus the input element ready for entering the next shopping list item.

<h4>Exercise 2:</h4>
Here is a codepen link to the simple html document we marked up during our HTML module.

<a href="https://codepen.io/ayunas-the-scripter/pen/WNQgpqB" target="_blank">TEKcamp HTML Markup #1</a>

using the <code>inject.js</code> file, write some vanilla javascript to inject the entire contents of the html into the &lt;div id="inject"&gt; &lt;div&gt; html element.  You will have to link together the <code>inject.html</code> with the <code>inject.js</code> in order to get this to work.  You will need to reserach Javascript DOM manipulation in order to complete this exercise.  You are <strong>NOT</strong> allowed to copy & paste in any html directly in the inject.html document.


**<h4>Bonus Assignment</h4>**

Create a timer using DOM manipulation techniques. The following files are ready to go with some boilerplate code.
<pre>timer.html timer.js, and timer.css</pre> 

