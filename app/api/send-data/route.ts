import { NextResponse } from "next/server";
import { ref, set } from "firebase/database";
import db from "@/firebaseConfig"; // Adjust path if needed based on your file structure

export async function POST(req: Request) {
  try {
    // Parse the request body to get the new value
    const body = await req.json();
    const { Light1 } = body;

    if (Light1 === undefined) {
      return NextResponse.json({ error: "Light1 field is required" }, { status: 400 });
    }

    // Reference to the `Light1` field in Realtime Database
    const lightRef = ref(db, "Light1");

    // Update the Realtime Database with the new value
    await set(lightRef, Light1);

    return NextResponse.json({ message: "Light status updated successfully", newLightValue: Light1 }, { status: 200 });
  } catch (error) {
    console.error("Error updating light status: ", error);
    return NextResponse.json({ error: "Failed to update light status" }, { status: 500 });
  }
}
