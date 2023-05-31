import React from 'react';

const RGBArray = () => {
    const combinations = [];

    for (let r = 0; r <= 256; r += 16) {
        for (let g = 0; g <= 256; g += 16) {
            for (let b = 0; b <= 256; b += 16) {
                const sum = r + g + b;

                let textColor;
                if (sum < 256) {
                    textColor = 'text-white';
                } else if (sum >= 256 && sum <= 512) {
                    textColor = 'text-blue-500';
                } else {
                    textColor = 'text-black';
                }

                combinations.push({
                    background: `rgb(${r}, ${g}, ${b})`,
                    textColor,
                });
            }
        }
    }

    return (
        <div className="grid grid-cols-4 gap-4 bg-gray-500 p-20">
            {combinations.map((combination, index) => (
                <div
                    key={index}
                    className={`w-24 h-24 ${combination.background} ${combination.textColor} border border-gray-300 flex items-center justify-center`}
                >
                    <span className={`text-black `}>
                        RGB({combination.background})
                    </span>
                </div>
            ))}
        </div>
    );
};

export default RGBArray;
