import { NextResponse } from "next/server";
import Mux from "@mux/mux-node";

const mux = new Mux({
  tokenId: process.env.MUX_TOKEN_ID!,
  tokenSecret: process.env.MUX_TOKEN_SECRET!,
});

export async function POST() {
  const upload = await mux.video.uploads.create({
    new_asset_settings: {
      playback_policy: ["public"],
      mp4_support: "capped-1080p",
    },
    cors_origin: "*",
  });

  return NextResponse.json({
    uploadId: upload.id,
    uploadUrl: upload.url,
  });
}
