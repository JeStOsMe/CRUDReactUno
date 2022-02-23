import React from "react";
import { useForm } from "react-hook-form";

const EditUserForm = (props) => {

    const {register, formState: {errors}, handleSubmit, setValue} = useForm({
        defaultValues: props.currentUser
    });

    setValue('name', props.currentUser.name);
    setValue('username', props.currentUser.username);

    const onSubmit = (data, event) => {
        console.log(data);
        data.id = props.currentUser.id;

        props.updateUser(props.currentUser.id, data);

        event.target.reset();
    }

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <label>Name</label>
            <input type='text' name='name'
                {...register("name", {
                    required: true
                })}
            />
            {
                errors.name &&
                <span>
                    Nombre es obligatorio
                </span>
            }
            <label>Username</label>
            <input type='text' name='username' 
                {...register("username", {
                    required: true
                })}
            />
            {
                errors.username &&
                <span>
                    Username es obligatorio
                </span>
            }
            <button>Edit user</button>
        </form>
    );
}

export default EditUserForm;