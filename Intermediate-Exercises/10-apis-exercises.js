/*
Clase 5 - Manejo de APIs (26/02/2025)
Vídeo: https://www.twitch.tv/videos/2403686091?t=00h17m25s
*/

// 1. Realiza una petición GET con fetch() a JSONPlaceholder y muestra en la consola la lista de publicaciones
fetch("https://jsonplaceholder.typicode.com/posts")
  .then((response) => {
    return response.json();
  })
  .then((data) => {
    console.log(data);
  })
  .catch((error) => {
    console.log("Error: ", error);
  });
// 2. Modifica el ejercicio anterior para que verifique si la respuesta es correcta usando response.ok. Si no lo es, lanza y muestra un error
fetch("https://jsonplaceholder.typicode.com/post")
  .then((response) => {
    if (response.ok) return response.json();
    else
      throw new Error(
        `Error en la petición: ${response.status} - ${response.statusText}`
      ); // Lanza una instancia de Error
  })
  .then((data) => {
    console.log(data);
  })
  .catch((error) => {
    console.error(error);
  });
console.log();
// 3. Reescribe el ejercicio 1 usando la sintaxis async/await en lugar de promesas
async function getPosts() {
  try {
    const response = await fetch("https://jsonplaceholder.typicode.com/posts");
    if (response.ok) await console.log(response.json());
    else
      throw new Error(
        `Error en la petición: ${response.status} - ${response.statusText}`
      );
  } catch (error) {
    console.error(error);
  }
}
getPosts();

// 4. Realiza una petición POST a JSONPlaceholder para crear una nueva publicación. Envía un objeto con propiedades como title o body
async function createPost() {
  try {
    const newPost = {
      userId: 25,
      title: "Título del post",
      body: "Cuerpo del post",
    };

    const response = await fetch("https://jsonplaceholder.typicode.com/posts", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newPost),
    });

    if (response.ok) {
      const data = await response.json();
      console.log(data);
    } else {
      throw new Error(
        `Error en la petición: ${response.status} - ${response.statusText}`
      );
    }
  } catch (error) {
    console.error(error);
  }
}
createPost();

// 5. Utiliza el método PUT para actualizar completamente un recurso (por ejemplo, modificar una publicación) en JSONPlaceholder
async function editPost() {
  try {
    const postToUpdate = {
      userId: 3,
      id: 4,
      title: "Título modificado - editado con PUT",
      body: "Cuerpo modificado",
    };
    const postId = 4;
    const response = await fetch(
      `https://jsonplaceholder.typicode.com/posts/${postId}`,
      {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(postToUpdate),
      }
    );
    if (response.ok) {
      const data = await response.json();
      console.log(data);
    } else {
      throw new Error(
        `Error en la petición: ${response.status} - ${response.statusText}`
      );
    }
  } catch (error) {
    console.error(error);
  }
}
editPost();

// 6. Realiza una petición PATCH para modificar únicamente uno o dos campos de un recurso existente
async function editTitle() {
  try {
    const titleToEdit = {
      title: "Título modificado con el método PATCH",
    };
    const postId = 5;
    const response = await fetch(
      `https://jsonplaceholder.typicode.com/posts/${postId}`,
      {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(titleToEdit),
      }
    );
    if (response.ok) {
      const data = await response.json();
      console.log(data);
    } else {
      throw new Error(
        `Error en la petición: ${response.status} - ${response.statusText}`
      );
    }
  } catch (error) {
    console.error(error);
  }
}
editTitle();

// 7. Envía una solicitud DELETE a la API para borrar un recurso (por ejemplo, una publicación) y verifica la respuesta
async function deletePost() {
  try {
    const postId = 10;
    const response = await fetch(
      `https://jsonplaceholder.typicode.com/posts/${postId}`,
      {
        method: "DELETE",
      }
    );
    if (response.ok) {
      console.log(`Post ${postId} eliminado con correctamente`);
    } else {
      throw new Error(
        `Error en la petición: ${response.status} - ${response.statusText}`
      );
    }
  } catch (error) {
    console.error(error);
  }
}
deletePost();

// 8. Crea una función que realice una solicitud GET (la que quieras) a OpenWeatherMap
async function getWeather() {
  try {
    const lat = 43.36029,
      lon = -5.84476,
      apiKey = "fd1c061ff074334fe35c1a05297b0f7d",
      url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${apiKey}`;
    const response = await fetch(url);
    if (response.ok) {
      const data = await response.json();
      console.log(data);
    } else {
      throw new Error(
        `Error en la petición: ${response.status} - ${response.statusText}`
      );
    }
  } catch (error) {
    console.error(error);
  }
}
getWeather();

// 9. Utiliza la PokéAPI para obtener los datos de un Pokémon concreto, a continuación los detalles de la especie y, finalmente, la cadena evolutiva a partir de la especie
async function getPokemon(pokemon) {
  const urlPokemon = `https://pokeapi.co/api/v2/pokemon/${pokemon}`;
  try {
    const response = await fetch(urlPokemon);
    if (response.ok) {
      const data = await response.json();

      const speciesData = await getSpecies(data.species.url);

      const chainEvolution = await getChainEvolution(
        speciesData.evolution_chain.url
      );

      console.log(chainEvolution);
    } else {
      throw new Error(
        `Error en la petición: ${response.status} - ${response.statusText}`
      );
    }
  } catch (error) {
    console.error(error);
  }
}

async function getSpecies(url) {
  try {
    const response = await fetch(url);
    if (response.ok) {
      const data = await response.json();
      return data;
    } else {
      throw new Error(
        `Error en la petición: ${response.status} - ${response.statusText}`
      );
    }
  } catch (error) {
    console.error(error);
  }
}

async function getChainEvolution(url) {
  try {
    const response = await fetch(url);
    if (response.ok) {
      const data = await response.json();
      return data;
    } else {
      throw new Error(
        `Error en la petición: ${response.status} - ${response.statusText}`
      );
    }
  } catch (error) {
    console.error(error);
  }
}
getPokemon("psyduck");
// 10. Utiliza una herramienta como Postman o Thunder Client para probar diferentes endpoint de una API
