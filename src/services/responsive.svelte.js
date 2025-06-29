// This rune emits state changes to the host device form factor.
export let responsiveMeta = $state({
    deviceFormFactor: "mobile",
})

export function setupMediaQueryObserver() {
    console.log("XXXX arrived in setupMediaQueryObserver()")

    const isMobile = window.matchMedia("(300px <= width <= 576px)");
    const isTablet = window.matchMedia("(576px < width <= 992px)");
    const isDesktop = window.matchMedia("(992px < width <= 99999px)");

    function handleChange(mql, formFactor) {
        if (mql.matches) {
            responsiveMeta.deviceFormFactor = formFactor
        }
    }

    handleChange(isMobile, "mobile")
    handleChange(isTablet, "tablet")
    handleChange(isDesktop, "desktop")

    isMobile.addEventListener("change", (mql) => { handleChange(mql, "mobile") });
    isTablet.addEventListener("change", (mql) => { handleChange(mql, "tablet") });
    isDesktop.addEventListener("change", (mql) => { handleChange(mql, "desktop") });
}

// Replace the given mobileImageSrc (e.g. "apple_M.png") with for example "apple_T.png",
// to correspond to the current viewport size.
export function deviceOptimisedImageSrc(existingSrc) {

    console.log("XXXX deviceOptimisedImageSrc input: ", existingSrc)
    var newSuffixLetter = {
        mobile: "M",
        tablet: "T",
        desktop: "D",
    }[responsiveMeta.deviceFormFactor]
    console.log("XXXX existingSrc: ", existingSrc)
    console.log("XXXX newSuffixLetter: ", newSuffixLetter)
    const re = /_.\.png/;

    const newSrc = existingSrc.replace(re, "_" + newSuffixLetter + ".png")
    console.log("XXXX newSrc: ", newSrc)
    return newSrc
}


