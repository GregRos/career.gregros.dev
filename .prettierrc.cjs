module.exports = {
    tabWidth: 4,
    arrowParens: "avoid",
    trailingComma: "none",
    printWidth: 100,
    overrides: [
        {
            files: "*.{yaml,json}",
            options: {
                tabWidth: 2
            }
        }
    ]
};
