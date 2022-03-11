import { useLocation  } from "react-router-dom";
import Button from '@material-tailwind/react/Button';
import Icon from '@material-tailwind/react/Icon';
import Image from '@material-tailwind/react/Image';
import Logo from 'assets/img/logo.svg';

export default function AdminNavbar({ showSidebar, setShowSidebar }) {
    const location = useLocation();
    return (
        <nav className="bg-light-blue-500 z-100 py-3 px-3">
            <div className="container max-w-full mx-auto flex items-center justify-between md:pr-8 md:pl-10">
                {!location.pathname.includes('details') ?  <div className="md:hidden">
                    <Button
                        color="transparent"
                        buttonType="link"
                        size="lg"
                        iconOnly
                        rounded
                        ripple="light"
                        onClick={() => setShowSidebar('left-0')}
                    >
                        <Icon name="menu" size="2xl" color="white" />
                    </Button>
                    <div
                        className={`absolute top-2 md:hidden ${
                            showSidebar === 'left-0' ? 'left-64' : '-left-64'
                        } z-50 transition-all duration-300`}
                    >
                        <Button
                            color="transparent"
                            buttonType="link"
                            size="lg"
                            iconOnly
                            rounded
                            ripple="light"
                            onClick={() => setShowSidebar('-left-64')}
                        >
                            <Icon name="close" size="2xl" color="white" />
                        </Button>
                    </div>
                </div> : <></>
                }
               

                <div className="flex w-full justify-center items-center"> 
                        <div className="w-48">
                            <Image src={Logo} rounded/>
                        </div>
            
                </div>
            </div>
        </nav>
    );
}
