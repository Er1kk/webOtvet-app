import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useRive } from '@rive-app/react-canvas';

import { hapticFeedback } from '@utils/helper';

import styles from './BottomNav.module.css';

import IconsBotNavRive from '@assets/bottomNav.riv';

export default function BottomNav() {
    const navigate = useNavigate();

    const { rive: homeRive, RiveComponent: HomeRiveComponent } = useRive({
        src: IconsBotNavRive,
        artboard: 'Home',
        animations: location.pathname === '/' ? 'Active' : 'NoActive',
        autoplay: false,
    });

    const { rive: tasksRive, RiveComponent: TasksRiveComponent } = useRive({
        src: IconsBotNavRive,
        artboard: 'Tasks',
        animations: location.pathname === '/tasks' ? 'Active' : 'NoActive',
        autoplay: false,
    });

    useEffect(() => {
        activateCurrentIcon(location.pathname);
        // eslint-disable-next-line
    }, [location.pathname]);

    function activateCurrentIcon(path) {
        deactivateAllIcons();
        switch (path) {
            case '/':
                homeRive && homeRive.play('Active');
                break;
            case '/tasks':
                tasksRive && tasksRive.play('Active');
                break;
            default:
                break;
        }
    }

    function deactivateAllIcons() {
        [homeRive, tasksRive].forEach(riveInstance => {
            if (riveInstance) {
                riveInstance.stop();
                riveInstance.play('NoActive');
            }
        });
    }

    return (
        <div className="bottom-nav">
            <button
                className={styles.btn}
                disabled={location.pathname === '/'}
                onClick={() => {navigate('/'); hapticFeedback('selectionChanged')}}
            >
                 <HomeRiveComponent className={styles.iconRive} />
                 <span className={`${styles.btnText} ${location.pathname === '/' ? styles.active : ''}`}>Главная</span>
            </button>
            <button
                className={styles.btn}
                disabled={location.pathname === 'tasks'}
                onClick={() => {navigate('/tasks'); hapticFeedback('selectionChanged')}}
            >
                <TasksRiveComponent className={styles.iconRive} />
                <span className={`${styles.btnText} ${location.pathname === '/tasks' ? styles.active : ''}`}>Опросы</span>
            </button>
        </div>
    );
}