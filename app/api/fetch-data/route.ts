import { NextResponse } from "next/server";
import { ref, get } from "firebase/database";
import db from "@/firebaseConfig"; // Adjust path based on your project structure

export async function GET() {
  try {
    // Reference to the `Light1` field in the Realtime Database
    const lightRef = ref(db, "Light1");

    // Retrieve the value from Realtime Database
    const snapshot = await get(lightRef);

    if (snapshot.exists()) {
      // Get the value of the `Light1` field as a boolean
      const lightOn = snapshot.val(); // Expecting true/false
      console.log("Light status: ", lightOn);

      return NextResponse.json({ lightOn: lightOn }, { status: 200 });
    } else {
      return NextResponse.json({ message: "Light status data not found" }, { status: 404 });
    }
  } catch (error) {
    console.error("Error getting light status: ", error);
    return NextResponse.json({ error: "Failed to retrieve data" }, { status: 500 });
  }
}

