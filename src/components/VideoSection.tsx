"use client";

import MuxPlayer from "@mux/mux-player-react";

const playbackId = process.env.NEXT_PUBLIC_MUX_PRESENTATION_PLAYBACK_ID;

export default function VideoSection() {
  if (!playbackId) return null;

  return (
    <section className="py-20 bg-white">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10">
          <h2 className="text-3xl font-bold text-[#4a6fa5] mb-4">
            Se hur det fungerar
          </h2>
          <p className="text-lg text-gray-600">
            Dan Söderlund berättar om Solklart och vad vi kan göra för dig.
          </p>
        </div>

        <div className="rounded-2xl overflow-hidden shadow-xl">
          <MuxPlayer
            playbackId={playbackId}
            metadata={{ video_title: "Solklart – presentation" }}
            accentColor="#f26621"
            style={{ width: "100%", aspectRatio: "16/9" }}
          />
        </div>
      </div>
    </section>
  );
}
