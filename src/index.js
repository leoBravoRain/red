import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

// Se crea fila de cada recurso
function Recurso(props){

	return (	

		<div class="col-md-3 col-sm-6 col-xs-6">

		  <div class="course">

		    <a href="#" class="course-img">

		      <img src={ props.curso.imagen } alt="" />

		      <i class="course-link-icon fa fa-link"></i>

		    </a>

		    <a class="course-title" href="#">

		    	{ props.curso.nombre }

	    	</a>

		    <div class="course-details">

		    	<span class="course-category">

		    		{ props.curso.descripcion }

		    	</span>

		    </div>

		  </div>

		</div>

	);

};

// Se crea componente de tabla de recursos
function TablaRecursos(props){

	// Lista de recursos
	let cursos = props.cursos.map((curso) => ( <Recurso curso = {curso} />));

	return (

		<div>

			{ cursos }

		</div>

	);

};


// Se crea componente de aplicacion
class App extends React.Component {

	// Se define estado inicial
	constructor(props){

		// Se llama al metodo padre
		super(props);


		// Se definen estado ocn valor inicial
		this.state = {

			cursos: [],

		};

	};

	// Se obtienen los recursos
	// Recurso: id, nombre, descripcion, imagen
	// const cursos = [{"id": 1, "nombre": "Gestion productiva", "descripcion": "Con este curso aprenderas a gestionar de la mejor manera a una organización.","imagen": "img/course01.jpg"}, {"id": 2, "nombre": "Introduccion a Algebra lineal", "descripcion": "Aprende las bases del algebra lineal que te servirá para aplicarla en todos los ambitos posibles, como IA","imagen": "img/course01.jpg"}, {"id": 3, "nombre": "Introduccion a Andrea Tapia", "descripcion":"Vamos a conocer a Andrea Tapia, la menos enojona de la vida","imagen": "img/course01.jpg"}]

	async componentDidMount(){


		// Se intenta obtener los datos
		try{

			// Se hace intenta obtener recursos 
			const res = await fetch('http://redapi.pythonanywhere.com/api/');

			// Se obtienen los datos en JSON
			const cursos = await res.json();

			console.log(cursos);

			// Se actualiza estado
			this.setState({

				cursos: cursos,

			});

		}

		// Si es qeu no se pueden obtener
		catch (e){

			// Se muestra mensaje de error
			console.log(e);

		};

	};

	// Metodo para renderizar
  	render() {


		/* Se retorna respuesta */
	    return (

	      <div>

	          < TablaRecursos cursos = {this.state.cursos} />

	      </div>

	    );

  	};

};

ReactDOM.render(
	
	<App />,

	document.getElementById('root')

);
