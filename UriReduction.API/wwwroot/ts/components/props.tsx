export interface IProps {
    fullSet?: boolean;
    shortUri?: string;
    longUri?: string;
    onLongUriSubmit?: ()=> void;
    onLongUriChange?: ()=> void;
    onCloudinarySubmit?: ()=> void;
    onCloudinaryChange?: ()=> void;
}