

## Rideshare Demo Applciation

I will put links and references to my decisions within this README

### Creating the Skeleton Application

For the structure of the app, I used create react app because it is a tool I am familiar with in my current role, and I know it allows for rapid prototyping and devlopment. In the interest of getting something out quickly and efficiently, I decided it was easiest to use this tool.

### Visualizing the Data

For JSON Data I like to use a website called Code Beautify (https://codebeautify.org/jsonviewer) to give me a drop down view of each row in the dataset. This has allowed me to quickly work with various API's in the past, and understand the structure of return data before I put it into a live application.

### Wireframing

Initial wireframes I created for basic page layout can be found in the folder wireframes/wireframes.pdf

### The Docker Environment

I have a Dockerfile that defines the image for my react app, installs dependencies, and exposes the port for it to run on. Then my docker compose files orchestrates the running of that image by using the command npm start and binding my local port 3000 to the exposed docker port. It also sets the environment variable to production, but this can be changes to the appropriate environment as required.

### Running Application

The application can be run via docker compose with the command *docker-compose up web*

### Third Party Libraries Used

The following third parties were used to provide rapid development of features:
https://reacttraining.com/react-router/
https://www.ag-grid.com/
https://react-bootstrap.github.io/

### Implementation Plan and Future Steps

A basic diagram providing a high level timeline of next steps can be found in implementation_plan/plan.pdf