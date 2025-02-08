Feature: New User registration
    A new user must complete the registration process by providing
    all mandatory fields with valid information, such as name, 
    last name, username, password and confirmPassword. The system should 
    validate the input and provide appropriate feedback in case of errors.
    
    To register on the platform for the first time, 
    users must fill out all fields with valid data.
    
    Scenario: Successful Sign Up
        Given I am on the sign up page
        When I enter valid values in user informations box
        And I click the submit button
        Then I should be registered

    Scenario: Failed Sign Up
        Given I am on the sign up page
        When I don't fill in all user informations boxes
        Then I shouldn't be able to register

Feature: Login
    To login to the platform, 
    user must enter valid username and password.

    Scenario: Failed login
        Given I am on the login page
        When I enter invalid credentials
        And I click the login button
        Then I should see an error message

    Scenario: Successful login
        Given I am on the login page
        When I enter valid credentials
        And I click the login button
        Then I should be logged in
    
