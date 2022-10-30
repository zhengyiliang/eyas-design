export default function warning(condition, message: string) {
  if (process.env.NODE_ENV !== 'production' && console) {
    if (condition) {
      console.error(`[@eyas-design/web-react]: ${message}`);
    }
  }
}
