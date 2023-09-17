import AppError from "../../error/AppError";
import User from "../../model/User";
import * as Yup from 'yup';


interface IRequest{
    userData: User;
}

const CreateService = async ({userData}: IRequest): Promise<User> => {

    const schema = Yup.object().shape({
        name: Yup.string().required(),
        email: Yup.string().required(),
        password: Yup.string().required().min(6)
    });

    try {
        await schema.validate(userData);
    } catch (err) {
        throw new AppError((err as Error).message);
    }

    const newUser = await User.create({
        name: userData.name,
        email: userData.email,
        password: userData.password,
    });


    return newUser;

}

export default CreateService;