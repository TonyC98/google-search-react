function Link({ data }) {
  if (data.links) {
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
  } else {
    return null
  }
}
export default Link
