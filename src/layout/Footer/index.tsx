import { faFacebook, faInstagram } from "@fortawesome/free-brands-svg-icons";
import { faMailBulk, faPhone } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function Footer() {
    return (
        <div className="flex justify-between w-auto">
            <div className="flex">
                <div className="flex items-center mr-8">
                    <FontAwesomeIcon
                        className="text-primary mr-4"
                        icon={faPhone}
                    />
                    <p className="tracking-wider">Call us: +84 908 02 02 58</p>
                </div>
                <div className="flex items-center">
                    <FontAwesomeIcon
                        className="text-primary mr-4"
                        icon={faMailBulk}
                    />
                    <p className="tracking-wider">Email: chucinog@gmail.com</p>
                </div>
            </div>
            <div className="flex items-center">
                <div>
                    <p className="tracking-wider font-semibold">Follow us</p>
                </div>
                <span className="border border-solid w-10 mx-5"></span>
                <div className="text-primary">
                    <FontAwesomeIcon icon={faFacebook} />
                    <FontAwesomeIcon className="ml-3" icon={faInstagram} />
                </div>
            </div>
        </div>
    );
}

export default Footer;
