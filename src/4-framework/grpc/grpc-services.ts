import { Observable } from 'rxjs';

export interface Subscription {
  id: string;
  userId: string;
  creatorId: string;
  createdAt: string;
  updatedAt: string;
  deletedAt?: string;
}

export interface IGrpcSubscriptionService {
  findByUserId(body: { userId: string }): Observable<Subscription[]>;
}
