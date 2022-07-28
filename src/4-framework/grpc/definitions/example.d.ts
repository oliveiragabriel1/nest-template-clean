import { Observable } from 'rxjs';

export interface Message {
  message: string;
}

export interface IGrpcExampleService {
  sendMessage(body: Message): Observable<Message>;
}
