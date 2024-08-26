<template>
    <ProjectSlider :proj="projects_en" v-if="$i18n.locale=='en'" />
    <ProjectSlider :proj="projects_es" v-if="$i18n.locale=='es'" />
</template>

<script setup>
import ProjectSlider from '../components/ProjectSlider.vue';


const projects_en = [
    {
        name: 'Rippio Food',
        description: 'Rippio is a web application that connects clients with restaurants, utilizing technologies such as React, Node.js, Express, and PostgreSQL. Users can search for restaurants and products, modify their profiles, and add products to their cart for purchasing. Restaurants can create profiles, upload and manage their products, handle orders, and manage their schedules. Rippio aims to streamline the interaction between clients and restaurants, enhancing the dining experience for all users.',
        tech: 'REACT POSTGRESQL NODE.JS EXPRESS.JS',
        img: 'https://firebasestorage.googleapis.com/v0/b/portfolio-38c72.appspot.com/o/projects%2Frippio.png?alt=media&token=6604df66-e07f-4d40-bbbb-785af00ef46d',
        link: 'https://github.com/DanilsGit/Rippio'
    },
    {
        name: 'Gymstats',
        description: 'GymStats is a web application built with VUE, GO, DOCKER, POSTGRESQL and AWS designed to help you track and manage your workout routines effectively. With GymStats, you can create and view exercise routines from anywhere in the world using your mobile device or computer. The application allows you to customize your routines with your preferred exercises and adjust sets based on your progress. Additionally, you can add notes to exercises to remember specific details.',
        tech: 'VUE GO DOCKER POSTGRESQL AWS',
        img: 'https://firebasestorage.googleapis.com/v0/b/portfolio-38c72.appspot.com/o/projects%2Fgymstats.png?alt=media&token=2b847b2f-bedf-4dba-a410-ebc7c55bd020',
        link: 'https://github.com/DanilsGit/gym-stats.git'
    },
    {
        name: 'Cellular automaton',
        description: 'This project is a cellular automaton simulation with three states, developed using React and JavaScript. The simulation represents three political groups, allowing users to observe political segregation. The interface includes options to step through the simulation one iteration at a time, start the simulation, and reset it. This visualization helps illustrate how political segregation can evolve over time based on initial conditions and interaction rules.',
        tech: 'REACT JS',
        img: 'https://firebasestorage.googleapis.com/v0/b/portfolio-38c72.appspot.com/o/projects%2Fvida.png?alt=media&token=7690e2c0-a91c-4ec7-9176-a612b65f26e3',
        link: 'https://github.com/jfmonsa/capitalism_simulator'
    },
    {
        name: 'Numerical Methods',
        description: 'This project is a numerical methods application developed using Python, Tkinter, and Matplotlib. It allows users to solve equations within a given range using methods such as bisection, fixed point, and curve fitting. The interface provides visual representations of the solutions, making it easier to understand the behavior of the functions. Users can input their functions and intervals, and the application will compute and display the solutions along with detailed graphs.',
        tech: 'PYTHON TKINTER',
        img: 'https://firebasestorage.googleapis.com/v0/b/portfolio-38c72.appspot.com/o/projects%2Fmetodos.png?alt=media&token=a6fe3780-5a95-4e68-abfd-2a2a31a1bced',
        link: 'https://github.com/DanilsGit/learning/blob/main/M%C3%A9todos%20Num%C3%A9ricos%20en%20py/metodos.py'
    },
    {
        name: 'Store Manager',
        description: 'This project is a store management system developed using Java and PostgreSQL. It features a CRUD (Create, Read, Update, Delete) interface that allows employees to manage various aspects of the store. Employees can log in with their ID and password to access the system. This system streamlines the management processes within the store, making it easier for employees to handle their daily tasks efficiently.',
        tech: 'JAVA POSTGRESQL',
        img: 'https://firebasestorage.googleapis.com/v0/b/portfolio-38c72.appspot.com/o/projects%2Fmibarrio.png?alt=media&token=b978a437-96b5-4a3f-a2eb-bf100dba55dc',
        link: 'https://github.com/DanilsGit/Store-Manager'
    },
    {
        name: 'Vacation Calculator',
        description: 'The Vacation Calculator is a simple application developed using Java that helps calculate vacation days for employees based on their department and tenure. It features a user-friendly interface, making it easy for older clients and departments to determine the number of vacation days an employee is eligible for.',
        tech: 'Java',
        img: 'https://firebasestorage.googleapis.com/v0/b/portfolio-38c72.appspot.com/o/projects%2Fpepsi.png?alt=media&token=83a526e4-7f93-42cf-bc9c-d7137f2a75e9',
        link: 'https://github.com/DanilsGit/Vacation-Calculator-Pepsi'
    },
    {
        name: 'Hospital Manager',
        description: 'The Hospital Manager App is a console-based application developed in C++ designed to manage various hospital profiles efficiently. It allows for the creation, reading, updating, and deletion (CRUD) of profiles such as managers, professionals, healthcare personnel, receptionists, and patients, all through a simple console interface. This application does not use a graphical user interface (GUI) or REST APIs, ensuring straightforward operation and data management. Ideal for scenarios requiring a no-frills, console-based solution, the Hospital Manager App provides a streamlined approach to handling hospital management tasks effectively.',
        tech: 'C++ OOP',
        img: 'https://firebasestorage.googleapis.com/v0/b/portfolio-38c72.appspot.com/o/projects%2Fgestion%20de%20hospital.png?alt=media&token=bf8673bf-0151-4a81-af15-968bc2dcad5e',
        link: 'https://github.com/DanilsGit/Hospital-Manager'
    },
    {
        name: 'calculator',
        description: "The Calculator App is a Java application that emulates the functionality of the Windows calculator, offering basic operations. It includes standard arithmetic functions such as addition, subtraction, multiplication, and division, along with more complex operations like power calculations (pow). The app also features 'C' (clear) and 'CE' (clear entry) buttons for efficient error handling. Designed for continuous operations, it allows users to perform multiple calculations in sequence without resetting the app, providing a seamless and user-friendly experience.",
        tech: 'JAVA',
        img: 'https://firebasestorage.googleapis.com/v0/b/portfolio-38c72.appspot.com/o/projects%2Fcalculadora.png?alt=media&token=a963288c-bf01-46bc-add6-ec01d988a1f1',
        link: 'https://github.com/DanilsGit/Basic-Calculator'
    }
]

const projects_es = [
    {
        "name": "Rippio Food",
        "description": "Rippio es una aplicación web que conecta a clientes con restaurantes, utilizando tecnologías como React, Node.js, Express y PostgreSQL. Los usuarios pueden buscar restaurantes y productos, modificar sus perfiles y agregar productos a su carrito para comprarlos. Los restaurantes pueden crear perfiles, subir y gestionar sus productos, manejar pedidos y administrar sus horarios. Rippio tiene como objetivo agilizar la interacción entre clientes y restaurantes, mejorando la experiencia gastronómica para todos los usuarios.",
        "tech": "REACT POSTGRESQL NODE.JS EXPRESS.JS",
        "img": "https://firebasestorage.googleapis.com/v0/b/portfolio-38c72.appspot.com/o/projects%2Frippio.png?alt=media&token=6604df66-e07f-4d40-bbbb-785af00ef46d",
        "link": "https://github.com/DanilsGit/Rippio"
    },
    {
        "name": "Gymstats",
        "description": "GymStats es una aplicación web construida con VUE, GO, DOCKER, POSTGRESQL y AWS diseñada para ayudarte a rastrear y gestionar tus rutinas de ejercicio de manera efectiva. Con GymStats, puedes crear y ver rutinas de ejercicio desde cualquier parte del mundo usando tu dispositivo móvil o computadora. La aplicación te permite personalizar tus rutinas con los ejercicios de tu preferencia y ajustar series según tu progreso. Además, puedes añadir notas a los ejercicios para recordar detalles específicos.",
        "tech": "VUE GO DOCKER POSTGRESQL AWS",
        "img": "https://firebasestorage.googleapis.com/v0/b/portfolio-38c72.appspot.com/o/projects%2Fgymstats.png?alt=media&token=2b847b2f-bedf-4dba-a410-ebc7c55bd020",
        "link": "https://github.com/DanilsGit/gym-stats.git"
    },
    {
        "name": "Autómata Celular",
        "description": "Este proyecto es una simulación de autómata celular con tres estados, desarrollada usando React y JavaScript. La simulación representa tres grupos políticos, permitiendo a los usuarios observar la segregación política. La interfaz incluye opciones para avanzar la simulación una iteración a la vez, iniciar la simulación y reiniciarla. Esta visualización ayuda a ilustrar cómo la segregación política puede evolucionar con el tiempo en función de las condiciones iniciales y las reglas de interacción.",
        "tech": "REACT JS",
        "img": "https://firebasestorage.googleapis.com/v0/b/portfolio-38c72.appspot.com/o/projects%2Fvida.png?alt=media&token=7690e2c0-a91c-4ec7-9176-a612b65f26e3",
        "link": "https://github.com/jfmonsa/capitalism_simulator"
    },
    {
        "name": "Métodos Numéricos",
        "description": "Este proyecto es una aplicación de métodos numéricos desarrollada usando Python, Tkinter y Matplotlib. Permite a los usuarios resolver ecuaciones dentro de un rango dado utilizando métodos como bisección, punto fijo y ajuste de curvas. La interfaz proporciona representaciones visuales de las soluciones, lo que facilita la comprensión del comportamiento de las funciones. Los usuarios pueden ingresar sus funciones e intervalos, y la aplicación calculará y mostrará las soluciones junto con gráficos detallados.",
        "tech": "PYTHON TKINTER",
        "img": "https://firebasestorage.googleapis.com/v0/b/portfolio-38c72.appspot.com/o/projects%2Fmetodos.png?alt=media&token=a6fe3780-5a95-4e68-abfd-2a2a31a1bced",
        "link": "https://github.com/DanilsGit/learning/blob/main/M%C3%A9todos%20Num%C3%A9ricos%20en%20py/metodos.py"
    },
    {
        "name": "Gestor de Tienda",
        "description": "Este proyecto es un sistema de gestión de tienda desarrollado usando Java y PostgreSQL. Cuenta con una interfaz CRUD (Crear, Leer, Actualizar, Eliminar) que permite a los empleados gestionar varios aspectos de la tienda. Los empleados pueden iniciar sesión con su ID y contraseña para acceder al sistema. Este sistema agiliza los procesos de gestión dentro de la tienda, facilitando a los empleados el manejo eficiente de sus tareas diarias.",
        "tech": "JAVA POSTGRESQL",
        "img": "https://firebasestorage.googleapis.com/v0/b/portfolio-38c72.appspot.com/o/projects%2Fmibarrio.png?alt=media&token=b978a437-96b5-4a3f-a2eb-bf100dba55dc",
        "link": "https://github.com/DanilsGit/Store-Manager"
    },
    {
        "name": "Calculadora de Vacaciones",
        "description": "La Calculadora de Vacaciones es una aplicación simple desarrollada en Java que ayuda a calcular los días de vacaciones para los empleados según su departamento y antigüedad. Cuenta con una interfaz fácil de usar, lo que facilita a los clientes y departamentos más antiguos determinar el número de días de vacaciones a los que un empleado tiene derecho.",
        "tech": "Java",
        "img": "https://firebasestorage.googleapis.com/v0/b/portfolio-38c72.appspot.com/o/projects%2Fpepsi.png?alt=media&token=83a526e4-7f93-42cf-bc9c-d7137f2a75e9",
        "link": "https://github.com/DanilsGit/Vacation-Calculator-Pepsi"
    },
    {
        "name": "Gestor de Hospital",
        "description": "La aplicación Gestor de Hospital es una aplicación basada en consola desarrollada en C++ diseñada para gestionar de manera eficiente varios perfiles hospitalarios. Permite la creación, lectura, actualización y eliminación (CRUD) de perfiles como gerentes, profesionales, personal de salud, recepcionistas y pacientes, todo a través de una simple interfaz de consola. Esta aplicación no utiliza una interfaz gráfica de usuario (GUI) ni APIs REST, asegurando una operación y gestión de datos sencillas. Ideal para escenarios que requieren una solución sin complicaciones basada en consola, la aplicación Gestor de Hospital proporciona un enfoque simplificado para manejar tareas de gestión hospitalaria de manera efectiva.",
        "tech": "C++ OOP",
        "img": "https://firebasestorage.googleapis.com/v0/b/portfolio-38c72.appspot.com/o/projects%2Fgestion%20de%20hospital.png?alt=media&token=bf8673bf-0151-4a81-af15-968bc2dcad5e",
        "link": "https://github.com/DanilsGit/Hospital-Manager"
    },
    {
        "name": "Calculadora",
        "description": "La aplicación Calculadora es una aplicación Java que emula la funcionalidad de la calculadora de Windows, ofreciendo operaciones básicas. Incluye funciones aritméticas estándar como suma, resta, multiplicación y división, junto con operaciones más complejas como cálculos de potencia (pow). La aplicación también cuenta con botones 'C' (borrar) y 'CE' (borrar entrada) para un manejo eficiente de errores. Diseñada para operaciones continuas, permite a los usuarios realizar múltiples cálculos en secuencia sin reiniciar la aplicación, proporcionando una experiencia fluida y fácil de usar.",
        "tech": "JAVA",
        "img": "https://firebasestorage.googleapis.com/v0/b/portfolio-38c72.appspot.com/o/projects%2Fcalculadora.png?alt=media&token=a963288c-bf01-46bc-add6-ec01d988a1f1",
        "link": "https://github.com/DanilsGit/Basic-Calculator"
    }
]


</script>

<style>
</style>