import React from 'react'
import Fila from './components/Fila'
import axios from 'axios'
import {useState} from 'react'

function App() {
  const [listaNoticias, setListaNoticias] = useState([])
  
  const obtenerNoticias = () => {
    axios.get('http://api.mediastack.com/v1/news?access_key=88435e4830a7a44b4d3cb05c0321d1ec')
      .then(respuesta => {
        const noticias = respuesta.data.data
        setListaNoticias(noticias)
      })
      .catch(error => {
        alert("Se produjo un error", error)
      })
  }
  
  return (
    <div>
      <header>
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
          <div className="container-fluid">
            <a className="navbar-brand" href="#">API Noticias</a>
          </div>
        </nav>
      </header>
      <section className="d-flex flex-column justify-content-center">
        <button className="btn btn-primary m-4" onClick={() => obtenerNoticias()}>Mostrar Noticias</button>
        <div className="table-responsive">
          <table className="table table-striped table-hover table-bordered table-sm">
            <thead>
              <tr>
                <td>Author</td>
                <td>Title</td>
                <td>Description</td>
                <td>URL</td>
                <td>Source</td>
                <td>Category</td>
                <td>Language</td>
                <td>Country</td>
                <td>Published_at</td>
              </tr>
            </thead>
            <tbody>
              {listaNoticias.map(elemento => 
                <Fila
                  author = {elemento.author} 
                  description = {elemento.description}
                  url = {elemento.url}
                  source = {elemento.source}
                  category = {elemento.category}
                  language = {elemento.language}
                  country = {elemento.country}
                  published = {elemento.published_at}
                />
              )}
            </tbody>
          </table>
        </div>
      </section>
    </div>
  )
}

export default App