export const Normalize = (str: string) => {
  return str
    .replace(/"/g, "'")        
    .replace(/;/g, "")         
    .match(/[\w]+|[^\s\w]/g)   
    ?.join(" ") || "";         
};

