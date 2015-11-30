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

    // tests if the user has provided a valid email
    it('should warn on wrong email', function() {
        var email = element(by.model('email'));
        email.sendKeys("your_sister");
     	expect(element(by.css('#emailError')).isPresent()).toEqual(true);
 	});

    // tests if the first name provided respects the max length condition
    it("first name can't be longer than 15 chars", function() {
        var first_name = element(by.model('first_name'));
        first_name.sendKeys("HHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHH");
        expect(element(by.css('#first_nameError')).isPresent()).toEqual(true);
    });

    // tests if the last name provided respects the min length condition
    it('Last name has to be longer than 2 chars', function() {
        var first_name = element(by.model('last_name'));
        first_name.sendKeys("K");
        expect(element(by.css('#last_nameError')).isPresent()).toEqual(true);
    });

    // tests if the passwords provided for the password and confirmation fields match
    it("passwords don't match", function() {
        var password1 = element(by.model('pw1'));
        var password2 = element(by.model('pw2'));
        password1.sendKeys("jj");
        password2.sendKeys("kk");
        expect(element(by.css('#passwordError')).isPresent()).toEqual(true);
    });
})