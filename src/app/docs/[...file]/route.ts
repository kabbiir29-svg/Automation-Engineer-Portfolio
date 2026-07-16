import fs from "fs";
import path from "path";
import { NextResponse } from "next/server";

export const runtime = "nodejs";

const mimeTypes: Record<string, string> = {
  ".pdf": "application/pdf",
  ".doc": "application/msword",
  ".docx": "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
  ".txt": "text/plain",
  ".zip": "application/zip",
};

export async function GET(
  request: Request,
  { params }: { params: Promise<{ file: string[] }> }
) {
  const resolvedParams = await params;
  
  if (!resolvedParams?.file?.length) {
    return new NextResponse("Not found", { status: 404 });
  }

  const docsDir = path.join(process.cwd(), "docs");
  const requestedPath = path.join(docsDir, ...resolvedParams.file);
  const normalized = path.normalize(requestedPath);

  if (!normalized.startsWith(docsDir)) {
    return new NextResponse("Forbidden", { status: 403 });
  }

  try {
    const fileBuffer = await fs.promises.readFile(normalized);
    const ext = path.extname(normalized).toLowerCase();
    const contentType = mimeTypes[ext] ?? "application/octet-stream";
    return new NextResponse(fileBuffer, {
      status: 200,
      headers: {
        "Content-Type": contentType,
        "Content-Disposition": `inline; filename="${path.basename(normalized)}"`,
      },
    });
  } catch (error) {
    return new NextResponse("Not found", { status: 404 });
  }
}
