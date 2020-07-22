// declaring variables
let ref_item = document.getElementsByTagName("ul");
let ref_input = document.getElementsByTagName("input");
let ref_button = document.getElementsByTagName("button");

inject_item = () => {
  // declaring variables
  let input_value = ref_input[0].value;
  let new_list_item = document.createElement("li");
  let new_span = document.createElement("span");
  let new_button = document.createElement("button");

  //appending span and button to the new li
  new_list_item.appendChild(new_span);
  new_list_item.appendChild(new_button);

  // setting text content to the input value
  new_span.textContent = input_value;

  new_list_item.setAttribute("id", input_value);
  new_button.textContent = "Delete";

  // setting attribute for event handler
  new_button.setAttribute(
    "onclick",
    'Delete(this.parentNode.getAttribute("id"))'
  );

  //append created element to parent
  ref_item[0].appendChild(new_list_item);

  // reset text field
  ref_input[0].value = "";

  // Focus on text field
  ref_input[0].focus();
};

// onClick function
Delete = (data) => {
  // remove parent element
  document.getElementById(data).remove();

  // Focus on text field
  ref_input[0].focus();
};
