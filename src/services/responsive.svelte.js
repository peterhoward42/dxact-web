// This rune emits state changes when the host viewport switches between
// for example, a mobile and desktop media query breakpoint.
// 
export let responsiveMeta = $state({
    // Initialise it to a value that won't trigger a layout to load,
    // because we want to defer the initial load until the form factor is known.
    deviceFormFactor: "",
})

export function setupMediaQueryObserver() {
    const isMobile = window.matchMedia("(300px <= width <= 576px)");
    const isTablet = window.matchMedia("(576px < width <= 992px)");
    const isDesktop = window.matchMedia("(992px < width <= 99999px)");

    function handleChange(mql, formFactor) {
        if (mql.matches) {
            console.log("XXXX media query fired for: ", formFactor)
            responsiveMeta.deviceFormFactor = formFactor
        }
    }

    // Call the handler manually to set the initial condition.
    handleChange(isMobile, "mobile")
    handleChange(isTablet, "tablet")
    handleChange(isDesktop, "desktop")

    // Then observe future changes.
    isMobile.addEventListener("change", (mql) => { handleChange(mql, "mobile") });
    isTablet.addEventListener("change", (mql) => { handleChange(mql, "tablet") });
    isDesktop.addEventListener("change", (mql) => { handleChange(mql, "desktop") });
}

// Replace the given mobileImageSrc (e.g. "apple_M.png") with for example "apple_T.png",
// to correspond to the current viewport size.
export function deviceOptimisedImageSrc(existingSrc) {

    console.log("XXXX deviceOptimisedImageSrc() fired with existing source: ", existingSrc)

    var newSuffixLetter = {
        mobile: "M",
        tablet: "T",
        desktop: "D",
    }[responsiveMeta.deviceFormFactor]
    const re = /_.\.png/;
    const newSrc = existingSrc.replace(re, "_" + newSuffixLetter + ".png")
    console.log("XXXX optimised src is: ", newSrc)

    return newSrc
}


