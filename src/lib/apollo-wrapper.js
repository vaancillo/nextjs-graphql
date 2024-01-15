"use client"
import { ApolloLink, HttpLink } from '@apollo/client'
import {ApolloNextAppProvider, NextSSRApolloClient, NextSSRInMemoryCache, SSRMultipartLink} from '@apollo/experimental-nextjs-app-support/ssr'

function makeCLient () {

    const httpLink = new HttpLink({
        uri: 'https://rickandmortyapi.com/graphql',
    })

    return new NextSSRApolloClient({
        cache: new NextSSRInMemoryCache(),
        link: typeof winmdow === 'undefined' ? ApolloLink.from([
            new SSRMultipartLink({
                stripDefer: true,
            }),
            httpLink
        ]): httpLink
    })
}

function ApolloWrapper({ children }) {
    return (
        <ApolloNextAppProvider makeClient={makeCLient}>
        {children}
        </ApolloNextAppProvider>
    )
}
export default ApolloWrapper