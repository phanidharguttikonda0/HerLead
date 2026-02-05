import { createContext, useContext, useState, type ReactNode } from 'react';

interface SplashContextType {
    isSplashFinished: boolean;
    setSplashFinished: (value: boolean) => void;
}

const SplashContext = createContext<SplashContextType | undefined>(undefined);

export const SplashProvider = ({ children }: { children: ReactNode }) => {
    const [isSplashFinished, setSplashFinished] = useState(false);

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
