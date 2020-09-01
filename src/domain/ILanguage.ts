import { IGraphQLTypingReceivedData } from './IGraphQLTypingsReceivedData';

export interface ILanguage extends IGraphQLTypingReceivedData {
  code?: string;
  name?: string;
  native?: string;
  rtl?: boolean;
}
