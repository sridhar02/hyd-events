export async function onRequest({ request, env }) {
  return await submitHandler({ request, env });
}

async function submitHandler({ request, env }) {
  const url = new URL(request.url);
  console.log(env, url);

  if (request.method === "POST") {
    const body = await request.formData();
    const body1 = await request.json();

    console.log(body, body1);

    const { email } = Object.fromEntries(body);

    const reqBody = {
      email: email,
      status: "enabled",
      name: "The Subscriber",
      lists: [2],
    };

    return handleSubscriber({ body: reqBody });
    // Simple API key auth
  }
  return new Response("Ok");
}

async function handleSubscriber(body) {
  return fetch("https://api.ksridhar.dev/api/subscribers", {
    method: "POST",
    body: JSON.stringify(body),
    headers: {
      Authorization: `Basic bGlzdG1vbms6bGlzdG1vbms=`,
      "Content-type": `application/json`,
    },
  });
}
