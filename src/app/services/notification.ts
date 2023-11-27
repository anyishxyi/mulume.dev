/**
 * notification type
 */
export interface Notification {
  title: string;
  message: string;
  type: NotificationType;
}

export enum NotificationType {
  SUCCESS,
  FAILED,
}
