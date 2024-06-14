/**
 * This is used to simplify getting audio and video elements in the app.
 *
 * @param audioId - The audio element ID.
 * @param videoId - The video element ID.
 * @returns An array containing the HTMLAudioElement and HTMLVideoElement.
 *
 * @example
 * const [audio, video] = getMedia(audioId, videoId);
 */
export const getMedia = (
  audioId: string,
  videoId: string
): HTMLAudioElement[] | HTMLVideoElement[] => {
  return [
    document.getElementById(audioId) as HTMLAudioElement,
    document.getElementById(videoId) as HTMLVideoElement,
  ];
};

export {};
