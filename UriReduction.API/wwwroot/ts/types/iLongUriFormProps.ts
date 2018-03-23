import ILongUriForm from "./iLongUriForm";

interface ILongUriFormProps {
    longUri: string;
    onLongUriSubmit: ( event: React.FormEvent<{}>) => void;
    onLongUriChange: ( event: React.FormEvent<ILongUriForm>) => void;
}
export default ILongUriFormProps;