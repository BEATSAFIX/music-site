import { useState, useRef } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Play, Pause } from "lucide-react";

const tracks = [
  { title: "Gladiator", artist: "MANNY", url: "/music/MANNY - gladiator.mp3" },
  { title: "God Bless", artist: "MANNY", url: "/music/MANNY - god bless.mp3" },
  { title: "XOXO", artist: "MANNY", url: "/music/MANNY - xoxo.mp3" },
];

export default function MusicPage() {
  const [currentTrack, setCurrentTrack] = useState(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef(new Audio());

  const playTrack = (track) => {
    if (currentTrack?.url === track.url && isPlaying) {
      audioRef.current.pause();
      setIsPlaying(false);
    } else {
      audioRef.current.src = track.url;
      audioRef.current.play();
      setIsPlaying(true);
      setCurrentTrack(track);
    }
  };

  return (
    <div className="p-6 max-w-4xl mx-auto">
      <h1 className="text-3xl font-bold mb-4">Tracks</h1>
      <div className="grid gap-4">
        {tracks.map((track, index) => (
          <Card key={index} className="p-4 flex justify-between items-center">
            <CardContent>
              <h2 className="text-xl font-semibold">{track.title}</h2>
              <p className="text-sm text-gray-500">{track.artist}</p>
            </CardContent>
            <Button onClick={() => playTrack(track)}>
              {currentTrack?.url === track.url && isPlaying ? <Pause /> : <Play />}
            </Button>
          </Card>
        ))}
      </div>
    </div>
  );
}
