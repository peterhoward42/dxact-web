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
                "(1:5) - It's visual and interactive. You can experiment.",
            imageSearchTerm: "pastevisualise",
            nextLabel: ""
        },
        {
            subLabel: "(2:5) - You can adjust the copy before you paste it.",
            imageSearchTerm: "pastescale",

            nextLabel: ""
        },
        {
            subLabel: "(3:5) - It can paste repeats along a line for you.",
            imageSearchTerm: "pasterepeatline",
            nextLabel: ""
        },
        {
            subLabel: "(4:5) - It can also paste repeats around arcs",
            imageSearchTerm: "pasterepeatarc",
            nextLabel: ""
        },
        {
            subLabel: '(5:5) - "Library" drawings become possible',
            imageSearchTerm: "library",

            nextLabel: "Replay"
        },
    ],
    currentFrame: 0,
    handleNext: handleNext
});