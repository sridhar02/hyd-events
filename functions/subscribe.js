export async function onRequest({ request, env }) {
  return await submitHandler({ request, env });
}

async function submitHandler({ request, env }) {
  console.log(env);

  const body = await request.formData();

  console.log(body);

  const { email } = Object.fromEntries(body);

  const reqBody = {
    email: email,
    status: "enabled",
    name: "The Subscriber",
    lists: [2],
  };

  return handleSubscriber({ body: reqBody });
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
