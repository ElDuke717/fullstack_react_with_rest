# Full Stack App with React and Rest API
# Lifetime Learner Course Catalog

![glasses](client/src/components/glasses.png)
### react_rest_api

## This is Project 10 for the Treehouse Full Stack JavaScript TechDegree
(the final project).

## Notes on the project:
The client is running on `port 3000` and the API/server is running on `port 5000`.

## About the project:

This project uses React to create a client for an existing school database REST API (created in a previous project). The full stack application provides a way for users to administer a school database containing information about courses: 
- users can interact with the database by retrieving a list of courses, 
- they can viewi detail for a specific course, 
- and they can create, update and delete courses in the database they create after logging in.

The app requires users to create an account and sign in to make changes to the database. 

It demonstrates my knowledge of React, JSX, React Router, React Context API, and Create React App.
It involved using the Create React App tool to set the project up and:

    - Uses JavaScript and JSX to build out the components in a modular fashion.
    - Uses React Router to set up your routes.
    - Uses Axios to fetch data from your REST API asybcronously.
    - Allows users to sign up and use basic authentication to support signing in.
    - Has custom CSS styling to personalize the project.


## Criteria for Exceeds Expectations:

1.  Display user friendly messages
    - Stateless components for `NotFound`, `Forbidden`, and `UnhandledError` have been created.
        - `NotFound` component displays a message when the user navigates to a page that does not exist.
            - The app redirects to the `NotFound` component when the user navigates to a page that is not returned from the REST API or does not exist.
        - `Forbidden` component displays a message when the user attempts to access a page that they do not have access to.
        - `UnhandledError` component displays a message when an error occurs that is not handled by the application or if there is a 500 internal server error.
        - `CourseDetail` and `UpdateCourse` components display a message when the user attempts to access a page that they do not have access to.
2. Persist user credentials
    - The user's credentials are persisted using cookies and the user is still logged in after the browser is closed or refreshed.
3.  Redirecting the user after successfully logging in
    - The user is redirected to their intended view after successfully logging in.
