import { Column, ObjectID, Entity, ObjectIdColumn } from 'typeorm'

@Entity('users')
export class User {
  @ObjectIdColumn() id: ObjectID
  @Column() name: string
  @Column() email: string
  @Column() username: string

  constructor(user?: Partial<User>) {
    Object.assign(this, user)
  }
}
