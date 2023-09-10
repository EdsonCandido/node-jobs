import { Model, Table, Column, PrimaryKey, BeforeUpdate, BeforeCreate, AutoIncrement, DataType, CreatedAt, UpdatedAt } from 'sequelize-typescript'
import { hash, compare } from "bcryptjs";
@Table
class User extends Model<User> {

    @PrimaryKey
    @AutoIncrement
    @Column
    id: number;


    @Column
    name: string;

    @Column
    email: string;

    @Column(DataType.VIRTUAL)
    password: string;

    @Column
    passwordHash: string;

    @CreatedAt
    createdAt: Date;

    @UpdatedAt
    updatedAt: Date;


    @BeforeUpdate
    @BeforeCreate
    static hashPassword = async (instance: User): Promise<void> => {
        if (instance.password) {
            instance.passwordHash = await hash(instance.password, 8);
        }
    };
}