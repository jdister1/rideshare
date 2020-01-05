

## Rideshare Demo Applciation

I will put links and references to my decisions within this README

### Step 1: Creating the Skeleton Application

For the structure of the app, I used create react app because it is a tool I am familiar with in my current role, and I know it allows for rapid prototyping and devlopment. In the interest of getting something out quickly and efficiently, I decided it was easiest to use this tool.

### Step 2: Visualizing the Data

For JSON Data I like to use a website called Code Beautify (https://codebeautify.org/jsonviewer) to give me a drop down view of each row in the dataset. This has allowed me to quickly work with various API's in the past, and understand the structure of return data before I put it into a live application.

### Step 3: Wireframing

Because I don't have access too a premium subscription to an applicaiton like LucidChart, I decided to use a free software called Draw.io that will allow me to make very basic wireframes and flowcharts that I can share within this git repository. It doesn't look very professional, but I hope it demonstrates my thought process and how I quickly layout pages in terms of basic/modular elements (in this case a table and header).

### Step 4: The Docker Environment

I have a Dockerfile that defines the image for my react app, installs dependencies, and exposes the port for it to run on. Then my docker compose files orchestrates the running of that image by using the command npm start and binding my local port 3000 to the exposed docker port. It also sets the environment variable to production, but this can be changes to the appropriate environment as required.