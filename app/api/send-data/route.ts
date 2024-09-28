import { NextResponse } from "next/server";
import { ref, set } from "firebase/database";
import db from "@/firebaseConfig"; // Adjust path if needed based on your file structure

export async function PUT(req: Request) {
  try {
    // Parse the request body to get the new boolean value
    const body = await req.json();
    const { lightOn } = body;

    if (typeof lightOn !== "boolean") {
      return NextResponse.json({ error: "lightOn field must be a boolean" }, { status: 400 });
    }

    // Reference to the `Light1` field in Realtime Database
    const lightRef = ref(db, "Light1");

    // Update the Realtime Database with the new boolean value
    await set(lightRef, lightOn);

    return NextResponse.json({ message: "Light status updated successfully", newLightValue: lightOn }, { status: 200 });
  } catch (error) {
    console.error("Error updating light status: ", error);
    return NextResponse.json({ error: "Failed to update light status" }, { status: 500 });
  }
}

