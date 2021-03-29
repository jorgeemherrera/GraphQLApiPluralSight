export type Session = {
    id: number;
    title: String;
    description: String;
    startsAt: String;
    endsAt: String;
    room: String;
    day: String;
    format: String;
    track: String;
}
export type Query = {
    allSessions: Session[];
}