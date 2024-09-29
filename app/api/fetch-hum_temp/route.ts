import { NextResponse } from "next/server";
import { ref, get } from "firebase/database";
import db from "@/firebaseConfig"; // Adjust path based on your project structure

export async function GET() {
  try {
    // Reference to the `Light1` field in the Realtime Database
    const hum = ref(db, "Hum");
    const temp = ref(db, "Temp");

    // Retrieve the value from Realtime Database
    const snapshot = await get(hum);
    const snapshot2 = await get(temp);

    if (snapshot.exists() && snapshot2.exists()) {
      const hum_val = snapshot.val(); 
      console.log("Humidity: ", hum_val);

      const temp_val = snapshot2.val();
      console.log("Temperature: ", temp_val);

      return NextResponse.json({ hum: hum_val, temp: temp_val }, { status: 200 });
    } else {
      return NextResponse.json({ message: "Light status data not found" }, { status: 404 });
    }
  } catch (error) {
    console.error("Error getting light status: ", error);
    return NextResponse.json({ error: "Failed to retrieve data" }, { status: 500 });
  }
}
