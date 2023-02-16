import { classNames } from 'shared/lib/classNames/classNames';
import { Loader } from 'shared/ui/Loader';
import cls from './SuspenseLoader.module.scss';

interface SuspenseLoaderProps {
    className?:string
}

export const SuspenseLoader = (props:SuspenseLoaderProps) => {
    const { className } = props;

    return (
        <div className={classNames(cls.SuspenseLoader, {}, [className])}>
            <Loader />
        </div>
    );
};
