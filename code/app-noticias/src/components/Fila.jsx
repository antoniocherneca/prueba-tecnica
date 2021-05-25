import React from 'react'

export const Fila = (props) => {
  
  return (
    <tr>
      <td>{props.author}</td>
      <td>{props.title}</td>
      <td>{props.description}</td>
      <td><a href={props.url} target="blank">{props.url}</a></td>
      <td>{props.source}</td>
      <td>{props.category}</td>
      <td>{props.language}</td>
      <td>{props.country}</td>
      <td>{props.published_at}</td>
    </tr>
  )
}

export default Fila 