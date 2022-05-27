import React, { useEffect } from "react";
import { AiOutlineMenu } from "react-icons/ai";
import { FiShoppingCart } from "react-icons/fi";
import { BsChatLeft } from "react-icons/bs";
import { RiNotification3Line } from "react-icons/ri";
import { MdKeyboardArrowDown } from "react-icons/md";
import { TooltipComponent } from "@syncfusion/ej2-react-popups";

import avatar from "../data/avatar.jpg";
import { Cart, Chat, Notification, UserProfile } from ".";

import { useDispatch, useSelector } from "react-redux";
import { toggleMenu } from "../features/menu/menuSlice";
import { toggleChat } from "../features/navbtn/navbtnSlice";
import { toggleCart } from "../features/navbtn/navbtnSlice";
import { toggleUserProfile } from "../features/navbtn/navbtnSlice";
import { toggleNotification } from "../features/navbtn/navbtnSlice";

const NavButton = ({ title, customFunc, icon, color, dotColor }) => (
    <TooltipComponent content={title} position="BottomCenter">
        <button
            type="button"
            onClick={() => customFunc()}
            style={{ color }}
            className="relative p-3 text-xl rounded-full hover:bg-light-gray"
        >
            <span
                style={{ background: dotColor }}
                className="absolute inline-flex w-2 h-2 rounded-full right-2 top-2"
            />
            {icon}
        </button>
    </TooltipComponent>
);

const Navbar = () => {
    // const activeMenu = useSelector((store) => store.menu.activeMenu);
    const chat = useSelector((store) => store.navbtn.chat);
    const cart = useSelector((store) => store.navbtn.cart);
    const userProfile = useSelector((store) => store.navbtn.userProfile);
    const notification = useSelector((store) => store.navbtn.notification);

    const dispatch = useDispatch();

    const handleActiveMenu = () => dispatch(toggleMenu());
    const handleChat = () => dispatch(toggleChat());
    const handleCart = () => dispatch(toggleCart());
    const handleUserProfile = () => dispatch(toggleUserProfile());
    const handleNotification = () => dispatch(toggleNotification());

    return (
        <div className="relative flex justify-between p-2 md:ml-6 md:mr-6">
            <NavButton
                title="Menu"
                customFunc={handleActiveMenu}
                color="blue"
                icon={<AiOutlineMenu />}
            />
            <div className="flex">
                <NavButton
                    title="Cart"
                    customFunc={() => handleCart()}
                    color="blue"
                    icon={<FiShoppingCart />}
                />
                <NavButton
                    title="Chat"
                    dotColor="#03C9D7"
                    customFunc={() => handleChat()}
                    color="blue"
                    icon={<BsChatLeft />}
                />
                <NavButton
                    title="Notification"
                    dotColor="rgb(254, 201, 15)"
                    customFunc={() => handleNotification()}
                    color="blue"
                    icon={<RiNotification3Line />}
                />
                <TooltipComponent content="Profile" position="BottomCenter">
                    <div
                        className="flex items-center gap-2 p-1 rounded-lg cursor-pointer hover:bg-light-gray"
                        onClick={() => handleUserProfile()}
                    >
                        <img
                            className="w-8 h-8 rounded-full"
                            src={avatar}
                            alt="user-profile"
                        />
                        <p>
                            <span className="text-gray-400 text-14">
                                Namaste,
                            </span>{" "}
                            <span className="ml-1 font-bold text-gray-400 text-14">
                                Kunal
                            </span>
                        </p>
                        <MdKeyboardArrowDown className="text-gray-400 text-14" />
                    </div>
                </TooltipComponent>

                {cart ? <Cart /> : null}
                {chat ? <Chat /> : ""}
                {notification ? <Notification /> : ""}
                {userProfile ? <UserProfile /> : ""}
            </div>
        </div>
    );
};

export default Navbar;
