// This triggers the vite build process to import the targeted images at
// BUILD time. It is necessary because the images in the production build
// have "mangled" names, not the the names you see in ../assets/images.
//
// Ps. The mangled names are hashes that change only when the PNG image's content
// changes - and is a vite strategy to boost long term caching by the browser.
//
// PPs. import.meta is standard ES6 javascript, whereas the extension "glob" method is
// injected by vite at build time.
const allImages = import.meta.glob('/src/assets/images/*.png', { eager: true, import: 'default' });

// selectImageForFormFactor knows how to choose an image that is optimised for mobile vs. desktop.
// It accepts a search term, and expects that term to appear in one the mobile image names and one of the desktop
// image names..
export function selectImageForFormFactor(imageSearchTerm, deviceFormFactor) {
    const suffixForFormFactor = deviceFormFactor == "mobile" ? "_M" : "_D"
    for (const [path, resolved] of Object.entries(allImages)) {
        if (!path.includes(imageSearchTerm)) {
            continue
        }
        if (!path.includes(suffixForFormFactor)) {
            continue
        }
        return resolved
    }
    throw `selectImageForFormFactor() failed for: ${imageSearchTerm} and ${deviceFormFactor}`
}