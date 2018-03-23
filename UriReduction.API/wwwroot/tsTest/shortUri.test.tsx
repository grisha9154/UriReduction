import * as React from "react";
import * as enzyme from "enzyme";
import * as Adapter from "enzyme-adapter-react-16";
import { ShortUriForm } from "../ts/components/performance/shortUriForm";

enzyme.configure({adapter: new Adapter()});

it("should renders the short uri form with current value", () => {
    const shortUri: any = enzyme.shallow(<ShortUriForm shortUri="qwe" />);
    expect(shortUri.find("#post-shortlink").props().defaultValue).toEqual("qwe");
});