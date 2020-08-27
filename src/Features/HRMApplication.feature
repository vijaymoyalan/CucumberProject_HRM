@HRMActivity
Feature: Orange HRM activities
  performing the activities related to project

  @Activity1
  Scenario: Creating job vacancy
    Given I want to login to orangehrm with "orange" and "orangepassword123"
    And navigate to recruitment page
    And click vacancies menu to navigate the vacancies page
    When I click on add button to navigate add job vacancy
    And fill necessary details
    And click on save button to save vacancy
    And click vacancies menu to navigate the vacancies page
    Then Verify that the vacancy was created
    And Close the browser
    
    
  @Activity2
  Scenario: Adding a candidate for recruitment
  	Given I want to login to orangehrm with "orange" and "orangepassword123"
  	And navigate to recruitment page
  	And click on candidates tab
  	When I click on the Add button to add candidate info
  	And fill in the details of the candidate
  	And navigate to recruitment page
  	Then I confirm candidate entry
  	And Close the browser
  	
  	
  @Activity3
  Scenario Outline: Add multiple employees using an the Examples table
  Given I want to login to orangehrm with "orange" and "orangepassword123"
  And Click on PIM option in the menu
  And Click the Add button to add a new Employee
  And Check the Checkbox of Create Login Details
  Then Fill required fields "<Fname>" "<Lname>" "<Username>" using the data and click Save
  And Click on PIM option in the menu
  And Verify that the employees "<Fname>" "<Lname>" have been created
  And Close the browser
  
  Examples:
|Fname|Lname|Username|
|VijayA|Kumar|VijaKum|
|AjayA|Singh|AjaaSin|
|Sushma|Kumar|SushKum|


@Activity4
Scenario Outline: Creating multiple vacancies using data from Examples
Given I want to login to orangehrm with "orange" and "orangepassword123"
And navigate to recruitment page
And click vacancies menu to navigate the vacancies page
When I click on add button to navigate add job vacancy
And fill necessary details of "<title>" "<name>" "<manager>"
And click on save button to save vacancy
And click vacancies menu to navigate the vacancies page
Then Verify that the vacancy was created
And Close the browser

Examples:
|title|name|manager|
|Android Developer|VSCode Dev|Aditya Rai|
|Android Developer|Android Dev|Aditya Rai|
|Android Developer|.Net Dev|Aditya Rai|
|Android Developer|Test Specialist|Aditya Rai|
  	