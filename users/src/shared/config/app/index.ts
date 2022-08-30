type EnvironmentType = {
  nodeEnv: string;
  port: number;
  db: {
    user: string;
    pass: string;
    database: string;
    host: string;
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
      user: process.env.POSTGRES_USER,
      pass: process.env.POSTGRES_PASSWORD,
      database: process.env.POSTGRES_DATABASE,
      host: process.env.POSTGRES_HOST,
      port: Number(process.env.POSTGRES_PORT),
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
