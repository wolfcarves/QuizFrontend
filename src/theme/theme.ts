export const theme = {
    primary: "hsl(222, 55%, 12%)",
    secondary: "hsl(203, 94%, 39%)",
    "primary-light": "hsl(226, 78%, 42%)",
    "primary-dark": "hsl(198, 88%, 47%)",
    foreground: "hsl(0, 0%, 14%)",
    muted: "hsl(210, 5%, 44%)",
    border: "hsl(210, 5%, 10%)",
    background: "hsl(0, 0%, 100%)",
    "background-light": "hsl(210, 20%, 98%)",
    placeholder: "hsl(0, 2%, 61%)",
    gray: "hsl(220, 9%, 50%)",
    card: "hsl(0, 0%, 100%)",
    destructive: "hsl(0, 72%, 50%)",
} as const

export type Theme = keyof typeof theme
