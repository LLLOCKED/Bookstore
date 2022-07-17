import {Content} from "../styles";
import {useForm} from "react-hook-form";
import FormFeedback from "../components/FormFeedback/FormFeedback";

const Feedback = () => {
    const stateForm = useForm();
    const onSubmit = data => console.log(data);

    return (
        <Content>
            <FormFeedback {...stateForm} onSubmit={onSubmit} />
        </Content>
    );
};


export default Feedback;