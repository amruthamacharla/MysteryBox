# MysteryBox – Interactive Detective Mystery Game

MysteryBox is a web-based detective game that lets players investigate mystery cases, examine clues, and submit an accusation to solve each case. The project combines an interactive browser-based interface with Java Servlets and JSP to manage investigation flow and process player actions.

## Project Overview

The aim of MysteryBox is to provide an engaging mystery-solving experience where players use the information presented in a case and its clues to reach a conclusion. Players navigate the case and investigation pages, review the available evidence, and submit an accusation.

## Features

- **Mystery cases** – browse and select detective cases.
- **Investigation interface** – explore case information and available clues.
- **Clue examination** – review clues to support the investigation.
- **Accusation submission** – submit a suspect or conclusion through the application.
- **Result page** – view the outcome of the accusation.
- **Server-side processing** – Java Servlets handle application actions and investigation-related requests.
- **Session handling** – maintain relevant investigation state during gameplay.

## Technologies Used

- **Frontend:** HTML, CSS, JavaScript, Bootstrap, jQuery (where used)
- **Backend:** Java, Java Servlets, JSP
- **Web server:** Apache Tomcat 9
- **IDE:** Eclipse IDE

## Project Structure

The repository contains the Eclipse project configuration, Java source files, and web application resources. The main application files include:

```text
MysteryBox/
├── src/
│   └── main/
│       ├── java/
│       │   └── com/mysterybox/
│       │       └── controller/       # Servlets and case-related Java classes
│       └── webapp/
│           ├── WEB-INF/
│           │   └── web.xml            # Web application configuration
│           ├── index.html              # Application entry page
│           ├── cases.html              # Case selection page
│           ├── investigation.html      # Investigation page
│           ├── result.jsp              # Result page
│           ├── script.js               # Frontend interactions
│           ├── investigation.js        # Investigation interactions
│           └── style.css               # Application styling
└── README.md
```

*The exact files and folders may vary slightly as the project is updated.*

## How to Run the Project

1. Install a compatible **JDK**, **Eclipse IDE**, and **Apache Tomcat 9**.
2. Clone or download this repository.
3. In Eclipse, import the project using **File → Import → Existing Projects into Workspace**. If necessary, use the import option that matches the project's web application structure.
4. Configure Apache Tomcat 9 in Eclipse.
5. Make sure the project is configured to use the installed JDK and Tomcat runtime.
6. Add the project to the Tomcat server.
7. Start the server from Eclipse.
8. Open the application using the local URL shown in the Eclipse server console. The entry page is `index.html`.

## Project Outcome

MysteryBox demonstrates how frontend web technologies can be integrated with Java Servlets and JSP to create an interactive web application. It gives players a structured detective experience and provides practical experience with page navigation, request handling, server-side logic, and session-based investigation flow.

## Future Enhancements

- Add more mystery cases with different difficulty levels.
- Introduce hints and timed challenges.
- Add player profiles and progress tracking.
- Improve responsive design and accessibility.
- Add a leaderboard for completed cases.

## Author

Developed as an academic web development project.

---

If you explore this project, feedback and suggestions are welcome.
