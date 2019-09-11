import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm'
import { BaseEntity } from 'typeorm/repository/BaseEntity'

@Entity()
export default class Advert extends BaseEntity {

  @PrimaryGeneratedColumn()
  id?: number

  @Column('text', {nullable: false})
  title: string

  @Column('text', {nullable: false})
  description: string

  @Column('text', {nullable: false})
  url: string

  @Column('decimal', {nullable: false})
  price: number
}