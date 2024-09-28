import { NextResponse } from "next/server";
import db from "@/firebaseConfig"; // Adjust the path based on your project structure
import { ref, get } from "firebase/database";

export async function GET() {
  try {
    // Reference to the `Light1` field in the Realtime Database
    const lightRef = ref(db, "Light1");

    // Retrieve the value from Realtime Database
    const snapshot = await get(lightRef);

    if (snapshot.exists()) {
      // Get the value of the `Light1` field and map it to light status
      const lightStatus = snapshot.val() === 0 ? "On" : "Off";
      
      return NextResponse.json({ lightStatus: lightStatus, rawValue: snapshot.val() }, { status: 200 });
    } else {
      return NextResponse.json({ message: "Light status data not found" }, { status: 404 });
    }
  } catch (error) {
    console.error("Error getting data: ", error);
    return NextResponse.json({ error: "Failed to retrieve data" }, { status: 500 });
  }
}
