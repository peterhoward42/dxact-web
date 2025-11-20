// This rune emits state changes when the host viewport switches between
// for example, a mobile and desktop media query breakpoint.
export let responsiveMeta = $state({
    // Initialise it to a value that won't trigger a layout to load,
    // because we want to defer the initial load until the form factor is known.
    deviceFormFactor: "",
})

// setupMediaQueryObserver has a set of internal media queries, and
// installs change observers for those queries that mutate the responsiveMeta.deviceFormFactor
// rune field accordingly.
export function setupMediaQueryObserver() {
    // Note the isTablet test is enabled, but we treat it the same as mobile in the rest of the code.
    const isMobile = window.matchMedia("(300px <= width <= 576px)");
    const isTablet = window.matchMedia("(576px < width <= 992px)");
    const isDesktop = window.matchMedia("(992px < width <= 99999px)");

    function handleChange(mql, formFactor) {
        if (mql.matches) {
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



