module.exports = {
    content: ["./index.html"],
    theme: {
        colors: {
            red: "hsl(0, 78%, 62%)",
            cyan: "hsl(180, 62%, 55%)",
            orange: "hsl(34, 97%, 64%)",
            blue: "hsl(212, 86%, 64%)",
            "dark-blue": "hsl(234, 12%, 34%)",
            "grayish-blue": "hsl(229, 6%, 66%)",
            gray: "hsl(0, 0%, 98%)",
            white: "hsl(0, 0%, 100%)",
        },
        fontFamily: {
            poppins: ["Poppins", "sans-serif"],
        },
        fontWeight: {
            extralight: 200,
            regular: 400,
            semibold: 600,
        },
        extend: {
            fontSize: {
                body: "15px",
            },
        },
    },
    plugins: [],
};
