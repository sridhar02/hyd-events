export function onRequest({ request, env }) {
  return submitHandler({ request, env });
}

async function submitHandler({ request, env }) {
  try {
    if (request.method === "POST") {
      const body = await request.json();

      const reqBody = {
        email: body.email,
        status: "enabled",
        name: "The Subscriber",
        lists: [3],
      };

      return handleSubscriber(reqBody);
    }

    return new Response("Ok");
  } catch (error) {
    console.log(error);
    return new Response("failed", { status: 500 });
  }
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
