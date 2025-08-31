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
            nextLabel: "Examples"
        },
        {
            subLabel: "Example 1: Traditional engineering drawings",
            imageSearchTerm: "chainexample",
            nextLabel: "next"

        },
        {
            subLabel: "Example 2: Good for assembling and trimming curves",
            imageSearchTerm: "apple",
            nextLabel: "next"
        },
        {
            subLabel: "Example 3: Good for arranging text geometrically",
            imageSearchTerm: "textarranged",
            nextLabel: "next"
        },
        {
            subLabel:
                "Ex. 4: Make diagrams to explore geometric relationships",
            imageSearchTerm: "motionstudy",
            nextLabel: "next"
        },
        {
            subLabel:
                "Example 5: Good for presentation graphics - that need advanced geometric construction",
            imageSearchTerm: "presentationtricky",
            nextLabel: "The End. Replay?"
        }],
    currentFrame: 0,
    handleNext: handleNext
});