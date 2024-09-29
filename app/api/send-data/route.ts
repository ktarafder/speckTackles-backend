import { NextResponse } from "next/server";
import { ref, set } from "firebase/database";
import db from "@/firebaseConfig"; // Adjust path if needed based on your file structure

export async function PUT(req: Request) {
  try {
    // Parse the request body to get the new counter value
    const body = await req.json();
    const { counter } = body;

    if (typeof counter !== "number") {
      return NextResponse.json({ error: "Counter value must be a number" }, { status: 400 });
    }

    // Reference to the `Light1` field or counter in Realtime Database
    const lightRef = ref(db, "Light1"); // Store the counter value in the Light1 field

    // Update the Realtime Database with the new counter value
    await set(lightRef, counter);

    return NextResponse.json({ message: "Light status counter updated successfully", newCounterValue: counter }, { status: 200 });
  } catch (error) {
    console.error("Error updating light status: ", error);
    return NextResponse.json({ error: "Failed to update light status" }, { status: 500 });
  }
}
