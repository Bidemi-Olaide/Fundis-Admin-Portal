Feature: Test to verify customer Portal
    A test to launch url
    A test for sign in as an Admin
    A test for forget password
   


#  Scenario: A test to verify valid url
#     Given I launch the Fundis admin site
#     Then  I should see Fundis admin header "Welcome Fundis Admin Portal"

# Scenario: A test to verify an admin cannot sign with invalid email address
#     Given I launch the Fundis admin site
#     When  I input sign in with email and password "alex@fundis.co", and "Patafundili90li90li@"
#     Then  I click on submit button
#     Then  I should see an error message "Invalid parameters supplied."


# Scenario: A test to verify an admin cannot sign with invalid phone number
#     Given I launch the Fundis admin site
#     And   I click on phone button
#     When  I input sign in with number and password "700166460", and "Patafundili90li90li@"
#     Then  I click on submit button
#     Then  I should see an error message "Invalid parameters supplied."


# Scenario: A test to verify an admin cannot sign with valid email address and invalid password
#     Given I launch the Fundis admin site
#     When  I input sign in with email and password "alex@fundis.co.ke", and "Patafundili90li90li"
#     Then  I click on submit button
#     Then  I should see an error message "Invalid parameters supplied."


# Scenario: A test to verify an admin cannot sign with invalid password
#     Given I launch the Fundis admin site
#     And   I click on phone button
#     When  I input sign in with number and password "700166469", and "Patafundili90li90li"
#     Then  I click on submit button
#     Then  I should see an error message "Invalid parameters supplied."



#  Scenario: A test to verify an admin can successfully sign in with valid phone number and password
#     Given I launch the Fundis admin site
#     And   I click on phone button
#     When  I input sign in with number and password "700000023", and "p@$$wOrd12345"
#     Then  I click on submit button
#     Then  I should see the dashboard page 



# Scenario: A test to verify an admin can successfully sign in valid email and password
#     Given I launch the Fundis admin site
#     When  I input sign in with email and password "haramidey239+8@gmail.com", and "p@$$wOrd12345"
#     Then  I click on submit button
#     Then  I should see the dashboard page 
    

# Scenario: A test to verify an admin can see request table on Dashboard
#     Given I launch the Fundis admin site
#     When  I input sign in with email and password "haramidey239+8@gmail.com", and "p@$$wOrd12345"
#     Then  I click on submit button
#     Then  I should see request taps "Pending Request", "Current Request", and "Completed Request"
#     And   I should see request table


# Scenario: A test to verify an admin can see Request Tab and all job request
#     Given I launch the Fundis admin site
#     When  I input sign in with email and password "haramidey239+8@gmail.com", and "p@$$wOrd12345"
#     Then  I click on submit button
#     When  I click on Job Request
#     Then  I should see header "All Job Requests" 
#     And   I should see be able to Export all data
    

Scenario: A test to verify a job request
    Given I launch the Fundis admin site
    When  I input sign in with email and password "haramidey239+8@gmail.com", and "p@$$wOrd12345"
    Then  I click on submit button
    When  I click on Job Request
    When  I click on any Job request
    Then  I should see details pop up


# Scenario: A test to verify a job request
#     Given I launch the Fundis admin site
#     When  I input sign in with email and password "haramidey239+8@gmail.com", and "p@$$wOrd12345"
#     Then  I click on submit button
#     When  I click on Job Request
#     Then  I shuffle all job request by their titles 
#     When  I click on any Job request
#     # Then  I should see details pop up

    