import { LogLevel } from '../app/shared/enums/log-level.enum';

export const environment = {
  production: true,
  level: LogLevel.OFF,
  configPath: '../config/',
  api: '/',
  content: '/',

};
