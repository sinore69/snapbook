"use server";
export async function api() {
  const response = await fetch("https://api.coincap.io/v2/assets", {
    headers: {
      BearerToken: process.env.APIKEY!,
    },
  });
  console.log(response);
}
