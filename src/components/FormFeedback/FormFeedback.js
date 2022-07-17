import React from "react";
import {FormButtonFeedback, FormContainerFeedback, FormInputFeedback, FormTextareaFeedback} from "./styles";

export default function FormFeedback({onSubmit, register, handleSubmit, formState: {errors}}) {
    return (
        <div>
            <FormContainerFeedback onSubmit={handleSubmit(onSubmit)}>
                <FormInputFeedback {...register("email",{required: true})} placeholder="Введіть свою пошту..." />
                {errors.email && <span style={{marginBottom: "10px"}}>Пошта не заповнена</span>}

                <FormInputFeedback {...register("name", {required: true})} placeholder="Введіть своє ім'я..."  />
                {errors.name && <span style={{marginBottom: "10px"}}>Ім'я не заповнене</span>}

                <FormTextareaFeedback {...register("text", {required: true})} placeholder="Введіть пропозицію або зауваження..."  />
                {errors.text && <span style={{marginBottom: "10px"}}>Текст листа не заповнено</span>}

                <FormButtonFeedback value="Відправити" type="submit"/>
            </FormContainerFeedback>
        </div>
    );
}
