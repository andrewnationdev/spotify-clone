export default function truncateText(text: string, limit: number) {
    if (text.length > limit) {
        return text.substring(0, limit) + '...';
    }
    return text;
}