import { NextResponse } from "next/server";
import { collection, addDoc } from "firebase/firestore";
import db from "@/firebase"; // Adjust the import path based on your project structure

export async function POST(req: Request) {
  try {
    // Parse the incoming request body
    const body = await req.json();

    // Save the data to Firestore
    const docRef = await addDoc(collection(db, "collection"), body);

    // Log the document ID and return a response
    console.log("Document written with ID: ", docRef.id);
    return NextResponse.json({ message: "Data saved", id: docRef.id }, { status: 200 });
  } catch (error) {
    console.error("Error adding document: ", error);
    return NextResponse.json({ error: "Failed to save data" }, { status: 500 });
  }
}
