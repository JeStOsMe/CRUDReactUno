import React from "react";
import { useForm } from "react-hook-form";

const AddUserForm = (props) => {

    const {register, formState: {errors}, handleSubmit} = useForm();

    const onSubmit = (data, event) => {
        console.log(data);

        props.addUser(data);

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
                errors.userName &&
                <span>
                    Username es obligatorio
                </span>
            }
            <button>Add new user</button>
        </form>
    );
}

export default AddUserForm;