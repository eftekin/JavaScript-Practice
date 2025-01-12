/**
 * Formats a date into different patterns
 * @param {Date} date - The date to format
 * @returns {void} - Logs different date formats
 */
const formatDate = (date) => {
    const dd = String(date.getDate()).padStart(2, '0');
    const mm = String(date.getMonth() + 1).padStart(2, '0');
    const yyyy = date.getFullYear();

    // Create different date formats
    const formats = [
        `${mm}-${dd}-${yyyy}`,
        `${mm}/${dd}/${yyyy}`,
        `${dd}-${mm}-${yyyy}`,
        `${dd}/${mm}/${yyyy}`
    ];

    // Log all formats
    formats.forEach(format => console.log(format));
};

// Get and format current date
formatDate(new Date());
