
export const toTriggerLoad = 42

// import.meta is part of javascript language.
// Whereas the glob method is a Vite extension - and thus only available in the vite build environment.
// It copes with the pathname hashing that Vite applies to images to optimise their caching.

const allImages = import.meta.glob('/src/assets/images/*.png', { eager: true, import: 'default' });

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