"use strict";
function getContentInfo(content) {
    var _a;
    // Return different information based on the content type
    if (content.type === "audio") {
        return `Image: ${content.duration}minutes ${(_a = content.artist) !== null && _a !== void 0 ? _a : "Unknown Artist"} `;
    }
    else if (content.type === "image") {
        return `Image: ${content.dimensions.height}x${content.dimensions.width} pixels`;
    }
    else {
        return `Video: ${content.duration} minutes`;
    }
}
const image = {
    type: "image",
    url: "pic.jpg",
    dimensions: { width: 100, height: 200 },
};
const video = { type: "video", url: "movie.mp4", duration: 120 };
const audio = {
    type: "audio",
    url: "song.mp3",
    duration: 180,
    // artist: "Artist Name",
};
console.log(getContentInfo(image)); // Should output: "Image: 100x200 pixels"
console.log(getContentInfo(video)); // Should output: "Video: 2 minutes"
console.log(getContentInfo(audio)); // Should output: "Audio: 3 minutes by Artist Name" or "Audio: 3 minutes by Unknown Artist" if no artist
