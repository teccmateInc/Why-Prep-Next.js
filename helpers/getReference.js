export function getReference() {
    const reference = window.localStorage.getItem("reference")
    if (!reference) {
        return null
    }
    const reference_agent = JSON.parse(reference)

    return reference_agent
}