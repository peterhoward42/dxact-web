// This module exports a responsive data model for the frames in
// a carousel. Specifically the carousel that the visitor sees first.
//
// It also owns the responsibility for updating the data model to represent
// the avancement of one frame.
import { moduloNFrames } from "../orchestrator";

function handleNext() {
    introCarouselFrames.currentFrame = moduloNFrames(introCarouselFrames.currentFrame + 1, introCarouselFrames.labelsAndImages.length)
}

export let introCarouselFrames = $state({
    labelsAndImages: [
        {
            subLabel:
                "Lines, arcs, and text are the raw materials of every DrawExact drawing",
            imageSearchTerm: "justlines",
            nextLabel: "See a few examples"
        },
        {
            subLabel: "Example (1 of 5) — Traditional engineering drawings",
            imageSearchTerm: "chainexample",
            nextLabel: ""

        },
        {
            subLabel: "Example (2 of 5) — Good for assembling and trimming curves",
            imageSearchTerm: "apple",
            nextLabel: ""
        },
        {
            subLabel: "Example (3 of 5) — Good for arranging text geometrically",
            imageSearchTerm: "textarranged",
            nextLabel: ""
        },
        {
            subLabel:
                "Example (4 of 5) — Make diagrams to explore geometric relationships",
            imageSearchTerm: "motionstudy",
            nextLabel: ""
        },
        {
            subLabel:
                "Example (5 of 5) — Good for presentation graphics - that need advanced geometric construction",
            imageSearchTerm: "presentationtricky",
            nextLabel: "Replay"
        }],
    currentFrame: 0,
    handleNext: handleNext
});