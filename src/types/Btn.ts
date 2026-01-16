export interface BtnPrimary {
    label: string;
    bgColor?: string;
    textColor?: string;
    onClick?: () => void;
    disabled?: boolean;
    className?: string;
    type?: "button" | "submit" | "reset";
}

export interface BtnSecondary {
    label: string;
    bgColor?: string;
    textColor?: string;
    onClick?: () => void;
    disabled?: boolean;
    className?: string;
    type?: "button" | "submit" | "reset";
}

export type BtnPrimarys = BtnPrimary[];
export type BtnSecondarys = BtnSecondary[];
