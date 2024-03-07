import { LOREM_IPSUM_API } from "@/libs/constants";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "Test app for Scripttic",
};

async function getData() {
  let data;
  try {
    const res = await fetch(LOREM_IPSUM_API, { next: { revalidate: 10 } });
    if (!res.ok) {
      throw new Error(`Failed to fetch data, status: ${res.status}`);
    }
    data = await res.text();
  } catch (error) {
    console.error("Error in getData:", error);
    throw error;
  }

  return data;
}

export default async function PrivacyPolicy() {
  const htmlData = await getData();

  return <div dangerouslySetInnerHTML={{ __html: htmlData }} />;
}
