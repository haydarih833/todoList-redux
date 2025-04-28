import { useSelector } from "react-redux";
import { HoverEffect } from "../AceternityComp/cardHoverEffect";

export default function ShowList() {
    const todos = useSelector(state => state.todos);
    console.log(todos)
    return (
        <div className="max-w-5xl mx-auto px-8">
            <HoverEffect items={todos} />
        </div>
    );
}

