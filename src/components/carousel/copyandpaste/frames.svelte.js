// This module exports a responsive data model for the frames in
// a carousel. Specifically the carousel that the visitor sees first.
//
// It also owns the responsibility for updating the data model to represent
// the avancement of one frame.
import { moduloNFrames } from "../orchestrator";

function handleNext() {
    copyAndPasteCarouselFrames.currentFrame = moduloNFrames(copyAndPasteCarouselFrames.currentFrame + 1, copyAndPasteCarouselFrames.labelsAndImages.length)
}

export let copyAndPasteCarouselFrames = $state({
    labelsAndImages: [
        {
            subLabel:
                "It's visual and interactive. You can experiment.",
            imageSearchTerm: "pastevisualise",
            nextLabel: "next"
        },
        {
            subLabel: "You can adjust the copy before you paste it.",
            imageSearchTerm: "pastescale",

            nextLabel: "next"
        },
        {
            subLabel: "It can make repeat patterns for you — spread around an arc or circle, or along a line",
            imageSearchTerm: "pasterepeat",

            nextLabel: "next"
        },
        {
            subLabel: '"Library" drawings become possible',
            imageSearchTerm: "library",

            nextLabel: "The End. Replay?"
        },
    ],
    currentFrame: 0,
    handleNext: handleNext
});