

// app/page.js
import Link from 'next/link'
import Head from 'next/head'

async function HomePage() {
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
         <Head>
            <title>Welcome to Next.js!</title>
         </Head>
         <div className='p-4 border border-black ml-4 mt-4 mr-4'>
            <div className='text-red-600'>Welcome to Next.js!</div>
            <Link className='text-blue-500 underline' href="/posts/first">First Post</Link>
            <br />
            <div>Next stars: {stars !== undefined ? stars : 'N/A'}</div>
            <img src="/man.png" alt="TutorialsPoint Logo" />
         </div>
      </>
   );
}

export default HomePage;
