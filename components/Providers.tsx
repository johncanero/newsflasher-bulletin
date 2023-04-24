'use client';
import { ThemeProvider } from 'next-themes';
function Providers({ children }: { children: React.ReactNode }) {
    return (
        <ThemeProvider enableSystem={true} attribute="class" defaultTheme='light'>
            {children}
        </ThemeProvider>
    );
}

export default Providers;