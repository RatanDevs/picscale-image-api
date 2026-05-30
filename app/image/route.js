import { NextResponse } from 'next/server';
import sharp from 'sharp';

export async function GET(request) {
  const { searchParams } = new URL(request.url);
  const src = searchParams.get('src');
  const w = searchParams.get('w') ? parseInt(searchParams.get('w'), 10) : null;
  const h = searchParams.get('h') ? parseInt(searchParams.get('h'), 10) : null;
  const crop = searchParams.get('crop') === '1';
  const q = searchParams.get('q') ? Math.max(1, Math.min(100, parseInt(searchParams.get('q'), 10))) : 80;

  if (!src) {
    return new NextResponse("Error: 'src' parameter is required.", { status: 400 });
  }

  try {
    // 1. Fetch remote source image
    const response = await fetch(src);
    if (!response.ok) {
      return new NextResponse("Error: Failed to fetch source image.", { status: 400 });
    }

    const arrayBuffer = await response.arrayBuffer();
    const buffer = Buffer.from(arrayBuffer);

    // 2. Initialize Sharp manipulation pipeline
    let pipeline = sharp(buffer);
    const metadata = await pipeline.metadata();

    // 3. Dynamic Resizing & Aspect Ratio Logic
    if (w || h) {
      const resizeOptions = {
        fit: crop ? 'cover' : 'inside' // cover = crop center, inside = scale proportionally (contain)
      };
      if (w) resizeOptions.width = w;
      if (h) resizeOptions.height = h;

      pipeline = pipeline.resize(resizeOptions);
    }

    // 4. Format Detection and Quality Mapping
    let contentType = 'image/webp';
    const format = metadata.format;

    if (format === 'jpeg' || format === 'jpg') {
      pipeline = pipeline.jpeg({ quality: q, mozjpeg: true });
      contentType = 'image/jpeg';
    } else if (format === 'png') {
      pipeline = pipeline.png({ quality: q });
      contentType = 'image/png';
    } else if (format === 'webp') {
      pipeline = pipeline.webp({ quality: q });
      contentType = 'image/webp';
    } else {
      // Fallback format
      pipeline = pipeline.webp({ quality: q });
    }

    const outputBuffer = await pipeline.toBuffer();

    // 5. Output binary with Edge Caching headers
    return new NextResponse(outputBuffer, {
      headers: {
        'Content-Type': contentType,
        // Cache the processed image on Vercel CDN nodes for 1 year
        'Cache-Control': 'public, max-age=31536000, must-revalidate',
      },
    });

  } catch (error) {
    console.error("Image processing error:", error);
    return new NextResponse("Error: Image processing failed.", { status: 500 });
  }
}
