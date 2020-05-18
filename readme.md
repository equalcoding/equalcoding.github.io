# Welcome to equalcoding.github.io !

This is a small project I have done to host my portfolio and any blog articles written in dev.to in a minimalist way.
Click here if you wish to set this up yourself. Follow installation guide below.

Page can be accessed [here](https://equalcoding.github.io/)


# Making changes
Flexibility has been in mind when developing this, therefore,  there is a general configuration available in the `main.js` file where the user is able to change links to their social media and dev.to profile.

If anything needs to be removed it can be done so by using `.hide` class on elements in the `.html`
Like in the example below. 

	<div  class="hide">
	<ion-icon  name="logo-linkedin"  class="clickable"  onClick="linkedIn()"></ion-icon>
	</div>


## Dependencies

Project imports `jQuery` and `bootstrap.min` . 

## Complete installation guide

 1. Click on the `Fork` button on the top right corner of the page of this repository.
 2. This will copy this repository to your account
 3. Rename the forked repository to `yourname.github.io` , e.g., `equalcoding.github.io` (this is important step so that you can set up your GitHub pages correctly)
 4. In settings of this repository find the section about GitHub pages and select the site to be built from the master branch
 5. After you have done this GitHub will show you that your site is available. You can follow the URL and there it will be.
 6. To change the configuration to point to your own accounts and media go to `main.js` file, and change the variables you wish to change. See below for a list of key variables.
		
## Configuration 

		document.title = `title of the web page`
		devtoUsername = 'your dev to username';
		perPage = how many dev.to articles you wish to display at a time
		page = returns the page number - this variable is implemented
		 for the ability to easily implement pagination
		 
		gitUsername = your github username
		githubCardLimit = how many cards to display
		githubSort =  Can be one of created, updated, pushed, full_name
		githubDirection = Can be asc or desc to sort results

		githubUrl = GitHub URL for when one of the header links is clicked
		twitchUrl = Twitch URL for when one of the header links is clicked
		twitterUrl = Twitter URL for when one of the header links is clicked
		linkedInUrl = LinkedIn URL for when one of the header links is clicked (hidden by default)
		youtubeUrl = YouTube URL for when one of the header links is clicked
		devtoUrl = Dev.to URL for when one of the header links is clicked
		emailAddress = Email address that will be used when email button is clicked

		defaultEmailSubject = default subject to be populated when email button is clicked
		defaultEmailMessage =  default message to be populated when email button is clicked
