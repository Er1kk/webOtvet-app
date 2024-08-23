import { Outlet } from 'react-router-dom';
import { observer } from 'mobx-react-lite';

const Profile = () => {
  return (
    <div>
      <Outlet />
    </div>
  );
};

export default observer(Profile);