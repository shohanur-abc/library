function capitalizeWords(text: string): string {
    return text
        .split(/\s+/)
        .map((word: string) => word[0]?.toUpperCase() + word.slice(1))
        .join(" ");
}

export default capitalizeWords;