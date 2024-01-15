"use client"
import { gql } from '@apollo/client'
import { useSuspenseQuery } from '@apollo/experimental-nextjs-app-support/ssr'

const query = gql`
query {
    characters(page: 2, filter: { name: "rick" }) {
      results {
        id  
        name
        image
      }
    }
  }
`


function ClientPage() {
    const { data } = useSuspenseQuery(query)
    console.log(data)
  return (
    <div>
        <h1>Client Page</h1>
        <div>
            {data?.characters?.results.map((character) => (
            <div key={character.id}>
                <h2>{character.name}</h2>
                <img src={character.image} alt={character.name} />
            </div>
            ))}
        </div>
    </div>
  )
}
export default ClientPage