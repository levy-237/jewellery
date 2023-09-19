export async function getJew() {
  const res = await fetch(
    "https://run.mocky.io/v3/c6aa5985-86e3-4794-963b-45a1b2b14be7"
  );
  const data = await res.json();
  return data;
}
