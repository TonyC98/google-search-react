// Functions
export function search(data, searchTerm) {
  return data.filter(
    (result) =>
      result.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      result.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
      result.url.toLowerCase().includes(searchTerm.toLowerCase())
  )
}
