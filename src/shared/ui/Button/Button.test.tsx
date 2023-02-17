import { render, screen } from '@testing-library/react';
import { Button, ThemeButton } from './Button';

describe('Buttons Test', () => {
    test('fist test', () => {
        render(<Button>Test</Button>);
        expect(screen.getByText('Test')).toBeInTheDocument();
    });
    test('fist test', () => {
        render(<Button theme={ThemeButton.CLEAR}>Test</Button>);
        expect(screen.getByText('Test')).toHaveClass('clear');
        screen.debug();
    });
});
