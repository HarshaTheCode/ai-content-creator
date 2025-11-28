import React from 'react';

const PageLayout = ({ children }) => {
    return (
        <div className="min-h-screen bg-black text-white relative overflow-hidden selection:bg-white/20 selection:text-white">
            {/* Background gradients/blobs for depth - Monochrome */}
            <div className="fixed top-0 left-0 w-full h-full overflow-hidden -z-10 pointer-events-none">
                <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-white/5 rounded-full blur-[120px]" />
                <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-white/5 rounded-full blur-[120px]" />
            </div>

            <div className="relative z-10">
                {children}
            </div>
        </div>
    );
};

export default PageLayout;
