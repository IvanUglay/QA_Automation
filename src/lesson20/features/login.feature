Feature: Login functionality

  Scenario: Successful login
    Given I open the login page
    When I enter a valid username and password
    And I click the login button
    Then I should see the user dashboard

  Scenario: Invalid login
    Given I open the login page
    When I enter invalid login credentials
    And I click the login button
    Then I should see an error message

  Scenario: Empty login form
    Given I open the login page
    When I click the login button
    Then I should see validation warnings
