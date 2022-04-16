// CHAPTER 01
// Q1
// alert('Welcome to my website');

// Q2
// alert('JavaScript Alert \n \n Error! Please enter a valid password', "");

// Q3
// alert('JavaScript Alert \n Welcome to JS land... \n Happy Coding!');

// Q4
// alert('JavaScript Alert \n Welcome to JS land');
// alert('Happy Coding!')

// Q5
// alert('JavaScript Alert \n Hello... I can run JS through my web browser\'s console');

//  CHAPTER 02
// Q1
// var username;

// Q2
// var myName = "Masooma Malik";

// Q3
// var message = "Hello World";
// alert(message);

// Q4
// var name="John Doe", age =" 15 years old", msg="Certified Mobile Application Development";
// alert(name);
// alert(age);
// alert(msg);

// Q5
// var x="PIZZA\nPIZZ\nPIZ\nPI\nP";
// alert(x);

// Q6
// var email = "masoomamalik389@gmail.com";
// var msg = "my email address is " + email;
// alert(msg);

// Q7
// var book = "A smarter way to learn JavaScript";
// alert('I am trying to learn from the book ' + book);

// Q8
// document.write('Yah! I can write HTML content through JavaScript');

// Q9
// var x = "▬▬▬▬▬▬▬▬▬ஜ۩۞۩ஜ▬▬▬▬▬▬▬▬▬"
// alert(x);

//  CHAPTER 03
// Q1
// age=15;
// alert('I am '+age+' years old');

// Q2 

// if (localStorage) {

//     var visits = localStorage.getItem('visits');}

//     if (visits == null) { visits = 1; }

//     if (visits == 1) { console.log("First visit") }

// else { alert('You have visited this site ' + visits + ' times') }
 
// localStorage.setItem('visits', +visits + 1);
  
// Q3
// birthYear = 1997;
// document.write('My birth year is '+birthYear +'<br> Data type of my declared variable is a number');

// Q4
// name= "John Doe"
// title= "T-shirts"
// qty=5;
// document.write('<b>'+ name);
// document.write(' ordered ' + qty+ ' '  +title+  '(s) on XYZ Clothing Store');

// CHAPTER 04
// Q1
// var a,b,c;

// Q2
// var a,b,c,d,e;
// var 2sw;
// var  s w;
// var ab&;
// var d*g;

// Q3
// document.write('<b> Rules For Naming JS Variables');
// document.write('<br><br><br>Variable names can only contain numbers, $ and _. For example $my_1stVariable <br>')
// document.write('Variables must begin with a letter, $ or_. For example $name, _name or name');
// document.write('<br> Variable names are case sensitive')
// document.write('<br> Variable names should not be JS Keywords');

// CHAPTER 05
// Q1
// a=3
// b=5
// c=a+b
// document.write('Sum of '+ a + ' and ' + b+ ' is ' + c );

// Q2

// a=3
// b=5
// c=a-b
// document.write('Difference of '+ a + ' and ' + b+ ' is ' + c );

// a=3
// b=5
// c=a*b
// document.write('<br> Product of '+ a + ' and ' + b+ ' is ' + c );

// a=3
// b=5
// c=a%b
// document.write('<br> Modulus of '+ a + ' and ' + b+ ' is ' + c );

// Q3
// var a , b= 5;
// document.write("Value after variable decalration is " + a);
// document.write('<br>Initial Value: ' + b);
// b= ++b;
// document.write("<br>Value after variable increment is " + b);
// b= b+7;
// document.write("<br>Value after addition is " + b);
// b=--b;
// document.write("<br>Value after decrement is " + b);
// b= b%3;
// document.write("<br>The remainder is " + b);

// Q4
// var cost=600;
// var tPrice= cost*5;
// document.write('Total cost to buy 5 tickets to a movie is ' + tPrice +'PKR');

// Q5
// document.write('Table of 4');
// for ( let i=1; i<11; i++)
// {
//     document.write('<br> 4 x ' + i+ ' = ' + i*4);
// }

// Q6
// var c=25, f=70
// ctof= (c*9/5) + 32;
// ftoc= (f-32)*5/9;
// document.write(c + '\u00B0C ' + 'is ' + ctof +'\u00B0F' );
// document.write('<br>'+f + '\u00B0F ' + 'is ' + ftoc +'\u00B0C' );

// Q7
// prc1 = 650, qty1= 3, prc2 = 100, qty2 = 7, schg= 100;
// document.write('Price of item 1 is '+ prc1);
// document.write('<br>Quantity of item 1 is ' + qty1);
// document.write('<br>Price of item 2 is '+ prc2);
// document.write('<br>Quantity of item 2 is ' + qty2);
// document.write('<br>Shipping Charges: '+ schg);
// cost1= prc1*qty1; cost2= prc2*qty2;
// tcost= cost1 + cost2+ schg;
// document.write('<br><br>   Total cost of your order is ' + tcost)

// Q8
// mm = 980, om = 804;
// per = om/mm*100;
// document.write('Marks Sheet')
// document.write('<br><br>Total Marks: '+ mm);
// document.write('<br>Obtained Marks: '+ om);
// document.write('<br>Percentage: '+ per);

// Q9
// document.write('Currency in PKR')
// us = 10, riyal = 25;
//     pkr = us*104.8 + riyal*28;
// document.write('<br><br>Total Currency in PKR is '+ pkr);
 
// Q10
//  x = (5 + 5)*10/2;
//  document.write(x);

// Q11
// document.write('Age Caculator')
// currYr = 2016, birYr = 1992; age =  currYr - birYr;
// document.write('<br><br>Current Year: '+ currYr);
// document.write('<br>Birth Year: '+ birYr);
// document.write('<br>Your Age is: '+ age);

// Q12
// document.write('The Geometrizer')
// r=20, pi=3.142
// c= 2*pi*r; a= pi*r*r;
// document.write('<br><br>Radius of a circle is '+ r);
// document.write('<br>The circumference is '+ c);
// document.write('<br>he area is: '+ a);

// Q13
// document.write('Lifetime Supply Calulcator')
// favSnack= "Chips", currAge = 15, maxAge = 65, amt = 3;
// totSnack = (maxAge-currAge)*amt;
// document.write('<br><br>Favourite Snack: '+ favSnack);
// document.write('<br>Curent Age: '+ currAge);
// document.write('<br>Estimated Maximum Age: '+ maxAge);
// document.write('<br>Amount of snacks per day: '+ amt);
// document.write('<br>You will need '+ totSnack + " " + favSnack + 'to last you until the ripe old age of ' + maxAge  );

// CHAPTER 06-09
// Q1
// a=10;
// document.write('Result:');
// document.write('<br> The value of a is: ' + a);
// document.write('......................................................');
// document.write('<br><br>The value of ++a is: ' + ++a);
// document.write('<br>Now the value of a is: ' + a);
// document.write('<br><br>The value of a++ is: ' + a++);
// document.write('<br>Now the value of a is: ' + a);
// document.write('<br><br>The value of --a is: ' + --a);
// document.write('<br>Now the value of a is: ' + a);
// document.write('<br><br>The value of a-- is: ' + a--);
// document.write('<br>Now the value of a is: ' + a);

// Q2
// var a = 2, b = 1;
// // --a - --b + ++b + b--
// // 1 - 0 + 1 + 1 = 3
// var result = --a - --b + ++b + b--;
// document.write('a is ' +a );
// document.write('<br>b is ' +b );
// document.write('<br>result is ' +result );

// Q3
// userName = prompt('Please Enter Your Name');
// document.write('<b> Welcome to my Page '+ userName);

// Q4
// Q5
// num = prompt(' Enter a number to get a multiplcation table', ' For example:5');
// if (!num)
// {
//   document.write('Table of 5');
// for ( let i=1; i<11; i++)
// {
//     document.write('<br> 5 x ' + i+ ' = ' + i*5);
// }  
// }
// else {
//     document.write('Table of ' + num);
// for ( let i=1; i<11; i++)
// {
//     document.write('<br>'+ num + ' x ' + i+ ' = ' + i*num);
// }
// }

// Q6
// sub1= prompt('Enter first subject:');
// sub2= prompt('Enter second subject:');
// sub3= prompt('Enter third subject:');
// mm=100;
// om1= prompt('Enter marks obtained in '+ sub1);
// om2= prompt('Enter marks obtained in '+ sub2);
// om3= prompt('Enter marks obtained in '+ sub3);

// document.write('Subject     Total Marks     Obtained Marks      Percentage');
// document.write('<br>'+sub1+ "    |   "+mm+"    |  "+ om1+"   |  "+ om1/mm*100+'%');
// document.write('<br>'+sub2+"    |   "+mm+"  |    "+ om2+"  |   "+ om2/mm*100+'%');
// document.write('<br>'+sub3+"    |   "+mm+"  |    "+ om3+"   |  "+ om3/mm*100+'%');












































