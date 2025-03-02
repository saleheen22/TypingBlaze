export function calculateWPM(wordCount, timeInSeconds) {
    return Math.round(wordCount / (timeInSeconds / 60));
  }