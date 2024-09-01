

// app/api/user/page.js
// app/api/user/route.js
// app/api/user/route.js

export async function GET(req) {
  const { searchParams } = new URL(req.url);
  const query = Object.fromEntries(searchParams);

  return new Response(
    JSON.stringify({ query }), 
    {
      status: 200,
      headers: {
        'Content-Type': 'application/json',
      },
    }
  );
}