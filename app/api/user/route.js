

// app/api/user/page.js
// app/api/user/route.js
export async function GET() {
    return new Response(
      JSON.stringify({ name: 'Robert' }), 
      {
        status: 200,
        headers: {
          'Content-Type': 'application/json',
        },
      }
    );
  }