export class MyUser {
  id : number;
  first: string;
  last: string;

  constructor(fileId: number,
              first: string,
              last: string) {
    this.id = fileId;
    this.first = first;
    this.last = last;
  };
};

export class Activity {
  id:number;
  desc:string;

  constructor(recordKeeperId:number,
              desc:string) {
    this.id = recordKeeperId;
    this.desc = desc;
  };
};

export class UserActivity {
  id: number;
  userId: number;
  activityId: number;

  constructor(userActivity: number,
              userId: number,
              activityId: number) {
    this.id = userActivity;
    this.userId = userId;
    this.activityId = activityId;
  };
};
