export const buildURL = (lang: string, page: string, endpoint: string) => {
  page = page.replace(/\s+/g, '-');
  
  if (lang === "es") {
    return `${endpoint}/${page}`;
  }

  return `${lang}/${endpoint}/${page}`;
}