export class message{
  text: string;
  time: number;
  seen: boolean;
  user: number;

  constructor(text: string, time: number, user: number, seen: boolean) {
    this.text = text;
    this.time = time;
    this.seen = seen;
    this.user = user;
  }
}
