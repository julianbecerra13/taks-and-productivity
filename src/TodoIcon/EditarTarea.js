import React from "react";
import { TodoIcon } from "./";
import './TodoIcon.css'

function EditarTarea({ onEdit }) {
    return (
        <TodoIcon
            type="edit"
            onClick={onEdit}
        />
    );
}
export { EditarTarea }