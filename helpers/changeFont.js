export function changeFont(document, current_lang) {

    if (!current_lang || !current_lang) return;

    const root = document.querySelector(':root')
    const style = getComputedStyle(root)
    switch (current_lang) {
        case 'th':
            const thai_font = style.getPropertyValue('--thai-font')
            return root.style.setProperty('--current-font', thai_font)

        case 'en':
            const english_font = style.getPropertyValue('--english-font')
            return root.style.setProperty('--current-font', english_font)
        default:
            break;
    }
}