export interface BaseResponse<T> {
  data: T;
  requestId: string;
  errors: any | [];
  messages: [];
  succeeded: boolean;
  title: string;
}

