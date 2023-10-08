import React, {useState} from "react";

function CheckboxGrp({checkboxes, onCheckboxChange}){
    const handleCheckboxChange = (e) => {
        const {name, checked} = e.target;
        const updatedCheckboxes = {...checkboxes, [name]: checked}
        onCheckboxChange(updatedCheckboxes);
    };
}

export default CheckboxGrp;