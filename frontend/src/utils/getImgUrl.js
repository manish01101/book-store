export function getImgUrl(name) {
  return new URL(`../assets/books/${name}`, import.meta.url);
}
export function getNewsImg(name) {
  return new URL(`../assets/news/${name}`, import.meta.url);
}