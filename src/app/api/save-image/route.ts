import { NextResponse } from 'next/server';
import fs from 'fs';

export async function OPTIONS() {
    return NextResponse.json({}, {
        headers: {
            'Access-Control-Allow-Origin': '*',
            'Access-Control-Allow-Methods': 'POST, OPTIONS',
            'Access-Control-Allow-Headers': 'Content-Type',
        }
    });
}
import path from 'path';

export async function POST(req: Request) {
    const url = new URL(req.url);
    const filename = url.searchParams.get('filename');
    if (!filename) return NextResponse.json({ error: 'missing filename' }, { status: 400 });

    try {
        const formData = await req.formData();
        const file = formData.get('file') as File;
        if (!file) return NextResponse.json({ error: 'No file uploaded' }, { status: 400 });

        const arrayBuffer = await file.arrayBuffer();
        const buffer = Buffer.from(arrayBuffer);

        const filePath = path.join(process.cwd(), 'public', 'assets', 'products', filename);
        fs.writeFileSync(filePath, buffer);

        return NextResponse.json({ success: true, filename });
    } catch (e: any) {
        return NextResponse.json({ error: e.message }, { status: 500 });
    }
}
