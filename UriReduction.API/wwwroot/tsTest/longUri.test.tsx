import * as React from "react";
import * as enzyme from "enzyme";
import * as Adapter from "enzyme-adapter-react-16";
import { LongUriForm } from "../ts/components/performance/longUriForm";

enzyme.configure({adapter: new Adapter()});

/*it("should renders the short uri form with current value", () => {
    const longUri: any = enzyme.shallow(<LongUriForm longUri="qwe" />);
    expect(longUri.find("#LongUriTextInput").props().value).toEqual("qwe");
});*/