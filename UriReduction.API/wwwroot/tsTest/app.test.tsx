import * as React from "react";
import * as enzyme from "enzyme";
import * as Adapter from "enzyme-adapter-react-16";
import { App } from "../ts/components/performance/app";

enzyme.configure({adapter: new Adapter()});

/*it("should render GetLongForm where fullset is false", () => {
    const form: any = enzyme.shallow(<App } />);
    expect(form.name()).toEqual("GetLongForm");
});*/
/*
it("should render GetFullForm where fullset is true", () => {
    const form: any = enzyme.shallow(<App fullSet={true} />);
    expect(form.name()).toEqual("GetFullForm");
});*/