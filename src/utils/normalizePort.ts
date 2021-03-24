const normalizePort = (value: string): number | string | false => {
  const port: number = parseInt(value, 10);
  if (Number.isNaN(port)) return value;
  if (port >= 0) return port;
  return false;
};

export default normalizePort;
