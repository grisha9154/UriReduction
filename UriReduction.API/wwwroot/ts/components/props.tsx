export interface IProps {
    fullSet?: boolean;
    shortUri?: string;
    longUri?: string;
    onLongUriSubmit?: ()=> void;
    onLongUriChange?: (longUr:string)=> void;
    onCloudinarySubmit?: ()=> void;
    onCloudinaryChange?: ()=> void;
}