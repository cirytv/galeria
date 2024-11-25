import { Table, Column, Model, DataType } from 'sequelize-typescript'

@Table({
  tableName: 'images',
})
class Image extends Model {
  // @Column({
  //   type: DataType.STRING(255),
  // })
  // declare image: string

  @Column({
    type: DataType.STRING(100),
  })
  declare name: string

  @Column({
    type: DataType.STRING(255),
  })
  declare description: string

  @Column({
    type: DataType.STRING(100),
  })
  declare publisher: string
}
export default Image
