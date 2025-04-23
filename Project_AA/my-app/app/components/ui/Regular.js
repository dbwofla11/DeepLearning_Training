"use client";
import styles from "./Regular.module.css";
import DynamicIcon from "@/app/components/ui/image/DynamicIcon";

export default function Button({
    text,
    disabled = false,
    icon = null,
    onClick,
    stretch = false,
    width = 160,
    height = 48,
    shrink = false,
    color = "#4CAF50" // Default color
}){
    width = stretch ? "100%" : width;
    const padding = shrink ? 0 : 13.5;

    return (
        <button 
        className={`${styles["button"]}  ${disabled ? styles["disabled"] : ""} `}
        style={{width, height, padding, '--button-color': color}}
        onClick={disabled ? undefined : onClick}
        disabled={disabled}
        >
            <div className={`${styles["button-children"]} ${icon ? styles["has-icon"] : styles["no-icon"]}`}>
                {text}{icon && <DynamicIcon icon={icon} size={48}/>} 
            </div>
        </button>
    )
}