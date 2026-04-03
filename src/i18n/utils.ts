import translations from "./translations.json";

export type Language = "es" | "en";

export function useTranslations(lang: Language) {
  return function t(key: keyof (typeof translations)["es"]) {
    return (translations[lang] as any)[key] || (translations["es"] as any)[key];
  };
}
