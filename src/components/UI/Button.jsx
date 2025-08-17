export default function Button({ children, textOnly, className, ...props }) { //this is created for the configurable button component and so for this sole purpose it was created
    let cssClasses = textOnly ? 'text-button' : 'button';
    cssClasses += ' ' + className;
    return <button className={cssClasses} {...props}>{children}</button>

}