import {getClient} from '@/lib/client'

async function loadData () {
  const {data} = await getClient().query({
    query: gql`
    query {
      characters(page: 2, filter: { name: "rick" }) {
        results {
          name
          image
        }
      }
    }
    `
  })
  console.log(data)
}

export default async function Home() {
  await loadData()
  return (
    <h1>HomePage</h1>
  )
}
