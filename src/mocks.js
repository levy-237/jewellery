export async function getJew() {
  const res = await fetch(
    "https://run.mocky.io/v3/db746a4d-a7c5-42c5-b90e-7e0b41384057"
  );
  const data = await res.json();
  return data;
}
