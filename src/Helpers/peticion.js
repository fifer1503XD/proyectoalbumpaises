export const getPais = async () => {
  let response = await fetch(`https://albumsanagustin.herokuapp.com/pais/`)
  let results = await response.json();
  return (results)
}

export const getCategorias = async () => {
  let response = await fetch(`https://albumsanagustin.herokuapp.com/categorias/`)
  let results = await response.json();
  return (results)
}
