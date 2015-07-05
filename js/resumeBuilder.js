/*
This is empty on purpose! Your code to build the resume will go here.
 */
 var bio = {
    "name": "Dan Burgess",
    "role": "Associate QA Engineer",
    "contacts": {
        "mobile": "5555555555",
        "email": "dantest@test.com",
        "github": "dpburgess",
        "twitter": "dpburg",
        "location": "Richmond, VA"
    },
    "welcomeMessage": "Hey, I'm Dan",
    "skills": [
        "HTML",
        "CSS",
        "PHP",
        "Problem-solving",
        "SQL"
    ],
    "biopic": "http://rememster.com",
    "display": "function"
}

var education = {
	"schools": [
	{
		"name": "Virginia Tech",
		"location": "Blacksburg, VA",
		"degree": "Bachelors Degree",
		"majors": "Business Management",
		"dates": "2010",
		"url": "http://vt.edu"
		}
	],
	"onlineCourses": [
		{
			"title": "TeamTreehouse",
			"school": "TeamTreehouse",
			"date": "2015",
			"url": "http://teamtreehouse.com"
		},
		{
			"title": "Nanodegree",
			"school": "Udacity",
			"date": "2015",
			"url": "http://udacity.com"
		}
	],
	"display": "function"
}

var work = {
	"jobs": [
		{
			"employer": "Snagajob",
			"title": "QA Associate Engineer",
			"location:": "Richmond, VA",
			"dates": "2015",
			"description": "Working on the QA Web team to test our web applications using manual testing, testing partners, Cucumber, Ruby, and Regression Tests."
		},
		{
			"employer": "Snagajob",
			"title": "Technical Consulting Manager",
			"location": "Richmond, VA",
			"dates": "2014-2015",
			"description": "Work in a Player/Coach role with a team building data integrations for clients, building out static webpages, and automating internal processes using an ETL tool."
		}
	],
	"display": "function"
}

var project = {
	"projects": [
		{
			"title": "My Personal Website",
			"dates": "2014-2015",
			"description": "The site is a playground for me to test and show off various skills I've used.",
			"images": ["string1", "string2"]
		},
		{
			"title": "Project 2",
			"dates": "2015",
			"description": "Just working on another project.",
			"images": ["string3", "string4"]
		}
	],
	"display": "function"
}



console.log(bio);
var formattedMobile = "";
var formattedMobile = HTMLmobile.replace("%data%", bio.contacts[0]);
//HTMLmobile = string.replace("%data%", bio.contacts[0]);
console.log(formattedMobile);