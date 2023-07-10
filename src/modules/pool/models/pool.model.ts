import { Column, Entity, PrimaryColumn } from 'typeorm';

@Entity()
export class Pool {
  @PrimaryColumn()
  pool: string;
  @Column({
    nullable: false,
  })
  token0: string;
  @Column({
    nullable: false,
  })
  token1: string;
}
