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