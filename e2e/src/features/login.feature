Feature: Go to the login
 
  Scenario: Go to login page
    Given I am on the login page
    When I type username and password
    Then I should be logged in