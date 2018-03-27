interface IRegistrationFormProps {
    onSubmit: (event: React.FormEvent<{}>) => void;
    loginError: string,
    userNameError: string
}
export default IRegistrationFormProps;