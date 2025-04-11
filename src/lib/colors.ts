export const baseColors = [
  {
    name: "default",
    label: "Default",
    activeColor: {
      light: "oklch(0.33 0 0)",
      dark: "oklch(0.98 0 0)",
    },
  },
  {
    name: "retro-arcade",
    label: "Retro Arcade",
    activeColor: {
      light: "oklch(0.59 0.20 355.89)",
      dark: "oklch(0.59 0.20 355.89)",
    },
  },
  {
    name: "tangerine",
    label: "Tangerine",
    activeColor: {
      light: "oklch(0.64 0.17 36.44)",
      dark: "oklch(0.64 0.17 36.44)",
    },
  },
  {
    name: "modern-minimal",
    label: "Modern Minimal",
    activeColor: {
      light: "oklch(0.62 0.19 259.81)",
      dark: "oklch(0.62 0.19 259.81)",
    },
  },
  {
    name: "perpetuity",
    label: "Perpetuity",
    activeColor: {
      light: "oklch(0.56 0.09 203.28)",
      dark: "oklch(0.85 0.13 195.04)",
    },
  },
  {
    name: "kodama-grove",
    label: "Kodama Grove",
    activeColor: {
      light: "oklch(0.67 0.11 118.91)",
      dark: "oklch(0.68 0.06 132.45)",
    },
  },
  {
    name: "cosmic-night",
    label: "Cosmic Night",
    activeColor: {
      light: "oklch(0.54 0.18 288.03)",
      dark: "oklch(0.72 0.16 290.40)",
    },
  },
  {
    name: "quantum-rose",
    label: "Quantum Rose",
    activeColor: {
      light: "oklch(0.60 0.24 0.13)",
      dark: "oklch(0.75 0.23 332.02)",
    },
  },
  {
    name: "neo-brutalism",
    label: "Neo Brutalism",
    activeColor: {
      light: "oklch(0.65 0.24 26.97)",
      dark: "oklch(0.70 0.19 23.19)",
    },
  },
  {
    name: "claude",
    label: "Claude",
    activeColor: {
      light: "oklch(0.56 0.13 43.00)",
      dark: "oklch(0.56 0.13 43.00)",
    },
  },
  {
    name: "claymorphism",
    label: "Claymorphism",
    activeColor: {
      light: "oklch(0.59 0.2 277.12)",
      dark: "oklch(0.68 0.16 276.93)",
    },
  },
  {
    name: "vintage-paper",
    label: "Vintage Paper",
    activeColor: {
      light: "oklch(0.62 0.08 65.54)",
      dark: "oklch(0.73 0.06 66.7)",
    },
  },
] as const;

export type BaseColor = (typeof baseColors)[number];
