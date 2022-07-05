export function extractRefererence(window) {
    if (!window) {
        return null
    }
    let urlParams = new URLSearchParams(window.location.search);
    const hasParams = urlParams.has("reference")
    if (!hasParams) {
        return null
    }
    const reference = urlParams.get("reference")
    localStorage.setItem("reference", reference)
    return reference
}

