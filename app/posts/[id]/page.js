

// app/posts/[id]/page.js
import Link from 'next/link';
import Head from 'next/head';
import Container from '../../../components/container';
import { getPostData, getAllPostIds } from '../../../lib/posts';

export default async function Post({ params }) {
   const postData = await getPostData(params.id);

   return (
      <Container>
         <Head>
            <title>{postData.title}</title>
         </Head>
         <h1>{postData.title}</h1>
         <p>{postData.date}</p>
         <div>{postData.content}</div>
         <Link href="/posts">Back to Posts</Link>
      </Container>
   );
}

export async function generateStaticParams() {
   const paths = await getAllPostIds();
   return paths.map((path) => ({
      id: path.id,
   }));
}