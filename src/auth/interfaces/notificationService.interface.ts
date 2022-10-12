interface Notify {
  to: string;
  message: string;
}

export abstract class NotificationService {
  abstract notify(props: Notify): Promise<void>;
}
