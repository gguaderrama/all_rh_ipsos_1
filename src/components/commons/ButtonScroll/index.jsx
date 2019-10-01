import React from "react";
import { CircleArrow as ScrollUpButton } from "react-scroll-up-button"; //Add this line Here

export default class Index extends React.Component {
    render() {
        return (
            <div>
                <ScrollUpButton
                    EasingType='linear'
                    style={{ border: '5px solid #00AFA9' }} />
            </div>
        );
    }
}