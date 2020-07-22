/*Exercise instructions : take the html code from the following CodePen : https://codepen.io/ayunas-the-scripter/pen/WNQgpqB,
  and use JavaScript DOM manipulation to inject the html into the inject id element of inject.html
*/
let inject = (data) => {
  document.getElementById("inject").innerHTML = data;

  //   document.getElementById("inject").appendChild(data);
};

let injection_data =
  '<center><h1><i>HTML Practice Exercise TEKcamp.</i></h1><h2><a href="">TEKsystems "TEKcamp"</a></h2></center><hr />I love <i>HTML</i> for the following reasons:<ol><li>I learned it quickly.</li><li>I can make web pages using code<li> It’s fun.</li></ol><hr />My instructor’s email address is: <a href="mailto:ayunas@teksystems.com">ayunas@teksystems.com</a>.<h1>Have a great day!</h1>  I really look forward to learning how to code!  Have a great day.  -[Team "Git\'er Done"]';

inject(injection_data);
