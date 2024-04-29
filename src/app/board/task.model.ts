export class Task {
  constructor(
    public title: string,
    public description: string,
    public color: string,
    public dueDate: Date,
    public status: string,
    public createdBy: string,
    public userId: string,
    public hourSalary: string,
    public id?: string,
    public index?: number
  ) { }
}
