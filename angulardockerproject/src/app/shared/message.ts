export class message{
  id: number;
  text: string;
  time: number;
  seen: boolean;
  user: number;

  constructor(id:number, text: string, time: number, user: number, seen: boolean) {
    this.id = id;
    this.text = text;
    this.time = time;
    this.seen = seen;
    this.user = user;
  }
}
