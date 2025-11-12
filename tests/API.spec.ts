import { test, expect } from "@playwright/test";

test("should return error pet not found", async ({ request }) => {
  const error = await request.get("https://petstore.swagger.io/v2/pet/1000");
  expect(error.ok()).toBeFalsy();
  expect(await error.json()).toEqual(
    expect.objectContaining({
      code: 1,
      type: "error",
      message: "Pet not found",
    })
  );
});

test("should create doggie the pet", async ({ request }) => {
  //prettier-ignore
  const doggie = await request.put("https://petstore.swagger.io/v2/pet", { 
    data:
    {
  "id": 7,
  "category": {
    "id": 7,
    "name": "string"
  },
  "name": "doggie",
  "photoUrls": [
    "https://content.imageresizer.com/images/memes/Tuna-the-dog-Phteven-meme-avy8a.jpg"
  ],
  "tags": [
    {
      "id": 7,
      "name": "string"
    }
  ],
  "status": "available"
}
  } );
  expect(doggie.ok()).toBeTruthy();
  const doggieCheck = await request.get("https://petstore.swagger.io/v2/pet/7");
  expect(doggieCheck.ok()).toBeTruthy();
  expect(await doggieCheck.json()).toEqual(
    expect.objectContaining(
      //prettier-ignore
      {
      id: 7,
      category: {
        id: 7,
        name: "string"
      },
      name: "doggie",
      photoUrls: [
        "https://content.imageresizer.com/images/memes/Tuna-the-dog-Phteven-meme-avy8a.jpg"
      ],
      tags: [
        {
          id: 7,
          name: "string"
        },
      ],
      status: "available"
    }
    )
  );
});
