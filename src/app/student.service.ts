import { Injectable } from '@angular/core';

@Injectable()
export class StudentService {

  infor1 : string[]= ["vijay", 's1', 'Grade1']

  infor2 : string[]= ["vijay", 's1', 'Grade1']

  infor3 : string[]= ["vijay", 's1', 'Grade1']

  getInfor1():string[]{
    return this.infor1
  }

  getInfor2():string[]{
    return this.infor2
  }

  getInfor3():string[]{
    return this.infor3
  }

  constructor() { }
}
