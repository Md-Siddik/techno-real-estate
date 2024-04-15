import { Outlet } from 'react-router-dom';

const Root = () => {
    return (
        <div className='max-w-[1280px] m-auto'>
            <Outlet></Outlet>
        </div>
    );
};

export default Root;