import React from 'react';
import autobind from 'autobind-decorator';
import {observer, inject} from "mobx-react";

import s from './Template.sass';

@inject('')
@observer
export class Template extends React.Component {
    render() {
        return <div>
            Text
        </div>;
    }
}
