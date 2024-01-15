import { getClient } from '@/lib/client'
import { gql } from '@apollo/client'

async function loadData() {
  const { data } = await getClient().query({
    query: gql`
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
  })
  return data.characters.results
}

export default async function Home() {
  const characters = await loadData()
  return (
    <>
      <div className='grid grid-cols-3'>
        {
          characters.map(character => (
            <div key={character.id}>
              <h1>{character.name}</h1>
              <img alt={character.name} src={character.image} />
            </div>
          ))
        }
      </div>
    </>
  );
}
