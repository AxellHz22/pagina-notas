import React from 'react';
import './App.css';
import logo from'./LOGO.png';
import Navbar from './Componentes/Navbar';


function App() {
    return ( 
      <div className="App">
        <header className="App-header">
           <img src={logo} alt="Task-hive logo" className="logo" />
             <Navbar></Navbar>

             <nav class="Navbar">
             <a href="Nosotros">Nosotros</a>
             <a href="Registrarse">Registrarse</a>
             <a href="Iniciar_Sesion">Iniciar sesión</a>
             <a href="Lenguaje" className="language">Idioma</a>
             </nav>

        </header>

          <div className="contenido">
             <div className="description">
               <h1>“Organiza tu día, alcanza tus metas”</h1>
               <p>En Task-hive, simplificamos la gestión de tus tareas diarias. </p>
               <p>Nuestra plataforma intuitiva te ayuda a organizar, priorizar y realizar un seguimiento de tus pendientes de manera efectiva. </p>
               <p>Con recordatorios inteligentes y una interfaz amigable, estarás siempre en el camino correcto para alcanzar tus objetivos.</p>
               <p>¡Comienza a optimizar tu productividad hoy mismo!</p>
             </div> 

             <form className='signup-form'>
               <h2>Formulario</h2>
               <label>
               Nombre:
               <input type="text" name="nombre" />
               </label>
               <label>
               Apellido:
               <input type="text" name="apellido" />
               </label>
               <label>
               E-mail:
               <input type="email" name="email" />
               </label>
               <label>
               País:
               <input type="text" name="pais" />
               </label>
               <button type="submit" className="submit-button">Registrarse</button>
             </form>
            </div>
           <main className="app-main">        
        </main>
      </div>
    );
  }

export default App;
