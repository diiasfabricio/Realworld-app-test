Feature: New User registration
    Scenario: Successful Sing Up
        Given I am on the sing up page
        When I enter valid values in user informatons box
        And I click the submit button
        Then I should be registered

    Scenario: Failed Sing Up
        Given I am on the sing up page
        When I don't fill in all user informatons boxes
        Then I shouldn't be able to register

Feature: Login
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
    
