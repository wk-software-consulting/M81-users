type EnvironmentType = {
  nodeEnv: string;
  port: number;
  db: {
    url: string;
    port: number;
  };
  rmq: {
    url: string;
    name: string;
  };
};

export const envs = (): EnvironmentType => {
  return {
    nodeEnv: process.env.NODE_ENV,
    port: Number(process.env.PORT),
    db: {
      url: process.env.MONGODB_URI,
      port: Number(process.env.MONGODB_PORT),
    },
    rmq: {
      url: process.env.RMQ_URL,
      name: process.env.RMQ_NAME,
    },
  };
};

export default {
  folderPath: '.env',
};
