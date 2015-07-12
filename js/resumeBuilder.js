

 var bio = {
    "name": "Dan Burgess",
    "role": "Web Developer",
    "contacts": {
        "mobile": "5555555555",
        "email": "dantest@test.com",
        "github": "dpburgess",
        "twitter": "@dpburg",
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
    "biopic": "http://placehold.it/200x200",
    "display": function() {
    	var formattedName = HTMLheaderName.replace("%data%", bio.name);
    	var formattedRole = HTMLheaderRole.replace("%data%", bio.role);
		var formattedLocation = HTMLlocation.replace("%data%", bio.contacts.location);
		var formattedGithub = HTMLgithub.replace("%data%", bio.contacts.github);
		var formattedTwitter = HTMLtwitter.replace("%data%", bio.contacts.twitter);
		var formattedEmail = HTMLemail.replace("%data%", bio.contacts.email);
		var formattedMobile = HTMLmobile.replace("%data%", bio.contacts.mobile);
		$("#header").prepend(formattedRole);
    	$("#header").prepend(formattedName);
    	$("#topContacts").prepend(formattedGithub);
		$("#topContacts").prepend(formattedTwitter);
		$("#topContacts").prepend(formattedLocation);
		$("#topContacts").prepend(formattedMobile);
		$("#topContacts").prepend(formattedEmail);
		$("#footerContacts").prepend(formattedGithub);
		$("#footerContacts").prepend(formattedTwitter);
		$("#footerContacts").prepend(formattedLocation);
		$("#footerContacts").prepend(formattedMobile);
		$("#footerContacts").prepend(formattedEmail);
		var formattedWelcomeMsg = HTMLwelcomeMsg.replace("%data%", bio.welcomeMessage);
		var formattedBiopic = HTMLbioPic.replace("%data%", bio.biopic);
		$("#header").append(formattedWelcomeMsg);
		$("#header").append(formattedBiopic);
		$("#header").append(HTMLskillsStart);
		for(skill in bio.skills) {
		var formattedSkills = HTMLskills.replace("%data%", bio.skills[skill]);
		$("#skills").append(formattedSkills);
		}
    }
}

var work = {
	"jobs": [
		{
			"employer": "Snagajob",
			"url": "http://snagajob.com",
			"title": "QA Associate Engineer",
			"location": "Glen Allen, VA",
			"dates": "June 2015",
			"description": "Working on the QA Web team to test our web applications using manual testing, testing partners, Cucumber, Ruby, and Regression Tests."
		},
		{
			"employer": "Snagajob",
			"url": "http://snagajob.com",
			"title": "Technical Consulting Manager",
			"location": "Glen Allen, VA",
			"dates": "April 2014 - June 2015",
			"description": "Work in a Player/Coach role with a team building data integrations for clients, building out static webpages, and automating internal processes using an ETL tool."
		}
	],
	"display": function() {
		for(job in work.jobs) {
			$("#workExperience").append(HTMLworkStart);
			var formattedEmployer = HTMLworkEmployer.replace("%data%", work.jobs[job].employer);
			formattedEmployer = formattedEmployer.replace("#", work.jobs[job].url);
			var formattedTitle = HTMLworkTitle.replace("%data%", work.jobs[job].title);
			var formattedEmployerTitle = formattedEmployer + formattedTitle;
			var formattedWorkDate = HTMLworkDates.replace("%data%", work.jobs[job].dates);
			var formattedWorkLocation = HTMLworkLocation.replace("%data%", work.jobs[job].location);
			var formattedWorkDescription = HTMLworkDescription.replace("%data%", work.jobs[job].description);
			$(".work-entry:last").append(formattedEmployerTitle);
			$(".work-entry:last").append(formattedWorkDate);
			$(".work-entry:last").append(formattedWorkLocation);
			$(".work-entry:last").append(formattedWorkDescription);
		}
	}
}

var project = {
	"projects": [
	{
			"title": "My Personal Website",
			"url": "http://rememster.com",
			"dates": "2014-2015",
			"description": "The site is a playground for me to test and show off various web and programming skills I've used.",
			"images": ["images/project_1_img.png"],
			"alt": "Image of my site"
			},
		{
			"title": "Learning Ruby",
			"url": "https://github.com/dpburgess/lrthw",
			"dates": "2015",
			"description": "I've been going through exercises from 'Learn Ruby the Hard Way'",
			"images": ["images/project_2_img.png"],
			"alt": "Learn Ruby the Hard Way"
		}
	],
	"display": function() {
		for(proj in project.projects) {
			$("#projects").append(HTMLprojectStart);
			var formattedProjectTitle = HTMLprojectTitle.replace("%data%", project.projects[proj].title);
			formattedProjectTitle = formattedProjectTitle.replace("#", project.projects[proj].url);
			$(".project-entry:last").append(formattedProjectTitle);
			var formattedProjectDates = HTMLprojectDates.replace("%data%", project.projects[proj].dates);
			$(".project-entry:last").append(formattedProjectDates);
			var formattedProjectDescription = HTMLprojectDescription.replace("%data%", project.projects[proj].description);
			$(".project-entry:last").append(formattedProjectDescription);
			var formattedProjectImage = HTMLprojectImage.replace("%data%", project.projects[proj].images);
			formattedProjectImage = formattedProjectImage.replace("#", project.projects[proj].alt);
			$(".project-entry:last").append(formattedProjectImage);
		}
	}
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
	"display": function() {
			for(school in education.schools) {
			$("#education").append(HTMLschoolStart);
			var formattedSchoolName = HTMLschoolName.replace("%data%", education.schools[school].name);
			formattedSchoolName = formattedSchoolName.replace("#", education.schools[school].url);
			var formattedSchoolDegree = HTMLschoolDegree.replace("%data%", education.schools[school].degree);
			var formattedSchoolNameDegree = formattedSchoolName + formattedSchoolDegree;
			var formattedSchoolLocation = HTMLschoolLocation.replace("%data%", education.schools[school].location);
			var formattedSchoolDates = HTMLschoolDates.replace("%data%", education.schools[school].dates);
			var formattedSchoolMajor = HTMLschoolMajor.replace("%data%", education.schools[school].majors);
			$(".education-entry:last").append(formattedSchoolNameDegree);
			$(".education-entry:last").append(formattedSchoolDates);
			$(".education-entry:last").append(formattedSchoolLocation);
			$(".education-entry:last").append(formattedSchoolMajor);
		}
	}
}



bio.display();
work.display();
project.display();
education.display();

$("#main").append(internationalizeButton);
$("#map-div").append(googleMap);
/*Toggling the education section so it hides or shows when the polymer button is clicked*/
$(".show-education").click(function() {
    $("#education").toggle(200);
    });
