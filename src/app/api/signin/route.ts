import { AXIOS_INSTANCE } from "@/axios/axios";
import { openDB } from "@/config/sqlite";
import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
    try {
        const body = await req.json()
        console.log(body)
        const cloudResp = await AXIOS_INSTANCE.get('/applications', {
            headers: {
                'Content-Type': 'application/json',
                'CD-ID': body.clientId,
                'CD-Secret': body.clientSecret,
            }
        });
        // Save to SQLite database
        const db = await openDB();
        await db.run(
            `INSERT INTO client_credentials (client_id, client_secret) VALUES (?, ?)`,
            [body.clientId, body.clientSecret]
        );
        return NextResponse.json(cloudResp.data)
    } catch (error: Error | any) {
        console.log("[error] ==>>", error)
        return new NextResponse(error)
    }
}
