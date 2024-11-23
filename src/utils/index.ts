export const buildURL = (lang: string, page: string, endpoint: string) => {
  page = page.replace(/\s+/g, '-');

  if (lang === "es") {
    return `${endpoint}/${page}`;
  }

  return `${lang}/${endpoint}/${page}`;
}

export const getFileName = (url: string): string => {

  const urlParts = url.split('/');

  return urlParts.pop() || "";
}

export const getExtension = (fileName: string): string => {
  const fileNameParts = fileName.split('.');

  return fileNameParts.pop() || "";
}

interface IconLookUp {
  [key: string]: {
    icon: string;
  };
}

export const getLangIcon = (url: string): string => {
  const icons: IconLookUp = {
    "html": { icon: "fa-html5" },
    "css": { icon: "fa-css3" },
    "js": { icon: "fa-js" },
    "py": { icon: "fa-python" },
    "java": { icon: "fa-java" },
    "cpp": { icon: "fa-cpp" },
    "cs": { icon: "fa-csharp" },
    "rb": { icon: "fa-ruby" },
    "php": { icon: "fa-php" },
    "swift": { icon: "fa-swift" },
  };

  return icons[getExtension(url)].icon ?? "";
}

export const appendbaseUrl = (url: string) => {
  const baseUrl = import.meta.env.PUBLIC_BASE_URL || '';
  
  return `${baseUrl}${url}`
}

export const adjustLanguageInUrl = (url: string, lang: string, staticSegment: string = "activities") => {
  let parts = url.split("/").filter(e => e !== '')

  const staticIndexOfSegment = staticSegment ? parts.indexOf(staticSegment) : -1;

  const langIndex = parts.indexOf("en");
  
  if (langIndex !== -1) {
    parts.splice(langIndex, 1);
  }

  if (lang === "es") {
    if (staticIndexOfSegment !== -1) {
      parts.splice(staticIndexOfSegment + 1, 0, "en");
    } else {
      parts.push("en");
    }
  }

  return `/${parts.join("/")}`
}

export const filterByLanguage = (lang: string, defaultSlug: string, filePath: string) => {

}