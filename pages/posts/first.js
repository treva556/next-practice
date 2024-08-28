
// // app/posts/first.js
// app/posts/first.js
import Link from 'next/link'
import Head from 'next/head'
import Container from '../../components/container'

function FirstPost({ stars }) {
   return (
      <>
         <Container>
            <Head>
               <title>My First Post</title>
            </Head>
            <h1>My First Post</h1>
            <h2>
               <Link href="/">Home</Link>
               <div>Next stars: {stars !== undefined ? stars : 'N/A'}</div>
            </h2>
         </Container>
      </>
   )
}

export async function getStaticProps() {
   try {
      const res = await fetch('https://api.github.com/repos/vercel/next.js')
      const json = await res.json()
      return {
         props: { stars: json.stargazers_count ?? null }
      }
   } catch (error) {
      return {
         props: { stars: null }
      }
   }
}

export default FirstPost