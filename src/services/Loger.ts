class Logger {
  info(...args: any) {
    console.log(...args);
  }
  error(...args: any) {
    console.error(...args);
  }
}

export default new Logger();
