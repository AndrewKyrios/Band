//Initial signup-spec.js 
 'use strict';
 
describe('Sign-up form page', function(){
    beforeEach(function(){
        browser.get('http://localhost:8000/Rocket-Team');
 
    });

    //tests title page
    it('should have a title', function(){
        expect(browser.getTitle() ).toEqual('Team Challenge');
        browser.getTitle().then(function(response){
            console.log(response);
        });

    });

    //tests if user has entered anything in the form
    it('should fail form validation, all fields pristine', function() {
        element(by.css('.form[name="getoffer"] input[type="submit"]')).click();
        expect(element(by.name('getoffer'))).toHaveClass('ngDirty'); 

    });


    it('should warn on missing/malformed credentials', function() {
    	email.clear();
    	password.clear();

    	password.sendKeys('test');
    	Button.click();
    	expect(error.getText()).toMatch('missing email');

    	email.sendKeys('test');
    	loginButton.click();
    	expect(error.getText()).toMatch('invalid email');

    	email.sendKeys('@example.com');
    	password.clear();
    	loginButton.click();
    	expect(error.getText()).toMatch('missing password');
  	});

    //tests if email and password are valid
  	it('should accept a valid email address and password', function() {
    	email.clear();
    	password.clear();

    	email.sendKeys('test@example.com');
    	password.sendKeys('test');
    	loginButton.click();
    	expect(browser.getCurrentUrl()).not.toEqual(loginURL);
  	});

  	//tests if reset button works
  	it('should reset page after pressing reset', function() {
    	var resetButton = $('a.reset');
    	resetButton.click();
    	expect(browser.getCurrentUrl()).toEqual(loginURL);
  });
});