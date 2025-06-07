export async function getSkips(): Promise<any[]> {
  const response = await fetch(
    "https://cors-anywhere.herokuapp.com/https://app.wewantwaste.co.uk/api/skips/by-location?postcode=NR32&area=Lowestoft"
  );
  if (!response.ok) throw new Error("Failed to fetch skips");
  return response.json();
}
