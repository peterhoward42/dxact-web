// Normalise the given index into the range modulo nFrames.
export function moduloNFrames(idx, nFrames) {
    // The usual module division produces the wrong answer for negative numbers, and that occurs
    // at the initial conditions. So we just add nFrames to the idx before we start.
    const avoidNegative = idx + nFrames;
    const wrapped = avoidNegative % nFrames;
    return wrapped;
}