Chris's notes: Thursday 1:28am. may 16 2019

The anatomy of html doc
{
start with <html> tag
ex. <html> Everything goes in here </html>
	the first thing that goes inside the <html> tags is the <head></head> tag
	<head>
	{
		inside the <head></head> tag is the (<title> web page title </title>) web page title or the link to the stylesheet.css
		ex of link. <link rel="stylesheet" href="style.css">
		or <meta> tags: descriptions, keywords, script tags
	}
	</head>
	<body>
		the <body></body> defines the main content of the web page, visible. 
		CLOSING TAG
		<p> paragraph tag
			paragraph
		</p> closing element
		SINGLETON OR SELF CLOSING
		<br>, <img>, <link>, etc...
	</body>
	HTML ATTRIBUTES
	<img src="pic.jpg" alt="info about the image, not visible. unless hover">
	CLASS AND ID ATTRIBUTES
	<p class="point to a style in css" id="Java Script and css (outdated)">
	THE DIV ELEMENT
	<div></div> used for defining diffrent layout through css
	THE SEMANTIC ELEMENTS
	<form>, <header>, <section>: semantic tags about language
	NON SEMANTIC
	<div>, <span>
	HTML VALIDATION
	https://validator.w3.org
	extention for visual studio code and other editors
	w3school.com is a great resourse, use google
}
What is CSS
cascading style sheets
provides style to html elements
css be defined in side html doc with stle tag, or in a seprate file

RULESETS --(May 16 2019)
body - (A selector){
	background-color: gray;
	font-size: 30px;
}

p - (A selector){
	color: green;
}
Selectors - html element like <body> or <p> or <img>
Class selector start with .Name_Of_Class
ID with #Name_Of_ID
Declearations - inside the {css property name: the css value associated with that property; <- end with a semicolon
}

CSS UNIT
CSS provides absolute and relative units to define a length.
It's expressed by a number value + the unit.

Absolute units- fixed units - cm, inches, pts, mm, pixles
Relative units- relative to another property - will change automatically, %, em, rem, vw

css multiple selectors
apply the same ruleset to multiple selctors
body, p{
	
}

CSS FUNCTIONS - around 10, function_name()
ex. calc(2em * 5em)

CSS ANIMATIONS
animation and transition property
keyframes allow you to create more complex animations
transition between two diffrent CSS Values

CSS Media Queries
Allows you to define diffrent ruleset for diffrent screen sizes (Responsive Design)
ex. @media onle screen and (min-width: 650px){
	(ruleset)
}

JAVASCRIPT
Scripting language, for implementing UI interactivity, 2d/3d graphics, image carousals, etc...

Written in an HTML doc or in external javascript file
Modern frontend devv frameworks/libraries like React, Vue and Angular are written in JavaScript [use after you learn Vanilla JavaScript]
-------------

index.html - recognizes starting page for html
Extention validator for VS
--------------
STARTING THE HTML DOC
![enter] in vs prints all the tags
<DOCTYPE html> dont touch

Change Title
add the link to styles.css
*href - specify location and name of css document*
<link rel="stylesheet" type="text/css" href="the_location/name of css folder"> 
Extention - open with live server for vs, no more refresh.

Mobile First CSS - 
Create an Images Folder

Starting / What do I need?
UI needs - start from top left, fluid design, scaled from very left to right or stay inside of a single block. 
<body>
	<div class="container" *Given a class for styling later*>
		<header>
			<img src="point to images folder, and file. Ex. images/logo.svg" alt="company name logo" Style? class="logo"> - to display image
			<nav> - semantic tag for navigation bar (good practice)
			<a href="# - services/ another html doc." class="hide-desktop">
				<img src="ham.svg" alt="toggle menu" class="menu" id="menu">
			</a> 
			<ul class="show-desktop hide-desktop (for mobile)" id="nav"> - unordered lists
				<li id="exit class="exit-btn hide-desktop" ><img src="image of exit.svg" alt="exit menu"></li>
				<li><a href="#">the anchor text</a></li>
				<li><a href="# - nothing">Home</a></li>
			</ul>
			</nav>
		</header>
		<section>
			<img src="image for the middle.svg" alt="server graphic" class="server">
			<h1>Web Hosting For The Modern Era</h1>
			<p class="subhead">blah blah blah blah blah</p>
			<img src="image scroll" alt="scroll down" class="scroll hide-mobile show-desktop">
			the graphic "bezia code, weird squiggle" achievable with css alone
		</section>
	</div>
	<div>
	</div>
</body>
*for logos use svg (Scalable Vector Graphics), not jpg, or others.*
*clickable image use <a> tag*
confine within a container

Reactive design: dock links in desktop or scroll list for mobile

Chris's Notes 2:43 May 27 2019
 