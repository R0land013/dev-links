import React from 'react';
import Header from './Header';
import Footer from './Footer';

interface MainContainerProps {
    children?: Array<React.JSX.Element> | React.JSX.Element;
}

const MainContainer = (props: MainContainerProps) => {
    return (
        <div className="flex flex-col w-full h-[100vh] justify-between overflow-y-auto">

            <div className="flex flex-col w-full justify-center items-center">   
                
                <Header/>
                
                <div className="flex flex-col w-full justify-center items-center pl-5 pr-5 pb-5">

                    {props.children}
                </div>

            </div>


            <Footer />
        </div>
    );
};

export default MainContainer;