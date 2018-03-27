import ILongUriForm from "./iLongUriForm";

interface ILongUriFormProps {
    longUri: string;
    onLongUriSubmit: ( event: React.FormEvent<{}>) => void;
    onLongUriChange: ( event: React.FormEvent<ILongUriForm>) => void;
    errorText: string;
}
export default ILongUriFormProps;