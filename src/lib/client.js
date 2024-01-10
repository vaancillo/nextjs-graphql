import { ApolloClient, HttpLink, InMemoryCache} from '@apollo/client'
import { registerApolloClient } from '@apollo/experimental-nextjs-app-support/rsc'

const { getClient } = registerApolloClient(() => {
    return new ApolloClient({
        link: new HttpLink({
            cache: new InMemoryCache(),
            uri: 'https://rickandmortyapi.com/graphql'
        })
    })
})