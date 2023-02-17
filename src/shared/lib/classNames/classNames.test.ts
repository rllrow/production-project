import { classNames } from 'shared/lib/classNames/classNames';

describe('classNames test', () => {
    test('with only first param', () => {
        expect(classNames('toBe')).toBe('toBe');
    });
    test('with additional class', () => {
        const expected = 'someClass class1 class2';
        expect(classNames('someClass', {}, ['class1', 'class2']))
            .toBe(expected);
    });
    test('with mods', () => {
        expect(classNames('someClass', { hovered: true, active: true }, ['class1', 'class2']))
            .toBe('someClass class1 class2 hovered active');
    });
    test('with mods false', () => {
        expect(classNames('someClass', { hovered: true, active: false }, ['class1', 'class2']))
            .toBe('someClass class1 class2 hovered');
    });
    test('with mods undefined', () => {
        expect(classNames('someClass', { hovered: undefined, active: true }, ['class1', 'class2']))
            .toBe('someClass class1 class2 active');
    });
});
