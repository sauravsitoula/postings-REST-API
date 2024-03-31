const { body, validationResult } = require("express-validator");

const jobValidator = [
  [
    body("institutionName")
      .exists()
      .withMessage("Institution name is missing")
      .notEmpty()
      .withMessage("Institution name is empty")
      .isString()
      .withMessage("Institution name must be a string"),
    body("imageURL").isString().withMessage("imageURL name must be a string"),
    body("post")
      .exists()
      .withMessage("Post is missing")
      .notEmpty()
      .withMessage("Post is empty")
      .isString()
      .withMessage("Post must be a string"),
    body("level").isString().withMessage("level must be a string"),
    body("vacancy")
      .exists()
      .withMessage("Vacancy is missing")
      .notEmpty()
      .withMessage("Vacancy is empty")
      .isNumeric()
      .withMessage("Vacancy must be a number"),
    body("salary").isNumeric().withMessage("Salary must be a number"),
    body("deadline")
      .exists()
      .withMessage("Deadline is missing")
      .notEmpty()
      .withMessage("Deadline is empty")
      .matches(/^\d{4}-\d{2}-\d{2}$/, "i")
      .withMessage("Date must be in YYYY-MM-DD format"),
    body("state")
      .exists()
      .withMessage("State is missing")
      .notEmpty()
      .withMessage("State is empty")
      .isString()
      .withMessage("State must be a string"),
    body("city")
      .exists()
      .withMessage("City is missing")
      .notEmpty()
      .withMessage("City is empty")
      .isString()
      .withMessage("City must be a string"),
    body("venue").isString().withMessage("Venue must be a string"),
    body("education").isString().withMessage("Education must be a string"),
    body("experience").isString().withMessage("Experience must be a string"),
    body("specifications")
      .isString()
      .withMessage("Specifications must be a string"),
    body("description").isString().withMessage("Description must be a string"),
  ],
  (req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      res.status(400).json({ message: "invalid payload", ...errors });
    } else {
      next();
    }
  },
];

module.exports = jobValidator;
