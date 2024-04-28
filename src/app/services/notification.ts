/**
 * notification type
 */
export interface Notification {
  visibility: boolean;
  title: string;
  message: string;
  type: NotificationType;
}

export enum NotificationType {
  SUCCESS,
  FAILED,
}
