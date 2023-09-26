import Link from './Link'

function Result({ result, index }) {
  return (
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
  )
}
export default Result
