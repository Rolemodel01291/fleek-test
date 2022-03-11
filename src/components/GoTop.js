import React, { useState, useEffect } from "react";
import clsx from 'clsx';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import Button from "@material-tailwind/react/Button";

const GoTop = () => {

const [isVisible, setIsVisible] = useState(false);   

useEffect(() => {
    window.addEventListener('scroll', toggleVisibility)

    return () => {
      window.removeEventListener('scroll', toggleVisibility)
    }
}, [])

const toggleVisibility = () => {
    if (window.pageYOffset > 300) {
      setIsVisible(true)
    } else {
      setIsVisible(false)
    }
}

const scrollTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth'});
}

return (
<>
    <div className="fixed bottom-2 right-2">
        <Button
            color="lightBlue"
            buttonType="outline"
            size="sm"
            rounded={false}
            block={false}
            iconOnly={false}
            ripple="dark"
            className={clsx(
                isVisible? 'opacity-100' : 'opacity-0', 
                'inline-flex items-center, p-3 rounded-full shadow-sm text-black bg-pink-600 ')}
            onClick={scrollTop}
        >
            <KeyboardArrowUpIcon 
                className="h-6 w-6" 
                aria-hidden="true" 
            />
        </Button>
    </div>
</>

);
};

export default GoTop;
