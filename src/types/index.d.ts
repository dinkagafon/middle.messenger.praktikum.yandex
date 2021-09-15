declare module '*.pug' {
  const Pug: (ctx: Record<string, any>) => string;
  export default Pug;
}
