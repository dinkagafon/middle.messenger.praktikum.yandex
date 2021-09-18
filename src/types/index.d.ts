declare module '*.pug' {
  const Pug: (ctx: Record<string, any>) => string;
  export default Pug;
}

declare module '*.jpg' {
  const Img: string;
  export default Img;
}
