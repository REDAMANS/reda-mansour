interface StyledButtonProps {
    text: string;
    ariaLabel: string;
    className: string;
    id: string;
}

const StyledButton = ({ text, ariaLabel,  className, id }: StyledButtonProps) => {
    return (
        <button className={`styled__button ${className}`} aria-label={ariaLabel}>
            {text}
        </button>
    );
}

export default StyledButton;