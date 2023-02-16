import { classNames } from 'shared/lib/classNames/classNames';
import cls from './PageError.module.scss';

interface PageErrorProps {
    className?:string
}

export const PageError = (props:PageErrorProps) => {
    const { className } = props;

    return (
        // eslint-disable-next-line i18next/no-literal-string
        <div className={classNames(cls.PageError, {}, [className])}>
            Произошла ошибка
        </div>
    );
};
