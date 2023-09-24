export async function POST(req: Request) {
  const data = await req.json();
  console.log(data);

  return new Response(JSON.stringify({ message: 'success' }));
}
