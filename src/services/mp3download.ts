import ytdl from 'ytdl-core';
import ffmpeg from 'fluent-ffmpeg';
import fs from 'node:fs';
import ffmpegStatic  from 'ffmpeg-static';

export default class Mp3Downloader {

  downloadAudio(url: string, title: string) {
    const videoReadableStream = ytdl(url, { filter: "audioonly" });
    videoReadableStream.pipe(fs.createWriteStream(`${title}.mp3`));

    videoReadableStream.on('end', () => {
      console.log("Download compleated!")
    });

    videoReadableStream.on('error', (err) => {
      console.error("Error during download: ", err);
    })

  }
}

