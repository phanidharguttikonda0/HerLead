import { createContext, useContext, useState, type ReactNode } from 'react';

interface SplashContextType {
    isSplashFinished: boolean;
    setSplashFinished: (value: boolean) => void;
}

const SplashContext = createContext<SplashContextType | undefined>(undefined);

export const SplashProvider = ({ children }: { children: ReactNode }) => {
    const [isSplashFinished, setSplashFinishedState] = useState(() => {
        if (typeof window !== 'undefined') {
            return sessionStorage.getItem('splash_shown') === 'true';
        }
        return false;
    });

    const setSplashFinished = (value: boolean) => {
        setSplashFinishedState(value);
        if (value && typeof window !== 'undefined') {
            sessionStorage.setItem('splash_shown', 'true');
        }
    };

    return (
        <SplashContext.Provider value={{ isSplashFinished, setSplashFinished }}>
            {children}
        </SplashContext.Provider>
    );
};

export const useSplash = () => {
    const context = useContext(SplashContext);
    if (context === undefined) {
        throw new Error('useSplash must be used within a SplashProvider');
    }
    return context;
};
