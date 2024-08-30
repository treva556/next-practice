

// app/page.js
import Link from 'next/link';
import Head from 'next/head';

async function fetchStars() {
   try {
      const res = await fetch('https://api.github.com/repos/vercel/next.js');
      const json = await res.json();
      return json.stargazers_count;
   } catch (error) {
      console.error('Failed to fetch stars:', error);
      return null;
   }
}

export default async function HomePage() {
   const stars = await fetchStars();

   return (
      <>
         <Head>
            <title>Welcome to Next.js!</title>
         </Head>
         <div>Welcome to Next.js!</div>
         <span>
            <Link href="/posts/first" className=' text-blue-400 underline'>First Post</Link>
         </span>
         <br/>
         <div>Next stars: {stars !== null ? stars : 'N/A'}</div>
         <img src="/man.png" alt="TutorialsPoint Logo" />
      </>
   );
}