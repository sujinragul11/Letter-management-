// Type definitions for the application (using JSDoc comments for type hints)

/**
 * @typedef {Object} InternDetails
 * @property {string} id - Unique identifier
 * @property {string} name - Full name of the intern
 * @property {string} email - Email address
 * @property {string} position - Position/role title
 * @property {string} startDate - Start date (ISO string)
 * @property {string} duration - Duration of internship
 * @property {string} location - Office location/address
 * @property {string} stipend - Stipend information
 * @property {string} date - Letter date (ISO string)
 * @property {string} createdAt - Creation timestamp
 * @property {string} updatedAt - Last update timestamp
 */

/**
 * @typedef {Object} GeneratedLetter
 * @property {string} id - Unique identifier
 * @property {string} internId - Reference to intern
 * @property {'offer'|'completion'} letterType - Type of letter
 * @property {string} content - Letter content
 * @property {string} generatedAt - Generation timestamp
 * @property {boolean} emailSent - Whether email was sent
 * @property {string} [emailSentAt] - Email sent timestamp
 */

/**
 * @typedef {Object} EmailResult
 * @property {boolean} success - Whether email was sent successfully
 * @property {string} messageId - Email message ID
 * @property {string} sentAt - Timestamp when sent
 */

/**
 * @typedef {Object} PDFResult
 * @property {boolean} success - Whether PDF was generated successfully
 * @property {string} filename - Generated filename
 * @property {string} size - File size
 * @property {string} downloadUrl - Download URL
 */

export {};