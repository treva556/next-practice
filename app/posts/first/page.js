
  // app/posts/first/page.js
import Link from 'next/link'
import Head from 'next/head'
import Container from '../../../components/container'

async function FirstPost() {
   let stars = null;

   try {
      const res = await fetch('https://api.github.com/repos/vercel/next.js');
      const json = await res.json();
      stars = json.stargazers_count ?? null;
   } catch (error) {
      console.error("Failed to fetch stars:", error);
   }

   return (
      <>
         <Container>
            <Head>
               <title>My First Post</title>
            </Head>
            <h1 className=' '>My First Post</h1>
            <h2>
               <Link className='text-blue-500 underline' href="/">Home</Link>
               <div>Next stars: {stars !== undefined ? stars : 'N/A'}</div>
            </h2>
         </Container>
      </>
   );
}

export default FirstPost;