export const fetchBeers = async (url) => {
  try {
    const res = await fetch(url);
    const data = await res.json();
    if (!res.ok) throw new Error("Failed to fetch! Try again");
    return data;
  } catch (error) {
    console.error("Some error occured", error);
    return [];
  }
};
