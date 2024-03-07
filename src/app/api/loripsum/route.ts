import { LOREM_IPSUM_FETCH_DATA } from "@/libs/constants";
// Dev mode is always dynamic thats why we need to add this so it would work on production
export const dynamic = "force-dynamic";
export async function GET() {
  try {
    const response = await fetch(LOREM_IPSUM_FETCH_DATA, {
      cache: "no-store",
    });

    const data = await response.text();

    return new Response(data);
  } catch (error) {
    // If an error occurs during fetching
    console.log("Something went wrong", error);
  }
}
