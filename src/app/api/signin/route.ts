import { AXIOS_INSTANCE } from "@/axios/axios";
import { initializeDB, openDB } from "@/config/sqlite";
import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
    try {
        const body = await req.json();
        console.log("Request Body:", body);

        // Fetch data from the external API
        const cloudResp = await AXIOS_INSTANCE.get('/applications', {
            headers: {
                'Content-Type': 'application/json',
                'CD-ID': body.clientId,
                'CD-Secret': body.clientSecret,
            },
        });

        // Initialize the database
        initializeDB();

        // Open the SQLite database and insert the client credentials
        const db = openDB();
        const insertStatement = db.prepare(
            `INSERT INTO organization_detail (cd_id, cd_secret) VALUES (?, ?)`
        );
        try {
            insertStatement.run(body.clientId, body.clientSecret);
            console.log("Client credentials successfully inserted into the database.");
        } catch (err: Error | any) {
            if (err.code === 'SQLITE_CONSTRAINT_UNIQUE') {
                console.error("Duplicate entry error:", err.message);
                return NextResponse.json(
                    { error: 'Client ID or Client Secret already exists' },
                    { status: 400 }
                );
            }
            throw err; // Re-throw other errors
        }

        // Return the external API response
        return NextResponse.json(cloudResp.data);
    } catch (error: Error | any) {
        console.error("[Error] ==>>", error.message || error);
        return NextResponse.json(
            { error: error.message || "Internal Server Error" },
            { status: 500 }
        );
    }
}
