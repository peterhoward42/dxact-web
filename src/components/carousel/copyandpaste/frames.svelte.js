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
                "Something to show it picked up a different one",
            imageSearchTerm: "justlines",
            nextLabel: "tbd"
        },
        {
            subLabel: "Example 1: Traditional engineering drawings",
            imageSearchTerm: "chainexample",

            nextLabel: "tbd"
        },
        {
            subLabel: "Example 2: Good for assembling and trimming curves",
            imageSearchTerm: "apple",

            nextLabel: "tbd"
        },
        {
            subLabel: "Example 3: Good for arranging text geometrically",
            imageSearchTerm: "textarranged",

            nextLabel: "tbd"
        },
        {
            subLabel:
                "Example 4: Make diagrams to explore geometric relationships",
            imageSearchTerm: "motionstudy",

            nextLabel: "tbd"
        },
        {
            subLabel:
                "Example 5: Good for presentation graphics - that need advanced geometric construction",
            imageSearchTerm: "presentationtricky",

            nextLabel: "tbd"
         }],
    currentFrame: 0,
    handleNext: handleNext
});