function Link({ data }) {
  return (
    <ul>
      {data.links.map((link, index) => (
        <li key={index}>
          <a href={link.url} target="_blank" rel="noreferrer">
            {link.title}
          </a>
        </li>
      ))}
    </ul>
  )
}
export default Link
