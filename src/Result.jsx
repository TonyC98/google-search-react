import Link from './Link'

function Result({ data }) {
  return (
    <div>
      {data.map((result, index) => (
        <div className="child" key={index}>
          <span>{result.url}</span>
          <h2>
            <a href={result.url} target="_blank" rel="noreferrer">
              {result.title}
            </a>
          </h2>
          <p>{result.description}</p>
          <Link data={result} />
        </div>
      ))}
    </div>
  )
}
export default Result
