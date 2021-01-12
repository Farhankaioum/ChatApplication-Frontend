export interface Message{
    id: number;
    senderId: number;
    recipientId: number;
    content: string;
    isRead: boolean;
    dateRead: Date;
    messageSent: Date;
}